
import express from "express";
import { rateLimit } from "express-rate-limit";
import indexRoute from "./routes.js"
const app = express();
const port = 5000;
//returns the string Hello World when / is visited
app.use(
    rateLimit({
      windowMs: 12 * 60 * 60 * 1000, // 12 hour duration in milliseconds
      max: 5,
      message: "You exceeded 5 requests in 12 hour limit!",
      headers: true,
    })
  );
  app.use("/posts", indexRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});