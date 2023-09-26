const SequelizeAuto = require("sequelize-auto");

//各个数据库配置
let dbConfig = [
  {
    name: "xdclass-edu",
    auto: true,
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "@Ltx444444444",
    database: "xdclass-edu",
    modelPath: "./models",
  },
];

for (const data of dbConfig) {
  let auto = new SequelizeAuto(data.database, data.user, data.password, {
    host: data.host,
    dialect: "mysql",
    directory: data.modelPath,
    port: data.port,
    caseFile: "c",
    singularize: true,
  });
  auto.run(function (err) {
    if (err) throw err;
    console.log(auto.tables); // table list
    console.log(auto.foreignKeys); // foreign key list
  });
}
