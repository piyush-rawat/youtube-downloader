const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("build"));

app.use(express.json());

app.use("/download", require("./routes/download"));

app.get("/*", (req, res) => {
  return res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server Running"));
