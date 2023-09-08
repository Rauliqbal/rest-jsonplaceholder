const express = require("express");
const port = 8000;
const cors = require("cors");
const bodyparser = require("body-parser");
const { default: mongoose } = require("mongoose");
const route = require("./routes")

const app = express();

mongoose.connect("mongodb+srv://rauliqbal:rauliqbal@sekolah.fq09sv6.mongodb.net/sekolah")
const db = mongoose.connection;
db.on("error", (error) => console.log(error))
db.once("open", () => console.log("Database connected!"))


app.use(cors());
app.use(bodyparser.json());
app.use(express.json());

app.use("/api", route)
app.use("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => console.log(`Server running at port ${port}`));