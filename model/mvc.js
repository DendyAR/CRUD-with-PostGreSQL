app.get(`/`, (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
         <form action="/info/get" method="GET">
        <input type="submit" value="GET">
        </form>
        <form action="/info/add" method="POST">
          <label for="add">ADD:</label>
          <input type="text" name="add" id="add">
          <input type="submit" value="ADD">    
      </form>
      <form action="/info/" method="POST">
          <label for="add">ADD:</label>
          <input type="text" name="add" id="add">
          <input type="submit" value="ADD">    
      </form>
      <form action="/info/add" method="POST">
          <label for="add">ADD:</label>
          <input type="text" name="add" id="add">
          <input type="submit" value="ADD">    
      </form>
      <form action="/info/delete" method="POST">
          <label for="delete">DELETE:</label>
          <input type="text" name="delete" id="delete">
          <input type="submit" value="DELETE">    
      </form>
      <form action="/info/update" method="POST">
      <label for="oldValuename="oldValue" id="oldValue">
      <label for="newValu">Old Value: </label>
      <input type="text" e">New Value:</label>
      <input type="text" name="newValue" id="newValue">
      <input type="submit" value="UPDATE">    
  </form>
    </body>
    </html>`);
  });
  
  app.get("/info/get", (req, res) => {
    try {
      pool.connect(async (error, client, release) => {
        let resposnse = await client.query(`SELECT * FROM table_users`);
        release();
        res.send(resposnse.rows);
      });
    } catch (error) {
      console.log(error);
    }
  });
  
  app.post("/info/add", (req, res) => {
    try {
      pool.connect(async (error, client, release) => {
        let rspe = await client.query(
          `INSERT INTO  table_users (name) VALUES ('${req.body.add}')  `
        );
        res.redirect("/info/get");
      });
    } catch (error) {
      console.log(error);
    }
  });
  
  app.post("/info/delete", (req, res) => {
    try {
      pool.connect(async (error, client, release) => {
        let rspe = await client.query(
          `DELETE FROM table_users WHERE name='${req.body.delete}'`
        );
        res.redirect("/info/get");
      });
    } catch (error) {
      console.log(error);
    }
  });
  
  app.post("/info/update", (req, res) => {
    try {
      pool.connect(async (error, client, release) => {
        let rspe = await client.query(
          `UPDATE table_users SET name ='${req.body.newValue}' WHERE name ='${req.body.oldValue}'`
        );
        res.redirect("/info/get");
      });
    } catch (error) {
      console.log(error);
    }
  });