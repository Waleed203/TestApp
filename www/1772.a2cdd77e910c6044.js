"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [1772],
  {
    1772: (Y, l, i) => {
      i.r(l), i.d(l, { LoginPageModule: () => b });
      var c = i(1368),
        r = i(4716),
        g = i(2112),
        u = i(1224),
        m = i(1528),
        n = i(4496),
        p = i(9240),
        f = i(6088),
        h = i(5880),
        v = i(5196),
        x = i(6252),
        C = i(6828);
      function _(t, s) {
        1 & t &&
          (n.I0R(0, "div", 14),
          n.OEk(1, " * Please Enter your email "),
          n.C$Y());
      }
      function L(t, s) {
        1 & t &&
          (n.I0R(0, "div", 14), n.OEk(1, " * Email address invalid "), n.C$Y());
      }
      function E(t, s) {
        if (
          (1 & t &&
            (n.I0R(0, "div", 12),
            n.yuY(1, _, 2, 0, "div", 13)(2, L, 2, 0, "div", 13),
            n.C$Y()),
          2 & t)
        ) {
          const o = n.GaO(2);
          n.yG2(),
            n.E7m(
              "ngIf",
              o.Loginform.get("email").hasError("required") &&
                o.Loginform.get("email").touched,
            ),
            n.yG2(),
            n.E7m(
              "ngIf",
              o.Loginform.get("email").hasError("pattern") &&
                o.Loginform.get("email").touched,
            );
        }
      }
      function P(t, s) {
        1 & t &&
          (n.I0R(0, "div", 14),
          n.OEk(1, " * Please Enter your password "),
          n.C$Y());
      }
      function M(t, s) {
        1 & t &&
          (n.I0R(0, "div", 14), n.OEk(1, " * Minimum 6 characters "), n.C$Y());
      }
      function I(t, s) {
        1 & t &&
          (n.I0R(0, "div", 14), n.OEk(1, " * Maximum 12 characters "), n.C$Y());
      }
      function w(t, s) {
        if (
          (1 & t &&
            (n.I0R(0, "div", 12),
            n.yuY(1, P, 2, 0, "div", 13)(2, M, 2, 0, "div", 13)(
              3,
              I,
              2,
              0,
              "div",
              13,
            ),
            n.C$Y()),
          2 & t)
        ) {
          const o = n.GaO(2);
          n.yG2(),
            n.E7m(
              "ngIf",
              o.Loginform.get("password").hasError("required") &&
                o.Loginform.get("password").touched,
            ),
            n.yG2(),
            n.E7m(
              "ngIf",
              o.Loginform.get("password").hasError("minlength") &&
                o.Loginform.get("password").touched,
            ),
            n.yG2(),
            n.E7m(
              "ngIf",
              o.Loginform.get("password").hasError("maxlength") &&
                o.Loginform.get("password").touched,
            );
        }
      }
      function O(t, s) {
        if (1 & t) {
          const o = n.KQA();
          n.I0R(0, "div", 4)(1, "div", 5),
            n.OEk(2, "Sign In to continue"),
            n.C$Y(),
            n.I0R(3, "form", 6),
            n.qCj("ngSubmit", function () {
              n.usT(o);
              const a = n.GaO();
              return n.CGJ(a.login());
            }),
            n.I0R(4, "ion-item", 7)(5, "ion-input", 8),
            n.iHE("ngModelChange", function (a) {
              n.usT(o);
              const d = n.GaO();
              return n.kNx(d.user.email, a) || (d.user.email = a), n.CGJ(a);
            }),
            n.C$Y()(),
            n.yuY(6, E, 3, 2, "div", 9),
            n.I0R(7, "ion-item", 7)(8, "ion-input", 10),
            n.iHE("ngModelChange", function (a) {
              n.usT(o);
              const d = n.GaO();
              return (
                n.kNx(d.user.password, a) || (d.user.password = a), n.CGJ(a)
              );
            }),
            n.C$Y()(),
            n.yuY(9, w, 4, 3, "div", 9),
            n.wR5(10, "app-btn", 11),
            n.C$Y()();
        }
        if (2 & t) {
          const o = n.GaO();
          n.yG2(3),
            n.E7m("formGroup", o.Loginform),
            n.yG2(2),
            n.OKB("ngModel", o.user.email),
            n.yG2(),
            n.E7m(
              "ngIf",
              (o.Loginform.get("email").hasError("minlength") ||
                o.Loginform.get("email").hasError("pattern") ||
                o.Loginform.get("email").hasError("required")) &&
                o.Loginform.get("email").touched,
            ),
            n.yG2(2),
            n.OKB("ngModel", o.user.password),
            n.yG2(),
            n.E7m(
              "ngIf",
              (o.Loginform.get("password").hasError("minlength") ||
                o.Loginform.get("password").hasError("maxlength") ||
                o.Loginform.get("password").hasError("required")) &&
                o.Loginform.get("password").touched,
            ),
            n.yG2(),
            n.E7m("state", o.signingIn)("form", o.Loginform);
        }
      }
      const y = [
        {
          path: "",
          component: (() => {
            class t {
              constructor() {
                (this.populated = !1),
                  (this.nav = (0, n.uUt)(p.wX)),
                  (this.utils = (0, n.uUt)(f.e)),
                  (this.authService = (0, n.uUt)(h.o)),
                  (this.global = (0, n.uUt)(v.f)),
                  (this.storage = (0, n.uUt)(x.u)),
                  (this.user = { email: "", password: "" }),
                  (this.signingIn = !1);
              }
              gotoSignUp() {
                this.nav.navigateForward("signup");
              }
              login() {
                this.signingIn ||
                  (console.log("logging in"),
                  (this.signingIn = !0),
                  this.utils.loadershow(),
                  this.authService.loginUser(this.user).then(
                    (o) => {
                      console.log("user = ", o),
                        this.global.set("uid", o.uid),
                        this.utils.hideLoader(),
                        this.nav.navigateRoot("tabs/tab1"),
                        (this.signingIn = !1);
                    },
                    (o) => {
                      this.utils.hideLoader(),
                        console.log("er ", o),
                        console.log("er ", o.code),
                        console.log("er ", o.message),
                        (this.signingIn = !1),
                        this.utils.presentToast(
                          "auth/invalid-credential" == o.code
                            ? "Incorrect Email or Password"
                            : "auth/network-request-failed" == o.code
                              ? "Network is not connected"
                              : "Error signing in",
                        );
                    },
                  ));
              }
              ionViewWillEnter() {
                var o = this;
                return (0, m.c)(function* () {
                  yield o.storage.create(),
                    o.global.get("uid").then(
                      (e) => {
                        console.log("uid = ", e),
                          e
                            ? o.nav.navigateRoot("tabs/tab1")
                            : (o.populated = !0);
                      },
                      (e) => {
                        console.log("uid error", e);
                      },
                    );
                })();
              }
              ngOnInit() {
                this.Loginform = new r.WC({
                  email: new r.Ku("", [
                    r.AQ.required,
                    r.AQ.pattern(
                      /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
                    ),
                  ]),
                  password: new r.Ku("", [
                    r.AQ.required,
                    r.AQ.minLength(8),
                    r.AQ.maxLength(12),
                  ]),
                });
              }
              static #n = (this.ɵfac = function (e) {
                return new (e || t)();
              });
              static #o = (this.ɵcmp = n.In1({
                type: t,
                selectors: [["app-login"]],
                decls: 5,
                vars: 2,
                consts: [
                  [3, "fullscreen"],
                  ["class", "wrapper", 4, "ngIf"],
                  [1, "ion-no-border"],
                  [1, "textFooter", 3, "click"],
                  [1, "wrapper"],
                  [1, "heading"],
                  ["novalidate", "", 3, "formGroup", "ngSubmit"],
                  ["lines", "none"],
                  [
                    "type",
                    "email",
                    "placeholder",
                    "Enter Email",
                    "formControlName",
                    "email",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  ["class", "errorMessage", "no-lines", "", 4, "ngIf"],
                  [
                    "type",
                    "password",
                    "placeholder",
                    "Enter Password",
                    "formControlName",
                    "password",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  ["title", "Sign In", 3, "state", "form"],
                  ["no-lines", "", 1, "errorMessage"],
                  ["class", "error", 4, "ngIf"],
                  [1, "error"],
                ],
                template: function (e, a) {
                  1 & e &&
                    (n.I0R(0, "ion-content", 0),
                    n.yuY(1, O, 11, 7, "div", 1),
                    n.C$Y(),
                    n.I0R(2, "ion-footer", 2)(3, "div", 3),
                    n.qCj("click", function () {
                      return a.gotoSignUp();
                    }),
                    n.OEk(4, " Create a new account "),
                    n.C$Y()()),
                    2 & e &&
                      (n.E7m("fullscreen", !0),
                      n.yG2(),
                      n.E7m("ngIf", a.populated));
                },
                dependencies: [
                  c.u_,
                  r.sz,
                  r.ue,
                  r.u,
                  g._i,
                  g.eV,
                  g.A5,
                  g.Yb,
                  g.qG,
                  C.U,
                  r.uW,
                  r.Wo,
                ],
                styles: [
                  "ion-content[_ngcontent-%COMP%]{--background: var(--ion-background-color) }.wrapper[_ngcontent-%COMP%]{width:90%;margin:10% auto}.wrapper[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{color:#222;font-size:18px;font-weight:700}.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%;margin:5% auto}.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{border:1px solid #d3d3d3;border-radius:10px;--padding-start: 10px;background:#fff;margin:5% auto 0%;box-shadow:1px 2px 2px #a2a8b333,2px 4px 4px #cdd0d533,4px 8px 8px #8ea3cc26,8px 16px 16px #9bb3e400,16px 32px 32px #76829800;--background: transparent;--color: #222;--border-color: #d3d3d3;--inner-padding-end: 0px!important}.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{--placeholder-color: #555}.fault[_ngcontent-%COMP%]{border-bottom:1px solid red}.green[_ngcontent-%COMP%]{border-bottom:1px solid green}.error[_ngcontent-%COMP%]{width:100%;color:red;text-align:left;padding-top:7px;font-size:12px}ion-footer[_ngcontent-%COMP%]{background:#fff;text-align:center}.textFooter[_ngcontent-%COMP%]{padding:20px;font-size:14px;color:#000}",
                ],
              }));
            }
            return t;
          })(),
        },
      ];
      let G = (() => {
        class t {
          static #n = (this.ɵfac = function (e) {
            return new (e || t)();
          });
          static #o = (this.ɵmod = n.a4G({ type: t }));
          static #t = (this.ɵinj = n.s3X({
            imports: [u.qQ.forChild(y), u.qQ],
          }));
        }
        return t;
      })();
      var T = i(4948);
      let b = (() => {
        class t {
          static #n = (this.ɵfac = function (e) {
            return new (e || t)();
          });
          static #o = (this.ɵmod = n.a4G({ type: t }));
          static #t = (this.ɵinj = n.s3X({
            imports: [c.MD, r.y, g.wZ, T.k, r.sl, G],
          }));
        }
        return t;
      })();
    },
  },
]);
