const { database } = require("../helper/connector");
const db = require("../helper/connector");

const searchModel = {
  sortByname: () => {
      return new Promise((resolve, reject)=>{
          db.query(`SELECT * FROM users where name = '${req.params.name}'`, (err, result) => {
              console.log(result);
              if (!err) {
                resolve(result.rows);
              } else {
                reject(err);
              }

            });

      })
  },
  addNewuser: (

  ) => {},
  getUser: () => {},
  updateuser: () => {},
  deletUser: () => {},
};

module.exports = searchModel;
