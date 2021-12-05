const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connDB = require("./db/conn");
const port = 7000;
require("dotenv").config();

// middleware
app.use(express.json());

// routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connDB(process.env.MONGO_URI);
    app.listen(
      port,
      console.log(`server up and running at http://localhost:${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
