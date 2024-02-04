import express from "express";
import mongoURL from "./config.js";
import mongoose from "mongoose";
import eventRoutes from "./routes/eventRoutes.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.static("dist"));
app.use(express.json());

const PORT = process.env.PORT || 5555;

app.get("/", (request, response) => {
  return response.status(200).send("Welcome to the backend");
});

app.use("/events", eventRoutes);

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("Database is connected");
    app.listen(PORT, () => console.log("Server is serving"));
  })

  .catch((error) => console.log(error));
