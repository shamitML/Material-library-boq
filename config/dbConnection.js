import Config from ".";
import mongoose from "mongoose";
import fs from "fs";
export default class DBConnection {
  static connect() {
    const options = {
      keepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ssl: true,
      autoIndex: true
    };
    return mongoose
      .connect(Config.DB, options)
      .then(() => {
        console.log("db connected");
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
