'use strict'

const Route = use('Route')

/**Rotas de User */
Route.post('users', 'UserController.store')

/**Rotas de sessão */
Route.post('sessions', 'SessionController.store')

/**Rotas de ForgotPassword */
Route.post('passwords', 'ForgotPasswordController.store')
Route.put('passwords', 'ForgotPasswordController.update')

/**Rotas de Files */
Route.post('files', 'FileController.store')
