const searchModel = require("../model/Search");

const searchController = {
  sortByname: (req, res) => {
    searchModel
      .sortByname(req.query)
      .then((result) => {
        res.status(200).send({
          message: "succsess sort by name",
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
module.exports = searchController;