const userRoute = require("./User");
const chatRoute = require("./Chat");
const readRoute = require("./Read");
const searchRoute = require("./Search");

const app = (route, prefix) => {
  route.use(`${prefix}/users`, userRoute);
  route.use(`${prefix}/chat`, chatRoute);
  route.use(`${prefix}/read`, readRoute);
  route.use(`${prefix}/search`, searchRoute);
};

module.exports = app;
