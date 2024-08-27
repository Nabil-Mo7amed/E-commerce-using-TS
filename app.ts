import { Server } from "http";
import express from "express";
import dotenv from "dotenv";
import Routes from "./routes";
import database from "./config/database";
const app: express.Application = express();
dotenv.config();
app.use(express.json());

let server: Server;
Routes(app);

database();
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);

process.on("unhandledRejection", (err: Error) => {
  console.error(`unhandledRejection ${err.name} | ${err.message}`);
  server.close(() => {
    console.error("shutting the application down");
    process.exit(1);
  });
});
