const express = require("express");

const app = express();

app.use(express.static("build"));

app.use(express.json());

app.use("/download", require("./routes/download"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server Running"));
