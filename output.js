//Thu Jul 25 2024 10:00:12 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const axios = require("axios"),
  cheerio = require("cheerio");
function load_ikuuu() {
  console.log("加载ikuuu签到服务成功！");
}
function get_environment_variable(_0x30f48f, _0x4fc4fa = "", _0x2e63ce = true) {
  function _0x728ce9() {
    _0x2e63ce && (console.log("未设置环境变量 " + _0x30f48f + "，请添加"), process.exit(0));
    return _0x4fc4fa;
  }
  return process.env[_0x30f48f] ? process.env[_0x30f48f] : _0x728ce9();
}
class ikuuu {
  constructor(_0x3c795d) {
    this.msg = "";
    this.ck = _0x3c795d;
    this.cks = "";
  }
  async sign() {
    await new Promise(_0x1f9677 => setTimeout(_0x1f9677, 500));
    const _0x2a44b5 = "https://ikuuu.me/user/checkin",
      _0x433ac2 = "https://ikuuu.me/user",
      _0x1d64dd = "https://ikuuu.me/auth/login",
      _0x3c5974 = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
      },
      _0x43df6a = {
        email: this.ck[0],
        passwd: this.ck[1]
      },
      _0xb8ede0 = await axios.post(_0x1d64dd, _0x43df6a, {
        headers: _0x3c5974
      }),
      _0x2f9d1d = _0xb8ede0.headers["set-cookie"];
    _0x2f9d1d.forEach(_0x1eb59b => {
      const _0x409f12 = _0x1eb59b.split(";")[0].split("="),
        _0x2d0477 = _0x409f12[0],
        _0x3aef33 = _0x409f12[1],
        _0xc9212a = _0x2d0477 + "=" + _0x3aef33;
      this.cks += _0xc9212a + ";";
    });
    const _0x3688d5 = {
      Cookie: this.cks,
      "sec-ch-ua": "\"Microsoft Edge\";v=\"111\", \"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"111\""
    };
    await new Promise(_0x2e6dbc => setTimeout(_0x2e6dbc, 500));
    const _0x4f0e01 = await axios.post(_0x2a44b5, {}, {
      headers: _0x3688d5
    });
    await new Promise(_0x234753 => setTimeout(_0x234753, 500));
    const _0x105050 = await axios.get(_0x433ac2, {
      headers: _0x3688d5
    });
    try {
      const _0x5e6e90 = cheerio.load(_0x105050.data),
        _0x53197e = _0x5e6e90(".counter").text(),
        _0x19af93 = _0x5e6e90(".d-sm-none.d-lg-inline-block").text(),
        _0x4f6007 = "[登录]：" + _0x19af93 + "\n[签到]：" + _0x4f0e01.data.msg + "\n[流量]：" + _0x53197e + "GB\n\n";
      this.msg += _0x4f6007;
      return this.msg;
    } catch (_0x46cf31) {
      const _0x181311 = "[登录]：解析响应失败，请检查网络或者ck有效性：" + this.ck + "\n\n";
      this.msg += _0x181311;
      return this.msg;
    }
  }
  get_sign_msg() {
    return this.sign();
  }
}
async function main() {
  const _0x1e0d2d = get_environment_variable("ikuuu");
  let _0x299e86 = "";
  const _0x54fba = _0x1e0d2d.split("&");
  console.log("检测到" + _0x54fba.length + "个ck记录，开始ikuuu签到\n");
  const _0x16ff5b = _0x54fba.map(async _0x46b7c2 => {
      const _0x10c1a0 = _0x46b7c2.split("#"),
        _0x5a63ea = new ikuuu(_0x10c1a0);
      return await _0x5a63ea.get_sign_msg();
    }),
    _0x576a04 = await Promise.all(_0x16ff5b);
  _0x299e86 = _0x576a04.join("");
  console.log(_0x299e86);
}
load_ikuuu();
main();