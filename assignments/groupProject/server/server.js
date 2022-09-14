require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "http://localhost:8081"
}));

const db = require('./models');
db.sequelize.sync();

require("./routes/tutorial.routes")(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );