const formResponse = require("../helper/fromResponse");
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
  addNewuser: (req, res) => {
    userModel
      .addNewuser(req.body)
      .then((result) => {
        res.status(200).send({
          message: "succsess Add New users",
          statusCode: 200,
          data: result,
        });
      })
      .catch((err) => {
        (result) => {
          res.status(500).send({
            message: `Add user error: ${err}`,
            statusCode: 500,
            data: [],
          });
        };
      });
  },
  getUser: (req, res) => {
    return new Promise((resolve, reject) => {
      userModel
        .getUser(req.params.id_name)
        .then((result, err) => {
          if (!err)
            res.status(200).send({
              message: "succsess get user By Id",
              statusCode: 200,
              data: result,
            });
        })
        .catch((err) => {
          (result) => {
            res.status(400).send({
              message: `get user By Id error: ${err}`,
              statusCode: 500,
              data: [],
            });
          };
        });
    });
  },
  updateUser: (req, res) => {
    userModel
      .updateUser(req)
      .then((result) => {
        formResponse(result, res);
      })
      .catch((err) => {
        formResponse(err, res);
      });
  },
  deleteUser: (req, res) => {
    userModel
      .deleteUser(req.body)
      .then((result) => {
        res.status(200).send({
          message: "succsess delete Id name",
          statusCode: 200,
          data: result,
        });
      })
      .catch((err) => {
        (result) => {
          res.status(500).send({
            message: `Delete id name error: ${err}`,
            statusCode: 500,
            data: [],
          });
        };
      });
  },
};
module.exports = userController;
