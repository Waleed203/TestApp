"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [5828],
  {
    5828: (p, c, o) => {
      o.r(c), o.d(c, { ion_text: () => a });
      var r = o(2992),
        u = o(5256),
        _ = o(8523);
      const a = class {
        constructor(s) {
          (0, r.r)(this, s), (this.color = void 0);
        }
        render() {
          const s = (0, _.b)(this);
          return (0, r.h)(
            r.H,
            {
              key: "8922ebdd7486c9cb9f9b547a49e5be2261df4ba1",
              class: (0, u.c)(this.color, { [s]: !0 }),
            },
            (0, r.h)("slot", {
              key: "164cbd0f81a00adfac04f544524e905f721c121c",
            }),
          );
        }
      };
      a.style = ":host(.ion-color){color:var(--ion-color-base)}";
    },
    5256: (p, c, o) => {
      o.d(c, { c: () => _, g: () => l, h: () => u, o: () => s });
      var r = o(1528);
      const u = (t, e) => null !== e.closest(t),
        _ = (t, e) =>
          "string" == typeof t && t.length > 0
            ? Object.assign({ "ion-color": !0, [`ion-color-${t}`]: !0 }, e)
            : e,
        l = (t) => {
          const e = {};
          return (
            ((t) =>
              void 0 !== t
                ? (Array.isArray(t) ? t : t.split(" "))
                    .filter((n) => null != n)
                    .map((n) => n.trim())
                    .filter((n) => "" !== n)
                : [])(t).forEach((n) => (e[n] = !0)),
            e
          );
        },
        a = /^[a-z][a-z0-9+\-.]*:/,
        s = (function () {
          var t = (0, r.c)(function* (e, n, d, h) {
            if (null != e && "#" !== e[0] && !a.test(e)) {
              const i = document.querySelector("ion-router");
              if (i) return n?.preventDefault(), i.push(e, d, h);
            }
            return !1;
          });
          return function (n, d, h, i) {
            return t.apply(this, arguments);
          };
        })();
    },
  },
]);
