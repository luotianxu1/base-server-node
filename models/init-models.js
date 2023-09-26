var DataTypes = require("sequelize").DataTypes;
var _comment = require("./comment");
var _course_answer = require("./courseAnswer");
var _course_note = require("./courseNote");
var _course_question = require("./courseQuestion");
var _duration_record = require("./durationRecord");
var _episode = require("./episode");
var _favorite = require("./favorite");
var _play_record = require("./playRecord");
var _product = require("./product");
var _product_card = require("./productCard");
var _product_order = require("./productOrder");
var _teacher = require("./teacher");

function initModels(sequelize) {
  var comment = _comment(sequelize, DataTypes);
  var course_answer = _course_answer(sequelize, DataTypes);
  var course_note = _course_note(sequelize, DataTypes);
  var course_question = _course_question(sequelize, DataTypes);
  var duration_record = _duration_record(sequelize, DataTypes);
  var episode = _episode(sequelize, DataTypes);
  var favorite = _favorite(sequelize, DataTypes);
  var play_record = _play_record(sequelize, DataTypes);
  var product = _product(sequelize, DataTypes);
  var product_card = _product_card(sequelize, DataTypes);
  var product_order = _product_order(sequelize, DataTypes);
  var teacher = _teacher(sequelize, DataTypes);

  return {
    comment,
    course_answer,
    course_note,
    course_question,
    duration_record,
    episode,
    favorite,
    play_record,
    product,
    product_card,
    product_order,
    teacher,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
