function _0x2cf0(_0x2b5542, _0x4bc2cc) {
  const _0x1522dc = _0x1522();
  return (
    (_0x2cf0 = function (_0x2cf0ad, _0xb82f0f) {
      _0x2cf0ad = _0x2cf0ad - 0x74;
      let _0xd4dc9c = _0x1522dc[_0x2cf0ad];
      return _0xd4dc9c;
    }),
    _0x2cf0(_0x2b5542, _0x4bc2cc)
  );
}
const _0x3c55da = _0x2cf0;
(function (_0x26e9b0, _0x29c967) {
  const _0x4c7925 = _0x2cf0,
    _0x542996 = _0x26e9b0();
  while (!![]) {
    try {
      const _0x547167 =
        parseInt(_0x4c7925(0x8d)) / 0x1 +
        (-parseInt(_0x4c7925(0x8e)) / 0x2) * (parseInt(_0x4c7925(0x93)) / 0x3) +
        -parseInt(_0x4c7925(0x95)) / 0x4 +
        (-parseInt(_0x4c7925(0x86)) / 0x5) *
          (-parseInt(_0x4c7925(0x77)) / 0x6) +
        (parseInt(_0x4c7925(0x87)) / 0x7) * (-parseInt(_0x4c7925(0x83)) / 0x8) +
        -parseInt(_0x4c7925(0x7a)) / 0x9 +
        parseInt(_0x4c7925(0x85)) / 0xa;
      if (_0x547167 === _0x29c967) break;
      else _0x542996["push"](_0x542996["shift"]());
    } catch (_0x13a318) {
      _0x542996["push"](_0x542996["shift"]());
    }
  }
})(_0x1522, 0xbe464);
const key = _0x3c55da(0x75),
  url = _0x3c55da(0x98) + key + _0x3c55da(0x84);
function _0x1522() {
  const _0x182710 = [
    "location",
    "country",
    ".js-container",
    "</p>\x0a\x20\x20</div>\x0a\x20\x20<p>Current\x20temperature:\x20",
    "3cgAVLr",
    "icon",
    "3644212ZPHfDI",
    "\x20celsius).</p>\x0a\x20\x20<p>",
    "querySelector",
    "http://api.weatherapi.com/v1/current.json?key=",
    "#search",
    "log",
    "name",
    "be14689db2874a20afd140028240603",
    "error",
    "701262SfacbW",
    "value",
    "localtime",
    "11717928tNZkHk",
    "json",
    "condition",
    "current",
    "\x22/>\x0a\x20\x20\x20\x20<p>",
    "innerHTML",
    "feelslike_c",
    "temp_c",
    "text",
    "88YPxdcQ",
    "&q=",
    "35508740TDVArK",
    "25PBrIEn",
    "724157TCnxmT",
    "then",
    "london",
    "\x20celsius\x20(feels\x20like\x20",
    "#cityInput",
    "click",
    "781280lOqsDT",
    "1572338pOTLTR",
  ];
  _0x1522 = function () {
    return _0x182710;
  };
  return _0x1522();
}
function getApi(_0x37e5fd) {
  const _0x28a8a8 = _0x3c55da;
  return fetch(url + _0x37e5fd, { mode: "cors" })
    [_0x28a8a8(0x88)]((_0x472170) => {
      const _0x516da0 = _0x28a8a8;
      return _0x472170[_0x516da0(0x7b)]();
    })
    [_0x28a8a8(0x88)]((_0x1d67d6) => {
      return _0x1d67d6;
    })
    ["catch"]((_0x304f1a) => {
      const _0x15dc30 = _0x28a8a8;
      console[_0x15dc30(0x76)](_0x304f1a);
    });
}
async function getApiDetails(_0xa28089) {
  const _0x51408b = await getApi(_0xa28089);
  render(_0x51408b);
}
function render(_0x2ec4e2) {
  const _0x529cf1 = _0x3c55da;
  let _0x38927a = document[_0x529cf1(0x97)](_0x529cf1(0x91));
  console[_0x529cf1(0x9a)](_0x2ec4e2),
    (_0x38927a[_0x529cf1(0x7f)] = ""),
    (_0x38927a["innerHTML"] =
      "\x0a\x20\x20<h2>" +
      _0x2ec4e2[_0x529cf1(0x8f)][_0x529cf1(0x74)] +
      ",\x20" +
      _0x2ec4e2["location"][_0x529cf1(0x90)] +
      "</h2>\x0a\x20\x20<div\x20class=\x22condition-container\x22>\x0a\x20\x20\x20\x20<img\x20src=\x22" +
      _0x2ec4e2[_0x529cf1(0x7d)][_0x529cf1(0x7c)][_0x529cf1(0x94)] +
      _0x529cf1(0x7e) +
      _0x2ec4e2[_0x529cf1(0x7d)][_0x529cf1(0x7c)][_0x529cf1(0x82)] +
      _0x529cf1(0x92) +
      _0x2ec4e2[_0x529cf1(0x7d)][_0x529cf1(0x81)] +
      _0x529cf1(0x8a) +
      _0x2ec4e2[_0x529cf1(0x7d)][_0x529cf1(0x80)] +
      _0x529cf1(0x96) +
      _0x2ec4e2["location"][_0x529cf1(0x79)] +
      "</p>\x0a\x20\x20");
}
function localTime(_0x46e19b) {
  const _0x469124 = _0x3c55da;
  console[_0x469124(0x9a)](_0x46e19b);
}
let searchBtn = document[_0x3c55da(0x97)](_0x3c55da(0x99));
searchBtn["addEventListener"](_0x3c55da(0x8c), () => {
  const _0xdbce66 = _0x3c55da;
  let _0x1ac4c3 = document[_0xdbce66(0x97)](_0xdbce66(0x8b));
  getApiDetails(_0x1ac4c3[_0xdbce66(0x78)]);
}),
  getApiDetails(_0x3c55da(0x89));
