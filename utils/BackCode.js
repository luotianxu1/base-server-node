class BackCode {
  constructor({ code, data, msg }) {
    this.code = code;
    this.data = data;
    this.msg = msg;
  }

  // 请求成功,只返回code
  static buildSuccess() {
    return new BackCode({ code: 0, data: null, mag: null }).toJSON();
  }

  // 请求成功，只返回code+data
  static buildSuccessAndData(data) {
    return new BackCode({ code: 0, data, mag: null }).toJSON();
  }

  // 请求失败，只返回code+msg
  static buildErrorAndData(msg) {
    return new BackCode({ code: -1, data: null, msg }).toJSON();
  }

  // 请求失败，只返回code+msg
  static buildResult() {
    return new BackCode({
      code: codeEnum.code,
      data: null,
      msg: codeEnum.msg,
    }).toJSON();
  }

  toJSON() {
    return {
      code: this.code,
      data: this.data,
      msg: this.mag,
    };
  }
}

module.exports = BackCode;
