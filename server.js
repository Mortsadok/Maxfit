const express = require("express");
const app = express();
const connectDB = require("./config/db");

connectDB();
app.use(express.json({ extended: false }));
app.use("/api/Nclient", require("./routes/api/Nclient"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/health", require("./routes/api/health"));
app.use("api/auth", require("./routes/api/auth"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
