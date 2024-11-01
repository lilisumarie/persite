"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
  [142],
  {
    75561: (t, i, o) => {
      var n = o(74692);
      o(28706),
        o(27495),
        o(25440),
        n("body").on("click", "a", function () {
          var t = n(this),
            i = t.attr("href");
          if (void 0 === i) return !1;
          if ("#" === i) return !1;
          var o = t[0],
            e = o.host !== window.location.host,
            a = 0 === i.indexOf("mailto:") || 0 === i.indexOf("tel:"),
            r = "_blank" === o.target;
          if (r && e && !a) return !0;
          if (e || a)
            return (
              t.tooltip({
                animation: !1,
                trigger: "manual",
                template:
                  '<div class="tooltip hint" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                title: "This link will work on your published site.",
                placement: "top",
              }),
              t.tooltip("show"),
              setTimeout(function () {
                t.tooltip("dispose");
              }, 2e3),
              !1
            );
          var c = "".concat(window.appRoot, "/preview");
          if (0 !== o.pathname.indexOf(c)) {
            var l = o.pathname.replace("/beta/", ""),
              s =
                0 === l.indexOf("/")
                  ? "".concat(o.origin).concat(c).concat(l)
                  : "".concat(o.origin).concat(c, "/").concat(l);
            return r ? window.open(s) : (window.location.href = s), !1;
          }
          return !0;
        });
    },
  },
  (t) => {
    t.O(0, [660], () => {
      return (i = 75561), t((t.s = i));
      var i;
    });
    t.O();
  },
]);
