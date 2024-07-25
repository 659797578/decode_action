//Thu Jul 25 2024 08:45:51 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const axios = require("axios");
console.log("年终奖项目自己看着玩");
console.log(">>>>>开始执行签到<<<<<");
const url = "https://mall.telunsu.net/wxapi/user/signIn",
  headers = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 12; RMX3562 Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 XWEB/1160027 MMWEBSDK/20231105 MMWEBID/2307 MicroMessenger/8.0.44.2502(0x28002C3C) WeChat/arm64 Weixin NetType/5G Language/zh_CN ABI/arm64 miniProgram/wxe3a65936879fb682",
    "Content-Type": "application/json;charset=UTF-8",
    "Origin": "https://mall.telunsu.net",
    "X-Requested-With": "com.tencent.mm",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Dest": "empty",
    "Referer": "https://mall.telunsu.net/mintelunsu/himilk/vip/vipCommunityOld.html?navType=1",
    "Accept-Encoding": "gzip, deflate",
    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "Cookie": process.env.tls.split("&")[0]
  },
  data = {
    "openid": process.env.tls.split("&")[1]
  };
axios.post(url, data, {
  "headers": headers
}).then(_0x557805 => {
  const _0x4b8666 = _0x557805.data.msg;
  console.log("签到结果: " + _0x4b8666);
}).catch(_0x1f8644 => {
  console.error("签到失败:", _0x1f8644);
});