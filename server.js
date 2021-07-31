const express = require("express");
const connectDB = require("./config/db");

// Routes
const usersRoutes = require("./routes/users.routes");
const productsRoutes = require("./routes/products.routes");

const app = express();

const PORT = process.env.PORT || 5000;

connectDB();

app.use("/api/users", usersRoutes);
app.use("/api/products", productsRoutes);

app.get("/", (req, res) => res.send("Hi"));

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
