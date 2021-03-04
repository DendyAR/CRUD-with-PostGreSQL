const { database } = require("../helper/connector");
const db = require("../helper/connector");

const userModel = {
  getAlluser: () => {
      return new Promise((resolve, reject)=>{
          db.query("SELECT * FROM USERS", (err, result) => {
            if (!err) {
              resolve(result.rows)
            } else{
                reject(err)
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

module.exports = userModel;
