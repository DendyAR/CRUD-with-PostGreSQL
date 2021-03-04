const { database } = require("../helper/connector");
const db = require("../helper/connector");

const userModel = {
  getAlluser: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM users", (err, result) => {
        if (!err) {
          resolve(result.rows);
        } else {
          reject({
            message: `get all users failed`,
            statusCode: 500,
            data: [],
          });
        }
      });
    });
  },
  addNewuser: (req) => {
    const { id_name, username, name, email, password, phone, images } = req;
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO users(id_name, username, name, email, password, phone, images) VALUES(${parseInt(
          id_name
        )},'${username}' ,'${name}', '${email}','${password}', ${parseInt(
          phone
        )}, '${images}')`,
        (err, result) => {
          console.log(err);
          if (!err) {
            resolve();
          } else {
            reject({
              message: `add new users failed`,
              statusCode: 500,
              data: [],
            });
          }
        }
      );
    });
  },
  getUser: (req) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users WHERE id_name=${req}`, (err, result) => {
        console.log(err);
        if (!err) {
          resolve(result.rows);
          reject({
            message: `get By id users failed`,
            statusCode: 500,
            data: [],
          });
        }
      });
    });
  },
  updateUser: (req) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM users WHERE username = '${req.params.username}'`,
        (error, result) => {
          if (result.rows == "" || result.rows.length < 1) {
            reject({
              message: `Id not found`,
              status: 400,
            });
          }
          if (!error) {
            const {
              name = result.rows[0]?.name, //initial value/default value (optional chaining) atau bisa juga dengan (nullish coalescing)
              email = result.rows[0]?.email,
              password = result.rows[0]?.password,
              phone = result.rows[0]?.phone,
              images = result.rows[0]?.images,
            } = req.body;

            db.query(
              `UPDATE users SET name ='${name}', username='${req.params.username}', email = '${email}', password = '${password}', phone = '${phone}', images = '${images}' WHERE username = '${req.params.username}'`,
              (err) => {
                if (!err) {
                  resolve({
                    message: `Update From username '${req.params.username}' To name '${name}' success`,
                    status: 200,
                  });
                } else {
                  reject({
                    message: `update data failed`,
                    status: 500,
                  });
                }
              }
            );
          } else {
            reject({
              message: `update data failed`,
              status: 500,
            });
          }
        }
      );
    });
  },
  deleteUser: (req) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE * FROM users WHERE id_name=${req.params.parseInt(name)}`, (err, result) => {
        console.log(err)
        if (!err) {
          resolve(result.rows);
        } else {
          reject({
            message: `get all users failed`,
            statusCode: 500,
            data: [],
          });
        }
      });
    });
  },
};

module.exports = userModel;
