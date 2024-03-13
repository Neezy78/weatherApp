const _0x5902df = _0x267c;
(function (_0x30c775, _0x4e40e8) {
  const _0x16016d = _0x267c,
    _0x27d347 = _0x30c775();
  while (!![]) {
    try {
      const _0xc9524c =
        parseInt(_0x16016d(0x1d4)) / 0x1 +
        -parseInt(_0x16016d(0x1d7)) / 0x2 +
        (parseInt(_0x16016d(0x1ce)) / 0x3) *
          (parseInt(_0x16016d(0x1da)) / 0x4) +
        parseInt(_0x16016d(0x1d5)) / 0x5 +
        -parseInt(_0x16016d(0x1d6)) / 0x6 +
        (-parseInt(_0x16016d(0x1c8)) / 0x7) *
          (-parseInt(_0x16016d(0x1c0)) / 0x8) +
        parseInt(_0x16016d(0x1c1)) / 0x9;
      if (_0xc9524c === _0x4e40e8) break;
      else _0x27d347["push"](_0x27d347["shift"]());
    } catch (_0xb25d03) {
      _0x27d347["push"](_0x27d347["shift"]());
    }
  }
})(_0x1001, 0xae58c);
const key = _0x5902df(0x1d9),
  url = _0x5902df(0x1c2) + key + _0x5902df(0x1d8);
function getApi(_0x79f39a) {
  const _0x1c9f4f = _0x5902df;
  return fetch(url + _0x79f39a)
    ["then"]((_0x7bb8e6) => {
      return _0x7bb8e6["json"]();
    })
    [_0x1c9f4f(0x1c3)]((_0x58a735) => {
      return _0x58a735;
    })
    [_0x1c9f4f(0x1c9)]((_0x3cbb47) => {
      const _0x4b8245 = _0x1c9f4f;
      console[_0x4b8245(0x1ca)](_0x3cbb47);
    });
}
async function getApiDetails(_0x6157a9) {
  const _0x58596b = await getApi(_0x6157a9);
  render(_0x58596b);
}
function _0x1001() {
  const _0x2e1823 = [
    "\x20celsius\x20(feels\x20like\x20",
    "london",
    "current",
    "899442pypilJ",
    "4075620JjKHSw",
    "7428558CSeBUL",
    "1305310gcqGtl",
    "&q=",
    "be14689db2874a20afd140028240603",
    "44njGQro",
    "condition",
    "addEventListener",
    "</p>\x0a\x20\x20",
    "</p>\x0a\x20\x20</div>\x0a\x20\x20<p>Current\x20temperature:\x20",
    "name",
    "log",
    "1342472XUcUwB",
    "5791059KwuLpr",
    "http://api.weatherapi.com/v1/current.json?key=",
    "then",
    "text",
    "\x0a\x20\x20<h2>",
    "querySelector",
    ".js-container",
    "7wLSdYO",
    "catch",
    "error",
    "#search",
    "innerHTML",
    "country",
    "21558NTfGQf",
    "icon",
    "location",
  ];
  _0x1001 = function () {
    return _0x2e1823;
  };
  return _0x1001();
}
function _0x267c(_0x59d9b2, _0x454f6e) {
  const _0x1001ed = _0x1001();
  return (
    (_0x267c = function (_0x267cc1, _0x2c319c) {
      _0x267cc1 = _0x267cc1 - 0x1c0;
      let _0x1e0b2f = _0x1001ed[_0x267cc1];
      return _0x1e0b2f;
    }),
    _0x267c(_0x59d9b2, _0x454f6e)
  );
}
function render(_0x1522d7) {
  const _0x384919 = _0x5902df;
  let _0x8e57d4 = document["querySelector"](_0x384919(0x1c7));
  console[_0x384919(0x1e0)](_0x1522d7),
    (_0x8e57d4[_0x384919(0x1cc)] = ""),
    (_0x8e57d4["innerHTML"] =
      _0x384919(0x1c5) +
      _0x1522d7[_0x384919(0x1d0)][_0x384919(0x1df)] +
      ",\x20" +
      _0x1522d7[_0x384919(0x1d0)][_0x384919(0x1cd)] +
      "</h2>\x0a\x20\x20<div\x20class=\x22condition-container\x22>\x0a\x20\x20\x20\x20<img\x20src=\x22" +
      _0x1522d7[_0x384919(0x1d3)][_0x384919(0x1db)][_0x384919(0x1cf)] +
      "\x22/>\x0a\x20\x20\x20\x20<p>" +
      _0x1522d7[_0x384919(0x1d3)][_0x384919(0x1db)][_0x384919(0x1c4)] +
      _0x384919(0x1de) +
      _0x1522d7[_0x384919(0x1d3)]["temp_c"] +
      _0x384919(0x1d1) +
      _0x1522d7["current"]["feelslike_c"] +
      "\x20celsius).</p>\x0a\x20\x20<p>" +
      _0x1522d7[_0x384919(0x1d0)]["localtime"] +
      _0x384919(0x1dd));
}
function localTime(_0x4ed0c2) {
  console["log"](_0x4ed0c2);
}
let searchBtn = document[_0x5902df(0x1c6)](_0x5902df(0x1cb));
searchBtn[_0x5902df(0x1dc)]("click", () => {
  const _0x1cf5d3 = _0x5902df;
  let _0x57e640 = document[_0x1cf5d3(0x1c6)]("#cityInput");
  getApiDetails(_0x57e640["value"]);
}),
  getApiDetails(_0x5902df(0x1d2));
