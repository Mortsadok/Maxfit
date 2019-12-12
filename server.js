const express = require("express");
const app = express();
const connectDB = require("./config/db");

connectDB();
app.use(express.json({ extended: false }));
app.use("/api/Nclient", require("./routes/api/Nclient"));
app.use("/api/users", require("./routes/api/users"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
