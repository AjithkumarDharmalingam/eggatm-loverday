const express = require("express");
const cors = require("cors");

const loveRoutes = require("./routes/love.routes");

const app = express();

app.use(cors());
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true, limit: "20mb" }));


app.use("/api/love", loveRoutes);

app.use((err, req, res, next) => {
  console.error("🔥 GLOBAL ERROR:", err);
  res.status(500).json({ error: "Server error" });
});


module.exports = app;
