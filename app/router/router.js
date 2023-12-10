const { HomeRoutes } = require("./api");
const { UserAuthRouter } = require("./user/router.user.auth");

 const router = require("express").Router();
 router.use("/" , HomeRoutes);
 router.use("/user" , UserAuthRouter
);
 module.exports = {
     AllRoutes : router
 }