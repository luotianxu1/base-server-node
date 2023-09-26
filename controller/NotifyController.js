const NotifyService = require("../service/NotifyService");

const NotifyController = {
  captcha: async (req, res) => {
    let hanleRes = await NotifyService.captcha();
    res.set("content-type", "image/svg+xml");
    res.send(hanleRes);
  },
};

module.exports = NotifyController;
