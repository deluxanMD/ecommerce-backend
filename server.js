const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Routes
const usersRoutes = require("./routes/users.routes");
const productsRoutes = require("./routes/products.routes");
const authRoutes = require("./routes/auth.routes");

// Middlewares
app.use(express.json({ extended: false }));
app.use("/api/users", usersRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

connectDB();

app.get("/", (req, res) => res.send("Hi"));

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
