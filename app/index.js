(function (_0xfa278e, _0x1d8349) {
  const _0x2709a8 = a0_0x5a27,
    _0x3493a6 = _0xfa278e();
  while (!![]) {
    try {
      const _0x1295b2 =
        -parseInt(_0x2709a8(0x18c)) / 0x1 +
        -parseInt(_0x2709a8(0x17f)) / 0x2 +
        -parseInt(_0x2709a8(0x170)) / 0x3 +
        (-parseInt(_0x2709a8(0x169)) / 0x4) *
          (parseInt(_0x2709a8(0x192)) / 0x5) +
        -parseInt(_0x2709a8(0x17e)) / 0x6 +
        (parseInt(_0x2709a8(0x18d)) / 0x7) *
          (parseInt(_0x2709a8(0x16b)) / 0x8) +
        (-parseInt(_0x2709a8(0x160)) / 0x9) *
          (-parseInt(_0x2709a8(0x193)) / 0xa);
      if (_0x1295b2 === _0x1d8349) break;
      else _0x3493a6["push"](_0x3493a6["shift"]());
    } catch (_0x1b306e) {
      _0x3493a6["push"](_0x3493a6["shift"]());
    }
  }
})(a0_0x1331, 0xf1933);
import { Config } from "./config/config.js";
import { proxyList } from "./config/proxy_list.js";
import { Core } from "./src/core/core.js";
import { Telegram } from "./src/core/telegram.js";
import { Helper } from "./src/utils/helper.js";
function a0_0x1331() {
  const _0x163a5f = [
    "stringify",
    "query",
    "By\x20:\x20Widiskel",
    "Midas\x20BOT",
    "914096dsNBRZ",
    "84kmFQOf",
    "then",
    "playTileGame",
    "BOT\x20STOPPED",
    "user",
    "15qkNipa",
    "1420LKylQp",
    "getSession",
    "accounts",
    "BOT\x20STARTED",
    "client",
    "init",
    "400158uaUvhe",
    "Application\x20Started",
    "/query.txt",
    "log",
    "Account\x20",
    "first_name",
    "claimFarming",
    "clearInfo",
    "lastName",
    "1972616iEMhbZ",
    "daily_attempts",
    "977176dTgEKo",
    "includes",
    "accounts/",
    "length",
    "You\x20have\x20",
    "4998009cDUxqA",
    "info",
    "error",
    "indexOf",
    "push",
    "delay",
    "all",
    "getUserStats",
    "message",
    "getMe",
    "startFarming",
    ",\x20Retrying\x20after\x2010\x20Second",
    "\x20Processing\x20Complete,\x20Restarting\x20in\x208\x20Hours",
    "firstName",
    "6991266hWANwg",
    "3130210yxHFCu",
    "start",
    "\x20Proxy",
    "Error\x20During\x20executing\x20bot",
    "useSession",
    "clear",
    "catch",
    "map",
    "queryToJSON",
  ];
  a0_0x1331 = function () {
    return _0x163a5f;
  };
  return a0_0x1331();
}
import a0_0xe3db64 from "./src/utils/logger.js";
import a0_0x50f243 from "./src/utils/twist.js";
function a0_0x5a27(_0x4d0943, _0x287965) {
  const _0x13319b = a0_0x1331();
  return (
    (a0_0x5a27 = function (_0x5a2703, _0x11fb8b) {
      _0x5a2703 = _0x5a2703 - 0x15f;
      let _0x3140f0 = _0x13319b[_0x5a2703];
      return _0x3140f0;
    }),
    a0_0x5a27(_0x4d0943, _0x287965)
  );
}
async function operation(_0x151fcc, _0x20d9e5, _0x8d6a21, _0x16f846) {
  const _0x27a2cf = a0_0x5a27;
  try {
    const _0x1c9d0c = new Core(_0x151fcc, _0x20d9e5, _0x8d6a21, _0x16f846);
    await _0x1c9d0c["login"](!![]),
      await _0x1c9d0c[_0x27a2cf(0x180)](!![]),
      await _0x1c9d0c[_0x27a2cf(0x177)](!![]),
      await _0x1c9d0c[_0x27a2cf(0x17a)](),
      await _0x1c9d0c[_0x27a2cf(0x166)]();
    while (_0x1c9d0c[_0x27a2cf(0x191)][_0x27a2cf(0x16a)] != 0x0) {
      await _0x1c9d0c[_0x27a2cf(0x18f)]();
    }
    await Helper[_0x27a2cf(0x175)](
      0xea60 * 0x3c * 0x8,
      _0x151fcc,
      _0x27a2cf(0x164) + _0x151fcc["id"] + _0x27a2cf(0x17c),
      _0x1c9d0c
    ),
      await operation(_0x151fcc, _0x20d9e5, _0x8d6a21, _0x16f846);
  } catch (_0x5f2cd3) {
    a0_0x50f243[_0x27a2cf(0x184)](_0x151fcc),
      a0_0x50f243["clearInfo"](),
      await Helper[_0x27a2cf(0x175)](
        0x2710,
        _0x151fcc,
        "Error\x20:\x20" + _0x5f2cd3[_0x27a2cf(0x178)] + _0x27a2cf(0x17b)
      ),
      await operation(_0x151fcc, _0x20d9e5, _0x8d6a21, _0x16f846);
  }
}
let init = ![];
async function startBot() {
  return new Promise(async (_0x2fd97a, _0x1789a6) => {
    const _0x3e3e44 = a0_0x5a27;
    try {
      a0_0xe3db64[_0x3e3e44(0x171)](_0x3e3e44(0x196));
      const _0x5cda57 = await new Telegram();
      init == ![] && (await _0x5cda57[_0x3e3e44(0x15f)](), (init = !![]));
      const _0x1189cc = Helper[_0x3e3e44(0x194)](_0x3e3e44(0x195)),
        _0x195b4a = [];
      proxyList["length"] > 0x0 &&
        _0x1189cc[_0x3e3e44(0x16e)] != proxyList[_0x3e3e44(0x16e)] &&
        _0x1789a6(
          _0x3e3e44(0x16f) +
            _0x1189cc["length"] +
            "\x20Session\x20but\x20you\x20provide\x20" +
            proxyList["length"] +
            _0x3e3e44(0x181)
        );
      for (const _0x50c1b3 of _0x1189cc) {
        const _0x4356ee = _0x1189cc[_0x3e3e44(0x173)](_0x50c1b3),
          _0x49296f =
            proxyList[_0x3e3e44(0x16e)] > 0x0
              ? proxyList[_0x4356ee]
              : undefined;
        if (!_0x50c1b3[_0x3e3e44(0x16c)](_0x3e3e44(0x189))) {
          await _0x5cda57[_0x3e3e44(0x183)]("accounts/" + _0x50c1b3, _0x49296f),
            (_0x5cda57["session"] = _0x50c1b3);
          const _0x392ffd = await _0x5cda57[_0x3e3e44(0x197)][
              _0x3e3e44(0x179)
            ](),
            _0x4313b7 = await _0x5cda57["resolvePeer"]()
              [_0x3e3e44(0x18e)](async () => {
                return await _0x5cda57["initWebView"]();
              })
              [_0x3e3e44(0x185)]((_0x8186be) => {
                throw _0x8186be;
              }),
            _0x18e70c = Helper[_0x3e3e44(0x187)](_0x4313b7);
          await _0x5cda57["disconnect"](),
            _0x195b4a[_0x3e3e44(0x174)]([
              _0x392ffd,
              _0x4313b7,
              _0x18e70c,
              _0x49296f,
            ]);
        } else {
          const _0x21143f = Helper["readQueryFile"](
              _0x3e3e44(0x16d) + _0x50c1b3 + _0x3e3e44(0x162)
            ),
            _0xe25966 = Helper[_0x3e3e44(0x187)](_0x21143f),
            _0x4b0e43 = _0xe25966[_0x3e3e44(0x191)];
          (_0x4b0e43[_0x3e3e44(0x17d)] = _0x4b0e43[_0x3e3e44(0x165)]),
            (_0x4b0e43[_0x3e3e44(0x168)] = _0x4b0e43["last_name"]),
            _0x195b4a[_0x3e3e44(0x174)]([
              _0x4b0e43,
              _0x21143f,
              _0xe25966,
              _0x49296f,
            ]);
        }
      }
      const _0x48cb84 = _0x195b4a[_0x3e3e44(0x186)](async (_0x240244) => {
        await operation(
          _0x240244[0x0],
          _0x240244[0x1],
          _0x240244[0x2],
          _0x240244[0x3]
        );
      });
      await Promise[_0x3e3e44(0x176)](_0x48cb84), _0x2fd97a();
    } catch (_0x1d2143) {
      a0_0xe3db64["info"](_0x3e3e44(0x190)),
        a0_0xe3db64[_0x3e3e44(0x172)](JSON[_0x3e3e44(0x188)](_0x1d2143)),
        _0x1789a6(_0x1d2143);
    }
  });
}
(async () => {
  const _0x3d1ace = a0_0x5a27;
  try {
    a0_0xe3db64[_0x3d1ace(0x184)](),
      a0_0xe3db64[_0x3d1ace(0x171)](""),
      a0_0xe3db64["info"](_0x3d1ace(0x161)),
      console[_0x3d1ace(0x163)](_0x3d1ace(0x18b)),
      console[_0x3d1ace(0x163)](_0x3d1ace(0x18a)),
      console[_0x3d1ace(0x163)](
        "Dont\x20forget\x20to\x20run\x20git\x20pull\x20to\x20keep\x20up\x20to\x20date"
      ),
      await startBot();
  } catch (_0x3dec9a) {
    a0_0x50f243[_0x3d1ace(0x184)](),
      a0_0x50f243[_0x3d1ace(0x167)](),
      console[_0x3d1ace(0x163)](_0x3d1ace(0x182), _0x3dec9a),
      await startBot();
  }
})();
