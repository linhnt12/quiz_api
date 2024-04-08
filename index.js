const express = require("express");
const database = require("./config/database");
require("dotenv").config();

const routesApi = require("./api/routes/index.route");

const app = express();
const port = process.env.PORT;

database.connect();

// Routes
routesApi(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})