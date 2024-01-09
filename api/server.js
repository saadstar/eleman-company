const express = require("express");
const app = express();
const cors = require("cors");
const env = require("dotenv").config();
const connectDB = require("./config/dbConnection");
const processRoute = require("./routes/processRoute");
const processDetailsRoute = require("./routes/processDetailsRoute");
const storeRoute = require("./routes/storeRoute");
const saveRoute = require("./routes/saveRoute");
const authRoute = require("./routes/authRoute");
const carRoute = require("./routes/carRoute");
const funderCompanyRoute = require("./routes/funderCompany");
const funderDetailsRoute = require("./routes/funderDetailsRoute");
const cookieParser = require("cookie-parser");

connectDB();
const PORT =  process.env.PORT || 3500;

app.use(express.json());
app.use(express.static('images'));
app.use(cors());
app.use(cookieParser());

app.use("/api/process", processRoute);
app.use("/api/processDetailes", processDetailsRoute);
app.use("/api/store", storeRoute);
app.use("/api/save", saveRoute);
app.use("/api/auth/", authRoute);
app.use("/api/car", carRoute);
app.use("/api/funderCompany", funderCompanyRoute);
app.use("/api/funderDetails", funderDetailsRoute);



app.listen((PORT), () => {
    console.log(`Server Running on ${PORT}`)
})