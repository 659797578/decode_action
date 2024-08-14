//Wed Aug 14 2024 03:17:49 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
NAME = "无限玉环";
VALY = ["wxyhck"];
LOGS = 0;
CK = "";
var userList = [];
class Bar {
  constructor(_0x1cea2c) {
    this.uid = _0x1cea2c.split("#")[0];
    this.token = _0x1cea2c.split("#")[1];
    this.logs = true;
  }
  async getusername() {
    let _0x51bdf3 = MD5Encrypt("api_version3.6.1app_id1app_version3.1.61clientandroidcms_app_id1033platformappfactory_mobilesystem_name2tenantidyhdsttoken" + this.token + "user_id" + this.uid + "test1"),
      _0x241017 = MD5Encrypt("api_version3.6.1app_id1app_version3.1.61clientandroidcms_app_id1033tenantidyhdsttest1"),
      _0x24c9ee = "token=" + this.token + "&user_id=" + this.uid + "&platform=appfactory_mobile&system_name=2&tenantid=yhdst&api_version=3.6.1&app_version=3.1.61&client=android&cms_app_id=1033&app_id=1&sign=" + _0x51bdf3,
      _0x19f8e6 = await task("post", "http://appapi.chinamcloud.com/api/renovation-login?tenantid=yhdst&api_version=3.6.1&app_version=3.1.61&client=android&cms_app_id=1033&app_id=1&sign=" + _0x241017, {}, _0x24c9ee);
    _0x19f8e6.message == "this is a success message!" ? (this.username = _0x19f8e6.data.meta.username, this.name = _0x19f8e6.data.meta.nickname, console.log("【" + this.name + "】==>现有积分" + _0x19f8e6.data.meta.redites), this.logs = true) : this.logs = false;
  }
  async tasklist() {
    let _0x362a24 = MD5Encrypt("api_version3.6.1app_id1app_version3.1.61clientandroidcms_app_id1033integral_type1tenantidyhdsttoken" + this.token + "user_id" + this.uid + "username" + this.username + "test1"),
      _0x46228a = await task("get", "http://appapi.chinamcloud.com/api/integral/task?app_version=3.1.61&user_id=" + this.uid + "&integral_type=1&tenantid=yhdst&sign=" + _0x362a24 + "&client=android&cms_app_id=1033&api_version=3.6.1&app_id=1&token=" + this.token + "&username=" + this.username, {});
    if (_0x46228a.state == true) {
      for (let _0x34a890 of _0x46228a.data) {
        if (_0x34a890.name == "每日签到" && _0x34a890.status == 0) {
          await this.signin();
        } else {
          if (_0x34a890.name == "阅读新闻" && _0x34a890.todayIntegral < 10) {
            await this.read();
          } else {
            if (_0x34a890.name == "新闻点赞" && _0x34a890.todayIntegral < 5) {
              await this.like();
            } else {
              if (_0x34a890.name == "社交分享" && _0x34a890.todayIntegral < 5) {
                await this.share();
              } else {
                _0x34a890.name == "评论新闻" && _0x34a890.todayIntegral < 5 && (await this.comment());
              }
            }
          }
        }
      }
    } else {
      console.log("【" + this.name + "】任务列表获取失败，请重试");
    }
  }
  async signin() {
    let _0x31cc18 = MD5Encrypt("action1api_version3.6.1app_id1app_version3.1.61clientandroidcms_app_id1033integral_type1tenantidyhdsttoken" + this.token + "user_id" + this.uid + "test1"),
      _0x16b652 = "app_version=3.1.61&user_id=" + this.uid + "&integral_type=1&tenantid=yhdst&sign=" + _0x31cc18 + "&action=1&client=android&cms_app_id=1033&api_version=3.6.1&app_id=1&token=" + this.token,
      _0x10640d = await task("post", "http://appapi.chinamcloud.com/api/integral/sign", {}, _0x16b652);
    console.log("【" + this.name + "】 " + _0x10640d.data.description);
  }
  async readlist() {
    let _0x438190 = RT(1, 1200),
      _0x5e4921 = MD5Encrypt("api_version3.6.1app_id1app_version3.1.61clientandroidcms_app_id1033page" + _0x438190 + "perPage10tenantidyhdsttest1"),
      _0xee37b = await task("get", "http://appapi.chinamcloud.com/api/content/list/350?perPage=10&app_version=3.1.61&tenantid=yhdst&sign=" + _0x5e4921 + "&client=android&cms_app_id=1033&page=" + _0x438190 + "&api_version=3.6.1&app_id=1", {});
    this.a = _0xee37b.data.meta;
  }
  async read() {
    for (let _0x3ee1f2 of this.a) {
      let _0x23619d = _0x3ee1f2.id,
        _0x247cae = MD5Encrypt("action2api_version3.6.1app_id1app_version3.1.61clientandroidcms_app_id1033isStudyContent0source_id" + _0x23619d + "tenantidyhdsttoken" + this.token + "user_id" + this.uid + "test1"),
        _0x2c91ae = "app_version=3.1.61&sign=" + _0x247cae + "&cms_app_id=1033&api_version=3.6.1&isStudyContent=0&token=" + this.token + "&user_id=" + this.uid + "&tenantid=yhdst&action=2&client=android&source_id=" + _0x23619d + "&app_id=1",
        _0x10ae71 = await task("post", "http://appapi.chinamcloud.com/api/integral/add-integral", {}, _0x2c91ae);
      if (_0x10ae71.state = false) {
        console.log("【" + this.name + "】 " + _0x10ae71.error.description);
        break;
      } else {
        console.log("【" + this.name + "】 阅读成功");
        await wait(RT(10000, 15000));
      }
    }
  }
  async like() {
    for (let _0x5ccaf5 of this.a) {
      let _0x2fc6d7 = _0x5ccaf5.id,
        _0x2d1d0e = MD5Encrypt("action16api_version3.6.1app_id1app_version3.1.61clientandroidcms_app_id1033isStudyContent0source_id" + _0x2fc6d7 + "tenantidyhdsttoken" + this.token + "user_id" + this.uid + "test1"),
        _0x42469d = "app_version=3.1.61&sign=" + _0x2d1d0e + "&cms_app_id=1033&api_version=3.6.1&isStudyContent=0&token=" + this.token + "&user_id=" + this.uid + "&tenantid=yhdst&action=16&client=android&source_id=" + _0x2fc6d7 + "&app_id=1",
        _0x37d919 = await task("post", "http://appapi.chinamcloud.com/api/integral/add-integral", {}, _0x42469d);
      if (_0x37d919.state = false) {
        console.log("【" + this.name + "】 " + _0x37d919.error.description);
        break;
      } else {
        console.log("【" + this.name + "】 点赞成功");
        await wait(RT(10000, 15000));
      }
    }
  }
  async share() {
    for (let _0x5640d1 of this.a) {
      let _0x1a5549 = _0x5640d1.id,
        _0x1cbbe0 = MD5Encrypt("action4api_version3.6.1app_id1app_version3.1.61clientandroidcms_app_id1033isStudyContent0source_id" + _0x1a5549 + "tenantidyhdsttoken" + this.token + "user_id" + this.uid + "test1"),
        _0x36dbd6 = "app_version=3.1.61&sign=" + _0x1cbbe0 + "&cms_app_id=1033&api_version=3.6.1&isStudyContent=0&token=" + this.token + "&user_id=" + this.uid + "&tenantid=yhdst&action=4&client=android&source_id=" + _0x1a5549 + "&app_id=1",
        _0x3ab0b2 = await task("post", "http://appapi.chinamcloud.com/api/integral/add-integral", {}, _0x36dbd6);
      if (_0x3ab0b2.state = false) {
        console.log("【" + this.name + "】 " + _0x3ab0b2.error.description);
        break;
      } else {
        console.log("【" + this.name + "】 分享成功");
        await wait(RT(10000, 15000));
      }
    }
  }
  async comment() {
    for (let _0x3ba51a of this.a) {
      let _0x408a19 = _0x3ba51a.id,
        _0x5d6540 = MD5Encrypt("action3api_version3.6.1app_id1app_version3.1.61clientandroidcms_app_id1033isStudyContent0source_id" + _0x408a19 + "tenantidyhdsttoken" + this.token + "user_id" + this.uid + "test1"),
        _0x29ea88 = "app_version=3.1.61&sign=" + _0x5d6540 + "&cms_app_id=1033&api_version=3.6.1&isStudyContent=0&token=" + this.token + "&user_id=" + this.uid + "&tenantid=yhdst&action=3&client=android&source_id=" + _0x408a19 + "&app_id=1",
        _0x1d5dfd = await task("post", "http://appapi.chinamcloud.com/api/integral/add-integral", {}, _0x29ea88);
      if (_0x1d5dfd.state = false) {
        console.log("【" + this.name + "】 " + _0x1d5dfd.error.description);
        break;
      } else {
        console.log("【" + this.name + "】 评论成功");
        await wait(RT(10000, 15000));
      }
    }
  }
}
!(async () => {
  console.log("蛋炒饭美食交流频道：https://t.me/+0GGCpN9dFmBjY2E1");
  console.log(NAME);
  checkEnv();
  for (let _0x416c9d of userList) {
    await _0x416c9d.getusername();
  }
  let _0xfd004f = userList.filter(_0x20f425 => _0x20f425.logs == true);
  if (_0xfd004f.length == 0) {
    console.log(NAME + " 呆子，检查CK是否正确");
    return;
  }
  for (let _0x163617 of _0xfd004f) {
    await _0x163617.readlist();
    await _0x163617.tasklist();
  }
})().catch(_0x370c9b => {
  console.log(_0x370c9b);
}).finally(() => {});
function RT(_0x46b2e0, _0xe43c84) {
  return Math.round(Math.random() * (_0xe43c84 - _0x46b2e0) + _0x46b2e0);
}
function times(_0x1fa1c2) {
  if (_0x1fa1c2 == 10) {
    let _0x55487c = Math.round(new Date().getTime() / 1000).toString();
    return _0x55487c;
  } else {
    let _0x3814c9 = new Date().getTime();
    return _0x3814c9;
  }
}
async function task(_0x436ef2, _0x241c20, _0x381320, _0x43d768) {
  _0x436ef2 == "delete" ? _0x436ef2 = _0x436ef2.toUpperCase() : _0x436ef2 = _0x436ef2;
  const _0xb65d15 = require("request");
  _0x436ef2 == "post" && (delete _0x381320["content-type"], delete _0x381320["Content-type"], delete _0x381320["content-Type"], safeGet(_0x43d768) ? _0x381320["Content-Type"] = "application/json;charset=UTF-8" : _0x381320["Content-Type"] = "application/x-www-form-urlencoded", _0x43d768 && (_0x381320["Content-Length"] = lengthInUtf8Bytes(_0x43d768)));
  _0x381320.Host = _0x241c20.replace("//", "/").split("/")[1];
  if (_0x436ef2.indexOf("T") < 0) {
    var _0x5d95ff = {
      url: _0x241c20,
      headers: _0x381320,
      body: _0x43d768
    };
  } else {
    var _0x5d95ff = {
      url: _0x241c20,
      headers: _0x381320,
      form: JSON.parse(_0x43d768)
    };
  }
  return new Promise(async _0x582b42 => {
    _0xb65d15[_0x436ef2.toLowerCase()](_0x5d95ff, (_0x525e21, _0x32e9b2, _0x4586a8) => {
      try {
        LOGS == 1 && (console.log("==================请求=================="), console.log(_0x5d95ff), console.log("==================返回=================="), console.log(JSON.parse(_0x4586a8)));
      } catch (_0x4c5d05) {} finally {
        !_0x525e21 ? safeGet(_0x4586a8) ? _0x4586a8 = JSON.parse(_0x4586a8) : _0x4586a8 = _0x4586a8 : _0x4586a8 = _0x241c20 + "   API请求失败，请检查网络重试\n" + _0x525e21;
        return _0x582b42(_0x4586a8);
      }
    });
  });
}
function SJS(_0x359995) {
  _0x359995 = _0x359995 || 32;
  var _0x556982 = "1234567890",
    _0x2e43ca = _0x556982.length,
    _0x623f3f = "";
  for (i = 0; i < _0x359995; i++) {
    _0x623f3f += _0x556982.charAt(Math.floor(Math.random() * _0x2e43ca));
  }
  return _0x623f3f;
}
function SJSxx(_0x4c0628) {
  _0x4c0628 = _0x4c0628 || 32;
  var _0x3d634e = "abcdefghijklmnopqrstuvwxyz1234567890",
    _0x2d73d0 = _0x3d634e.length,
    _0x2b0ec6 = "";
  for (i = 0; i < _0x4c0628; i++) {
    _0x2b0ec6 += _0x3d634e.charAt(Math.floor(Math.random() * _0x2d73d0));
  }
  return _0x2b0ec6;
}
function safeGet(_0x40106c) {
  try {
    if (typeof JSON.parse(_0x40106c) == "object") {
      return true;
    }
  } catch (_0x7e9d4e) {
    return false;
  }
}
function lengthInUtf8Bytes(_0x9c67cf) {
  let _0x1f9d23 = encodeURIComponent(_0x9c67cf).match(/%[89ABab]/g);
  return _0x9c67cf.length + (_0x1f9d23 ? _0x1f9d23.length : 0);
}
async function checkEnv() {
  let _0xbbbd7d = process.env[VALY] || CK,
    _0xd91f08 = 0;
  if (_0xbbbd7d) {
    for (let _0x4f3d53 of _0xbbbd7d.split("@").filter(_0x1b1721 => !!_0x1b1721)) {
      userList.push(new Bar(_0x4f3d53));
    }
    _0xd91f08 = userList.length;
  } else {
    console.log("\n【" + NAME + "】：未填写变量: " + VALY);
  }
  console.log("共找到" + _0xd91f08 + "个账号");
  return userList;
}
function wait(_0x3f0c51) {
  return new Promise(_0x184f11 => setTimeout(_0x184f11, _0x3f0c51));
}
function stringToBase64(_0x27ae1a) {
  var _0x2bc31f = Buffer.from(_0x27ae1a).toString("base64");
  return _0x2bc31f;
}
function EncryptCrypto(_0x4f2da9, _0x511d30, _0x377576, _0x53f1ee, _0x385398, _0x365d8e) {
  const _0x148967 = require("crypto-js"),
    _0x3aeff6 = _0x148967.enc.Utf8.parse(_0x53f1ee),
    _0x8cf34b = _0x148967.enc.Utf8.parse(_0x365d8e),
    _0x25f954 = _0x148967.enc.Utf8.parse(_0x385398),
    _0xb5d577 = _0x148967[_0x4f2da9].encrypt(_0x3aeff6, _0x25f954, {
      iv: _0x8cf34b,
      mode: _0x148967.mode[_0x511d30],
      padding: _0x148967.pad[_0x377576]
    });
  return _0xb5d577.toString();
}
function DecryptCrypto(_0x1c7a7b, _0x182707, _0x2e5785, _0x591a02, _0x351fa0, _0x4791f3) {
  const _0x3b2fca = require("crypto-js"),
    _0x245b34 = _0x3b2fca.enc.Utf8.parse(_0x4791f3),
    _0x28748a = _0x3b2fca.enc.Utf8.parse(_0x351fa0),
    _0x5b8bfd = _0x3b2fca[_0x1c7a7b].decrypt(_0x591a02, _0x28748a, {
      iv: _0x245b34,
      mode: _0x3b2fca.mode[_0x182707],
      padding: _0x3b2fca.pad[_0x2e5785]
    });
  return _0x5b8bfd.toString(_0x3b2fca.enc.Utf8);
}
function RSA(_0x8c5270, _0x114c0a) {
  const _0x4a7c6d = require("node-rsa");
  let _0x428ffd = new _0x4a7c6d("-----BEGIN PUBLIC KEY-----\n" + _0x114c0a + "\n-----END PUBLIC KEY-----");
  _0x428ffd.setOptions({
    encryptionScheme: "pkcs1"
  });
  return _0x428ffd.encrypt(_0x8c5270, "base64", "utf8");
}
function SHA1_Encrypt(_0xca4ae) {
  return CryptoJS.SHA1(_0xca4ae).toString();
}
function SHA256(_0x592c99) {
  const _0x52038c = 8,
    _0x3f97a9 = 0;
  function _0x2a1bf1(_0x2d96b1, _0x3586ba) {
    const _0x56e69a = (65535 & _0x2d96b1) + (65535 & _0x3586ba);
    return (_0x2d96b1 >> 16) + (_0x3586ba >> 16) + (_0x56e69a >> 16) << 16 | 65535 & _0x56e69a;
  }
  function _0x3031fd(_0x25cc1d, _0x220604) {
    return _0x25cc1d >>> _0x220604 | _0x25cc1d << 32 - _0x220604;
  }
  function _0x47226c(_0x512fad, _0x385c2d) {
    return _0x512fad >>> _0x385c2d;
  }
  function _0x3372ed(_0x48689c, _0x29d2ea, _0xd912ec) {
    return _0x48689c & _0x29d2ea ^ ~_0x48689c & _0xd912ec;
  }
  function _0x10f9a9(_0x32f6cc, _0x5b3802, _0x45f769) {
    return _0x32f6cc & _0x5b3802 ^ _0x32f6cc & _0x45f769 ^ _0x5b3802 & _0x45f769;
  }
  function _0x15b462(_0x2a4783) {
    return _0x3031fd(_0x2a4783, 2) ^ _0x3031fd(_0x2a4783, 13) ^ _0x3031fd(_0x2a4783, 22);
  }
  function _0x134052(_0x325b6e) {
    return _0x3031fd(_0x325b6e, 6) ^ _0x3031fd(_0x325b6e, 11) ^ _0x3031fd(_0x325b6e, 25);
  }
  function _0x5312eb(_0xc64e6) {
    return _0x3031fd(_0xc64e6, 7) ^ _0x3031fd(_0xc64e6, 18) ^ _0x47226c(_0xc64e6, 3);
  }
  return function (_0x4e011f) {
    const _0x38a00f = _0x3f97a9 ? "0123456789ABCDEF" : "0123456789abcdef";
    let _0x31213d = "";
    for (let _0x49a7fd = 0; _0x49a7fd < 4 * _0x4e011f.length; _0x49a7fd++) {
      _0x31213d += _0x38a00f.charAt(_0x4e011f[_0x49a7fd >> 2] >> 8 * (3 - _0x49a7fd % 4) + 4 & 15) + _0x38a00f.charAt(_0x4e011f[_0x49a7fd >> 2] >> 8 * (3 - _0x49a7fd % 4) & 15);
    }
    return _0x31213d;
  }(function (_0x28ca84, _0x48e93c) {
    const _0x5614fd = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
      _0xe17163 = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
      _0x481a6c = new Array(64);
    let _0x2e00df, _0x56b23e, _0x5be904, _0x13f831, _0x5f54bd, _0x6c7d94, _0x1e2917, _0x275355, _0x3dd9c0, _0x3d3462, _0x125eb0, _0x55bf34;
    for (_0x28ca84[_0x48e93c >> 5] |= 128 << 24 - _0x48e93c % 32, _0x28ca84[15 + (_0x48e93c + 64 >> 9 << 4)] = _0x48e93c, _0x3dd9c0 = 0; _0x3dd9c0 < _0x28ca84.length; _0x3dd9c0 += 16) {
      for (_0x2e00df = _0xe17163[0], _0x56b23e = _0xe17163[1], _0x5be904 = _0xe17163[2], _0x13f831 = _0xe17163[3], _0x5f54bd = _0xe17163[4], _0x6c7d94 = _0xe17163[5], _0x1e2917 = _0xe17163[6], _0x275355 = _0xe17163[7], _0x3d3462 = 0; _0x3d3462 < 64; _0x3d3462++) {
        _0x481a6c[_0x3d3462] = _0x3d3462 < 16 ? _0x28ca84[_0x3d3462 + _0x3dd9c0] : _0x2a1bf1(_0x2a1bf1(_0x2a1bf1(_0x3031fd(_0x3d024f = _0x481a6c[_0x3d3462 - 2], 17) ^ _0x3031fd(_0x3d024f, 19) ^ _0x47226c(_0x3d024f, 10), _0x481a6c[_0x3d3462 - 7]), _0x5312eb(_0x481a6c[_0x3d3462 - 15])), _0x481a6c[_0x3d3462 - 16]);
        _0x125eb0 = _0x2a1bf1(_0x2a1bf1(_0x2a1bf1(_0x2a1bf1(_0x275355, _0x134052(_0x5f54bd)), _0x3372ed(_0x5f54bd, _0x6c7d94, _0x1e2917)), _0x5614fd[_0x3d3462]), _0x481a6c[_0x3d3462]);
        _0x55bf34 = _0x2a1bf1(_0x15b462(_0x2e00df), _0x10f9a9(_0x2e00df, _0x56b23e, _0x5be904));
        _0x275355 = _0x1e2917;
        _0x1e2917 = _0x6c7d94;
        _0x6c7d94 = _0x5f54bd;
        _0x5f54bd = _0x2a1bf1(_0x13f831, _0x125eb0);
        _0x13f831 = _0x5be904;
        _0x5be904 = _0x56b23e;
        _0x56b23e = _0x2e00df;
        _0x2e00df = _0x2a1bf1(_0x125eb0, _0x55bf34);
      }
      _0xe17163[0] = _0x2a1bf1(_0x2e00df, _0xe17163[0]);
      _0xe17163[1] = _0x2a1bf1(_0x56b23e, _0xe17163[1]);
      _0xe17163[2] = _0x2a1bf1(_0x5be904, _0xe17163[2]);
      _0xe17163[3] = _0x2a1bf1(_0x13f831, _0xe17163[3]);
      _0xe17163[4] = _0x2a1bf1(_0x5f54bd, _0xe17163[4]);
      _0xe17163[5] = _0x2a1bf1(_0x6c7d94, _0xe17163[5]);
      _0xe17163[6] = _0x2a1bf1(_0x1e2917, _0xe17163[6]);
      _0xe17163[7] = _0x2a1bf1(_0x275355, _0xe17163[7]);
    }
    var _0x3d024f;
    return _0xe17163;
  }(function (_0x4a0342) {
    const _0x1777d2 = [],
      _0x1dcd0a = (1 << _0x52038c) - 1;
    for (let _0x442068 = 0; _0x442068 < _0x4a0342.length * _0x52038c; _0x442068 += _0x52038c) {
      _0x1777d2[_0x442068 >> 5] |= (_0x4a0342.charCodeAt(_0x442068 / _0x52038c) & _0x1dcd0a) << 24 - _0x442068 % 32;
    }
    return _0x1777d2;
  }(_0x592c99 = function (_0x59b986) {
    _0x59b986 = _0x59b986.replace(/\r\n/g, "\n");
    let _0xc3fb5d = "";
    for (let _0x983be6 = 0; _0x983be6 < _0x59b986.length; _0x983be6++) {
      const _0x2aada9 = _0x59b986.charCodeAt(_0x983be6);
      _0x2aada9 < 128 ? _0xc3fb5d += String.fromCharCode(_0x2aada9) : _0x2aada9 > 127 && _0x2aada9 < 2048 ? (_0xc3fb5d += String.fromCharCode(_0x2aada9 >> 6 | 192), _0xc3fb5d += String.fromCharCode(63 & _0x2aada9 | 128)) : (_0xc3fb5d += String.fromCharCode(_0x2aada9 >> 12 | 224), _0xc3fb5d += String.fromCharCode(_0x2aada9 >> 6 & 63 | 128), _0xc3fb5d += String.fromCharCode(63 & _0x2aada9 | 128));
    }
    return _0xc3fb5d;
  }(_0x592c99)), _0x592c99.length * _0x52038c));
}
function MD5Encrypt(_0x11bc7e) {
  function _0x22c50b(_0x3c6b56, _0x895f9b) {
    return _0x3c6b56 << _0x895f9b | _0x3c6b56 >>> 32 - _0x895f9b;
  }
  function _0x441dd2(_0x4dd8f2, _0x173903) {
    var _0x3833e6, _0x33a3af, _0x1aa90f, _0x46d70b, _0x4edaa2;
    _0x1aa90f = 2147483648 & _0x4dd8f2;
    _0x46d70b = 2147483648 & _0x173903;
    _0x3833e6 = 1073741824 & _0x4dd8f2;
    _0x33a3af = 1073741824 & _0x173903;
    _0x4edaa2 = (1073741823 & _0x4dd8f2) + (1073741823 & _0x173903);
    return _0x3833e6 & _0x33a3af ? 2147483648 ^ _0x4edaa2 ^ _0x1aa90f ^ _0x46d70b : _0x3833e6 | _0x33a3af ? 1073741824 & _0x4edaa2 ? 3221225472 ^ _0x4edaa2 ^ _0x1aa90f ^ _0x46d70b : 1073741824 ^ _0x4edaa2 ^ _0x1aa90f ^ _0x46d70b : _0x4edaa2 ^ _0x1aa90f ^ _0x46d70b;
  }
  function _0x198680(_0x781314, _0x4ba556, _0x36cacf, _0x80f0b8, _0xd82f1d, _0x5af141, _0x211fe8) {
    var _0x3ee8cd, _0x3a8740;
    _0x781314 = _0x441dd2(_0x781314, _0x441dd2(_0x441dd2((_0x3ee8cd = _0x4ba556) & (_0x3a8740 = _0x36cacf) | ~_0x3ee8cd & _0x80f0b8, _0xd82f1d), _0x211fe8));
    return _0x441dd2(_0x22c50b(_0x781314, _0x5af141), _0x4ba556);
  }
  function _0x7af64f(_0x572f94, _0x75c4d6, _0x3408d7, _0x3be44e, _0x75e0a, _0x160289, _0x297ff2) {
    var _0xb849e7, _0x3c5e62, _0x5e3976;
    _0x572f94 = _0x441dd2(_0x572f94, _0x441dd2(_0x441dd2((_0xb849e7 = _0x75c4d6, _0x3c5e62 = _0x3408d7, _0xb849e7 & (_0x5e3976 = _0x3be44e) | _0x3c5e62 & ~_0x5e3976), _0x75e0a), _0x297ff2));
    return _0x441dd2(_0x22c50b(_0x572f94, _0x160289), _0x75c4d6);
  }
  function _0x3cc49c(_0x2417bc, _0x3ab22, _0x5b7523, _0x486045, _0xe0b9d1, _0x14bd31, _0x339a53) {
    var _0x141809, _0x3fbdc7;
    _0x2417bc = _0x441dd2(_0x2417bc, _0x441dd2(_0x441dd2((_0x141809 = _0x3ab22) ^ (_0x3fbdc7 = _0x5b7523) ^ _0x486045, _0xe0b9d1), _0x339a53));
    return _0x441dd2(_0x22c50b(_0x2417bc, _0x14bd31), _0x3ab22);
  }
  function _0x3f0154(_0x2970c3, _0x1f2306, _0x59d511, _0x34e9f4, _0x1e2909, _0x557ccd, _0x3634e8) {
    var _0x29576d, _0x2f77f5;
    _0x2970c3 = _0x441dd2(_0x2970c3, _0x441dd2(_0x441dd2((_0x29576d = _0x1f2306, (_0x2f77f5 = _0x59d511) ^ (_0x29576d | ~_0x34e9f4)), _0x1e2909), _0x3634e8));
    return _0x441dd2(_0x22c50b(_0x2970c3, _0x557ccd), _0x1f2306);
  }
  function _0x30ea69(_0x294d3e) {
    var _0x263618,
      _0x467cfd = "",
      _0x5eb8c4 = "";
    for (_0x263618 = 0; 3 >= _0x263618; _0x263618++) {
      _0x467cfd += (_0x5eb8c4 = "0" + (_0x294d3e >>> 8 * _0x263618 & 255).toString(16)).substr(_0x5eb8c4.length - 2, 2);
    }
    return _0x467cfd;
  }
  var _0xcb7570,
    _0x399be7,
    _0x1199c8,
    _0x35f4d7,
    _0x11aff5,
    _0x126731,
    _0x55921b,
    _0x565a5a,
    _0x3500ec,
    _0x2c151d = [];
  for (_0x2c151d = function (_0x5ce4a7) {
    for (var _0x2eb840, _0x417317 = _0x5ce4a7.length, _0x4cf053 = _0x417317 + 8, _0x22d409 = 16 * ((_0x4cf053 - _0x4cf053 % 64) / 64 + 1), _0x3b1321 = Array(_0x22d409 - 1), _0x1c7a9d = 0, _0xfb64ad = 0; _0x417317 > _0xfb64ad;) {
      _0x2eb840 = (_0xfb64ad - _0xfb64ad % 4) / 4;
      _0x1c7a9d = _0xfb64ad % 4 * 8;
      _0x3b1321[_0x2eb840] = _0x3b1321[_0x2eb840] | _0x5ce4a7.charCodeAt(_0xfb64ad) << _0x1c7a9d;
      _0xfb64ad++;
    }
    _0x2eb840 = (_0xfb64ad - _0xfb64ad % 4) / 4;
    _0x1c7a9d = _0xfb64ad % 4 * 8;
    _0x3b1321[_0x2eb840] = _0x3b1321[_0x2eb840] | 128 << _0x1c7a9d;
    _0x3b1321[_0x22d409 - 2] = _0x417317 << 3;
    _0x3b1321[_0x22d409 - 1] = _0x417317 >>> 29;
    return _0x3b1321;
  }(_0x11bc7e = function (_0x22ee26) {
    _0x22ee26 = _0x22ee26.replace(/\r\n/g, "\n");
    for (var _0x534881 = "", _0x546670 = 0; _0x546670 < _0x22ee26.length; _0x546670++) {
      var _0x123730 = _0x22ee26.charCodeAt(_0x546670);
      128 > _0x123730 ? _0x534881 += String.fromCharCode(_0x123730) : _0x123730 > 127 && 2048 > _0x123730 ? (_0x534881 += String.fromCharCode(_0x123730 >> 6 | 192), _0x534881 += String.fromCharCode(63 & _0x123730 | 128)) : (_0x534881 += String.fromCharCode(_0x123730 >> 12 | 224), _0x534881 += String.fromCharCode(_0x123730 >> 6 & 63 | 128), _0x534881 += String.fromCharCode(63 & _0x123730 | 128));
    }
    return _0x534881;
  }(_0x11bc7e)), _0x126731 = 1732584193, _0x55921b = 4023233417, _0x565a5a = 2562383102, _0x3500ec = 271733878, _0xcb7570 = 0; _0xcb7570 < _0x2c151d.length; _0xcb7570 += 16) {
    _0x399be7 = _0x126731;
    _0x1199c8 = _0x55921b;
    _0x35f4d7 = _0x565a5a;
    _0x11aff5 = _0x3500ec;
    _0x126731 = _0x198680(_0x126731, _0x55921b, _0x565a5a, _0x3500ec, _0x2c151d[_0xcb7570 + 0], 7, 3614090360);
    _0x3500ec = _0x198680(_0x3500ec, _0x126731, _0x55921b, _0x565a5a, _0x2c151d[_0xcb7570 + 1], 12, 3905402710);
    _0x565a5a = _0x198680(_0x565a5a, _0x3500ec, _0x126731, _0x55921b, _0x2c151d[_0xcb7570 + 2], 17, 606105819);
    _0x55921b = _0x198680(_0x55921b, _0x565a5a, _0x3500ec, _0x126731, _0x2c151d[_0xcb7570 + 3], 22, 3250441966);
    _0x126731 = _0x198680(_0x126731, _0x55921b, _0x565a5a, _0x3500ec, _0x2c151d[_0xcb7570 + 4], 7, 4118548399);
    _0x3500ec = _0x198680(_0x3500ec, _0x126731, _0x55921b, _0x565a5a, _0x2c151d[_0xcb7570 + 5], 12, 1200080426);
    _0x565a5a = _0x198680(_0x565a5a, _0x3500ec, _0x126731, _0x55921b, _0x2c151d[_0xcb7570 + 6], 17, 2821735955);
    _0x55921b = _0x198680(_0x55921b, _0x565a5a, _0x3500ec, _0x126731, _0x2c151d[_0xcb7570 + 7], 22, 4249261313);
    _0x126731 = _0x198680(_0x126731, _0x55921b, _0x565a5a, _0x3500ec, _0x2c151d[_0xcb7570 + 8], 7, 1770035416);
    _0x3500ec = _0x198680(_0x3500ec, _0x126731, _0x55921b, _0x565a5a, _0x2c151d[_0xcb7570 + 9], 12, 2336552879);
    _0x565a5a = _0x198680(_0x565a5a, _0x3500ec, _0x126731, _0x55921b, _0x2c151d[_0xcb7570 + 10], 17, 4294925233);
    _0x55921b = _0x198680(_0x55921b, _0x565a5a, _0x3500ec, _0x126731, _0x2c151d[_0xcb7570 + 11], 22, 2304563134);
    _0x126731 = _0x198680(_0x126731, _0x55921b, _0x565a5a, _0x3500ec, _0x2c151d[_0xcb7570 + 12], 7, 1804603682);
    _0x3500ec = _0x198680(_0x3500ec, _0x126731, _0x55921b, _0x565a5a, _0x2c151d[_0xcb7570 + 13], 12, 4254626195);
    _0x565a5a = _0x198680(_0x565a5a, _0x3500ec, _0x126731, _0x55921b, _0x2c151d[_0xcb7570 + 14], 17, 2792965006);
    _0x55921b = _0x198680(_0x55921b, _0x565a5a, _0x3500ec, _0x126731, _0x2c151d[_0xcb7570 + 15], 22, 1236535329);
    _0x126731 = _0x7af64f(_0x126731, _0x55921b, _0x565a5a, _0x3500ec, _0x2c151d[_0xcb7570 + 1], 5, 4129170786);
    _0x3500ec = _0x7af64f(_0x3500ec, _0x126731, _0x55921b, _0x565a5a, _0x2c151d[_0xcb7570 + 6], 9, 3225465664);
    _0x565a5a = _0x7af64f(_0x565a5a, _0x3500ec, _0x126731, _0x55921b, _0x2c151d[_0xcb7570 + 11], 14, 643717713);
    _0x55921b = _0x7af64f(_0x55921b, _0x565a5a, _0x3500ec, _0x126731, _0x2c151d[_0xcb7570 + 0], 20, 3921069994);
    _0x126731 = _0x7af64f(_0x126731, _0x55921b, _0x565a5a, _0x3500ec, _0x2c151d[_0xcb7570 + 5], 5, 3593408605);
    _0x3500ec = _0x7af64f(_0x3500ec, _0x126731, _0x55921b, _0x565a5a, _0x2c151d[_0xcb7570 + 10], 9, 38016083);
    _0x565a5a = _0x7af64f(_0x565a5a, _0x3500ec, _0x126731, _0x55921b, _0x2c151d[_0xcb7570 + 15], 14, 3634488961);
    _0x55921b = _0x7af64f(_0x55921b, _0x565a5a, _0x3500ec, _0x126731, _0x2c151d[_0xcb7570 + 4], 20, 3889429448);
    _0x126731 = _0x7af64f(_0x126731, _0x55921b, _0x565a5a, _0x3500ec, _0x2c151d[_0xcb7570 + 9], 5, 568446438);
    _0x3500ec = _0x7af64f(_0x3500ec, _0x126731, _0x55921b, _0x565a5a, _0x2c151d[_0xcb7570 + 14], 9, 3275163606);
    _0x565a5a = _0x7af64f(_0x565a5a, _0x3500ec, _0x126731, _0x55921b, _0x2c151d[_0xcb7570 + 3], 14, 4107603335);
    _0x55921b = _0x7af64f(_0x55921b, _0x565a5a, _0x3500ec, _0x126731, _0x2c151d[_0xcb7570 + 8], 20, 1163531501);
    _0x126731 = _0x7af64f(_0x126731, _0x55921b, _0x565a5a, _0x3500ec, _0x2c151d[_0xcb7570 + 13], 5, 2850285829);
    _0x3500ec = _0x7af64f(_0x3500ec, _0x126731, _0x55921b, _0x565a5a, _0x2c151d[_0xcb7570 + 2], 9, 4243563512);
    _0x565a5a = _0x7af64f(_0x565a5a, _0x3500ec, _0x126731, _0x55921b, _0x2c151d[_0xcb7570 + 7], 14, 1735328473);
    _0x55921b = _0x7af64f(_0x55921b, _0x565a5a, _0x3500ec, _0x126731, _0x2c151d[_0xcb7570 + 12], 20, 2368359562);
    _0x126731 = _0x3cc49c(_0x126731, _0x55921b, _0x565a5a, _0x3500ec, _0x2c151d[_0xcb7570 + 5], 4, 4294588738);
    _0x3500ec = _0x3cc49c(_0x3500ec, _0x126731, _0x55921b, _0x565a5a, _0x2c151d[_0xcb7570 + 8], 11, 2272392833);
    _0x565a5a = _0x3cc49c(_0x565a5a, _0x3500ec, _0x126731, _0x55921b, _0x2c151d[_0xcb7570 + 11], 16, 1839030562);
    _0x55921b = _0x3cc49c(_0x55921b, _0x565a5a, _0x3500ec, _0x126731, _0x2c151d[_0xcb7570 + 14], 23, 4259657740);
    _0x126731 = _0x3cc49c(_0x126731, _0x55921b, _0x565a5a, _0x3500ec, _0x2c151d[_0xcb7570 + 1], 4, 2763975236);
    _0x3500ec = _0x3cc49c(_0x3500ec, _0x126731, _0x55921b, _0x565a5a, _0x2c151d[_0xcb7570 + 4], 11, 1272893353);
    _0x565a5a = _0x3cc49c(_0x565a5a, _0x3500ec, _0x126731, _0x55921b, _0x2c151d[_0xcb7570 + 7], 16, 4139469664);
    _0x55921b = _0x3cc49c(_0x55921b, _0x565a5a, _0x3500ec, _0x126731, _0x2c151d[_0xcb7570 + 10], 23, 3200236656);
    _0x126731 = _0x3cc49c(_0x126731, _0x55921b, _0x565a5a, _0x3500ec, _0x2c151d[_0xcb7570 + 13], 4, 681279174);
    _0x3500ec = _0x3cc49c(_0x3500ec, _0x126731, _0x55921b, _0x565a5a, _0x2c151d[_0xcb7570 + 0], 11, 3936430074);
    _0x565a5a = _0x3cc49c(_0x565a5a, _0x3500ec, _0x126731, _0x55921b, _0x2c151d[_0xcb7570 + 3], 16, 3572445317);
    _0x55921b = _0x3cc49c(_0x55921b, _0x565a5a, _0x3500ec, _0x126731, _0x2c151d[_0xcb7570 + 6], 23, 76029189);
    _0x126731 = _0x3cc49c(_0x126731, _0x55921b, _0x565a5a, _0x3500ec, _0x2c151d[_0xcb7570 + 9], 4, 3654602809);
    _0x3500ec = _0x3cc49c(_0x3500ec, _0x126731, _0x55921b, _0x565a5a, _0x2c151d[_0xcb7570 + 12], 11, 3873151461);
    _0x565a5a = _0x3cc49c(_0x565a5a, _0x3500ec, _0x126731, _0x55921b, _0x2c151d[_0xcb7570 + 15], 16, 530742520);
    _0x55921b = _0x3cc49c(_0x55921b, _0x565a5a, _0x3500ec, _0x126731, _0x2c151d[_0xcb7570 + 2], 23, 3299628645);
    _0x126731 = _0x3f0154(_0x126731, _0x55921b, _0x565a5a, _0x3500ec, _0x2c151d[_0xcb7570 + 0], 6, 4096336452);
    _0x3500ec = _0x3f0154(_0x3500ec, _0x126731, _0x55921b, _0x565a5a, _0x2c151d[_0xcb7570 + 7], 10, 1126891415);
    _0x565a5a = _0x3f0154(_0x565a5a, _0x3500ec, _0x126731, _0x55921b, _0x2c151d[_0xcb7570 + 14], 15, 2878612391);
    _0x55921b = _0x3f0154(_0x55921b, _0x565a5a, _0x3500ec, _0x126731, _0x2c151d[_0xcb7570 + 5], 21, 4237533241);
    _0x126731 = _0x3f0154(_0x126731, _0x55921b, _0x565a5a, _0x3500ec, _0x2c151d[_0xcb7570 + 12], 6, 1700485571);
    _0x3500ec = _0x3f0154(_0x3500ec, _0x126731, _0x55921b, _0x565a5a, _0x2c151d[_0xcb7570 + 3], 10, 2399980690);
    _0x565a5a = _0x3f0154(_0x565a5a, _0x3500ec, _0x126731, _0x55921b, _0x2c151d[_0xcb7570 + 10], 15, 4293915773);
    _0x55921b = _0x3f0154(_0x55921b, _0x565a5a, _0x3500ec, _0x126731, _0x2c151d[_0xcb7570 + 1], 21, 2240044497);
    _0x126731 = _0x3f0154(_0x126731, _0x55921b, _0x565a5a, _0x3500ec, _0x2c151d[_0xcb7570 + 8], 6, 1873313359);
    _0x3500ec = _0x3f0154(_0x3500ec, _0x126731, _0x55921b, _0x565a5a, _0x2c151d[_0xcb7570 + 15], 10, 4264355552);
    _0x565a5a = _0x3f0154(_0x565a5a, _0x3500ec, _0x126731, _0x55921b, _0x2c151d[_0xcb7570 + 6], 15, 2734768916);
    _0x55921b = _0x3f0154(_0x55921b, _0x565a5a, _0x3500ec, _0x126731, _0x2c151d[_0xcb7570 + 13], 21, 1309151649);
    _0x126731 = _0x3f0154(_0x126731, _0x55921b, _0x565a5a, _0x3500ec, _0x2c151d[_0xcb7570 + 4], 6, 4149444226);
    _0x3500ec = _0x3f0154(_0x3500ec, _0x126731, _0x55921b, _0x565a5a, _0x2c151d[_0xcb7570 + 11], 10, 3174756917);
    _0x565a5a = _0x3f0154(_0x565a5a, _0x3500ec, _0x126731, _0x55921b, _0x2c151d[_0xcb7570 + 2], 15, 718787259);
    _0x55921b = _0x3f0154(_0x55921b, _0x565a5a, _0x3500ec, _0x126731, _0x2c151d[_0xcb7570 + 9], 21, 3951481745);
    _0x126731 = _0x441dd2(_0x126731, _0x399be7);
    _0x55921b = _0x441dd2(_0x55921b, _0x1199c8);
    _0x565a5a = _0x441dd2(_0x565a5a, _0x35f4d7);
    _0x3500ec = _0x441dd2(_0x3500ec, _0x11aff5);
  }
  return (_0x30ea69(_0x126731) + _0x30ea69(_0x55921b) + _0x30ea69(_0x565a5a) + _0x30ea69(_0x3500ec)).toLowerCase();
}