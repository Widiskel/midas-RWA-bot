const a2_0x31f4ae = a2_0xebac;
function a2_0xebac(_0x1f7235, _0x52050f) {
  const _0x2e42e4 = a2_0x2e42();
  return (
    (a2_0xebac = function (_0xebac4d, _0x2d6fb9) {
      _0xebac4d = _0xebac4d - 0x7f;
      let _0x2ecd5c = _0x2e42e4[_0xebac4d];
      return _0x2ecd5c;
    }),
    a2_0xebac(_0x1f7235, _0x52050f)
  );
}
(function (_0x573a9d, _0x58aec0) {
  const _0x39fc71 = a2_0xebac,
    _0x4ed825 = _0x573a9d();
  while (!![]) {
    try {
      const _0x59f609 =
        (parseInt(_0x39fc71(0x81)) / 0x1) * (-parseInt(_0x39fc71(0x97)) / 0x2) +
        (parseInt(_0x39fc71(0xa6)) / 0x3) * (-parseInt(_0x39fc71(0x87)) / 0x4) +
        -parseInt(_0x39fc71(0x80)) / 0x5 +
        -parseInt(_0x39fc71(0xab)) / 0x6 +
        -parseInt(_0x39fc71(0xb1)) / 0x7 +
        -parseInt(_0x39fc71(0xa7)) / 0x8 +
        parseInt(_0x39fc71(0x84)) / 0x9;
      if (_0x59f609 === _0x58aec0) break;
      else _0x4ed825["push"](_0x4ed825["shift"]());
    } catch (_0x18c3db) {
      _0x4ed825["push"](_0x4ed825["shift"]());
    }
  }
})(a2_0x2e42, 0x98d44);
import { API } from "../api/api.js";
import { Helper } from "../utils/helper.js";
import a2_0x413bf0 from "../utils/logger.js";
function a2_0x2e42() {
  const _0x5404d4 = [
    "queryObj",
    "\x20CL\x20and\x20",
    "195322iLcqfj",
    "score",
    "user",
    "/api/user/claim",
    "start",
    "Successfully\x20Get\x20User\x20Stats",
    "Error\x20:\x20",
    "playTileGame",
    "delay",
    "xp_earned",
    "Updating\x20Stack\x20Game\x20score\x20to\x20",
    "/api/user/login",
    "\x20EXP",
    "account",
    "Start\x20Playing\x20Tile\x20Game...",
    "2073189BFMvKe",
    "6275040MopxWs",
    "Tile\x20Game\x20Started\x20",
    "Getting\x20User\x20Stats...",
    "fetch",
    "3051090BOdgmQ",
    "Try\x20to\x20Claim\x20Daily\x20Reward...",
    "/api/user/stats",
    "status",
    "Successfully\x20Login",
    "https://tonmidas.fun",
    "4555656pngYxq",
    "Failed\x20to\x20get\x20user\x20stats",
    "getUserStats",
    "playStackGame",
    "\x20to\x20",
    "/api/user/start",
    "Delaying\x20for\x2060\x20Second\x20Before\x20game\x20end\x20with\x20max\x20tile\x20score\x20is\x20",
    "Stack\x20Game\x20",
    "4429030watysk",
    "1clHkSz",
    "earn",
    "Farming\x20Already\x20Started",
    "38197989tqdMim",
    "Game\x20finished\x20got\x20",
    "error",
    "4kfbsNb",
    "/api/game/save-tile",
    "POST",
    "query",
    "maxTile",
    "Successfully\x20Claim\x20Daily",
    "Failed\x20To\x20Login",
    "message",
    "Successfully\x20Claim\x20Farming\x20Reward",
    "Starting\x20Farming...",
    "dailyClaimToday",
    "claimFarming",
    "Claiming\x20Farming\x20Reward...",
    "login",
  ];
  a2_0x2e42 = function () {
    return _0x5404d4;
  };
  return a2_0x2e42();
}
export class Core extends API {
  constructor(_0x1a3e10, _0x1e5da7, _0x18a351, _0x201dc2) {
    const _0x3cd482 = a2_0xebac;
    super(_0x1e5da7, _0x3cd482(0xb0), _0x201dc2),
      (this[_0x3cd482(0xa4)] = _0x1a3e10),
      (this[_0x3cd482(0x8a)] = _0x1e5da7),
      (this[_0x3cd482(0x95)] = _0x18a351);
  }
  async [a2_0x31f4ae(0x94)](_0x37d305 = ![]) {
    const _0x4a5b1e = a2_0x31f4ae;
    try {
      if (_0x37d305)
        await Helper[_0x4a5b1e(0x9f)](
          0x3e8,
          this[_0x4a5b1e(0xa4)],
          "Try\x20to\x20Login...",
          this
        );
      const _0x4b69b5 = await this[_0x4a5b1e(0xaa)](
        _0x4a5b1e(0xa2),
        _0x4a5b1e(0x89),
        undefined
      );
      if (_0x4b69b5[_0x4a5b1e(0xae)] == 0xc8) {
        if (_0x37d305)
          await Helper[_0x4a5b1e(0x9f)](
            0x3e8,
            this[_0x4a5b1e(0xa4)],
            _0x4a5b1e(0xaf),
            this
          );
        (this[_0x4a5b1e(0x99)] = _0x4b69b5[_0x4a5b1e(0x99)]),
          (this[_0x4a5b1e(0x91)] = _0x4b69b5[_0x4a5b1e(0x91)]);
      } else {
        if (_0x37d305)
          await Helper[_0x4a5b1e(0x9f)](
            0x3e8,
            this[_0x4a5b1e(0xa4)],
            _0x4a5b1e(0x8d),
            this
          );
      }
    } catch (_0x15700f) {
      throw _0x15700f;
    }
  }
  async [a2_0x31f4ae(0x9b)](_0x32a43e = ![]) {
    const _0x59f2d8 = a2_0x31f4ae;
    try {
      if (_0x32a43e)
        await Helper[_0x59f2d8(0x9f)](
          0x3e8,
          this[_0x59f2d8(0xa4)],
          _0x59f2d8(0xac),
          this
        );
      const _0x112d97 = await this["fetch"](
        _0x59f2d8(0xb6),
        _0x59f2d8(0x89),
        undefined
      );
      if (_0x112d97["status"] == 0xc8) {
        if (_0x32a43e)
          await Helper["delay"](
            0x3e8,
            this[_0x59f2d8(0xa4)],
            _0x59f2d8(0x8c),
            this
          );
      } else {
        if (_0x32a43e)
          await Helper[_0x59f2d8(0x9f)](
            0x3e8,
            this["account"],
            _0x59f2d8(0x8d),
            this
          );
      }
    } catch (_0x111f1d) {
      throw _0x111f1d;
    }
  }
  async ["getUserStats"](_0x564aab = ![]) {
    const _0x1f8b70 = a2_0x31f4ae;
    try {
      if (_0x564aab)
        await Helper[_0x1f8b70(0x9f)](
          0x3e8,
          this[_0x1f8b70(0xa4)],
          _0x1f8b70(0xa9),
          this
        );
      const _0x1b649f = await this["fetch"](
        _0x1f8b70(0xad),
        _0x1f8b70(0x89),
        undefined
      );
      if (_0x1b649f["status"] == 0xc8) {
        if (_0x564aab)
          await Helper[_0x1f8b70(0x9f)](
            0x3e8,
            this[_0x1f8b70(0xa4)],
            _0x1f8b70(0x9c),
            this
          );
        this["stats"] = _0x1b649f;
      } else
        await Helper[_0x1f8b70(0x9f)](
          0x3e8,
          this["account"],
          _0x1f8b70(0xb2),
          this
        );
    } catch (_0x4aafe0) {
      throw _0x4aafe0;
    }
  }
  async ["startFarming"]() {
    const _0x1afa79 = a2_0x31f4ae;
    try {
      await Helper[_0x1afa79(0x9f)](
        0x3e8,
        this["account"],
        _0x1afa79(0x90),
        this
      );
      const _0x324e1a = await this[_0x1afa79(0xaa)](
        _0x1afa79(0xb6),
        _0x1afa79(0x89),
        undefined
      );
      _0x324e1a[_0x1afa79(0xae)] == 0xc8
        ? await Helper[_0x1afa79(0x9f)](
            0x3e8,
            this[_0x1afa79(0xa4)],
            "Farming\x20Started",
            this
          )
        : await Helper["delay"](0x3e8, this["account"], _0x1afa79(0x83), this);
    } catch (_0x3ec30c) {
      throw _0x3ec30c;
    }
  }
  async [a2_0x31f4ae(0x92)]() {
    const _0xd91cf0 = a2_0x31f4ae;
    try {
      await Helper[_0xd91cf0(0x9f)](
        0x3e8,
        this["account"],
        _0xd91cf0(0x93),
        this
      );
      const _0x3a7ec9 = await this["fetch"](_0xd91cf0(0x9a), "POST", undefined);
      _0x3a7ec9["status"] == 0xc8
        ? (await Helper["delay"](
            0x3e8,
            this[_0xd91cf0(0xa4)],
            _0xd91cf0(0x8f),
            this
          ),
          await this[_0xd91cf0(0xb3)]())
        : await Helper[_0xd91cf0(0x9f)](
            0xbb8,
            this["account"],
            _0xd91cf0(0x9d) + _0x3a7ec9[_0xd91cf0(0x86)],
            this
          );
    } catch (_0x2d8340) {
      throw _0x2d8340;
    }
  }
  async [a2_0x31f4ae(0x9e)]() {
    const _0x293ea7 = a2_0x31f4ae;
    try {
      await Helper[_0x293ea7(0x9f)](
        0x3e8,
        this[_0x293ea7(0xa4)],
        _0x293ea7(0xa5),
        this
      );
      const _0x102335 = await this[_0x293ea7(0xaa)](
        "/api/game/start",
        _0x293ea7(0x89),
        undefined
      );
      if (_0x102335[_0x293ea7(0xae)] == 0xc8) {
        await Helper[_0x293ea7(0x9f)](
          0x3e8,
          this["account"],
          _0x293ea7(0xa8),
          this
        );
        const _0x208036 = { maxTile: 0x400 * 0x2 },
          _0x43855c = await this[_0x293ea7(0xaa)](
            _0x293ea7(0x88),
            _0x293ea7(0x89),
            undefined,
            _0x208036
          );
        await Helper[_0x293ea7(0x9f)](
          0x3e8,
          this[_0x293ea7(0xa4)],
          _0x43855c["message"],
          this
        ),
          await Helper[_0x293ea7(0x9f)](
            0xea60,
            this["account"],
            _0x293ea7(0xb7) + _0x208036[_0x293ea7(0x8b)],
            this
          );
        const _0x1eb644 = await this[_0x293ea7(0xaa)](
          "/api/game/over",
          _0x293ea7(0x89),
          undefined
        );
        await Helper[_0x293ea7(0x9f)](
          0x1388,
          this[_0x293ea7(0xa4)],
          _0x293ea7(0x85) +
            _0x1eb644[_0x293ea7(0x82)] +
            _0x293ea7(0x96) +
            _0x1eb644[_0x293ea7(0xa0)] +
            _0x293ea7(0xa3),
          this
        ),
          await this[_0x293ea7(0x94)]();
      } else
        await Helper[_0x293ea7(0x9f)](
          0xbb8,
          this[_0x293ea7(0xa4)],
          _0x293ea7(0x9d) + _0x102335["error"],
          this
        );
    } catch (_0x8207ed) {
      throw _0x8207ed;
    }
  }
  async [a2_0x31f4ae(0xb4)]() {
    const _0x333fbc = a2_0x31f4ae;
    try {
      await Helper[_0x333fbc(0x9f)](
        0x3e8,
        this[_0x333fbc(0xa4)],
        "Start\x20Playing\x20Stack\x20Game...",
        this
      );
      const _0x561d86 = await this[_0x333fbc(0xaa)](
        "/api/stack/start",
        "POST",
        undefined
      );
      if (_0x561d86[_0x333fbc(0xae)] == 0xc8) {
        await Helper[_0x333fbc(0x9f)](
          0x3e8,
          this[_0x333fbc(0xa4)],
          "Stack\x20Game\x20Started\x20",
          this
        );
        const _0xdd61e3 = { score: 0x0 };
        for (const _0x2f2d1b of Array(0xc)) {
          (_0xdd61e3[_0x333fbc(0x98)] += 0xa),
            await Helper[_0x333fbc(0x9f)](
              0x2328,
              this[_0x333fbc(0xa4)],
              _0x333fbc(0xa1) + _0xdd61e3[_0x333fbc(0x98)],
              this
            );
          const _0x29b2e6 = await this[_0x333fbc(0xaa)](
            "/api/stack/update",
            _0x333fbc(0x89),
            undefined,
            _0xdd61e3
          );
          await Helper[_0x333fbc(0x9f)](
            0x3e8,
            this["account"],
            _0x333fbc(0x7f) +
              _0x29b2e6[_0x333fbc(0x8e)] +
              _0x333fbc(0xb5) +
              _0xdd61e3[_0x333fbc(0x98)],
            this
          );
        }
        _0xdd61e3[_0x333fbc(0x98)] += 0x1;
        const _0x205ceb = await this["fetch"](
          "/api/stack/end",
          _0x333fbc(0x89),
          undefined,
          _0xdd61e3
        );
        await Helper[_0x333fbc(0x9f)](
          0x1388,
          this[_0x333fbc(0xa4)],
          _0x333fbc(0x85) +
            _0x205ceb[_0x333fbc(0x82)] +
            _0x333fbc(0x96) +
            _0x205ceb[_0x333fbc(0xa0)] +
            _0x333fbc(0xa3),
          this
        ),
          await this[_0x333fbc(0x94)]();
      } else
        await Helper[_0x333fbc(0x9f)](
          0xbb8,
          this["account"],
          "Error\x20:\x20" + _0x561d86[_0x333fbc(0x86)],
          this
        );
    } catch (_0x5d1b5e) {
      throw _0x5d1b5e;
    }
  }
}
