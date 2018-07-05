require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const controller = require("./products_controller");

const app = express();
app.use(bodyParser.json());

const port = 3000;

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log(err));

app.post("/api/product", controller.create);
app.get("/api/products", controller.getAll);
app.get("/api/product/:id", controller.getOne);
app.put("/api/product/:id", controller.update);
app.delete("/api/product/:id", controller.deleteD);

app.listen(port, () => {
  console.log(`Server is Listening on port ${port}`);
});
