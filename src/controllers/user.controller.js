const { OKResponse } = require("../helpers/success.response");
const UserService = require("../services/user.service");

class UserController {
  static async getCurrentUser(req, res, next) {
    new OKResponse({
      message: "OK",
      metadata: await UserService.getUserById(req.user.id),
    }).send(res);
  }
}

module.exports = UserController;
