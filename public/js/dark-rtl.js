"use strict";
var _0x46ff08 = _0xae92;
! function (t, e) {
    for (var r = _0xae92, c = _0xed12();;) try {
        if (323765 === parseInt(r(184)) / 1 + -parseInt(r(187)) / 2 + -parseInt(r(206)) / 3 * (-parseInt(r(207)) / 4) + -parseInt(r(191)) / 5 + parseInt(r(196)) / 6 + parseInt(r(204)) / 7 + -parseInt(r(194)) / 8) break;
        c.push(c.shift())
    } catch (t) {
        c.push(c.shift())
    }
}();
var toggleSwitch = document[_0x46ff08(205)](_0x46ff08(185)),
    currentTheme = localStorage[_0x46ff08(200)]("theme");

function switchTheme(t) {
    var e = _0x46ff08;
    t[e(193)][e(215)] ? (document[e(201)][e(212)](e(199), e(210)), localStorage.setItem(e(208), e(210))) : (document[e(201)][e(212)](e(199), e(197)), localStorage.setItem(e(208), e(197)))
}

function _0xed12() {
    var t = ["querySelector", "dark", "opacity", "setAttribute", "click", "none", "checked", "setItem", ".dark-mode-switching", "562286mdFtvr", "darkSwitch", "rtl", "445126yimbPW", "rtlSwitch", "ltr", "change", "2261660GfexXB", "addEventListener", "target", "2489456tKRFFF", "block", "843552yrslws", "light", "style", "data-theme", "getItem", "documentElement", "view-mode", "display", "4202219lpwuKx", "getElementById", "19941yhgzxw", "4xoDtbp", "theme"];
    return (_0xed12 = function () {
        return t
    })()
}

function _0xae92(t, e) {
    var r = _0xed12();
    return (_0xae92 = function (t, e) {
        return r[t -= 184]
    })(t, e)
}
currentTheme && (document.documentElement[_0x46ff08(212)](_0x46ff08(199), currentTheme), currentTheme === _0x46ff08(210) && toggleSwitch && (toggleSwitch[_0x46ff08(215)] = !0)), toggleSwitch && (toggleSwitch[_0x46ff08(192)]("change", switchTheme, !1), toggleSwitch[_0x46ff08(192)](_0x46ff08(213), (function () {
    var t = _0x46ff08,
        e = document[t(209)](t(217));
    e[t(198)][t(203)] = t(195), e[t(198)].opacity = 1, setTimeout((function () {
        var t = setInterval((function () {
            var r = _0xae92;
            !e[r(198)][r(211)] && (e[r(198)].opacity = 1), e[r(198)][r(211)] > 0 ? e[r(198)][r(211)] -= .1 : (clearInterval(t), e[r(198)][r(203)] = r(214))
        }), 20)
    }), 1e3)
})));
var rtltoggleSwitch = document[_0x46ff08(205)](_0x46ff08(188)),
    rtlcurrentTheme = localStorage[_0x46ff08(200)](_0x46ff08(186));

function rtlswitchTheme(t) {
    var e = _0x46ff08;
    t[e(193)][e(215)] ? (document.documentElement.setAttribute(e(202), e(186)), localStorage.setItem(e(186), e(186))) : (document.documentElement.setAttribute(e(202), e(189)), localStorage[e(216)](e(186), e(189)))
}
rtlcurrentTheme && (document[_0x46ff08(201)][_0x46ff08(212)](_0x46ff08(202), rtlcurrentTheme), "rtl" === rtlcurrentTheme && rtltoggleSwitch && (rtltoggleSwitch.checked = !0)), rtltoggleSwitch && (rtltoggleSwitch[_0x46ff08(192)](_0x46ff08(190), rtlswitchTheme, !1), rtltoggleSwitch[_0x46ff08(192)](_0x46ff08(213), (function () {
    var t = _0x46ff08,
        e = document.querySelector(".rtl-mode-switching");
    e[t(198)][t(203)] = "block", e[t(198)].opacity = 1, setTimeout((function () {
        var t = setInterval((function () {
            var r = _0xae92;
            !e[r(198)][r(211)] && (e[r(198)][r(211)] = 1), e[r(198)][r(211)] > 0 ? e[r(198)].opacity -= .1 : (clearInterval(t), e.style[r(203)] = r(214))
        }), 20)
    }), 1e3)
})));