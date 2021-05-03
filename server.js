// config app
const dotenv = require("dotenv");
dotenv.config();

//
const appconfig = require("./configs/configapp");
const databaseconfig = require("./configs/database");
const userRouter = require("./route/user.route");

databaseconfig.emit("connect");
databaseconfig.on("success", () => appconfig.emit("connect"));

// on connection start listener
appconfig.on("success", (app) => {
  // app features
  app.get("/verify-account", (req, res) => {});
  app.use("/api", userRouter);
});

databaseconfig.on("error", (err) => {
  // when database cal gets fail
});

appconfig.on("err", (err) => {
  // when server creation gets fail
});
