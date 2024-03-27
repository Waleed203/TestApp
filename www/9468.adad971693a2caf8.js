"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [9468],
  {
    9468: (b, g, i) => {
      i.r(g), i.d(g, { Tab1PageModule: () => M });
      var o = i(2112),
        c = i(1368),
        p = i(4716),
        d = i(1224),
        t = i(4496),
        f = i(5196),
        u = i(9240),
        m = i(9868),
        C = i(6088),
        P = i(6032),
        O = i(8604);
      function v(n, l) {
        1 & n && t.wR5(0, "ion-spinner", 10);
      }
      function T(n, l) {
        if (1 & n) {
          const e = t.KQA();
          t.I0R(0, "div", 12),
            t.qCj("click", function () {
              const h = t.usT(e).$implicit,
                r = t.GaO(2);
              return t.CGJ(r.gotoCharacter(h));
            }),
            t.I0R(1, "div", 13),
            t.wR5(2, "img", 14),
            t.C$Y(),
            t.I0R(3, "div", 15)(4, "div"),
            t.OEk(5),
            t.C$Y(),
            t.I0R(6, "div")(7, "b"),
            t.OEk(8, "Species:"),
            t.C$Y(),
            t.OEk(9),
            t.C$Y(),
            t.I0R(10, "div")(11, "b"),
            t.OEk(12, "Status:"),
            t.C$Y(),
            t.OEk(13),
            t.C$Y(),
            t.I0R(14, "div")(15, "b"),
            t.OEk(16, "Location:"),
            t.C$Y(),
            t.OEk(17),
            t.C$Y()()();
        }
        if (2 & n) {
          const e = l.$implicit;
          t.yG2(2),
            t.E7m("src", e.image, t.K6U),
            t.yG2(3),
            t.oRS(" ", e.name, " "),
            t.yG2(4),
            t.oRS(" ", e.species, " "),
            t.yG2(4),
            t.oRS(" ", e.status, " "),
            t.yG2(4),
            t.oRS(" ", e.location.name, " ");
        }
      }
      function y(n, l) {
        if (
          (1 & n &&
            (t.I0R(0, "ion-list"), t.yuY(1, T, 18, 5, "div", 11), t.C$Y()),
          2 & n)
        ) {
          const e = t.GaO();
          t.yG2(), t.E7m("ngForOf", e.characters);
        }
      }
      const R = [
        {
          path: "",
          component: (() => {
            class n {
              constructor() {
                (this.globalService = (0, t.uUt)(f.f)),
                  (this.utils = (0, t.uUt)(C.e)),
                  (this.nav = (0, t.uUt)(u.wX)),
                  (this.internet = (0, t.uUt)(m.O)),
                  (this.cd = (0, t.uUt)(t.kD9)),
                  (this.page = 1),
                  (this.perPage = 20),
                  (this.characters = []),
                  (this.openThis = !1),
                  (this.populated = !1);
              }
              gotoCharacter(e) {
                this.nav.navigateForward([
                  "details",
                  { character: JSON.stringify(e) },
                ]);
              }
              handleRefresh(e) {
                setTimeout(() => {
                  e.target.complete(), this.ngOnInit();
                }, 1e3);
              }
              ngOnInit() {}
              fetchData() {
                return new Promise((e, s) => {
                  this.globalService
                    .sendHTTPClientRequest("character?page=" + this.page)
                    .then(
                      (a) => {
                        console.log("response = ", a),
                          (this.totalPages = a.info.pages),
                          this.page++,
                          this.characters.push(...a.results),
                          (this.populated = !0),
                          e("done");
                      },
                      (a) => {
                        console.log("err = ", a), s("err");
                      },
                    );
                });
              }
              loadData(e) {
                console.log("load more", this.page, this.totalPages),
                  this.page <= this.totalPages
                    ? this.fetchData().then(() => {
                        e.target.complete();
                      })
                    : (e.target.disabled = !0);
              }
              ionViewWillEnter() {
                (this.characters = []),
                  (this.populated = !1),
                  (this.page = 1),
                  this.fetchData(),
                  this.internet.getInternetState$.subscribe((e) => {
                    console.log("in tab1 = ", e),
                      0 == e
                        ? ((this.openThis = !0),
                          this.utils.presentToast("Internet disconnected"),
                          (this.populated = !0),
                          this.cd.detectChanges())
                        : ((this.openThis = !1),
                          this.fetchData(),
                          this.cd.detectChanges());
                  });
              }
              static #t = (this.ɵfac = function (s) {
                return new (s || n)();
              });
              static #e = (this.ɵcmp = t.In1({
                type: n,
                selectors: [["app-tab1"]],
                decls: 10,
                vars: 4,
                consts: [
                  ["title", "List of Characters"],
                  [3, "fullscreen"],
                  [1, "wrapper"],
                  ["slot", "fixed", 3, "ionRefresh"],
                  [
                    "pullingText",
                    "Fetch Products",
                    "refreshingSpinner",
                    "circles",
                  ],
                  ["name", "crescent", 4, "ngIf"],
                  [4, "ngIf"],
                  ["threshold", "100px", 3, "ionInfinite"],
                  [
                    "loadingSpinner",
                    "crescent",
                    "loadingText",
                    "Fetching Characters",
                  ],
                  [3, "openThis"],
                  ["name", "crescent"],
                  ["class", "main", 3, "click", 4, "ngFor", "ngForOf"],
                  [1, "main", 3, "click"],
                  [1, "left"],
                  [3, "src"],
                  [1, "right"],
                ],
                template: function (s, a) {
                  1 & s &&
                    (t.wR5(0, "app-header", 0),
                    t.I0R(1, "ion-content", 1)(2, "div", 2)(
                      3,
                      "ion-refresher",
                      3,
                    ),
                    t.qCj("ionRefresh", function (r) {
                      return a.handleRefresh(r);
                    }),
                    t.wR5(4, "ion-refresher-content", 4),
                    t.C$Y(),
                    t.yuY(5, v, 1, 0, "ion-spinner", 5)(
                      6,
                      y,
                      2,
                      1,
                      "ion-list",
                      6,
                    ),
                    t.I0R(7, "ion-infinite-scroll", 7),
                    t.qCj("ionInfinite", function (r) {
                      return a.loadData(r);
                    }),
                    t.wR5(8, "ion-infinite-scroll-content", 8),
                    t.C$Y()(),
                    t.wR5(9, "app-internet", 9),
                    t.C$Y()),
                    2 & s &&
                      (t.yG2(),
                      t.E7m("fullscreen", !0),
                      t.yG2(4),
                      t.E7m("ngIf", !a.populated),
                      t.yG2(),
                      t.E7m("ngIf", a.populated),
                      t.yG2(3),
                      t.E7m("openThis", a.openThis));
                },
                dependencies: [
                  o._i,
                  o.k3,
                  o.IJ,
                  o.OC,
                  o._I,
                  o.Wi,
                  o.YA,
                  c.ay,
                  c.u_,
                  P.k,
                  O.O,
                ],
                styles: [
                  ".wrapper[_ngcontent-%COMP%]{width:90%;margin:5% auto}ion-list[_ngcontent-%COMP%]{background-color:#fff}.main[_ngcontent-%COMP%]{width:100%;margin:0 auto 5%;box-shadow:2px 3px 9px #3a3a3a2e;border-radius:10px;display:flex;justify-content:space-between;align-items:flex-start}.main[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{width:40%;display:flex;border-radius:10px}.main[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:10px!important}.main[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{width:60%;display:flex;flex-direction:column;padding:10px}.main[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){font-size:18px;font-weight:600}.main[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){font-size:16px}ion-spinner[_ngcontent-%COMP%]{width:100%;height:40px}",
                ],
              }));
            }
            return n;
          })(),
        },
      ];
      let I = (() => {
        class n {
          static #t = (this.ɵfac = function (s) {
            return new (s || n)();
          });
          static #e = (this.ɵmod = t.a4G({ type: n }));
          static #n = (this.ɵinj = t.s3X({
            imports: [d.qQ.forChild(R), d.qQ],
          }));
        }
        return n;
      })();
      var x = i(4948);
      let M = (() => {
        class n {
          static #t = (this.ɵfac = function (s) {
            return new (s || n)();
          });
          static #e = (this.ɵmod = t.a4G({ type: n }));
          static #n = (this.ɵinj = t.s3X({
            imports: [o.wZ, c.MD, p.y, x.k, I],
          }));
        }
        return n;
      })();
    },
  },
]);
