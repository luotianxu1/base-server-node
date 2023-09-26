const svgCaptcha = require("svg-captcha");
const redisConfig = require("../config/redisConfig");

const NotifyService = {
  captcha: async () => {
    let captcha = svgCaptcha.create({
      size: 4,
      ignoreChars: "0o1il",
      noise: 1,
      background: "#aaa",
    });
    redisConfig.set("captcha", captcha.text, 600);
    return captcha.data;
  },
};

module.exports = NotifyService;
