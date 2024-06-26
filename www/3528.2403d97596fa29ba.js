"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [3528],
  {
    3528: (b, u, o) => {
      o.r(u), o.d(u, { SignupPageModule: () => T });
      var m = o(1368),
        i = o(4716),
        d = o(2112),
        p = o(1224),
        e = o(4496),
        c = o(9240),
        f = o(6088),
        h = o(5880),
        v = o(5196),
        C = o(6828);
      function E(n, s) {
        1 & n &&
          (e.I0R(0, "div", 15),
          e.OEk(1, " * Please Enter your Name "),
          e.C$Y());
      }
      function _(n, s) {
        if (
          (1 & n &&
            (e.I0R(0, "div", 13), e.yuY(1, E, 2, 0, "div", 14), e.C$Y()),
          2 & n)
        ) {
          const t = e.GaO();
          e.yG2(),
            e.E7m(
              "ngIf",
              t.Registerform.get("name").hasError("required") &&
                t.Registerform.get("name").touched,
            );
        }
      }
      function R(n, s) {
        1 & n &&
          (e.I0R(0, "div", 15),
          e.OEk(1, " * Please Enter your email "),
          e.C$Y());
      }
      function P(n, s) {
        1 & n &&
          (e.I0R(0, "div", 15), e.OEk(1, " * Email address invalid "), e.C$Y());
      }
      function M(n, s) {
        if (
          (1 & n &&
            (e.I0R(0, "div", 16),
            e.yuY(1, R, 2, 0, "div", 14)(2, P, 2, 0, "div", 14),
            e.C$Y()),
          2 & n)
        ) {
          const t = e.GaO();
          e.yG2(),
            e.E7m(
              "ngIf",
              t.Registerform.get("email").hasError("required") &&
                t.Registerform.get("email").touched,
            ),
            e.yG2(),
            e.E7m(
              "ngIf",
              t.Registerform.get("email").hasError("pattern") &&
                t.Registerform.get("email").touched,
            );
        }
      }
      function I(n, s) {
        1 & n &&
          (e.I0R(0, "div", 15),
          e.OEk(1, " * Please Enter your password "),
          e.C$Y());
      }
      function w(n, s) {
        1 & n &&
          (e.I0R(0, "div", 15),
          e.OEk(
            1,
            " * Password having at least 1 uppercase, 1 digit and 1 special character ",
          ),
          e.C$Y());
      }
      function y(n, s) {
        1 & n &&
          (e.I0R(0, "div", 15), e.OEk(1, " * Minimum 8 characters "), e.C$Y());
      }
      function O(n, s) {
        1 & n &&
          (e.I0R(0, "div", 15), e.OEk(1, " * Maximum 12 characters "), e.C$Y());
      }
      function S(n, s) {
        if (
          (1 & n &&
            (e.I0R(0, "div", 16),
            e.yuY(1, I, 2, 0, "div", 14)(2, w, 2, 0, "div", 14)(
              3,
              y,
              2,
              0,
              "div",
              14,
            )(4, O, 2, 0, "div", 14),
            e.C$Y()),
          2 & n)
        ) {
          const t = e.GaO();
          e.yG2(),
            e.E7m(
              "ngIf",
              t.Registerform.get("password").hasError("required") &&
                t.Registerform.get("password").touched,
            ),
            e.yG2(),
            e.E7m(
              "ngIf",
              t.Registerform.get("password").hasError("pattern") &&
                t.Registerform.get("password").touched,
            ),
            e.yG2(),
            e.E7m(
              "ngIf",
              t.Registerform.get("password").hasError("minlength") &&
                t.Registerform.get("password").touched,
            ),
            e.yG2(),
            e.E7m(
              "ngIf",
              t.Registerform.get("password").hasError("maxlength") &&
                t.Registerform.get("password").touched,
            );
        }
      }
      const x = [
        {
          path: "",
          component: (() => {
            class n {
              constructor() {
                (this.nav = (0, e.uUt)(c.wX)),
                  (this.utils = (0, e.uUt)(f.e)),
                  (this.authService = (0, e.uUt)(h.o)),
                  (this.global = (0, e.uUt)(v.f)),
                  (this.user = { name: "", email: "", password: "" }),
                  (this.signingIn = !1);
              }
              gotoSignIn() {
                this.nav.navigateForward("login");
              }
              register() {
                this.signingIn ||
                  (console.log("signing up"),
                  (this.signingIn = !0),
                  this.utils.loadershow(),
                  this.authService.registerUser(this.user).then(
                    (t) => {
                      console.log("user = ", t),
                        this.global.set("uid", t.uid),
                        this.utils.hideLoader(),
                        this.nav.navigateRoot("tabs/tab1"),
                        (this.signingIn = !1);
                    },
                    (t) => {
                      this.utils.hideLoader(),
                        console.log("er ", t),
                        console.log("er ", t.code),
                        console.log("er ", t.message),
                        (this.signingIn = !1),
                        this.utils.presentToast(
                          "auth/email-already-in-use" == t.code
                            ? "Email already exists"
                            : "auth/network-request-failed" == t.code
                              ? "Network is not connected"
                              : "Error signing up",
                        );
                    },
                  ));
              }
              ngOnInit() {
                this.Registerform = new i.WC({
                  name: new i.Ku("", [
                    i.AQ.required,
                    i.AQ.minLength(4),
                    i.AQ.maxLength(20),
                  ]),
                  email: new i.Ku("", [
                    i.AQ.required,
                    i.AQ.pattern(
                      /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
                    ),
                  ]),
                  password: new i.Ku("", [
                    i.AQ.required,
                    i.AQ.minLength(8),
                    i.AQ.maxLength(12),
                  ]),
                });
              }
              static #e = (this.ɵfac = function (g) {
                return new (g || n)();
              });
              static #n = (this.ɵcmp = e.In1({
                type: n,
                selectors: [["app-signup"]],
                decls: 18,
                vars: 10,
                consts: [
                  [3, "fullscreen"],
                  [1, "wrapper"],
                  [1, "heading"],
                  ["novalidate", "", 3, "formGroup", "ngSubmit"],
                  ["lines", "none"],
                  [
                    "type",
                    "text",
                    "placeholder",
                    "Enter Name",
                    "formControlName",
                    "name",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  ["class", "errorMessage", 4, "ngIf"],
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
                  ["title", "Sign Up", 3, "state", "form"],
                  [1, "ion-no-border"],
                  [1, "textFooter", 3, "click"],
                  [1, "errorMessage"],
                  ["class", "error", 4, "ngIf"],
                  [1, "error"],
                  ["no-lines", "", 1, "errorMessage"],
                ],
                template: function (g, r) {
                  1 & g &&
                    (e.I0R(0, "ion-content", 0)(1, "div", 1)(2, "div", 2),
                    e.OEk(3, "Create a New Account"),
                    e.C$Y(),
                    e.I0R(4, "form", 3),
                    e.qCj("ngSubmit", function () {
                      return r.register();
                    }),
                    e.I0R(5, "ion-item", 4)(6, "ion-input", 5),
                    e.iHE("ngModelChange", function (a) {
                      return e.kNx(r.user.name, a) || (r.user.name = a), a;
                    }),
                    e.C$Y()(),
                    e.yuY(7, _, 2, 1, "div", 6),
                    e.I0R(8, "ion-item", 4)(9, "ion-input", 7),
                    e.iHE("ngModelChange", function (a) {
                      return e.kNx(r.user.email, a) || (r.user.email = a), a;
                    }),
                    e.C$Y()(),
                    e.yuY(10, M, 3, 2, "div", 8),
                    e.I0R(11, "ion-item", 4)(12, "ion-input", 9),
                    e.iHE("ngModelChange", function (a) {
                      return (
                        e.kNx(r.user.password, a) || (r.user.password = a), a
                      );
                    }),
                    e.C$Y()(),
                    e.yuY(13, S, 5, 4, "div", 8),
                    e.wR5(14, "app-btn", 10),
                    e.C$Y()()(),
                    e.I0R(15, "ion-footer", 11)(16, "div", 12),
                    e.qCj("click", function () {
                      return r.gotoSignIn();
                    }),
                    e.OEk(17, " Already have an account? Sign In "),
                    e.C$Y()()),
                    2 & g &&
                      (e.E7m("fullscreen", !0),
                      e.yG2(4),
                      e.E7m("formGroup", r.Registerform),
                      e.yG2(2),
                      e.OKB("ngModel", r.user.name),
                      e.yG2(),
                      e.E7m(
                        "ngIf",
                        (r.Registerform.get("name").hasError("minlength") ||
                          r.Registerform.get("name").hasError("required")) &&
                          r.Registerform.get("name").touched,
                      ),
                      e.yG2(2),
                      e.OKB("ngModel", r.user.email),
                      e.yG2(),
                      e.E7m(
                        "ngIf",
                        (r.Registerform.get("email").hasError("minlength") ||
                          r.Registerform.get("email").hasError("pattern") ||
                          r.Registerform.get("email").hasError("required")) &&
                          r.Registerform.get("email").touched,
                      ),
                      e.yG2(2),
                      e.OKB("ngModel", r.user.password),
                      e.yG2(),
                      e.E7m(
                        "ngIf",
                        (r.Registerform.get("password").hasError("minlength") ||
                          r.Registerform.get("password").hasError("pattern") ||
                          r.Registerform.get("password").hasError(
                            "maxlength",
                          ) ||
                          r.Registerform.get("password").hasError(
                            "required",
                          )) &&
                          r.Registerform.get("password").touched,
                      ),
                      e.yG2(),
                      e.E7m("state", r.signingIn)("form", r.Registerform));
                },
                dependencies: [
                  m.u_,
                  i.sz,
                  i.ue,
                  i.u,
                  d._i,
                  d.eV,
                  d.A5,
                  d.Yb,
                  d.qG,
                  i.uW,
                  i.Wo,
                  C.U,
                ],
                styles: [
                  "ion-content[_ngcontent-%COMP%]{--background: var(--ion-background-color) }.wrapper[_ngcontent-%COMP%]{width:90%;margin:10% auto}.wrapper[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{color:#222;font-size:18px;font-weight:700}.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%;margin:5% auto}.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{border:1px solid #d3d3d3;border-radius:10px;--padding-start: 10px;background:#fff;margin:5% auto 0%;box-shadow:1px 2px 2px #a2a8b333,2px 4px 4px #cdd0d533,4px 8px 8px #8ea3cc26,8px 16px 16px #9bb3e400,16px 32px 32px #76829800;--background: transparent;--color: #222;--border-color: #d3d3d3;--inner-padding-end: 0px!important}.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{--placeholder-color: #555}.fault[_ngcontent-%COMP%]{border-bottom:1px solid red}.green[_ngcontent-%COMP%]{border-bottom:1px solid green}.error[_ngcontent-%COMP%]{width:100%;color:red;text-align:left;padding-top:7px;font-size:12px}ion-footer[_ngcontent-%COMP%]{background:#fff;text-align:center}.textFooter[_ngcontent-%COMP%]{padding:20px;font-size:14px;color:#000}",
                ],
              }));
            }
            return n;
          })(),
        },
      ];
      let G = (() => {
        class n {
          static #e = (this.ɵfac = function (g) {
            return new (g || n)();
          });
          static #n = (this.ɵmod = e.a4G({ type: n }));
          static #t = (this.ɵinj = e.s3X({
            imports: [p.qQ.forChild(x), p.qQ],
          }));
        }
        return n;
      })();
      var Y = o(4948);
      let T = (() => {
        class n {
          static #e = (this.ɵfac = function (g) {
            return new (g || n)();
          });
          static #n = (this.ɵmod = e.a4G({ type: n }));
          static #t = (this.ɵinj = e.s3X({
            imports: [m.MD, i.y, d.wZ, i.sl, Y.k, G],
          }));
        }
        return n;
      })();
    },
  },
]);
