const express = require("express");
const http = require("http");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const PORT = 4444;

/** MongoDB database */
const db = require("./configs/mongodb");

/** Middleware */
app.use(cors());
app.use(express.json());

/** Controllers */
const questionController = require("./routes/question");
app.use("/question", questionController);
const responseController = require("./routes/response");
app.use("/response", responseController);

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Serveur started ${PORT}`);
});
