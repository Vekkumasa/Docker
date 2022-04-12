const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3001

const router = require("./Routers/test");

app.use("/", router)

app.listen(port, () => {
  console.log(`Listening to port ${port}`)
});