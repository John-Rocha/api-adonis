"use strict";

const Route = use("Route");

/**Rotas de User */
Route.post("users", "UserController.store").validator(["User"]);

/**Rotas de Session */
Route.post("sessions", "SessionController.store").validator(["Session"]);

/**Rotas de ForgotPassword */
Route.post("passwords", "ForgotPasswordController.store").validator([
  "ForgotPassoword",
]);
Route.put("passwords", "ForgotPasswordController.update").validator([
  "ResetPassoword",
]);

/**Rotas de File */
Route.get("/files/:id", "FileController.show");

Route.group(() => {
  /**Update Users */
  Route.put("users/:id", "UserController.update");

  /**Rotas de File */
  Route.post("/files", "FileController.store");

  /**Rotas de Project */
  Route.resource("projects", "ProjectController")
    .apiOnly()
    .validator(new Map([[["projects.store"], ["Project"]]]));

  /**Rotas de Task */
  Route.resource("projects.tasks", "TaskController")
    .apiOnly()
    .validator(new Map([[["projects.tasks.store"], ["Task"]]]));
}).middleware(["auth"]);
