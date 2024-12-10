const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");





app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cors());

app.listen(4000, () => {
    console.log(`Server listening at http://localhost:4000`);
  });