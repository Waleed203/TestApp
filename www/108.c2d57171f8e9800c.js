"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [108],
  {
    108: (h, c, s) => {
      s.r(c), s.d(c, { Tab3PageModule: () => f });
      var e = s(2112),
        r = s(1368),
        l = s(4716),
        i = s(1224),
        t = s(4496);
      const u = [
        {
          path: "",
          component: (() => {
            class a {
              constructor() {}
              static #t = (this.ɵfac = function (n) {
                return new (n || a)();
              });
              static #a = (this.ɵcmp = t.In1({
                type: a,
                selectors: [["app-tab3"]],
                decls: 9,
                vars: 2,
                consts: [
                  [3, "translucent"],
                  [3, "fullscreen"],
                  ["collapse", "condense"],
                  ["size", "large"],
                ],
                template: function (n, p) {
                  1 & n &&
                    (t.I0R(0, "ion-header", 0)(1, "ion-toolbar")(
                      2,
                      "ion-title",
                    ),
                    t.OEk(3, " Tab 3 "),
                    t.C$Y()()(),
                    t.I0R(4, "ion-content", 1)(5, "ion-header", 2)(
                      6,
                      "ion-toolbar",
                    )(7, "ion-title", 3),
                    t.OEk(8, "Tab 3"),
                    t.C$Y()()()()),
                    2 & n &&
                      (t.E7m("translucent", !0),
                      t.yG2(4),
                      t.E7m("fullscreen", !0));
                },
                dependencies: [e._i, e.wB, e.tM, e.Md],
              }));
            }
            return a;
          })(),
        },
      ];
      let d = (() => {
          class a {
            static #t = (this.ɵfac = function (n) {
              return new (n || a)();
            });
            static #a = (this.ɵmod = t.a4G({ type: a }));
            static #n = (this.ɵinj = t.s3X({
              imports: [i.qQ.forChild(u), i.qQ],
            }));
          }
          return a;
        })(),
        f = (() => {
          class a {
            static #t = (this.ɵfac = function (n) {
              return new (n || a)();
            });
            static #a = (this.ɵmod = t.a4G({ type: a }));
            static #n = (this.ɵinj = t.s3X({ imports: [e.wZ, r.MD, l.y, d] }));
          }
          return a;
        })();
    },
  },
]);
