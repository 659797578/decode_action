//Tue Sep 10 2024 03:37:44 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
NAME = "无锡博报";
VALY = ["wxbbck"];
LOGS = 0;
CK = "";
var userList = [];
readtaskkey = ["watch_news", "praise"];
viewtaskkey = ["watch_vod", "vod", "comment"];
usid = 0;
var CryptoJS = require("crypto-js");
const getNowDate = () => {
  var _0x452c92 = new Date(),
    _0x4ee1e4 = _0x452c92.getFullYear(),
    _0x1543dd = _0x452c92.getMonth() + 1,
    _0x4b7b90 = _0x452c92.getDate();
  _0x1543dd >= 1 && _0x1543dd <= 9 && (_0x1543dd = "0" + _0x1543dd);
  _0x4b7b90 >= 0 && _0x4b7b90 <= 9 && (_0x4b7b90 = "0" + _0x4b7b90);
  return _0x4ee1e4 + "-" + _0x1543dd + "-" + _0x4b7b90;
};
class Bar {
  constructor(_0x5bdcb5) {
    this._ = ++usid;
    this.f = "账号 [" + this._ + "] ";
    this.o = _0x5bdcb5.split("@")[0];
    this.p = _0x5bdcb5.split("@")[1];
  }
  async task() {
    console.log("蛋炒饭美食交流群：https://t.me/+xjTie4yvzm83OTI9");
    await this.login();
  }
  async login() {
    let _0x42d576 = times(13),
      _0x546145 = SJS(6),
      _0x2865c1 = "111111&111111&7.0.27&" + _0x42d576 + _0x546145,
      _0x841371 = SHA1_Encrypt(_0x2865c1),
      _0x468195 = "account=" + this.o + "&password=" + this.p,
      _0x116ce7 = {
        "xy-api-signature": "" + _0x841371,
        "xy-api-timestamp": "" + _0x42d576 + _0x546145
      },
      _0x40d5c0 = await task("post", "https://bb-member.wifiwx.com/auth/signIn?app_version=7.0.2&appid=m2oszr2ukmxzvqr4ai&package_name=com.hoge.android.wuxiwireless&language=Chinese&client_type=android", _0x116ce7, _0x468195);
    _0x40d5c0.error_code == 0 ? (this.token = _0x40d5c0.result.access_token, console.log(this.f + " 登陆成功"), await this.signin()) : console.log(this.f + " " + _0x40d5c0.error_message + " 登陆失败");
  }
  async signin() {
    let _0x273f4d = times(13),
      _0x581d96 = SJS(6),
      _0x5d467c = "111111&111111&7.0.27&" + _0x273f4d + _0x581d96,
      _0x57af14 = SHA1_Encrypt(_0x5d467c),
      _0x492654 = getNowDate(),
      _0x1ae963 = "{\"sign_in_date\":\"" + _0x492654 + "\",\"access_token\":\"Bearer " + this.token + "\"}",
      _0x28b77a = {
        "xy-api-signature": "" + _0x57af14,
        "xy-api-timestamp": "" + _0x273f4d + _0x581d96,
        "Member-User-Authorization": "Bearer " + this.token
      },
      _0x54540a = await task("post", "http://bb-member.wifiwx.com/sign/in", _0x28b77a, _0x1ae963);
    if (_0x54540a.error_code == 0) {
      console.log(this.f + " 签到成功");
      for (let _0x66276e = 0; _0x66276e < 10; _0x66276e++) {
        for (let _0x21cc65 of readtaskkey) {
          this.readkey = _0x21cc65;
          await this.read();
        }
      }
      for (let _0x4e663d = 0; _0x4e663d < 6; _0x4e663d++) {
        for (let _0x29ecc4 of viewtaskkey) {
          this.viewkey = _0x29ecc4;
          await this.view();
        }
      }
      await this.listen_gb();
      await this.live();
      for (let _0x1b47d1 = 0; _0x1b47d1 < 3; _0x1b47d1++) {
        await this.share();
      }
      await this.userinfo();
    }
  }
  async read() {
    let _0xedf550 = times(13),
      _0x58a580 = times(10),
      _0x1d0678 = SJS(6),
      _0x27a6e6 = "111111&111111&7.0.27&" + _0xedf550 + _0x1d0678,
      _0x2a8ee1 = SHA1_Encrypt(_0x27a6e6),
      _0xbb8ec5 = MD5Encrypt("platform=plus&task_key=" + this.readkey + "&timestamp=" + _0x58a580),
      _0x45194d = {
        "xy-api-signature": "" + _0x2a8ee1,
        "xy-api-timestamp": "" + _0xedf550 + _0x1d0678,
        "Member-User-Authorization": "Bearer " + this.token
      },
      _0x4be9ec = await task("post", "https://bb-member.wifiwx.com/task/trigger?access_token=Bearer " + this.token + "&appid=m2oszr2ukmxzvqr4ai&package_name=com.hoge.android.wuxiwireless&appkey=7fbab2da9b4c7cd2405ffa7e8097cc22&task_key=" + this.readkey + "&sign=" + _0xbb8ec5 + "&platform=plus&timestamp=" + _0x58a580, _0x45194d);
    _0x4be9ec.error_code == 0 ? (console.log(this.f + " 完成 阅读、点赞任务 成功"), await wait(10000)) : console.log(this.f + " " + _0x4be9ec.error_message);
  }
  async view() {
    let _0x402bc5 = times(13),
      _0x4c6e04 = times(10),
      _0x40e50d = SJS(6),
      _0x401f4f = "111111&111111&7.0.27&" + _0x402bc5 + _0x40e50d,
      _0x4c306d = SHA1_Encrypt(_0x401f4f),
      _0x1baef3 = MD5Encrypt("platform=plus&task_key=" + this.viewkey + "&timestamp=" + _0x4c6e04),
      _0x37a82e = {
        "xy-api-signature": "" + _0x4c306d,
        "xy-api-timestamp": "" + _0x402bc5 + _0x40e50d,
        "Member-User-Authorization": "Bearer " + this.token
      },
      _0x1100a0 = await task("post", "https://bb-member.wifiwx.com/task/trigger?access_token=Bearer " + this.token + "&appid=m2oszr2ukmxzvqr4ai&package_name=com.hoge.android.wuxiwireless&appkey=7fbab2da9b4c7cd2405ffa7e8097cc22&task_key=" + this.viewkey + "&sign=" + _0x1baef3 + "&platform=plus&timestamp=" + _0x4c6e04, _0x37a82e);
    _0x1100a0.error_code == 0 ? (console.log(this.f + " 完成 看视频、直播任务、发评论 成功"), await wait(10000)) : console.log(this.f + " " + _0x1100a0.error_message);
  }
  async listen_gb() {
    let _0x406a41 = times(13),
      _0x384141 = times(10),
      _0x352949 = SJS(6),
      _0x3eac0a = "111111&111111&7.0.27&" + _0x406a41 + _0x352949,
      _0x3ccd5e = SHA1_Encrypt(_0x3eac0a),
      _0x310c4f = MD5Encrypt("platform=plus&task_key=listen_gb&timestamp=" + _0x384141),
      _0x2d4ba4 = {
        "xy-api-signature": "" + _0x3ccd5e,
        "xy-api-timestamp": "" + _0x406a41 + _0x352949,
        "Member-User-Authorization": "Bearer " + this.token
      },
      _0x4e0ad4 = await task("post", "https://bb-member.wifiwx.com/task/trigger?access_token=Bearer " + this.token + "&appid=m2oszr2ukmxzvqr4ai&package_name=com.hoge.android.wuxiwireless&appkey=7fbab2da9b4c7cd2405ffa7e8097cc22&task_key=listen_gb&sign=" + _0x310c4f + "&platform=plus&timestamp=" + _0x384141, _0x2d4ba4);
    _0x4e0ad4.error_code == 0 ? (console.log(this.f + " 完成 听广播 成功"), await wait(10000)) : console.log(this.f + " " + _0x4e0ad4.error_message);
  }
  async live() {
    let _0x5c49ad = times(13),
      _0x92e6a6 = times(10),
      _0x3fb1e9 = SJS(6),
      _0x574356 = "111111&111111&7.0.27&" + _0x5c49ad + _0x3fb1e9,
      _0x2ce321 = SHA1_Encrypt(_0x574356),
      _0x124215 = MD5Encrypt("platform=plus&task_key=live&timestamp=" + _0x92e6a6),
      _0x3460e0 = {
        "xy-api-signature": "" + _0x2ce321,
        "xy-api-timestamp": "" + _0x5c49ad + _0x3fb1e9,
        "Member-User-Authorization": "Bearer " + this.token
      },
      _0x556b41 = await task("post", "https://bb-member.wifiwx.com/task/trigger?access_token=Bearer " + this.token + "&appid=m2oszr2ukmxzvqr4ai&package_name=com.hoge.android.wuxiwireless&appkey=7fbab2da9b4c7cd2405ffa7e8097cc22&task_key=live&sign=" + _0x124215 + "&platform=plus&timestamp=" + _0x92e6a6, _0x3460e0);
    _0x556b41.error_code == 0 ? (console.log(this.f + " 完成 看直播 成功"), await wait(10000)) : console.log(this.f + " " + _0x556b41.error_message);
  }
  async share() {
    let _0x443812 = times(13),
      _0x3023ea = times(10),
      _0x2748bc = SJS(6),
      _0x2fa5fa = "111111&111111&7.0.27&" + _0x443812 + _0x2748bc,
      _0xb447f4 = SHA1_Encrypt(_0x2fa5fa),
      _0x21588c = MD5Encrypt("platform=plus&task_key=share&timestamp=" + _0x3023ea),
      _0x349ec6 = {
        "xy-api-signature": "" + _0xb447f4,
        "xy-api-timestamp": "" + _0x443812 + _0x2748bc,
        "Member-User-Authorization": "Bearer " + this.token
      },
      _0x3aa6f5 = await task("post", "https://bb-member.wifiwx.com/task/trigger?access_token=Bearer " + this.token + "&appid=m2oszr2ukmxzvqr4ai&package_name=com.hoge.android.wuxiwireless&appkey=7fbab2da9b4c7cd2405ffa7e8097cc22&task_key=share&sign=" + _0x21588c + "&platform=plus&timestamp=" + _0x3023ea, _0x349ec6);
    _0x3aa6f5.error_code == 0 ? (console.log(this.f + " 完成 看直播 成功"), await wait(10000)) : console.log(this.f + " " + _0x3aa6f5.error_message);
  }
  async userinfo() {
    let _0x48af34 = times(13),
      _0x3ba43f = SJS(6),
      _0x261c31 = "111111&111111&7.0.27&" + _0x48af34 + _0x3ba43f,
      _0x472c61 = SHA1_Encrypt(_0x261c31),
      _0x36df85 = {
        "xy-api-signature": "" + _0x472c61,
        "xy-api-timestamp": "" + _0x48af34 + _0x3ba43f,
        "Member-User-Authorization": "Bearer " + this.token
      },
      _0x3f4134 = await task("get", "https://bb-member.wifiwx.com/member/info?access_token=Bearer " + this.token + "&appid=m2oszr2ukmxzvqr4ai&package_name=com.hoge.android.wuxiwireless", _0x36df85);
    _0x3f4134.error_code == 0 ? console.log(this.f + " 用户名：" + _0x3f4134.result.member_nickname + "==>总积分：" + _0x3f4134.result.member_integral) : console.log(this.f + " " + _0x3f4134.error_message);
  }
}
!(async () => {
  if (!(await checkEnv())) {
    return;
  }
  for (let _0x512b8f of userList) await _0x512b8f.task();
})().catch(_0x11fc42 => {
  console.log(_0x11fc42);
}).finally(() => {});
function RT(_0x29dc81, _0xb2e0f6) {
  return Math.round(Math.random() * (_0xb2e0f6 - _0x29dc81) + _0x29dc81);
}
function times(_0x2eab9f) {
  if (_0x2eab9f == 10) {
    let _0x59c5fc = Math.round(new Date().getTime() / 1000).toString();
    return _0x59c5fc;
  } else {
    let _0x33349a = new Date().getTime();
    return _0x33349a;
  }
}
async function task(_0x1768c0, _0xfdfe94, _0x35b408, _0x564010) {
  _0x1768c0 == "delete" ? _0x1768c0 = _0x1768c0.toUpperCase() : _0x1768c0 = _0x1768c0;
  const _0x1583ff = require("request");
  _0x1768c0 == "post" && (delete _0x35b408["content-type"], delete _0x35b408["Content-type"], delete _0x35b408["content-Type"], safeGet(_0x564010) ? _0x35b408["Content-Type"] = "application/json;charset=UTF-8" : _0x35b408["Content-Type"] = "application/x-www-form-urlencoded", _0x564010 && (_0x35b408["Content-Length"] = lengthInUtf8Bytes(_0x564010)));
  _0x35b408.Host = _0xfdfe94.replace("//", "/").split("/")[1];
  if (_0x1768c0.indexOf("T") < 0) {
    var _0x3c6b8e = {
      url: _0xfdfe94,
      headers: _0x35b408,
      body: _0x564010
    };
  } else {
    var _0x3c6b8e = {
      url: _0xfdfe94,
      headers: _0x35b408,
      form: JSON.parse(_0x564010)
    };
  }
  return new Promise(async _0x241909 => {
    _0x1583ff[_0x1768c0.toLowerCase()](_0x3c6b8e, (_0x3f894c, _0x3b71e2, _0xc4a8df) => {
      try {
        LOGS == 1 && (console.log("==================请求=================="), console.log(_0x3c6b8e), console.log("==================返回=================="), console.log(JSON.parse(_0xc4a8df)));
      } catch (_0xc44f6f) {} finally {
        !_0x3f894c ? safeGet(_0xc4a8df) ? _0xc4a8df = JSON.parse(_0xc4a8df) : _0xc4a8df = _0xc4a8df : _0xc4a8df = _0xfdfe94 + "   API请求失败，请检查网络重试\n" + _0x3f894c;
        return _0x241909(_0xc4a8df);
      }
    });
  });
}
function SJS(_0x3e61a5) {
  _0x3e61a5 = _0x3e61a5 || 32;
  var _0x1d9971 = "1234567890",
    _0x21c632 = _0x1d9971.length,
    _0x2fa4c5 = "";
  for (i = 0; i < _0x3e61a5; i++) {
    _0x2fa4c5 += _0x1d9971.charAt(Math.floor(Math.random() * _0x21c632));
  }
  return _0x2fa4c5;
}
function SJSxx(_0x11bd91) {
  _0x11bd91 = _0x11bd91 || 32;
  var _0x10beac = "abcdefghijklmnopqrstuvwxyz1234567890",
    _0x35a56f = _0x10beac.length,
    _0x2aff9f = "";
  for (i = 0; i < _0x11bd91; i++) {
    _0x2aff9f += _0x10beac.charAt(Math.floor(Math.random() * _0x35a56f));
  }
  return _0x2aff9f;
}
function safeGet(_0x18314d) {
  try {
    if (typeof JSON.parse(_0x18314d) == "object") {
      return true;
    }
  } catch (_0x179732) {
    return false;
  }
}
function lengthInUtf8Bytes(_0x584401) {
  let _0x43ddd3 = encodeURIComponent(_0x584401).match(/%[89ABab]/g);
  return _0x584401.length + (_0x43ddd3 ? _0x43ddd3.length : 0);
}
async function checkEnv() {
  let _0x3c9f0c = process.env[VALY] || CK,
    _0xe6c037 = 0;
  if (_0x3c9f0c) {
    for (let _0x21495e of _0x3c9f0c.split("&").filter(_0x29acef => !!_0x29acef)) {
      userList.push(new Bar(_0x21495e));
    }
    _0xe6c037 = userList.length;
  } else {
    console.log("\n【" + NAME + "】：未填写变量: " + VALY);
  }
  console.log("共找到" + _0xe6c037 + "个账号");
  return userList;
}
function wait(_0x205219) {
  return new Promise(_0x265d73 => setTimeout(_0x265d73, _0x205219));
}
function stringToBase64(_0x5e1c7d) {
  var _0x4896ed = Buffer.from(_0x5e1c7d).toString("base64");
  return _0x4896ed;
}
function SHA1_Encrypt(_0x2cee5a) {
  return CryptoJS.SHA1(_0x2cee5a).toString();
}
function SHA256(_0x487a70) {
  const _0x265bed = 8,
    _0x333a8e = 0;
  function _0x202fae(_0x30e034, _0x4ee028) {
    const _0x1046ea = (65535 & _0x30e034) + (65535 & _0x4ee028);
    return (_0x30e034 >> 16) + (_0x4ee028 >> 16) + (_0x1046ea >> 16) << 16 | 65535 & _0x1046ea;
  }
  function _0x4d4e50(_0xd9c3e, _0x18e182) {
    return _0xd9c3e >>> _0x18e182 | _0xd9c3e << 32 - _0x18e182;
  }
  function _0x234be7(_0x568ec1, _0x5acf6d) {
    return _0x568ec1 >>> _0x5acf6d;
  }
  function _0x449749(_0xa39387, _0x397798, _0x47c4e6) {
    return _0xa39387 & _0x397798 ^ ~_0xa39387 & _0x47c4e6;
  }
  function _0x51af95(_0x1ed61c, _0x549999, _0x15acd2) {
    return _0x1ed61c & _0x549999 ^ _0x1ed61c & _0x15acd2 ^ _0x549999 & _0x15acd2;
  }
  function _0x479aaf(_0x98fad7) {
    return _0x4d4e50(_0x98fad7, 2) ^ _0x4d4e50(_0x98fad7, 13) ^ _0x4d4e50(_0x98fad7, 22);
  }
  function _0x473a41(_0xd1225f) {
    return _0x4d4e50(_0xd1225f, 6) ^ _0x4d4e50(_0xd1225f, 11) ^ _0x4d4e50(_0xd1225f, 25);
  }
  function _0x1cbb64(_0x34188e) {
    return _0x4d4e50(_0x34188e, 7) ^ _0x4d4e50(_0x34188e, 18) ^ _0x234be7(_0x34188e, 3);
  }
  return function (_0x30b444) {
    const _0x3111eb = _0x333a8e ? "0123456789ABCDEF" : "0123456789abcdef";
    let _0x694af4 = "";
    for (let _0x10188a = 0; _0x10188a < 4 * _0x30b444.length; _0x10188a++) {
      _0x694af4 += _0x3111eb.charAt(_0x30b444[_0x10188a >> 2] >> 8 * (3 - _0x10188a % 4) + 4 & 15) + _0x3111eb.charAt(_0x30b444[_0x10188a >> 2] >> 8 * (3 - _0x10188a % 4) & 15);
    }
    return _0x694af4;
  }(function (_0x18e513, _0x5e3d4a) {
    const _0x3d865d = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
      _0x1c0bf9 = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
      _0x5875e0 = new Array(64);
    let _0x355a3d, _0x2e8116, _0x18b0f3, _0x3d4536, _0xe059a2, _0x4891e3, _0x1bbdd2, _0x543d9, _0xdafc2f, _0x351e76, _0x2ce078, _0x115126;
    for (_0x18e513[_0x5e3d4a >> 5] |= 128 << 24 - _0x5e3d4a % 32, _0x18e513[15 + (_0x5e3d4a + 64 >> 9 << 4)] = _0x5e3d4a, _0xdafc2f = 0; _0xdafc2f < _0x18e513.length; _0xdafc2f += 16) {
      for (_0x355a3d = _0x1c0bf9[0], _0x2e8116 = _0x1c0bf9[1], _0x18b0f3 = _0x1c0bf9[2], _0x3d4536 = _0x1c0bf9[3], _0xe059a2 = _0x1c0bf9[4], _0x4891e3 = _0x1c0bf9[5], _0x1bbdd2 = _0x1c0bf9[6], _0x543d9 = _0x1c0bf9[7], _0x351e76 = 0; _0x351e76 < 64; _0x351e76++) {
        _0x5875e0[_0x351e76] = _0x351e76 < 16 ? _0x18e513[_0x351e76 + _0xdafc2f] : _0x202fae(_0x202fae(_0x202fae(_0x4d4e50(_0xb1ea4d = _0x5875e0[_0x351e76 - 2], 17) ^ _0x4d4e50(_0xb1ea4d, 19) ^ _0x234be7(_0xb1ea4d, 10), _0x5875e0[_0x351e76 - 7]), _0x1cbb64(_0x5875e0[_0x351e76 - 15])), _0x5875e0[_0x351e76 - 16]);
        _0x2ce078 = _0x202fae(_0x202fae(_0x202fae(_0x202fae(_0x543d9, _0x473a41(_0xe059a2)), _0x449749(_0xe059a2, _0x4891e3, _0x1bbdd2)), _0x3d865d[_0x351e76]), _0x5875e0[_0x351e76]);
        _0x115126 = _0x202fae(_0x479aaf(_0x355a3d), _0x51af95(_0x355a3d, _0x2e8116, _0x18b0f3));
        _0x543d9 = _0x1bbdd2;
        _0x1bbdd2 = _0x4891e3;
        _0x4891e3 = _0xe059a2;
        _0xe059a2 = _0x202fae(_0x3d4536, _0x2ce078);
        _0x3d4536 = _0x18b0f3;
        _0x18b0f3 = _0x2e8116;
        _0x2e8116 = _0x355a3d;
        _0x355a3d = _0x202fae(_0x2ce078, _0x115126);
      }
      _0x1c0bf9[0] = _0x202fae(_0x355a3d, _0x1c0bf9[0]);
      _0x1c0bf9[1] = _0x202fae(_0x2e8116, _0x1c0bf9[1]);
      _0x1c0bf9[2] = _0x202fae(_0x18b0f3, _0x1c0bf9[2]);
      _0x1c0bf9[3] = _0x202fae(_0x3d4536, _0x1c0bf9[3]);
      _0x1c0bf9[4] = _0x202fae(_0xe059a2, _0x1c0bf9[4]);
      _0x1c0bf9[5] = _0x202fae(_0x4891e3, _0x1c0bf9[5]);
      _0x1c0bf9[6] = _0x202fae(_0x1bbdd2, _0x1c0bf9[6]);
      _0x1c0bf9[7] = _0x202fae(_0x543d9, _0x1c0bf9[7]);
    }
    var _0xb1ea4d;
    return _0x1c0bf9;
  }(function (_0x17c9a3) {
    const _0x100a3b = [],
      _0x31ed92 = (1 << _0x265bed) - 1;
    for (let _0x2f8a14 = 0; _0x2f8a14 < _0x17c9a3.length * _0x265bed; _0x2f8a14 += _0x265bed) {
      _0x100a3b[_0x2f8a14 >> 5] |= (_0x17c9a3.charCodeAt(_0x2f8a14 / _0x265bed) & _0x31ed92) << 24 - _0x2f8a14 % 32;
    }
    return _0x100a3b;
  }(_0x487a70 = function (_0x4ceeec) {
    _0x4ceeec = _0x4ceeec.replace(/\r\n/g, "\n");
    let _0x3133cb = "";
    for (let _0x47dafe = 0; _0x47dafe < _0x4ceeec.length; _0x47dafe++) {
      const _0x25350e = _0x4ceeec.charCodeAt(_0x47dafe);
      _0x25350e < 128 ? _0x3133cb += String.fromCharCode(_0x25350e) : _0x25350e > 127 && _0x25350e < 2048 ? (_0x3133cb += String.fromCharCode(_0x25350e >> 6 | 192), _0x3133cb += String.fromCharCode(63 & _0x25350e | 128)) : (_0x3133cb += String.fromCharCode(_0x25350e >> 12 | 224), _0x3133cb += String.fromCharCode(_0x25350e >> 6 & 63 | 128), _0x3133cb += String.fromCharCode(63 & _0x25350e | 128));
    }
    return _0x3133cb;
  }(_0x487a70)), _0x487a70.length * _0x265bed));
}
function MD5Encrypt(_0x5748ee) {
  function _0x56e45f(_0x54b156, _0x5edd02) {
    return _0x54b156 << _0x5edd02 | _0x54b156 >>> 32 - _0x5edd02;
  }
  function _0x52e46c(_0x463359, _0x28e4f7) {
    var _0x320ee6, _0x26964c, _0x27d716, _0x4a91ad, _0x4def82;
    _0x27d716 = 2147483648 & _0x463359;
    _0x4a91ad = 2147483648 & _0x28e4f7;
    _0x320ee6 = 1073741824 & _0x463359;
    _0x26964c = 1073741824 & _0x28e4f7;
    _0x4def82 = (1073741823 & _0x463359) + (1073741823 & _0x28e4f7);
    return _0x320ee6 & _0x26964c ? 2147483648 ^ _0x4def82 ^ _0x27d716 ^ _0x4a91ad : _0x320ee6 | _0x26964c ? 1073741824 & _0x4def82 ? 3221225472 ^ _0x4def82 ^ _0x27d716 ^ _0x4a91ad : 1073741824 ^ _0x4def82 ^ _0x27d716 ^ _0x4a91ad : _0x4def82 ^ _0x27d716 ^ _0x4a91ad;
  }
  function _0x1f20fc(_0x4b601f, _0x16caee, _0x4ebb4f, _0x2b9114, _0x144122, _0x39882, _0x467cb6) {
    var _0x24dbd2, _0xefb923;
    _0x4b601f = _0x52e46c(_0x4b601f, _0x52e46c(_0x52e46c((_0x24dbd2 = _0x16caee) & (_0xefb923 = _0x4ebb4f) | ~_0x24dbd2 & _0x2b9114, _0x144122), _0x467cb6));
    return _0x52e46c(_0x56e45f(_0x4b601f, _0x39882), _0x16caee);
  }
  function _0x2fc201(_0x4f793e, _0x5e1a8c, _0x53b69f, _0x1bf38b, _0x4fe225, _0x41a4d4, _0x48c95a) {
    var _0x1d7f29, _0x1c0d94, _0x5baaf5;
    _0x4f793e = _0x52e46c(_0x4f793e, _0x52e46c(_0x52e46c((_0x1d7f29 = _0x5e1a8c, _0x1c0d94 = _0x53b69f, _0x1d7f29 & (_0x5baaf5 = _0x1bf38b) | _0x1c0d94 & ~_0x5baaf5), _0x4fe225), _0x48c95a));
    return _0x52e46c(_0x56e45f(_0x4f793e, _0x41a4d4), _0x5e1a8c);
  }
  function _0x11095a(_0x5c7f33, _0x452d5b, _0x3818fb, _0x45df78, _0x515057, _0x3898e6, _0x4d93a1) {
    var _0x1467e0, _0x17f78c;
    _0x5c7f33 = _0x52e46c(_0x5c7f33, _0x52e46c(_0x52e46c((_0x1467e0 = _0x452d5b) ^ (_0x17f78c = _0x3818fb) ^ _0x45df78, _0x515057), _0x4d93a1));
    return _0x52e46c(_0x56e45f(_0x5c7f33, _0x3898e6), _0x452d5b);
  }
  function _0x5e89aa(_0x36e356, _0x213398, _0x50e0fb, _0x10957e, _0x2c6082, _0x483886, _0x3fe65d) {
    var _0x2a0f3c, _0x3de2b4;
    _0x36e356 = _0x52e46c(_0x36e356, _0x52e46c(_0x52e46c((_0x2a0f3c = _0x213398, (_0x3de2b4 = _0x50e0fb) ^ (_0x2a0f3c | ~_0x10957e)), _0x2c6082), _0x3fe65d));
    return _0x52e46c(_0x56e45f(_0x36e356, _0x483886), _0x213398);
  }
  function _0x5f48bb(_0x5f23ea) {
    var _0xc7c6ea,
      _0x1157ce = "",
      _0x332bba = "";
    for (_0xc7c6ea = 0; 3 >= _0xc7c6ea; _0xc7c6ea++) {
      _0x1157ce += (_0x332bba = "0" + (_0x5f23ea >>> 8 * _0xc7c6ea & 255).toString(16)).substr(_0x332bba.length - 2, 2);
    }
    return _0x1157ce;
  }
  var _0x595ce9,
    _0x2792a7,
    _0x3cbd63,
    _0xd4a341,
    _0x22623e,
    _0x1ba915,
    _0x5912ac,
    _0xbe779c,
    _0x2111f5,
    _0x1914c7 = [];
  for (_0x1914c7 = function (_0x5d2423) {
    for (var _0x231c81, _0x12aefe = _0x5d2423.length, _0x3ddd85 = _0x12aefe + 8, _0x49f6ca = 16 * ((_0x3ddd85 - _0x3ddd85 % 64) / 64 + 1), _0x3f0726 = Array(_0x49f6ca - 1), _0x545d6d = 0, _0x34d446 = 0; _0x12aefe > _0x34d446;) {
      _0x231c81 = (_0x34d446 - _0x34d446 % 4) / 4;
      _0x545d6d = _0x34d446 % 4 * 8;
      _0x3f0726[_0x231c81] = _0x3f0726[_0x231c81] | _0x5d2423.charCodeAt(_0x34d446) << _0x545d6d;
      _0x34d446++;
    }
    _0x231c81 = (_0x34d446 - _0x34d446 % 4) / 4;
    _0x545d6d = _0x34d446 % 4 * 8;
    _0x3f0726[_0x231c81] = _0x3f0726[_0x231c81] | 128 << _0x545d6d;
    _0x3f0726[_0x49f6ca - 2] = _0x12aefe << 3;
    _0x3f0726[_0x49f6ca - 1] = _0x12aefe >>> 29;
    return _0x3f0726;
  }(_0x5748ee = function (_0x471710) {
    _0x471710 = _0x471710.replace(/\r\n/g, "\n");
    for (var _0x389820 = "", _0x41ee1f = 0; _0x41ee1f < _0x471710.length; _0x41ee1f++) {
      var _0x236d68 = _0x471710.charCodeAt(_0x41ee1f);
      128 > _0x236d68 ? _0x389820 += String.fromCharCode(_0x236d68) : _0x236d68 > 127 && 2048 > _0x236d68 ? (_0x389820 += String.fromCharCode(_0x236d68 >> 6 | 192), _0x389820 += String.fromCharCode(63 & _0x236d68 | 128)) : (_0x389820 += String.fromCharCode(_0x236d68 >> 12 | 224), _0x389820 += String.fromCharCode(_0x236d68 >> 6 & 63 | 128), _0x389820 += String.fromCharCode(63 & _0x236d68 | 128));
    }
    return _0x389820;
  }(_0x5748ee)), _0x1ba915 = 1732584193, _0x5912ac = 4023233417, _0xbe779c = 2562383102, _0x2111f5 = 271733878, _0x595ce9 = 0; _0x595ce9 < _0x1914c7.length; _0x595ce9 += 16) {
    _0x2792a7 = _0x1ba915;
    _0x3cbd63 = _0x5912ac;
    _0xd4a341 = _0xbe779c;
    _0x22623e = _0x2111f5;
    _0x1ba915 = _0x1f20fc(_0x1ba915, _0x5912ac, _0xbe779c, _0x2111f5, _0x1914c7[_0x595ce9 + 0], 7, 3614090360);
    _0x2111f5 = _0x1f20fc(_0x2111f5, _0x1ba915, _0x5912ac, _0xbe779c, _0x1914c7[_0x595ce9 + 1], 12, 3905402710);
    _0xbe779c = _0x1f20fc(_0xbe779c, _0x2111f5, _0x1ba915, _0x5912ac, _0x1914c7[_0x595ce9 + 2], 17, 606105819);
    _0x5912ac = _0x1f20fc(_0x5912ac, _0xbe779c, _0x2111f5, _0x1ba915, _0x1914c7[_0x595ce9 + 3], 22, 3250441966);
    _0x1ba915 = _0x1f20fc(_0x1ba915, _0x5912ac, _0xbe779c, _0x2111f5, _0x1914c7[_0x595ce9 + 4], 7, 4118548399);
    _0x2111f5 = _0x1f20fc(_0x2111f5, _0x1ba915, _0x5912ac, _0xbe779c, _0x1914c7[_0x595ce9 + 5], 12, 1200080426);
    _0xbe779c = _0x1f20fc(_0xbe779c, _0x2111f5, _0x1ba915, _0x5912ac, _0x1914c7[_0x595ce9 + 6], 17, 2821735955);
    _0x5912ac = _0x1f20fc(_0x5912ac, _0xbe779c, _0x2111f5, _0x1ba915, _0x1914c7[_0x595ce9 + 7], 22, 4249261313);
    _0x1ba915 = _0x1f20fc(_0x1ba915, _0x5912ac, _0xbe779c, _0x2111f5, _0x1914c7[_0x595ce9 + 8], 7, 1770035416);
    _0x2111f5 = _0x1f20fc(_0x2111f5, _0x1ba915, _0x5912ac, _0xbe779c, _0x1914c7[_0x595ce9 + 9], 12, 2336552879);
    _0xbe779c = _0x1f20fc(_0xbe779c, _0x2111f5, _0x1ba915, _0x5912ac, _0x1914c7[_0x595ce9 + 10], 17, 4294925233);
    _0x5912ac = _0x1f20fc(_0x5912ac, _0xbe779c, _0x2111f5, _0x1ba915, _0x1914c7[_0x595ce9 + 11], 22, 2304563134);
    _0x1ba915 = _0x1f20fc(_0x1ba915, _0x5912ac, _0xbe779c, _0x2111f5, _0x1914c7[_0x595ce9 + 12], 7, 1804603682);
    _0x2111f5 = _0x1f20fc(_0x2111f5, _0x1ba915, _0x5912ac, _0xbe779c, _0x1914c7[_0x595ce9 + 13], 12, 4254626195);
    _0xbe779c = _0x1f20fc(_0xbe779c, _0x2111f5, _0x1ba915, _0x5912ac, _0x1914c7[_0x595ce9 + 14], 17, 2792965006);
    _0x5912ac = _0x1f20fc(_0x5912ac, _0xbe779c, _0x2111f5, _0x1ba915, _0x1914c7[_0x595ce9 + 15], 22, 1236535329);
    _0x1ba915 = _0x2fc201(_0x1ba915, _0x5912ac, _0xbe779c, _0x2111f5, _0x1914c7[_0x595ce9 + 1], 5, 4129170786);
    _0x2111f5 = _0x2fc201(_0x2111f5, _0x1ba915, _0x5912ac, _0xbe779c, _0x1914c7[_0x595ce9 + 6], 9, 3225465664);
    _0xbe779c = _0x2fc201(_0xbe779c, _0x2111f5, _0x1ba915, _0x5912ac, _0x1914c7[_0x595ce9 + 11], 14, 643717713);
    _0x5912ac = _0x2fc201(_0x5912ac, _0xbe779c, _0x2111f5, _0x1ba915, _0x1914c7[_0x595ce9 + 0], 20, 3921069994);
    _0x1ba915 = _0x2fc201(_0x1ba915, _0x5912ac, _0xbe779c, _0x2111f5, _0x1914c7[_0x595ce9 + 5], 5, 3593408605);
    _0x2111f5 = _0x2fc201(_0x2111f5, _0x1ba915, _0x5912ac, _0xbe779c, _0x1914c7[_0x595ce9 + 10], 9, 38016083);
    _0xbe779c = _0x2fc201(_0xbe779c, _0x2111f5, _0x1ba915, _0x5912ac, _0x1914c7[_0x595ce9 + 15], 14, 3634488961);
    _0x5912ac = _0x2fc201(_0x5912ac, _0xbe779c, _0x2111f5, _0x1ba915, _0x1914c7[_0x595ce9 + 4], 20, 3889429448);
    _0x1ba915 = _0x2fc201(_0x1ba915, _0x5912ac, _0xbe779c, _0x2111f5, _0x1914c7[_0x595ce9 + 9], 5, 568446438);
    _0x2111f5 = _0x2fc201(_0x2111f5, _0x1ba915, _0x5912ac, _0xbe779c, _0x1914c7[_0x595ce9 + 14], 9, 3275163606);
    _0xbe779c = _0x2fc201(_0xbe779c, _0x2111f5, _0x1ba915, _0x5912ac, _0x1914c7[_0x595ce9 + 3], 14, 4107603335);
    _0x5912ac = _0x2fc201(_0x5912ac, _0xbe779c, _0x2111f5, _0x1ba915, _0x1914c7[_0x595ce9 + 8], 20, 1163531501);
    _0x1ba915 = _0x2fc201(_0x1ba915, _0x5912ac, _0xbe779c, _0x2111f5, _0x1914c7[_0x595ce9 + 13], 5, 2850285829);
    _0x2111f5 = _0x2fc201(_0x2111f5, _0x1ba915, _0x5912ac, _0xbe779c, _0x1914c7[_0x595ce9 + 2], 9, 4243563512);
    _0xbe779c = _0x2fc201(_0xbe779c, _0x2111f5, _0x1ba915, _0x5912ac, _0x1914c7[_0x595ce9 + 7], 14, 1735328473);
    _0x5912ac = _0x2fc201(_0x5912ac, _0xbe779c, _0x2111f5, _0x1ba915, _0x1914c7[_0x595ce9 + 12], 20, 2368359562);
    _0x1ba915 = _0x11095a(_0x1ba915, _0x5912ac, _0xbe779c, _0x2111f5, _0x1914c7[_0x595ce9 + 5], 4, 4294588738);
    _0x2111f5 = _0x11095a(_0x2111f5, _0x1ba915, _0x5912ac, _0xbe779c, _0x1914c7[_0x595ce9 + 8], 11, 2272392833);
    _0xbe779c = _0x11095a(_0xbe779c, _0x2111f5, _0x1ba915, _0x5912ac, _0x1914c7[_0x595ce9 + 11], 16, 1839030562);
    _0x5912ac = _0x11095a(_0x5912ac, _0xbe779c, _0x2111f5, _0x1ba915, _0x1914c7[_0x595ce9 + 14], 23, 4259657740);
    _0x1ba915 = _0x11095a(_0x1ba915, _0x5912ac, _0xbe779c, _0x2111f5, _0x1914c7[_0x595ce9 + 1], 4, 2763975236);
    _0x2111f5 = _0x11095a(_0x2111f5, _0x1ba915, _0x5912ac, _0xbe779c, _0x1914c7[_0x595ce9 + 4], 11, 1272893353);
    _0xbe779c = _0x11095a(_0xbe779c, _0x2111f5, _0x1ba915, _0x5912ac, _0x1914c7[_0x595ce9 + 7], 16, 4139469664);
    _0x5912ac = _0x11095a(_0x5912ac, _0xbe779c, _0x2111f5, _0x1ba915, _0x1914c7[_0x595ce9 + 10], 23, 3200236656);
    _0x1ba915 = _0x11095a(_0x1ba915, _0x5912ac, _0xbe779c, _0x2111f5, _0x1914c7[_0x595ce9 + 13], 4, 681279174);
    _0x2111f5 = _0x11095a(_0x2111f5, _0x1ba915, _0x5912ac, _0xbe779c, _0x1914c7[_0x595ce9 + 0], 11, 3936430074);
    _0xbe779c = _0x11095a(_0xbe779c, _0x2111f5, _0x1ba915, _0x5912ac, _0x1914c7[_0x595ce9 + 3], 16, 3572445317);
    _0x5912ac = _0x11095a(_0x5912ac, _0xbe779c, _0x2111f5, _0x1ba915, _0x1914c7[_0x595ce9 + 6], 23, 76029189);
    _0x1ba915 = _0x11095a(_0x1ba915, _0x5912ac, _0xbe779c, _0x2111f5, _0x1914c7[_0x595ce9 + 9], 4, 3654602809);
    _0x2111f5 = _0x11095a(_0x2111f5, _0x1ba915, _0x5912ac, _0xbe779c, _0x1914c7[_0x595ce9 + 12], 11, 3873151461);
    _0xbe779c = _0x11095a(_0xbe779c, _0x2111f5, _0x1ba915, _0x5912ac, _0x1914c7[_0x595ce9 + 15], 16, 530742520);
    _0x5912ac = _0x11095a(_0x5912ac, _0xbe779c, _0x2111f5, _0x1ba915, _0x1914c7[_0x595ce9 + 2], 23, 3299628645);
    _0x1ba915 = _0x5e89aa(_0x1ba915, _0x5912ac, _0xbe779c, _0x2111f5, _0x1914c7[_0x595ce9 + 0], 6, 4096336452);
    _0x2111f5 = _0x5e89aa(_0x2111f5, _0x1ba915, _0x5912ac, _0xbe779c, _0x1914c7[_0x595ce9 + 7], 10, 1126891415);
    _0xbe779c = _0x5e89aa(_0xbe779c, _0x2111f5, _0x1ba915, _0x5912ac, _0x1914c7[_0x595ce9 + 14], 15, 2878612391);
    _0x5912ac = _0x5e89aa(_0x5912ac, _0xbe779c, _0x2111f5, _0x1ba915, _0x1914c7[_0x595ce9 + 5], 21, 4237533241);
    _0x1ba915 = _0x5e89aa(_0x1ba915, _0x5912ac, _0xbe779c, _0x2111f5, _0x1914c7[_0x595ce9 + 12], 6, 1700485571);
    _0x2111f5 = _0x5e89aa(_0x2111f5, _0x1ba915, _0x5912ac, _0xbe779c, _0x1914c7[_0x595ce9 + 3], 10, 2399980690);
    _0xbe779c = _0x5e89aa(_0xbe779c, _0x2111f5, _0x1ba915, _0x5912ac, _0x1914c7[_0x595ce9 + 10], 15, 4293915773);
    _0x5912ac = _0x5e89aa(_0x5912ac, _0xbe779c, _0x2111f5, _0x1ba915, _0x1914c7[_0x595ce9 + 1], 21, 2240044497);
    _0x1ba915 = _0x5e89aa(_0x1ba915, _0x5912ac, _0xbe779c, _0x2111f5, _0x1914c7[_0x595ce9 + 8], 6, 1873313359);
    _0x2111f5 = _0x5e89aa(_0x2111f5, _0x1ba915, _0x5912ac, _0xbe779c, _0x1914c7[_0x595ce9 + 15], 10, 4264355552);
    _0xbe779c = _0x5e89aa(_0xbe779c, _0x2111f5, _0x1ba915, _0x5912ac, _0x1914c7[_0x595ce9 + 6], 15, 2734768916);
    _0x5912ac = _0x5e89aa(_0x5912ac, _0xbe779c, _0x2111f5, _0x1ba915, _0x1914c7[_0x595ce9 + 13], 21, 1309151649);
    _0x1ba915 = _0x5e89aa(_0x1ba915, _0x5912ac, _0xbe779c, _0x2111f5, _0x1914c7[_0x595ce9 + 4], 6, 4149444226);
    _0x2111f5 = _0x5e89aa(_0x2111f5, _0x1ba915, _0x5912ac, _0xbe779c, _0x1914c7[_0x595ce9 + 11], 10, 3174756917);
    _0xbe779c = _0x5e89aa(_0xbe779c, _0x2111f5, _0x1ba915, _0x5912ac, _0x1914c7[_0x595ce9 + 2], 15, 718787259);
    _0x5912ac = _0x5e89aa(_0x5912ac, _0xbe779c, _0x2111f5, _0x1ba915, _0x1914c7[_0x595ce9 + 9], 21, 3951481745);
    _0x1ba915 = _0x52e46c(_0x1ba915, _0x2792a7);
    _0x5912ac = _0x52e46c(_0x5912ac, _0x3cbd63);
    _0xbe779c = _0x52e46c(_0xbe779c, _0xd4a341);
    _0x2111f5 = _0x52e46c(_0x2111f5, _0x22623e);
  }
  return (_0x5f48bb(_0x1ba915) + _0x5f48bb(_0x5912ac) + _0x5f48bb(_0xbe779c) + _0x5f48bb(_0x2111f5)).toLowerCase();
}