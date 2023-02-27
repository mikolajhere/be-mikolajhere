import express, { json } from "express";
import cors from "cors";
import "express-async-errors";
import { ValidationError } from "./utils/errors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/", async (req, res) => {
  throw new ValidationError("Daaaamn");
});

app.use(json());

// Routes...

app.listen(3001, "0.0.0.0", () => {
  console.log("Listening on port http://localhost:3001");
});
