"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [3440],
  {
    4948: (u, h, e) => {
      e.d(h, { k: () => t });
      var l = e(2112),
        d = e(1368),
        o = e(4716),
        r = e(4496);
      let t = (() => {
        class c {
          static #t = (this.ɵfac = function (p) {
            return new (p || c)();
          });
          static #e = (this.ɵmod = r.a4G({ type: c }));
          static #n = (this.ɵinj = r.s3X({ imports: [l.wZ, d.MD, o.y] }));
        }
        return c;
      })();
    },
    3440: (u, h, e) => {
      e.r(h), e.d(h, { DetailsPageModule: () => R });
      var l = e(1368),
        d = e(4716),
        o = e(2112),
        r = e(1224),
        t = e(4496),
        c = e(9240),
        C = e(5196),
        g = e(9868),
        p = e(6088),
        P = e(8604);
      function v(n, f) {
        1 & n && t.wR5(0, "ion-spinner", 17);
      }
      function O(n, f) {
        if (
          (1 & n &&
            (t.I0R(0, "ion-item")(1, "ion-label"),
            t.OEk(2),
            t.C$Y(),
            t.I0R(3, "ion-label", 18),
            t.OEk(4),
            t.C$Y()()),
          2 & n)
        ) {
          const s = f.$implicit;
          t.yG2(2), t.cNF(s.episode), t.yG2(2), t.cNF(s.name);
        }
      }
      const y = [
        {
          path: "",
          component: (() => {
            class n {
              constructor() {
                (this.showBack = !0),
                  (this.utils = (0, t.uUt)(p.e)),
                  (this.internet = (0, t.uUt)(g.O)),
                  (this.cd = (0, t.uUt)(t.kD9)),
                  (this.openThis = !1),
                  (this.route = (0, t.uUt)(r.gV)),
                  (this.global = (0, t.uUt)(C.f)),
                  (this.nav = (0, t.uUt)(c.wX)),
                  (this.character = []),
                  (this.episodesPopulated = !1),
                  this.route.snapshot.params.character &&
                    ((this.character = JSON.parse(
                      this.route.snapshot.params.character,
                    )),
                    console.log("character = ", this.character),
                    (this.character.episodesInfo = []),
                    setTimeout(() => {
                      this.fetchEpisodeDetails();
                    }, 2e3));
              }
              fetchEpisodeDetails() {
                return new Promise((s, a) => {
                  for (var i = 0; i < this.character.episode.length; i++)
                    this.global
                      .sendHTTPClientRequest(
                        this.character.episode[i],
                        "remove",
                      )
                      .then((m) => {
                        this.character.episodesInfo.push(m);
                      });
                  console.log("episodes info = ", this.character.episodesInfo),
                    (this.episodesPopulated = !0),
                    s("done");
                });
              }
              goback() {
                this.nav.pop();
              }
              ngOnInit() {
                this.internet.getInternetState$.subscribe((s) => {
                  0 == s
                    ? ((this.openThis = !0),
                      this.utils.presentToast("Internet disconnected"),
                      this.cd.detectChanges())
                    : ((this.openThis = !1), this.cd.detectChanges());
                });
              }
              static #t = (this.ɵfac = function (a) {
                return new (a || n)();
              });
              static #e = (this.ɵcmp = t.In1({
                type: n,
                selectors: [["app-details"]],
                decls: 25,
                vars: 11,
                consts: [
                  [3, "fullscreen"],
                  [1, "imageContainer"],
                  [1, "backBtn", 3, "click"],
                  ["name", "arrow-back", 2, "color", "#222"],
                  ["pagination", "true"],
                  [3, "src"],
                  [1, "wrapper"],
                  [1, "details"],
                  [1, "heading"],
                  [1, "row"],
                  [1, "info"],
                  [3, "name"],
                  ["name", "location"],
                  [1, "text"],
                  ["name", "crescent", 4, "ngIf"],
                  [4, "ngFor", "ngForOf"],
                  [3, "openThis"],
                  ["name", "crescent"],
                  [2, "text-align", "right"],
                ],
                template: function (a, i) {
                  1 & a &&
                    (t.I0R(0, "ion-content", 0)(1, "div", 1)(2, "div", 2),
                    t.qCj("click", function () {
                      return i.goback();
                    }),
                    t.wR5(3, "ion-icon", 3),
                    t.C$Y(),
                    t.I0R(4, "swiper-container", 4)(5, "swiper-slide"),
                    t.wR5(6, "img", 5),
                    t.C$Y()()(),
                    t.I0R(7, "div", 6)(8, "div", 7)(9, "div", 8),
                    t.OEk(10),
                    t.C$Y(),
                    t.I0R(11, "div", 9)(12, "div", 10),
                    t.OEk(13),
                    t.C$Y(),
                    t.I0R(14, "div", 10),
                    t.wR5(15, "ion-icon", 11),
                    t.OEk(16),
                    t.C$Y()(),
                    t.I0R(17, "div", 10),
                    t.wR5(18, "ion-icon", 12),
                    t.OEk(19),
                    t.C$Y(),
                    t.I0R(20, "div", 13),
                    t.OEk(21, "Episodes"),
                    t.C$Y(),
                    t.yuY(22, v, 1, 0, "ion-spinner", 14)(
                      23,
                      O,
                      5,
                      2,
                      "ion-item",
                      15,
                    ),
                    t.C$Y()(),
                    t.wR5(24, "app-internet", 16),
                    t.C$Y()),
                    2 & a &&
                      (t.E7m("fullscreen", !0),
                      t.yG2(6),
                      t.E7m("src", i.character.image, t.K6U),
                      t.yG2(4),
                      t.oRS(" ", i.character.name, " "),
                      t.yG2(3),
                      t.CAO(
                        " ",
                        i.character.species,
                        " - ",
                        i.character.status,
                        " ",
                      ),
                      t.yG2(2),
                      t.E7m(
                        "name",
                        "Female" == i.character.gender ? "female" : "male",
                      ),
                      t.yG2(),
                      t.oRS(" ", i.character.gender, " "),
                      t.yG2(3),
                      t.oRS(" ", i.character.location.name, " "),
                      t.yG2(3),
                      t.E7m("ngIf", !i.episodesPopulated),
                      t.yG2(),
                      t.E7m("ngForOf", i.character.episodesInfo),
                      t.yG2(),
                      t.E7m("openThis", i.openThis));
                },
                dependencies: [l.ay, l.u_, o._i, o.Ko, o.Yb, o.QR, o.YA, P.O],
                styles: [
                  ".wrapper[_ngcontent-%COMP%]{width:90%;margin:5% auto}.imageContainer[_ngcontent-%COMP%]{position:relative}.backBtn[_ngcontent-%COMP%]{position:absolute;top:20px;left:20px;z-index:9999999;display:flex;justify-content:center;align-items:center;width:30px;height:30px;background-color:#fff;color:#fff;border-radius:50px;padding:5px}swiper-container[_ngcontent-%COMP%]{width:100%;height:40vh}swiper-container[_ngcontent-%COMP%]   swiper-slide[_ngcontent-%COMP%]{text-align:center}swiper-container[_ngcontent-%COMP%]   swiper-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:40vh;object-fit:cover}.text[_ngcontent-%COMP%]{font-size:16px;color:#464444;font-family:Poppins,sans-serif;font-weight:700;margin:5% auto 2%}.details[_ngcontent-%COMP%]{width:100%;margin:5% auto}.heading[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-start;align-items:center;font-size:20px;color:#222}.row[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center;margin:2% auto}.info[_ngcontent-%COMP%]{font-size:14px;color:#666;font-family:Poppins,sans-serif}ion-item[_ngcontent-%COMP%]{--background: transparent;--color: #222;--padding-start: 0px!important;--inner-padding-end: 0px!important;--border-color: #d3d3d3}ion-spinner[_ngcontent-%COMP%]{width:100%;height:40px}",
                ],
              }));
            }
            return n;
          })(),
        },
      ];
      let M = (() => {
        class n {
          static #t = (this.ɵfac = function (a) {
            return new (a || n)();
          });
          static #e = (this.ɵmod = t.a4G({ type: n }));
          static #n = (this.ɵinj = t.s3X({
            imports: [r.qQ.forChild(y), r.qQ],
          }));
        }
        return n;
      })();
      var E = e(4948);
      let R = (() => {
        class n {
          static #t = (this.ɵfac = function (a) {
            return new (a || n)();
          });
          static #e = (this.ɵmod = t.a4G({ type: n }));
          static #n = (this.ɵinj = t.s3X({
            imports: [l.MD, d.y, o.wZ, E.k, M],
          }));
        }
        return n;
      })();
    },
  },
]);
