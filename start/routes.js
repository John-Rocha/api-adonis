'use strict'

const Route = use('Route')

/**Rotas de User */
Route.post('users', 'UserController.store').validator(['User'])

/**Rotas de Session */
Route.post('sessions', 'SessionController.store')

/**Rotas de ForgotPassword */
Route.post('passwords', 'ForgotPasswordController.store')
Route.put('passwords', 'ForgotPasswordController.update')

/**Rotas de File */
Route.get('/files/:id', 'FileController.show')

Route.group(() => {
  /**Rotas de File */
  Route.post("/files", "FileController.store");

  /**Rotas de Project */
  Route.resource("projects", "ProjectController").apiOnly();

  /**Rotas de Task */
  Route.resource("projects.tasks", "TaskController").apiOnly();

}).middleware(['auth'])
