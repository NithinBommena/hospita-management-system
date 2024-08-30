const express = require("express");
const path = require("path");
const { connection } = require("./configs/db");
require("dotenv").config({path: path.resolve(__dirname, './local.env')});
const cors = require("cors");

const adminRouter = require("./routes/Admin.Route");
const appointmentRouter = require("./routes/Appointments.Route");
const bedRouter = require("./routes/Beds.Route");
const doctorRouter = require("./routes/Doctors.Route");
const hospitalRouter = require("./routes/Hospital.Route");
const nurseRouter = require("./routes/Nurses.Route");
const patientRouter = require("./routes/Patients.Route");
const reportRouter = require("./routes/Reports.Route");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.use("/admin", adminRouter);
app.use("/appointments", appointmentRouter);
app.use("/beds", bedRouter);
app.use("/doctors", doctorRouter);
app.use("/hospitals", hospitalRouter);
app.use("/nurses", nurseRouter);
app.use("/patients", patientRouter);
app.use("/reports", reportRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to Database");
  } catch (error) {
    console.log("Unable to connect to Database");
    console.log(error);
  }
  console.log(`Listening to port ${process.env.port}`);
});
