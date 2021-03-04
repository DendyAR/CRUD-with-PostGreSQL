const userModel = require("../model/User");

const userController = {
  getAlluser: (req, res) => {
    userModel
      .getAlluser()
      .then((result) => {
        res.status(200).send({
          message: "succsess get all users",
          statusCode: 200,
          data: result,
        });
      })
      .catch((err) => {
        (result) => {
          res.status(500).send({
            message: `get user error: ${err}`,
            statusCode: 500,
            data: [],
          });
        };
      });
  },
};
module.exports = userController;