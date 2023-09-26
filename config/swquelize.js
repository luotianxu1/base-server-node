const { Sequelize } = require("sequelize");
const initModels = require("../models/init-models");

const sequelize = new Sequelize("xdclass-edu", "root", "@Ltx444444444", {
  host: "localhost",
  dialect: "mysql",
  timezone: "+08:00",
});

(async function () {
  try {
    await sequelize.authenticate();
    console.log("数据库连接成功");
  } catch (error) {
    console.log("数据库连接失败", error);
  }
})();

const models = initModels(sequelize);

module.exports = {
  ...models,
  sequelize,
};
