const dotenv = require("dotenv")
dotenv.config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB <${mongoose.connection.name}>`);
});

app.use(express.json())
app.use(cors())

const libraryCtrl = require("./controllers/api-library.js")


app.get("/api/library", libraryCtrl.index);
app.get("/api/library/:lessonId", libraryCtrl.show);
app.post("/api/library", libraryCtrl.create);
app.put("/api/library/:lessonId", libraryCtrl.update);
app.delete("/api/library/:lessonId", libraryCtrl.del);




app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`)
});