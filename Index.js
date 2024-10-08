require("dotenv").config();
const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const productRoutes = require("./routes/productRoutes");

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api", productRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


module.exports = app;