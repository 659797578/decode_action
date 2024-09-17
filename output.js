//Tue Sep 17 2024 09:59:07 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
NAME = "幸喜";
VALY = ["xxheader"];
CK = "";
var userList = [];
class Bar {
  constructor(_0x3df343) {
    this.tgid = _0x3df343.split("@")[0];
    this.sso = _0x3df343.split("@")[1];
    this.headers = {
      "sso": this.sso,
      "content-type": "application/json",
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.30(0x18001e29) NetType/WIFI Language/zh_CN",
      "Referer": "https://servicewechat.com/wx673f827a4c2c94fa/151/page-frame.html"
    };
    this.login = true;
  }
  async ["userinfo"]() {
    await task("get", "https://api.xinc818.com/mini/user", this.headers);
    if (DATA.code == 0) {
      this.name = DATA.data.nickname;
      this.coinsTatal = DATA.data.integral;
      console.log("账号[" + this.name + "]  现有积分：" + this.coinsTatal);
      this.login = true;
    } else {
      this.login = false;
      console.log(this.sso);
      let _0x12ecf0 = encodeURIComponent(NAME + " ck失效，请重新上传");
      await this.tgmsg(_0x12ecf0);
    }
  }
  async ["signs"]() {
    await task("get", "https://api.xinc818.com/mini/sign/status", this.headers);
    if (DATA.code == 0) {
      this.isSign = DATA.data;
      let _0x2b9b81 = this.isSign ? "已签到" : "未签到";
      console.log("账号[" + this.name + "]  今日" + _0x2b9b81);
    }
  }
  async ["sign"]() {
    await task("get", "https://api.xinc818.com/mini/sign/in", this.headers);
    if (DATA.code == 0) {
      console.log("账号[" + this.name + "]  签到成功,获得积分：" + DATA.data.integral);
    }
  }
  async ["dailyTask"]() {
    await task("get", "https://api.xinc818.com/mini/dailyTask/list?classify=", this.headers);
    if (DATA.code == 0) {
      this.taskArr = DATA.data;
      for (let _0x46ec99 of this.taskArr) {
        this.names = _0x46ec99.name;
        this.Status = _0x46ec99.status;
        if (this.Status == false && this.names == "发帖") {
          let _0x42838f = await this.depression();
          await task("post", "https://api.xinc818.com/mini/posts", this.headers, "{\"topicNames\":[],\"content\":\"" + _0x42838f + "\",\"groupId\":0,\"groupClassifyId\":0,\"attachments\":[],\"voteType\":0}");
          console.log(this.names + JSON.stringify(DATA));
          if (DATA.code == 0) {
            console.log("账号[" + this.name + "]   " + this.names + ":" + DATA.msg + " 获得积分：5");
          }
        } else if (this.Status == false && this.names == "分享辛喜") {
          await task("get", "https://api.xinc818.com/mini/dailyTask/share", this.headers);
          console.log(this.names + JSON.stringify(DATA));
          if (DATA.code == 0) {
            console.log("账号[" + this.name + "]   " + this.names + ":" + DATA.msg + " 获得积分：5");
          }
        } else if (this.Status == false && this.names == "点赞用户") {
          await task("put", "https://api.xinc818.com/mini/posts/like", this.headers, "{\"postsId\":\"185909\",\"decision\":true}");
          console.log(this.names + JSON.stringify(DATA));
          if (DATA.code == 0) {
            console.log("账号[" + this.name + "]   " + this.names + ":" + DATA.msg + " 获得积分：5");
            await task("put", "https://api.xinc818.com/mini/posts/like", this.headers, "{\"postsId\":\"185909\",\"decision\":false}");
            console.log(this.names + DATA.msg);
          }
        } else if (this.Status == false && this.names == "关注圈子") {
          await task("post", "https://api.xinc818.com/mini/groupMembers/join", this.headers, "{\"groupId\":3}");
          console.log(this.names + JSON.stringify(DATA));
          if (DATA.code == 0) {
            console.log("账号[" + this.name + "]   " + this.names + ":" + DATA.msg + " 获得积分：5");
            let _0x3f518a = DATA.data;
            await task("delete", "https://api.xinc818.com/mini/groupMembers/escape/" + _0x3f518a, this.headers, "{}");
            console.log(this.names + JSON.stringify(DATA));
          }
        } else if (this.Status == false && this.names == "给主播留言") {
          let _0x3d9234 = await this.depression();
          await task("post", "https://api.xinc818.com/mini/anchorComment/addComment", this.headers, "{\"content\":\"" + _0x3d9234 + "\",\"relatedId\":\"2088000000000030\",\"contentType\":0,\"topCommentId\":0}");
          console.log(this.names + JSON.stringify(DATA));
          if (DATA.code == 0) {
            console.log("账号[" + this.name + "]   " + this.names + ":" + DATA.msg + " 获得积分：5");
          }
        } else if (this.Status == false && this.names == "预约直播") {
          await task("get", "https://api.xinc818.com/mini/live/type?liveStatus=0", this.headers);
          console.log(this.names + DATA.data.length);
          if (DATA.code == 0) {
            for (let _0x3f518a of DATA.data) {
              if (_0x3f518a.subscribeStatus == false && _0x3f518a.id != "") {
                await task("get", "https://api.xinc818.com/mini/live/" + _0x3f518a.id + "/subscribe?inviteId=", this.headers);
                console.log(this.tgid + this.names + JSON.stringify(DATA));
                if (DATA.code == 0) {
                  console.log("账号[" + this.name + "]   " + this.names + ":" + DATA.msg + " 获得积分：10");
                  break;
                }
              }
            }
          }
        } else if (this.Status == false && this.names == "查看会员权益") {
          await task("get", "https://api.xinc818.com/mini/dailyTask/benefits", this.headers);
          if (DATA.code == 0) {
            console.log("账号[" + this.name + "]   " + this.names + ":" + DATA.msg + " 获得积分：10");
          }
        } else if (this.Status == false && this.names == "关注用户") {
          await task("put", "https://api.xinc818.com/mini/user/follow", this.headers, "{\"decision\":true,\"followUserId\":\"69\"}");
          if (DATA.code == 0) {
            console.log("账号[" + this.name + "]   " + this.names + ":" + DATA.msg + " 获得积分：5");
            await task("put", "https://api.xinc818.com/mini/user/follow", this.headers, "{\"decision\":false,\"followUserId\":\"69\"}");
          }
        } else if (this.Status == true) {
          console.log("账号[" + this.name + "]  已完成的任务===" + this.names);
        }
      }
    }
  }
  async ["depression"]() {
    await task("get", "https://keai.icu/apiwyy/api", {});
    return DATA.content;
  }
  async ["integral"]() {
    await task("get", "https://api.xinc818.com/mini/user", this.headers);
    if (DATA.code == 0) {
      let _0xae1b75 = DATA.data.integral;
      console.log("账号[" + this.name + "]  本次运行获得积分：" + (_0xae1b75 - this.coinsTatal) + "  总积分：" + _0xae1b75);
      if (_0xae1b75 - this.coinsTatal != 0) {
        let _0x3b1f42 = encodeURIComponent(NAME + " 账号[" + this.name + "]  本次运行获得积分：" + (_0xae1b75 - this.coinsTatal) + "  总积分：" + _0xae1b75);
        this.tgmsg(_0x3b1f42);
      }
    }
  }
  async ["tgmsg"](_0x3572b9) {
    let _0x645e60 = "https://api.telegram.org/bot5581957800:AAG8zGY_exWRGpKppAQD-pdS6cSidLz4BSY/sendMessage?chat_id=" + this.tgid + "&parse_mode=Markdown&text=";
    await task("get", _0x645e60 + _0x3572b9, {});
    console.log(DATA);
  }
}
!(async () => {
  console.log(NAME);
  checkEnv();
  console.log("================ 登录 ================");
  for (let _0x134565 of userList) {
    await _0x134565.userinfo();
  }
  let _0x2c6343 = userList.filter(_0xbea41c => _0xbea41c.login == true);
  if (_0x2c6343.length == 0) {
    console.log("ck失效");
    msg = NAME + " 您的cookie已失效";
    return;
  }
  console.log("================ 签到状态 ================");
  for (let _0x9c6d10 of _0x2c6343) {
    await _0x9c6d10.signs();
  }
  if (_0x2c6343.filter(_0xa6733f => _0xa6733f.isSign == false).length > 0) {
    console.log("\n================ 签到 ================");
    for (let _0xf8529 of _0x2c6343) {
      await _0xf8529.sign();
    }
  }
  console.log("================ 任务状态 ================");
  for (let _0x326e5b of _0x2c6343) {
    await _0x326e5b.dailyTask();
  }
  console.log("================ 收益查询 ================");
  for (let _0x153be9 of _0x2c6343) {
    await _0x153be9.integral();
  }
})().catch(_0x52ced8 => {
  console.log(_0x52ced8);
}).finally(() => {});
async function task(_0x3e7a18, _0x55cd09, _0x35aa4b, _0x3761bb) {
  if (_0x3e7a18 == "delete") {
    _0x3e7a18 = _0x3e7a18.toUpperCase();
  } else {
    _0x3e7a18 = _0x3e7a18;
  }
  const _0x907991 = require("request");
  if (_0x3e7a18 == "post") {
    delete _0x35aa4b["content-type"];
    delete _0x35aa4b["Content-type"];
    delete _0x35aa4b["content-Type"];
    if (safeGet(_0x3761bb)) {
      _0x35aa4b["Content-Type"] = "application/json;charset=UTF-8";
    } else {
      _0x35aa4b["Content-Type"] = "application/x-www-form-urlencoded";
    }
    if (_0x3761bb) {
      _0x35aa4b["Content-Length"] = _0x3761bb.length;
    }
  }
  _0x35aa4b.Host = _0x55cd09.replace("//", "/").split("/")[1];
  if (_0x3e7a18.indexOf("T") < 0) {
    var _0x42bd3c = {
      "url": _0x55cd09,
      "headers": _0x35aa4b,
      "body": _0x3761bb
    };
  } else {
    var _0x42bd3c = {
      "url": _0x55cd09,
      "headers": _0x35aa4b,
      "form": JSON.parse(_0x3761bb)
    };
  }
  return new Promise(async _0x57938a => {
    _0x907991[_0x3e7a18.toLowerCase()](_0x42bd3c, (_0x51e44e, _0x37f15d, _0x4136a9) => {
      try {
        DATA = "";
        if (_0x51e44e) {
          console.log(_0x55cd09 + "API请求失败，请检查网络重试" + _0x51e44e);
        } else {
          if (_0x4136a9) {
            DATA = JSON.parse(_0x4136a9);
          } else {
            console.log("服务器返回数据为空");
          }
        }
      } catch (_0xde8330) {} finally {
        _0x57938a();
      }
    });
  });
}
async function safeGet(_0x5b46ef) {
  try {
    if (typeof JSON.parse(_0x5b46ef) == "object") {
      return true;
    }
  } catch (_0x267707) {
    return false;
  }
}
async function checkEnv() {
  let _0x2dc617 = process.env[VALY] || CK;
  let _0xef9f5e = 0;
  if (_0x2dc617) {
    for (let _0x359a1a of _0x2dc617.split("&").filter(_0x4ce170 => !!_0x4ce170)) {
      userList.push(new Bar(decodeURIComponent(_0x359a1a)));
    }
    _0xef9f5e = userList.length;
  } else {
    console.log("\n【" + $.name + "】：未填写变量: " + VALY);
  }
  console.log("共找到" + _0xef9f5e + "个账号");
  return userList;
}
_0xodc = "jsjiami.com.v6";