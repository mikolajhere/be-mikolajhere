import express, { json } from "express";
import cors from "cors";
import "express-async-errors";
import { handleError, ValidationError } from "./utils/errors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// app.get("/", async (req, res) => {
//   throw new ValidationError("Daaaamn");
// });

app.use(handleError);

// Routes...

app.listen(3001, "0.0.0.0", () => {
  console.log("Listening on port http://localhost:3001");
});
