"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [1168],
  {
    4948: (Zr, Ee, v) => {
      v.d(Ee, { k: () => y });
      var F = v(2112),
        Ae = v(1368),
        c = v(4716),
        h = v(4496);
      let y = (() => {
        class b {
          static #e = (this.ɵfac = function (Vn) {
            return new (Vn || b)();
          });
          static #t = (this.ɵmod = h.a4G({ type: b }));
          static #n = (this.ɵinj = h.s3X({ imports: [F.wZ, Ae.MD, c.y] }));
        }
        return b;
      })();
    },
    5880: (Zr, Ee, v) => {
      v.d(Ee, { o: () => ra });
      var F = v(4496),
        Ae = v(5196),
        c = v(1528),
        h = v(7144),
        y = v(9360),
        b = v(5976),
        Pe = v(1316),
        ke = v(4920);
      const ei = function Gn() {
          return {
            "dependent-sdk-initialized-before-auth":
              "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
          };
        },
        Wn = new h.UR("auth", "Firebase", {
          "dependent-sdk-initialized-before-auth":
            "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
        }),
        se = new b.YJ("@firebase/auth");
      function oe(n, ...e) {
        se.logLevel <= b.Ge.ERROR && se.error(`Auth (${y.Sg}): ${n}`, ...e);
      }
      function T(n, ...e) {
        throw Re(n, ...e);
      }
      function P(n, ...e) {
        return Re(n, ...e);
      }
      function Re(n, ...e) {
        if ("string" != typeof n) {
          const t = e[0],
            r = [...e.slice(1)];
          return (
            r[0] && (r[0].appName = n.name), n._errorFactory.create(t, ...r)
          );
        }
        return Wn.create(n, ...e);
      }
      function l(n, e, ...t) {
        if (!n) throw Re(e, ...t);
      }
      function k(n) {
        const e = "INTERNAL ASSERTION FAILED: " + n;
        throw (oe(e), new Error(e));
      }
      function C(n, e) {
        n || k(e);
      }
      function H() {
        var n;
        return (
          (typeof self < "u" &&
            (null === (n = self.location) || void 0 === n ? void 0 : n.href)) ||
          ""
        );
      }
      function qn() {
        var n;
        return (
          (typeof self < "u" &&
            (null === (n = self.location) || void 0 === n
              ? void 0
              : n.protocol)) ||
          null
        );
      }
      class q {
        constructor(e, t) {
          (this.shortDelay = e),
            (this.longDelay = t),
            C(t > e, "Short delay should be less than long delay!"),
            (this.isMobile = (0, h.AV)() || (0, h.AL)());
        }
        get() {
          return (function ni() {
            return (
              !(
                typeof navigator < "u" &&
                navigator &&
                "onLine" in navigator &&
                "boolean" == typeof navigator.onLine &&
                ((function Se() {
                  return "http:" === qn() || "https:" === qn();
                })() ||
                  (0, h.Cc)() ||
                  "connection" in navigator)
              ) || navigator.onLine
            );
          })()
            ? this.isMobile
              ? this.longDelay
              : this.shortDelay
            : Math.min(5e3, this.shortDelay);
        }
      }
      function we(n, e) {
        C(n.emulator, "Emulator should always be set here");
        const { url: t } = n.emulator;
        return e ? `${t}${e.startsWith("/") ? e.slice(1) : e}` : t;
      }
      class zn {
        static initialize(e, t, r) {
          (this.fetchImpl = e),
            t && (this.headersImpl = t),
            r && (this.responseImpl = r);
        }
        static fetch() {
          return this.fetchImpl
            ? this.fetchImpl
            : typeof self < "u" && "fetch" in self
              ? self.fetch
              : typeof globalThis < "u" && globalThis.fetch
                ? globalThis.fetch
                : typeof fetch < "u"
                  ? fetch
                  : void k(
                      "Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill",
                    );
        }
        static headers() {
          return this.headersImpl
            ? this.headersImpl
            : typeof self < "u" && "Headers" in self
              ? self.Headers
              : typeof globalThis < "u" && globalThis.Headers
                ? globalThis.Headers
                : typeof Headers < "u"
                  ? Headers
                  : void k(
                      "Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill",
                    );
        }
        static response() {
          return this.responseImpl
            ? this.responseImpl
            : typeof self < "u" && "Response" in self
              ? self.Response
              : typeof globalThis < "u" && globalThis.Response
                ? globalThis.Response
                : typeof Response < "u"
                  ? Response
                  : void k(
                      "Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill",
                    );
        }
      }
      const ii = {
          CREDENTIAL_MISMATCH: "custom-token-mismatch",
          MISSING_CUSTOM_TOKEN: "internal-error",
          INVALID_IDENTIFIER: "invalid-email",
          MISSING_CONTINUE_URI: "internal-error",
          INVALID_PASSWORD: "wrong-password",
          MISSING_PASSWORD: "missing-password",
          INVALID_LOGIN_CREDENTIALS: "invalid-credential",
          EMAIL_EXISTS: "email-already-in-use",
          PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
          INVALID_IDP_RESPONSE: "invalid-credential",
          INVALID_PENDING_TOKEN: "invalid-credential",
          FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
          MISSING_REQ_TYPE: "internal-error",
          EMAIL_NOT_FOUND: "user-not-found",
          RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
          EXPIRED_OOB_CODE: "expired-action-code",
          INVALID_OOB_CODE: "invalid-action-code",
          MISSING_OOB_CODE: "internal-error",
          CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
          INVALID_ID_TOKEN: "invalid-user-token",
          TOKEN_EXPIRED: "user-token-expired",
          USER_NOT_FOUND: "user-token-expired",
          TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
          PASSWORD_DOES_NOT_MEET_REQUIREMENTS:
            "password-does-not-meet-requirements",
          INVALID_CODE: "invalid-verification-code",
          INVALID_SESSION_INFO: "invalid-verification-id",
          INVALID_TEMPORARY_PROOF: "invalid-credential",
          MISSING_SESSION_INFO: "missing-verification-id",
          SESSION_EXPIRED: "code-expired",
          MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
          UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
          INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
          ADMIN_ONLY_OPERATION: "admin-restricted-operation",
          INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
          MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
          MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
          MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
          SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
          SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
          BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
          RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
          MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
          INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
          INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
          MISSING_CLIENT_TYPE: "missing-client-type",
          MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
          INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
          INVALID_REQ_TYPE: "invalid-req-type",
        },
        si = new q(3e4, 6e4);
      function _(n, e) {
        return n.tenantId && !e.tenantId
          ? Object.assign(Object.assign({}, e), { tenantId: n.tenantId })
          : e;
      }
      function m(n, e, t, r) {
        return Oe.apply(this, arguments);
      }
      function Oe() {
        return (Oe = (0, c.c)(function* (n, e, t, r, i = {}) {
          return jn(
            n,
            i,
            (0, c.c)(function* () {
              let s = {},
                o = {};
              r && ("GET" === e ? (o = r) : (s = { body: JSON.stringify(r) }));
              const a = (0, h.ik)(
                  Object.assign({ key: n.config.apiKey }, o),
                ).slice(1),
                u = yield n._getAdditionalHeaders();
              return (
                (u["Content-Type"] = "application/json"),
                n.languageCode && (u["X-Firebase-Locale"] = n.languageCode),
                zn.fetch()(
                  Bn(n, n.config.apiHost, t, a),
                  Object.assign(
                    { method: e, headers: u, referrerPolicy: "no-referrer" },
                    s,
                  ),
                )
              );
            }),
          );
        })).apply(this, arguments);
      }
      function jn(n, e, t) {
        return Ne.apply(this, arguments);
      }
      function Ne() {
        return (Ne = (0, c.c)(function* (n, e, t) {
          n._canInitEmulator = !1;
          const r = Object.assign(Object.assign({}, ii), e);
          try {
            const i = new ai(n),
              s = yield Promise.race([t(), i.promise]);
            i.clearNetworkTimeout();
            const o = yield s.json();
            if ("needConfirmation" in o)
              throw z(n, "account-exists-with-different-credential", o);
            if (s.ok && !("errorMessage" in o)) return o;
            {
              const a = s.ok ? o.errorMessage : o.error.message,
                [u, d] = a.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === u)
                throw z(n, "credential-already-in-use", o);
              if ("EMAIL_EXISTS" === u) throw z(n, "email-already-in-use", o);
              if ("USER_DISABLED" === u) throw z(n, "user-disabled", o);
              const p = r[u] || u.toLowerCase().replace(/[_\s]+/g, "-");
              if (d)
                throw (function Hn(n, e, t) {
                  const r = Object.assign(Object.assign({}, ei()), { [e]: t });
                  return new h.UR("auth", "Firebase", r).create(e, {
                    appName: n.name,
                  });
                })(n, p, d);
              T(n, p);
            }
          } catch (i) {
            if (i instanceof h.kx) throw i;
            T(n, "network-request-failed", { message: String(i) });
          }
        })).apply(this, arguments);
      }
      function R(n, e, t, r) {
        return be.apply(this, arguments);
      }
      function be() {
        return (be = (0, c.c)(function* (n, e, t, r, i = {}) {
          const s = yield m(n, e, t, r, i);
          return (
            "mfaPendingCredential" in s &&
              T(n, "multi-factor-auth-required", { _serverResponse: s }),
            s
          );
        })).apply(this, arguments);
      }
      function Bn(n, e, t, r) {
        const i = `${e}${t}?${r}`;
        return n.config.emulator
          ? we(n.config, i)
          : `${n.config.apiScheme}://${i}`;
      }
      function oi(n) {
        switch (n) {
          case "ENFORCE":
            return "ENFORCE";
          case "AUDIT":
            return "AUDIT";
          case "OFF":
            return "OFF";
          default:
            return "ENFORCEMENT_STATE_UNSPECIFIED";
        }
      }
      class ai {
        constructor(e) {
          (this.auth = e),
            (this.timer = null),
            (this.promise = new Promise((t, r) => {
              this.timer = setTimeout(
                () => r(P(this.auth, "network-request-failed")),
                si.get(),
              );
            }));
        }
        clearNetworkTimeout() {
          clearTimeout(this.timer);
        }
      }
      function z(n, e, t) {
        const r = { appName: n.name };
        t.email && (r.email = t.email),
          t.phoneNumber && (r.phoneNumber = t.phoneNumber);
        const i = P(n, e, r);
        return (i.customData._tokenResponse = t), i;
      }
      function $n(n) {
        return void 0 !== n && void 0 !== n.enterprise;
      }
      class Yn {
        constructor(e) {
          if (
            ((this.siteKey = ""),
            (this.recaptchaEnforcementState = []),
            void 0 === e.recaptchaKey)
          )
            throw new Error("recaptchaKey undefined");
          (this.siteKey = e.recaptchaKey.split("/")[3]),
            (this.recaptchaEnforcementState = e.recaptchaEnforcementState);
        }
        getProviderEnforcementState(e) {
          if (
            !this.recaptchaEnforcementState ||
            0 === this.recaptchaEnforcementState.length
          )
            return null;
          for (const t of this.recaptchaEnforcementState)
            if (t.provider && t.provider === e) return oi(t.enforcementState);
          return null;
        }
        isProviderEnabled(e) {
          return (
            "ENFORCE" === this.getProviderEnforcementState(e) ||
            "AUDIT" === this.getProviderEnforcementState(e)
          );
        }
      }
      function Jn(n, e) {
        return Le.apply(this, arguments);
      }
      function Le() {
        return (Le = (0, c.c)(function* (n, e) {
          return m(n, "GET", "/v2/recaptchaConfig", _(n, e));
        })).apply(this, arguments);
      }
      function De() {
        return (De = (0, c.c)(function* (n, e) {
          return m(n, "POST", "/v1/accounts:delete", e);
        })).apply(this, arguments);
      }
      function xe() {
        return (xe = (0, c.c)(function* (n, e) {
          return m(n, "POST", "/v1/accounts:lookup", e);
        })).apply(this, arguments);
      }
      function j(n) {
        if (n)
          try {
            const e = new Date(Number(n));
            if (!isNaN(e.getTime())) return e.toUTCString();
          } catch {}
      }
      function Ue() {
        return (Ue = (0, c.c)(function* (n, e = !1) {
          const t = (0, h.Yj)(n),
            r = yield t.getIdToken(e),
            i = ae(r);
          l(i && i.exp && i.auth_time && i.iat, t.auth, "internal-error");
          const s = "object" == typeof i.firebase ? i.firebase : void 0,
            o = s?.sign_in_provider;
          return {
            claims: i,
            token: r,
            authTime: j(Fe(i.auth_time)),
            issuedAtTime: j(Fe(i.iat)),
            expirationTime: j(Fe(i.exp)),
            signInProvider: o || null,
            signInSecondFactor: s?.sign_in_second_factor || null,
          };
        })).apply(this, arguments);
      }
      function Fe(n) {
        return 1e3 * Number(n);
      }
      function ae(n) {
        const [e, t, r] = n.split(".");
        if (void 0 === e || void 0 === t || void 0 === r)
          return oe("JWT malformed, contained fewer than 3 sections"), null;
        try {
          const i = (0, h.WW)(t);
          return i
            ? JSON.parse(i)
            : (oe("Failed to decode base64 JWT payload"), null);
        } catch (i) {
          return (
            oe("Caught error parsing JWT payload as JSON", i?.toString()), null
          );
        }
      }
      function S(n, e) {
        return Ve.apply(this, arguments);
      }
      function Ve() {
        return (Ve = (0, c.c)(function* (n, e, t = !1) {
          if (t) return e;
          try {
            return yield e;
          } catch (r) {
            throw (
              (r instanceof h.kx &&
                (function fi({ code: n }) {
                  return (
                    "auth/user-disabled" === n ||
                    "auth/user-token-expired" === n
                  );
                })(r) &&
                n.auth.currentUser === n &&
                (yield n.auth.signOut()),
              r)
            );
          }
        })).apply(this, arguments);
      }
      class _i {
        constructor(e) {
          (this.user = e),
            (this.isRunning = !1),
            (this.timerId = null),
            (this.errorBackoff = 3e4);
        }
        _start() {
          this.isRunning || ((this.isRunning = !0), this.schedule());
        }
        _stop() {
          this.isRunning &&
            ((this.isRunning = !1),
            null !== this.timerId && clearTimeout(this.timerId));
        }
        getInterval(e) {
          var t;
          if (e) {
            const r = this.errorBackoff;
            return (
              (this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4)), r
            );
          }
          {
            this.errorBackoff = 3e4;
            const i =
              (null !== (t = this.user.stsTokenManager.expirationTime) &&
              void 0 !== t
                ? t
                : 0) -
              Date.now() -
              3e5;
            return Math.max(0, i);
          }
        }
        schedule(e = !1) {
          var t = this;
          if (!this.isRunning) return;
          const r = this.getInterval(e);
          this.timerId = setTimeout(
            (0, c.c)(function* () {
              yield t.iteration();
            }),
            r,
          );
        }
        iteration() {
          var e = this;
          return (0, c.c)(function* () {
            try {
              yield e.user.getIdToken(!0);
            } catch (t) {
              return void (
                "auth/network-request-failed" === t?.code && e.schedule(!0)
              );
            }
            e.schedule();
          })();
        }
      }
      class Xn {
        constructor(e, t) {
          (this.createdAt = e), (this.lastLoginAt = t), this._initializeTime();
        }
        _initializeTime() {
          (this.lastSignInTime = j(this.lastLoginAt)),
            (this.creationTime = j(this.createdAt));
        }
        _copy(e) {
          (this.createdAt = e.createdAt),
            (this.lastLoginAt = e.lastLoginAt),
            this._initializeTime();
        }
        toJSON() {
          return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
        }
      }
      function B(n) {
        return Ge.apply(this, arguments);
      }
      function Ge() {
        return (
          (Ge = (0, c.c)(function* (n) {
            var e;
            const t = n.auth,
              r = yield n.getIdToken(),
              i = yield S(
                n,
                (function di(n, e) {
                  return xe.apply(this, arguments);
                })(t, { idToken: r }),
              );
            l(i?.users.length, t, "internal-error");
            const s = i.users[0];
            n._notifyReloadListener(s);
            const o =
                null !== (e = s.providerUserInfo) && void 0 !== e && e.length
                  ? (function Ii(n) {
                      return n.map((e) => {
                        var { providerId: t } = e,
                          r = (0, Pe.sX)(e, ["providerId"]);
                        return {
                          providerId: t,
                          uid: r.rawId || "",
                          displayName: r.displayName || null,
                          email: r.email || null,
                          phoneNumber: r.phoneNumber || null,
                          photoURL: r.photoUrl || null,
                        };
                      });
                    })(s.providerUserInfo)
                  : [],
              a = (function gi(n, e) {
                return [
                  ...n.filter(
                    (r) => !e.some((i) => i.providerId === r.providerId),
                  ),
                  ...e,
                ];
              })(n.providerData, o),
              p =
                !!n.isAnonymous && !((n.email && s.passwordHash) || a?.length),
              f = {
                uid: s.localId,
                displayName: s.displayName || null,
                photoURL: s.photoUrl || null,
                email: s.email || null,
                emailVerified: s.emailVerified || !1,
                phoneNumber: s.phoneNumber || null,
                tenantId: s.tenantId || null,
                providerData: a,
                metadata: new Xn(s.createdAt, s.lastLoginAt),
                isAnonymous: p,
              };
            Object.assign(n, f);
          })),
          Ge.apply(this, arguments)
        );
      }
      function We() {
        return (We = (0, c.c)(function* (n) {
          const e = (0, h.Yj)(n);
          yield B(e),
            yield e.auth._persistUserIfCurrent(e),
            e.auth._notifyListenersIfCurrent(e);
        })).apply(this, arguments);
      }
      function He() {
        return (He = (0, c.c)(function* (n, e) {
          const t = yield jn(
            n,
            {},
            (0, c.c)(function* () {
              const r = (0, h.ik)({
                  grant_type: "refresh_token",
                  refresh_token: e,
                }).slice(1),
                { tokenApiHost: i, apiKey: s } = n.config,
                o = Bn(n, i, "/v1/token", `key=${s}`),
                a = yield n._getAdditionalHeaders();
              return (
                (a["Content-Type"] = "application/x-www-form-urlencoded"),
                zn.fetch()(o, { method: "POST", headers: a, body: r })
              );
            }),
          );
          return {
            accessToken: t.access_token,
            expiresIn: t.expires_in,
            refreshToken: t.refresh_token,
          };
        })).apply(this, arguments);
      }
      function qe() {
        return (qe = (0, c.c)(function* (n, e) {
          return m(n, "POST", "/v2/accounts:revokeToken", _(n, e));
        })).apply(this, arguments);
      }
      class K {
        constructor() {
          (this.refreshToken = null),
            (this.accessToken = null),
            (this.expirationTime = null);
        }
        get isExpired() {
          return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
        }
        updateFromServerResponse(e) {
          l(e.idToken, "internal-error"),
            l(typeof e.idToken < "u", "internal-error"),
            l(typeof e.refreshToken < "u", "internal-error");
          const t =
            "expiresIn" in e && typeof e.expiresIn < "u"
              ? Number(e.expiresIn)
              : (function pi(n) {
                  const e = ae(n);
                  return (
                    l(e, "internal-error"),
                    l(typeof e.exp < "u", "internal-error"),
                    l(typeof e.iat < "u", "internal-error"),
                    Number(e.exp) - Number(e.iat)
                  );
                })(e.idToken);
          this.updateTokensAndExpiration(e.idToken, e.refreshToken, t);
        }
        getToken(e, t = !1) {
          var r = this;
          return (0, c.c)(function* () {
            return (
              l(!r.accessToken || r.refreshToken, e, "user-token-expired"),
              t || !r.accessToken || r.isExpired
                ? r.refreshToken
                  ? (yield r.refresh(e, r.refreshToken), r.accessToken)
                  : null
                : r.accessToken
            );
          })();
        }
        clearRefreshToken() {
          this.refreshToken = null;
        }
        refresh(e, t) {
          var r = this;
          return (0, c.c)(function* () {
            const {
              accessToken: i,
              refreshToken: s,
              expiresIn: o,
            } = yield (function vi(n, e) {
              return He.apply(this, arguments);
            })(e, t);
            r.updateTokensAndExpiration(i, s, Number(o));
          })();
        }
        updateTokensAndExpiration(e, t, r) {
          (this.refreshToken = t || null),
            (this.accessToken = e || null),
            (this.expirationTime = Date.now() + 1e3 * r);
        }
        static fromJSON(e, t) {
          const { refreshToken: r, accessToken: i, expirationTime: s } = t,
            o = new K();
          return (
            r &&
              (l("string" == typeof r, "internal-error", { appName: e }),
              (o.refreshToken = r)),
            i &&
              (l("string" == typeof i, "internal-error", { appName: e }),
              (o.accessToken = i)),
            s &&
              (l("number" == typeof s, "internal-error", { appName: e }),
              (o.expirationTime = s)),
            o
          );
        }
        toJSON() {
          return {
            refreshToken: this.refreshToken,
            accessToken: this.accessToken,
            expirationTime: this.expirationTime,
          };
        }
        _assign(e) {
          (this.accessToken = e.accessToken),
            (this.refreshToken = e.refreshToken),
            (this.expirationTime = e.expirationTime);
        }
        _clone() {
          return Object.assign(new K(), this.toJSON());
        }
        _performRefresh() {
          return k("not implemented");
        }
      }
      function L(n, e) {
        l("string" == typeof n || typeof n > "u", "internal-error", {
          appName: e,
        });
      }
      class M {
        constructor(e) {
          var { uid: t, auth: r, stsTokenManager: i } = e,
            s = (0, Pe.sX)(e, ["uid", "auth", "stsTokenManager"]);
          (this.providerId = "firebase"),
            (this.proactiveRefresh = new _i(this)),
            (this.reloadUserInfo = null),
            (this.reloadListener = null),
            (this.uid = t),
            (this.auth = r),
            (this.stsTokenManager = i),
            (this.accessToken = i.accessToken),
            (this.displayName = s.displayName || null),
            (this.email = s.email || null),
            (this.emailVerified = s.emailVerified || !1),
            (this.phoneNumber = s.phoneNumber || null),
            (this.photoURL = s.photoURL || null),
            (this.isAnonymous = s.isAnonymous || !1),
            (this.tenantId = s.tenantId || null),
            (this.providerData = s.providerData ? [...s.providerData] : []),
            (this.metadata = new Xn(
              s.createdAt || void 0,
              s.lastLoginAt || void 0,
            ));
        }
        getIdToken(e) {
          var t = this;
          return (0, c.c)(function* () {
            const r = yield S(t, t.stsTokenManager.getToken(t.auth, e));
            return (
              l(r, t.auth, "internal-error"),
              t.accessToken !== r &&
                ((t.accessToken = r),
                yield t.auth._persistUserIfCurrent(t),
                t.auth._notifyListenersIfCurrent(t)),
              r
            );
          })();
        }
        getIdTokenResult(e) {
          return (function hi(n) {
            return Ue.apply(this, arguments);
          })(this, e);
        }
        reload() {
          return (function mi(n) {
            return We.apply(this, arguments);
          })(this);
        }
        _assign(e) {
          this !== e &&
            (l(this.uid === e.uid, this.auth, "internal-error"),
            (this.displayName = e.displayName),
            (this.photoURL = e.photoURL),
            (this.email = e.email),
            (this.emailVerified = e.emailVerified),
            (this.phoneNumber = e.phoneNumber),
            (this.isAnonymous = e.isAnonymous),
            (this.tenantId = e.tenantId),
            (this.providerData = e.providerData.map((t) =>
              Object.assign({}, t),
            )),
            this.metadata._copy(e.metadata),
            this.stsTokenManager._assign(e.stsTokenManager));
        }
        _clone(e) {
          const t = new M(
            Object.assign(Object.assign({}, this), {
              auth: e,
              stsTokenManager: this.stsTokenManager._clone(),
            }),
          );
          return t.metadata._copy(this.metadata), t;
        }
        _onReload(e) {
          l(!this.reloadListener, this.auth, "internal-error"),
            (this.reloadListener = e),
            this.reloadUserInfo &&
              (this._notifyReloadListener(this.reloadUserInfo),
              (this.reloadUserInfo = null));
        }
        _notifyReloadListener(e) {
          this.reloadListener
            ? this.reloadListener(e)
            : (this.reloadUserInfo = e);
        }
        _startProactiveRefresh() {
          this.proactiveRefresh._start();
        }
        _stopProactiveRefresh() {
          this.proactiveRefresh._stop();
        }
        _updateTokensIfNecessary(e, t = !1) {
          var r = this;
          return (0, c.c)(function* () {
            let i = !1;
            e.idToken &&
              e.idToken !== r.stsTokenManager.accessToken &&
              (r.stsTokenManager.updateFromServerResponse(e), (i = !0)),
              t && (yield B(r)),
              yield r.auth._persistUserIfCurrent(r),
              i && r.auth._notifyListenersIfCurrent(r);
          })();
        }
        delete() {
          var e = this;
          return (0, c.c)(function* () {
            const t = yield e.getIdToken();
            return (
              yield S(
                e,
                (function ui(n, e) {
                  return De.apply(this, arguments);
                })(e.auth, { idToken: t }),
              ),
              e.stsTokenManager.clearRefreshToken(),
              e.auth.signOut()
            );
          })();
        }
        toJSON() {
          return Object.assign(
            Object.assign(
              {
                uid: this.uid,
                email: this.email || void 0,
                emailVerified: this.emailVerified,
                displayName: this.displayName || void 0,
                isAnonymous: this.isAnonymous,
                photoURL: this.photoURL || void 0,
                phoneNumber: this.phoneNumber || void 0,
                tenantId: this.tenantId || void 0,
                providerData: this.providerData.map((e) =>
                  Object.assign({}, e),
                ),
                stsTokenManager: this.stsTokenManager.toJSON(),
                _redirectEventId: this._redirectEventId,
              },
              this.metadata.toJSON(),
            ),
            { apiKey: this.auth.config.apiKey, appName: this.auth.name },
          );
        }
        get refreshToken() {
          return this.stsTokenManager.refreshToken || "";
        }
        static _fromJSON(e, t) {
          var r, i, s, o, a, u, d, p;
          const f = null !== (r = t.displayName) && void 0 !== r ? r : void 0,
            E = null !== (i = t.email) && void 0 !== i ? i : void 0,
            D = null !== (s = t.phoneNumber) && void 0 !== s ? s : void 0,
            Te = null !== (o = t.photoURL) && void 0 !== o ? o : void 0,
            Kr = null !== (a = t.tenantId) && void 0 !== a ? a : void 0,
            Mn = null !== (u = t._redirectEventId) && void 0 !== u ? u : void 0,
            $r = null !== (d = t.createdAt) && void 0 !== d ? d : void 0,
            Yr = null !== (p = t.lastLoginAt) && void 0 !== p ? p : void 0,
            {
              uid: xn,
              emailVerified: Jr,
              isAnonymous: Xr,
              providerData: Un,
              stsTokenManager: Qr,
            } = t;
          l(xn && Qr, e, "internal-error");
          const ia = K.fromJSON(this.name, Qr);
          l("string" == typeof xn, e, "internal-error"),
            L(f, e.name),
            L(E, e.name),
            l("boolean" == typeof Jr, e, "internal-error"),
            l("boolean" == typeof Xr, e, "internal-error"),
            L(D, e.name),
            L(Te, e.name),
            L(Kr, e.name),
            L(Mn, e.name),
            L($r, e.name),
            L(Yr, e.name);
          const Fn = new M({
            uid: xn,
            auth: e,
            email: E,
            emailVerified: Jr,
            displayName: f,
            isAnonymous: Xr,
            photoURL: Te,
            phoneNumber: D,
            tenantId: Kr,
            stsTokenManager: ia,
            createdAt: $r,
            lastLoginAt: Yr,
          });
          return (
            Un &&
              Array.isArray(Un) &&
              (Fn.providerData = Un.map((sa) => Object.assign({}, sa))),
            Mn && (Fn._redirectEventId = Mn),
            Fn
          );
        }
        static _fromIdTokenResponse(e, t, r = !1) {
          return (0, c.c)(function* () {
            const i = new K();
            i.updateFromServerResponse(t);
            const s = new M({
              uid: t.localId,
              auth: e,
              stsTokenManager: i,
              isAnonymous: r,
            });
            return yield B(s), s;
          })();
        }
      }
      const Qn = new Map();
      function w(n) {
        C(n instanceof Function, "Expected a class definition");
        let e = Qn.get(n);
        return e
          ? (C(
              e instanceof n,
              "Instance stored in cache mismatched with class",
            ),
            e)
          : ((e = new n()), Qn.set(n, e), e);
      }
      const Zn = (() => {
        class n {
          constructor() {
            (this.type = "NONE"), (this.storage = {});
          }
          _isAvailable() {
            return (0, c.c)(function* () {
              return !0;
            })();
          }
          _set(t, r) {
            var i = this;
            return (0, c.c)(function* () {
              i.storage[t] = r;
            })();
          }
          _get(t) {
            var r = this;
            return (0, c.c)(function* () {
              const i = r.storage[t];
              return void 0 === i ? null : i;
            })();
          }
          _remove(t) {
            var r = this;
            return (0, c.c)(function* () {
              delete r.storage[t];
            })();
          }
          _addListener(t, r) {}
          _removeListener(t, r) {}
        }
        return (n.type = "NONE"), n;
      })();
      function ce(n, e, t) {
        return `firebase:${n}:${e}:${t}`;
      }
      class G {
        constructor(e, t, r) {
          (this.persistence = e), (this.auth = t), (this.userKey = r);
          const { config: i, name: s } = this.auth;
          (this.fullUserKey = ce(this.userKey, i.apiKey, s)),
            (this.fullPersistenceKey = ce("persistence", i.apiKey, s)),
            (this.boundEventHandler = t._onStorageEvent.bind(t)),
            this.persistence._addListener(
              this.fullUserKey,
              this.boundEventHandler,
            );
        }
        setCurrentUser(e) {
          return this.persistence._set(this.fullUserKey, e.toJSON());
        }
        getCurrentUser() {
          var e = this;
          return (0, c.c)(function* () {
            const t = yield e.persistence._get(e.fullUserKey);
            return t ? M._fromJSON(e.auth, t) : null;
          })();
        }
        removeCurrentUser() {
          return this.persistence._remove(this.fullUserKey);
        }
        savePersistenceForRedirect() {
          return this.persistence._set(
            this.fullPersistenceKey,
            this.persistence.type,
          );
        }
        setPersistence(e) {
          var t = this;
          return (0, c.c)(function* () {
            if (t.persistence === e) return;
            const r = yield t.getCurrentUser();
            return (
              yield t.removeCurrentUser(),
              (t.persistence = e),
              r ? t.setCurrentUser(r) : void 0
            );
          })();
        }
        delete() {
          this.persistence._removeListener(
            this.fullUserKey,
            this.boundEventHandler,
          );
        }
        static create(e, t, r = "authUser") {
          return (0, c.c)(function* () {
            if (!t.length) return new G(w(Zn), e, r);
            const i = (yield Promise.all(
              t.map(
                (function () {
                  var d = (0, c.c)(function* (p) {
                    if (yield p._isAvailable()) return p;
                  });
                  return function (p) {
                    return d.apply(this, arguments);
                  };
                })(),
              ),
            )).filter((d) => d);
            let s = i[0] || w(Zn);
            const o = ce(r, e.config.apiKey, e.name);
            let a = null;
            for (const d of t)
              try {
                const p = yield d._get(o);
                if (p) {
                  const f = M._fromJSON(e, p);
                  d !== s && (a = f), (s = d);
                  break;
                }
              } catch {}
            const u = i.filter((d) => d._shouldAllowMigration);
            return s._shouldAllowMigration && u.length
              ? ((s = u[0]),
                a && (yield s._set(o, a.toJSON())),
                yield Promise.all(
                  t.map(
                    (function () {
                      var d = (0, c.c)(function* (p) {
                        if (p !== s)
                          try {
                            yield p._remove(o);
                          } catch {}
                      });
                      return function (p) {
                        return d.apply(this, arguments);
                      };
                    })(),
                  ),
                ),
                new G(s, e, r))
              : new G(s, e, r);
          })();
        }
      }
      function er(n) {
        const e = n.toLowerCase();
        if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/"))
          return "Opera";
        if (rr(e)) return "IEMobile";
        if (e.includes("msie") || e.includes("trident/")) return "IE";
        if (e.includes("edge/")) return "Edge";
        if (tr(e)) return "Firefox";
        if (e.includes("silk/")) return "Silk";
        if (sr(e)) return "Blackberry";
        if (or(e)) return "Webos";
        if (ze(e)) return "Safari";
        if ((e.includes("chrome/") || nr(e)) && !e.includes("edge/"))
          return "Chrome";
        if (ir(e)) return "Android";
        {
          const r = n.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);
          if (2 === r?.length) return r[1];
        }
        return "Other";
      }
      function tr(n = (0, h.Su)()) {
        return /firefox\//i.test(n);
      }
      function ze(n = (0, h.Su)()) {
        const e = n.toLowerCase();
        return (
          e.includes("safari/") &&
          !e.includes("chrome/") &&
          !e.includes("crios/") &&
          !e.includes("android")
        );
      }
      function nr(n = (0, h.Su)()) {
        return /crios\//i.test(n);
      }
      function rr(n = (0, h.Su)()) {
        return /iemobile/i.test(n);
      }
      function ir(n = (0, h.Su)()) {
        return /android/i.test(n);
      }
      function sr(n = (0, h.Su)()) {
        return /blackberry/i.test(n);
      }
      function or(n = (0, h.Su)()) {
        return /webos/i.test(n);
      }
      function ue(n = (0, h.Su)()) {
        return (
          /iphone|ipad|ipod/i.test(n) ||
          (/macintosh/i.test(n) && /mobile/i.test(n))
        );
      }
      function ar(n = (0, h.Su)()) {
        return (
          ue(n) || ir(n) || or(n) || sr(n) || /windows phone/i.test(n) || rr(n)
        );
      }
      function cr(n, e = []) {
        let t;
        switch (n) {
          case "Browser":
            t = er((0, h.Su)());
            break;
          case "Worker":
            t = `${er((0, h.Su)())}-${n}`;
            break;
          default:
            t = n;
        }
        const r = e.length ? e.join(",") : "FirebaseCore-web";
        return `${t}/JsCore/${y.Sg}/${r}`;
      }
      class Pi {
        constructor(e) {
          (this.auth = e), (this.queue = []);
        }
        pushCallback(e, t) {
          const r = (s) =>
            new Promise((o, a) => {
              try {
                o(e(s));
              } catch (u) {
                a(u);
              }
            });
          (r.onAbort = t), this.queue.push(r);
          const i = this.queue.length - 1;
          return () => {
            this.queue[i] = () => Promise.resolve();
          };
        }
        runMiddleware(e) {
          var t = this;
          return (0, c.c)(function* () {
            if (t.auth.currentUser === e) return;
            const r = [];
            try {
              for (const i of t.queue)
                yield i(e), i.onAbort && r.push(i.onAbort);
            } catch (i) {
              r.reverse();
              for (const s of r)
                try {
                  s();
                } catch {}
              throw t.auth._errorFactory.create("login-blocked", {
                originalMessage: i?.message,
              });
            }
          })();
        }
      }
      function je() {
        return (je = (0, c.c)(function* (n, e = {}) {
          return m(n, "GET", "/v2/passwordPolicy", _(n, e));
        })).apply(this, arguments);
      }
      class Si {
        constructor(e) {
          var t, r, i, s;
          const o = e.customStrengthOptions;
          (this.customStrengthOptions = {}),
            (this.customStrengthOptions.minPasswordLength =
              null !== (t = o.minPasswordLength) && void 0 !== t ? t : 6),
            o.maxPasswordLength &&
              (this.customStrengthOptions.maxPasswordLength =
                o.maxPasswordLength),
            void 0 !== o.containsLowercaseCharacter &&
              (this.customStrengthOptions.containsLowercaseLetter =
                o.containsLowercaseCharacter),
            void 0 !== o.containsUppercaseCharacter &&
              (this.customStrengthOptions.containsUppercaseLetter =
                o.containsUppercaseCharacter),
            void 0 !== o.containsNumericCharacter &&
              (this.customStrengthOptions.containsNumericCharacter =
                o.containsNumericCharacter),
            void 0 !== o.containsNonAlphanumericCharacter &&
              (this.customStrengthOptions.containsNonAlphanumericCharacter =
                o.containsNonAlphanumericCharacter),
            (this.enforcementState = e.enforcementState),
            "ENFORCEMENT_STATE_UNSPECIFIED" === this.enforcementState &&
              (this.enforcementState = "OFF"),
            (this.allowedNonAlphanumericCharacters =
              null !==
                (i =
                  null === (r = e.allowedNonAlphanumericCharacters) ||
                  void 0 === r
                    ? void 0
                    : r.join("")) && void 0 !== i
                ? i
                : ""),
            (this.forceUpgradeOnSignin =
              null !== (s = e.forceUpgradeOnSignin) && void 0 !== s && s),
            (this.schemaVersion = e.schemaVersion);
        }
        validatePassword(e) {
          var t, r, i, s, o, a;
          const u = { isValid: !0, passwordPolicy: this };
          return (
            this.validatePasswordLengthOptions(e, u),
            this.validatePasswordCharacterOptions(e, u),
            u.isValid &&
              (u.isValid =
                null === (t = u.meetsMinPasswordLength) || void 0 === t || t),
            u.isValid &&
              (u.isValid =
                null === (r = u.meetsMaxPasswordLength) || void 0 === r || r),
            u.isValid &&
              (u.isValid =
                null === (i = u.containsLowercaseLetter) || void 0 === i || i),
            u.isValid &&
              (u.isValid =
                null === (s = u.containsUppercaseLetter) || void 0 === s || s),
            u.isValid &&
              (u.isValid =
                null === (o = u.containsNumericCharacter) || void 0 === o || o),
            u.isValid &&
              (u.isValid =
                null === (a = u.containsNonAlphanumericCharacter) ||
                void 0 === a ||
                a),
            u
          );
        }
        validatePasswordLengthOptions(e, t) {
          const r = this.customStrengthOptions.minPasswordLength,
            i = this.customStrengthOptions.maxPasswordLength;
          r && (t.meetsMinPasswordLength = e.length >= r),
            i && (t.meetsMaxPasswordLength = e.length <= i);
        }
        validatePasswordCharacterOptions(e, t) {
          let r;
          this.updatePasswordCharacterOptionsStatuses(t, !1, !1, !1, !1);
          for (let i = 0; i < e.length; i++)
            (r = e.charAt(i)),
              this.updatePasswordCharacterOptionsStatuses(
                t,
                r >= "a" && r <= "z",
                r >= "A" && r <= "Z",
                r >= "0" && r <= "9",
                this.allowedNonAlphanumericCharacters.includes(r),
              );
        }
        updatePasswordCharacterOptionsStatuses(e, t, r, i, s) {
          this.customStrengthOptions.containsLowercaseLetter &&
            (e.containsLowercaseLetter || (e.containsLowercaseLetter = t)),
            this.customStrengthOptions.containsUppercaseLetter &&
              (e.containsUppercaseLetter || (e.containsUppercaseLetter = r)),
            this.customStrengthOptions.containsNumericCharacter &&
              (e.containsNumericCharacter || (e.containsNumericCharacter = i)),
            this.customStrengthOptions.containsNonAlphanumericCharacter &&
              (e.containsNonAlphanumericCharacter ||
                (e.containsNonAlphanumericCharacter = s));
        }
      }
      class wi {
        constructor(e, t, r, i) {
          (this.app = e),
            (this.heartbeatServiceProvider = t),
            (this.appCheckServiceProvider = r),
            (this.config = i),
            (this.currentUser = null),
            (this.emulatorConfig = null),
            (this.operations = Promise.resolve()),
            (this.authStateSubscription = new ur(this)),
            (this.idTokenSubscription = new ur(this)),
            (this.beforeStateQueue = new Pi(this)),
            (this.redirectUser = null),
            (this.isProactiveRefreshEnabled = !1),
            (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
            (this._canInitEmulator = !0),
            (this._isInitialized = !1),
            (this._deleted = !1),
            (this._initializationPromise = null),
            (this._popupRedirectResolver = null),
            (this._errorFactory = Wn),
            (this._agentRecaptchaConfig = null),
            (this._tenantRecaptchaConfigs = {}),
            (this._projectPasswordPolicy = null),
            (this._tenantPasswordPolicies = {}),
            (this.lastNotifiedUid = void 0),
            (this.languageCode = null),
            (this.tenantId = null),
            (this.settings = { appVerificationDisabledForTesting: !1 }),
            (this.frameworks = []),
            (this.name = e.name),
            (this.clientVersion = i.sdkClientVersion);
        }
        _initializeWithPersistence(e, t) {
          var r = this;
          return (
            t && (this._popupRedirectResolver = w(t)),
            (this._initializationPromise = this.queue(
              (0, c.c)(function* () {
                var i, s;
                if (
                  !r._deleted &&
                  ((r.persistenceManager = yield G.create(r, e)), !r._deleted)
                ) {
                  if (
                    null !== (i = r._popupRedirectResolver) &&
                    void 0 !== i &&
                    i._shouldInitProactively
                  )
                    try {
                      yield r._popupRedirectResolver._initialize(r);
                    } catch {}
                  yield r.initializeCurrentUser(t),
                    (r.lastNotifiedUid =
                      (null === (s = r.currentUser) || void 0 === s
                        ? void 0
                        : s.uid) || null),
                    !r._deleted && (r._isInitialized = !0);
                }
              }),
            )),
            this._initializationPromise
          );
        }
        _onStorageEvent() {
          var e = this;
          return (0, c.c)(function* () {
            if (e._deleted) return;
            const t = yield e.assertedPersistence.getCurrentUser();
            if (e.currentUser || t) {
              if (e.currentUser && t && e.currentUser.uid === t.uid)
                return (
                  e._currentUser._assign(t),
                  void (yield e.currentUser.getIdToken())
                );
              yield e._updateCurrentUser(t, !0);
            }
          })();
        }
        initializeCurrentUser(e) {
          var t = this;
          return (0, c.c)(function* () {
            var r;
            const i = yield t.assertedPersistence.getCurrentUser();
            let s = i,
              o = !1;
            if (e && t.config.authDomain) {
              yield t.getOrInitRedirectPersistenceManager();
              const a =
                  null === (r = t.redirectUser) || void 0 === r
                    ? void 0
                    : r._redirectEventId,
                u = s?._redirectEventId,
                d = yield t.tryRedirectSignIn(e);
              (!a || a === u) && d?.user && ((s = d.user), (o = !0));
            }
            if (!s) return t.directlySetCurrentUser(null);
            if (!s._redirectEventId) {
              if (o)
                try {
                  yield t.beforeStateQueue.runMiddleware(s);
                } catch (a) {
                  (s = i),
                    t._popupRedirectResolver._overrideRedirectResult(t, () =>
                      Promise.reject(a),
                    );
                }
              return s
                ? t.reloadAndSetCurrentUserOrClear(s)
                : t.directlySetCurrentUser(null);
            }
            return (
              l(t._popupRedirectResolver, t, "argument-error"),
              yield t.getOrInitRedirectPersistenceManager(),
              t.redirectUser &&
              t.redirectUser._redirectEventId === s._redirectEventId
                ? t.directlySetCurrentUser(s)
                : t.reloadAndSetCurrentUserOrClear(s)
            );
          })();
        }
        tryRedirectSignIn(e) {
          var t = this;
          return (0, c.c)(function* () {
            let r = null;
            try {
              r = yield t._popupRedirectResolver._completeRedirectFn(t, e, !0);
            } catch {
              yield t._setRedirectUser(null);
            }
            return r;
          })();
        }
        reloadAndSetCurrentUserOrClear(e) {
          var t = this;
          return (0, c.c)(function* () {
            try {
              yield B(e);
            } catch (r) {
              if ("auth/network-request-failed" !== r?.code)
                return t.directlySetCurrentUser(null);
            }
            return t.directlySetCurrentUser(e);
          })();
        }
        useDeviceLanguage() {
          this.languageCode = (function ri() {
            if (typeof navigator > "u") return null;
            const n = navigator;
            return (n.languages && n.languages[0]) || n.language || null;
          })();
        }
        _delete() {
          var e = this;
          return (0, c.c)(function* () {
            e._deleted = !0;
          })();
        }
        updateCurrentUser(e) {
          var t = this;
          return (0, c.c)(function* () {
            const r = e ? (0, h.Yj)(e) : null;
            return (
              r &&
                l(
                  r.auth.config.apiKey === t.config.apiKey,
                  t,
                  "invalid-user-token",
                ),
              t._updateCurrentUser(r && r._clone(t))
            );
          })();
        }
        _updateCurrentUser(e, t = !1) {
          var r = this;
          return (0, c.c)(function* () {
            if (!r._deleted)
              return (
                e && l(r.tenantId === e.tenantId, r, "tenant-id-mismatch"),
                t || (yield r.beforeStateQueue.runMiddleware(e)),
                r.queue(
                  (0, c.c)(function* () {
                    yield r.directlySetCurrentUser(e), r.notifyAuthListeners();
                  }),
                )
              );
          })();
        }
        signOut() {
          var e = this;
          return (0, c.c)(function* () {
            return (
              yield e.beforeStateQueue.runMiddleware(null),
              (e.redirectPersistenceManager || e._popupRedirectResolver) &&
                (yield e._setRedirectUser(null)),
              e._updateCurrentUser(null, !0)
            );
          })();
        }
        setPersistence(e) {
          var t = this;
          return this.queue(
            (0, c.c)(function* () {
              yield t.assertedPersistence.setPersistence(w(e));
            }),
          );
        }
        _getRecaptchaConfig() {
          return null == this.tenantId
            ? this._agentRecaptchaConfig
            : this._tenantRecaptchaConfigs[this.tenantId];
        }
        validatePassword(e) {
          var t = this;
          return (0, c.c)(function* () {
            t._getPasswordPolicyInternal() || (yield t._updatePasswordPolicy());
            const r = t._getPasswordPolicyInternal();
            return r.schemaVersion !== t.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
              ? Promise.reject(
                  t._errorFactory.create(
                    "unsupported-password-policy-schema-version",
                    {},
                  ),
                )
              : r.validatePassword(e);
          })();
        }
        _getPasswordPolicyInternal() {
          return null === this.tenantId
            ? this._projectPasswordPolicy
            : this._tenantPasswordPolicies[this.tenantId];
        }
        _updatePasswordPolicy() {
          var e = this;
          return (0, c.c)(function* () {
            const t = yield (function ki(n) {
                return je.apply(this, arguments);
              })(e),
              r = new Si(t);
            null === e.tenantId
              ? (e._projectPasswordPolicy = r)
              : (e._tenantPasswordPolicies[e.tenantId] = r);
          })();
        }
        _getPersistence() {
          return this.assertedPersistence.persistence.type;
        }
        _updateErrorMap(e) {
          this._errorFactory = new h.UR("auth", "Firebase", e());
        }
        onAuthStateChanged(e, t, r) {
          return this.registerStateListener(
            this.authStateSubscription,
            e,
            t,
            r,
          );
        }
        beforeAuthStateChanged(e, t) {
          return this.beforeStateQueue.pushCallback(e, t);
        }
        onIdTokenChanged(e, t, r) {
          return this.registerStateListener(this.idTokenSubscription, e, t, r);
        }
        authStateReady() {
          return new Promise((e, t) => {
            if (this.currentUser) e();
            else {
              const r = this.onAuthStateChanged(() => {
                r(), e();
              }, t);
            }
          });
        }
        revokeAccessToken(e) {
          var t = this;
          return (0, c.c)(function* () {
            if (t.currentUser) {
              const r = yield t.currentUser.getIdToken(),
                i = {
                  providerId: "apple.com",
                  tokenType: "ACCESS_TOKEN",
                  token: e,
                  idToken: r,
                };
              null != t.tenantId && (i.tenantId = t.tenantId),
                yield (function yi(n, e) {
                  return qe.apply(this, arguments);
                })(t, i);
            }
          })();
        }
        toJSON() {
          var e;
          return {
            apiKey: this.config.apiKey,
            authDomain: this.config.authDomain,
            appName: this.name,
            currentUser:
              null === (e = this._currentUser) || void 0 === e
                ? void 0
                : e.toJSON(),
          };
        }
        _setRedirectUser(e, t) {
          var r = this;
          return (0, c.c)(function* () {
            const i = yield r.getOrInitRedirectPersistenceManager(t);
            return null === e ? i.removeCurrentUser() : i.setCurrentUser(e);
          })();
        }
        getOrInitRedirectPersistenceManager(e) {
          var t = this;
          return (0, c.c)(function* () {
            if (!t.redirectPersistenceManager) {
              const r = (e && w(e)) || t._popupRedirectResolver;
              l(r, t, "argument-error"),
                (t.redirectPersistenceManager = yield G.create(
                  t,
                  [w(r._redirectPersistence)],
                  "redirectUser",
                )),
                (t.redirectUser =
                  yield t.redirectPersistenceManager.getCurrentUser());
            }
            return t.redirectPersistenceManager;
          })();
        }
        _redirectUserForId(e) {
          var t = this;
          return (0, c.c)(function* () {
            var r, i;
            return (
              t._isInitialized && (yield t.queue((0, c.c)(function* () {}))),
              (null === (r = t._currentUser) || void 0 === r
                ? void 0
                : r._redirectEventId) === e
                ? t._currentUser
                : (null === (i = t.redirectUser) || void 0 === i
                      ? void 0
                      : i._redirectEventId) === e
                  ? t.redirectUser
                  : null
            );
          })();
        }
        _persistUserIfCurrent(e) {
          var t = this;
          return (0, c.c)(function* () {
            if (e === t.currentUser)
              return t.queue(
                (0, c.c)(function* () {
                  return t.directlySetCurrentUser(e);
                }),
              );
          })();
        }
        _notifyListenersIfCurrent(e) {
          e === this.currentUser && this.notifyAuthListeners();
        }
        _key() {
          return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
        }
        _startProactiveRefresh() {
          (this.isProactiveRefreshEnabled = !0),
            this.currentUser && this._currentUser._startProactiveRefresh();
        }
        _stopProactiveRefresh() {
          (this.isProactiveRefreshEnabled = !1),
            this.currentUser && this._currentUser._stopProactiveRefresh();
        }
        get _currentUser() {
          return this.currentUser;
        }
        notifyAuthListeners() {
          var e, t;
          if (!this._isInitialized) return;
          this.idTokenSubscription.next(this.currentUser);
          const r =
            null !==
              (t =
                null === (e = this.currentUser) || void 0 === e
                  ? void 0
                  : e.uid) && void 0 !== t
              ? t
              : null;
          this.lastNotifiedUid !== r &&
            ((this.lastNotifiedUid = r),
            this.authStateSubscription.next(this.currentUser));
        }
        registerStateListener(e, t, r, i) {
          if (this._deleted) return () => {};
          const s = "function" == typeof t ? t : t.next.bind(t);
          let o = !1;
          const a = this._isInitialized
            ? Promise.resolve()
            : this._initializationPromise;
          if (
            (l(a, this, "internal-error"),
            a.then(() => {
              o || s(this.currentUser);
            }),
            "function" == typeof t)
          ) {
            const u = e.addObserver(t, r, i);
            return () => {
              (o = !0), u();
            };
          }
          {
            const u = e.addObserver(t);
            return () => {
              (o = !0), u();
            };
          }
        }
        directlySetCurrentUser(e) {
          var t = this;
          return (0, c.c)(function* () {
            t.currentUser &&
              t.currentUser !== e &&
              t._currentUser._stopProactiveRefresh(),
              e && t.isProactiveRefreshEnabled && e._startProactiveRefresh(),
              (t.currentUser = e),
              e
                ? yield t.assertedPersistence.setCurrentUser(e)
                : yield t.assertedPersistence.removeCurrentUser();
          })();
        }
        queue(e) {
          return (
            (this.operations = this.operations.then(e, e)), this.operations
          );
        }
        get assertedPersistence() {
          return (
            l(this.persistenceManager, this, "internal-error"),
            this.persistenceManager
          );
        }
        _logFramework(e) {
          !e ||
            this.frameworks.includes(e) ||
            (this.frameworks.push(e),
            this.frameworks.sort(),
            (this.clientVersion = cr(
              this.config.clientPlatform,
              this._getFrameworks(),
            )));
        }
        _getFrameworks() {
          return this.frameworks;
        }
        _getAdditionalHeaders() {
          var e = this;
          return (0, c.c)(function* () {
            var t;
            const r = { "X-Client-Version": e.clientVersion };
            e.app.options.appId &&
              (r["X-Firebase-gmpid"] = e.app.options.appId);
            const i = yield null ===
              (t = e.heartbeatServiceProvider.getImmediate({ optional: !0 })) ||
            void 0 === t
              ? void 0
              : t.getHeartbeatsHeader();
            i && (r["X-Firebase-Client"] = i);
            const s = yield e._getAppCheckToken();
            return s && (r["X-Firebase-AppCheck"] = s), r;
          })();
        }
        _getAppCheckToken() {
          var e = this;
          return (0, c.c)(function* () {
            var t;
            const r = yield null ===
              (t = e.appCheckServiceProvider.getImmediate({ optional: !0 })) ||
            void 0 === t
              ? void 0
              : t.getToken();
            return (
              r?.error &&
                (function ti(n, ...e) {
                  se.logLevel <= b.Ge.WARN &&
                    se.warn(`Auth (${y.Sg}): ${n}`, ...e);
                })(`Error while retrieving App Check token: ${r.error}`),
              r?.token
            );
          })();
        }
      }
      function g(n) {
        return (0, h.Yj)(n);
      }
      class ur {
        constructor(e) {
          (this.auth = e),
            (this.observer = null),
            (this.addObserver = (0, h.my)((t) => (this.observer = t)));
        }
        get next() {
          return (
            l(this.observer, this.auth, "internal-error"),
            this.observer.next.bind(this.observer)
          );
        }
      }
      let $ = {
        loadJS: () =>
          (0, c.c)(function* () {
            throw new Error("Unable to load external scripts");
          })(),
        recaptchaV2Script: "",
        recaptchaEnterpriseScript: "",
        gapiScript: "",
      };
      function Be(n) {
        return $.loadJS(n);
      }
      function lr(n) {
        return `__${n}${Math.floor(1e6 * Math.random())}`;
      }
      class dr {
        constructor(e) {
          (this.type = "recaptcha-enterprise"), (this.auth = g(e));
        }
        verify(e = "verify", t = !1) {
          var r = this;
          return (0, c.c)(function* () {
            function s() {
              return (
                (s = (0, c.c)(function* (a) {
                  if (!t) {
                    if (null == a.tenantId && null != a._agentRecaptchaConfig)
                      return a._agentRecaptchaConfig.siteKey;
                    if (
                      null != a.tenantId &&
                      void 0 !== a._tenantRecaptchaConfigs[a.tenantId]
                    )
                      return a._tenantRecaptchaConfigs[a.tenantId].siteKey;
                  }
                  return new Promise(
                    (function () {
                      var u = (0, c.c)(function* (d, p) {
                        Jn(a, {
                          clientType: "CLIENT_TYPE_WEB",
                          version: "RECAPTCHA_ENTERPRISE",
                        })
                          .then((f) => {
                            if (void 0 !== f.recaptchaKey) {
                              const E = new Yn(f);
                              return (
                                null == a.tenantId
                                  ? (a._agentRecaptchaConfig = E)
                                  : (a._tenantRecaptchaConfigs[a.tenantId] = E),
                                d(E.siteKey)
                              );
                            }
                            p(
                              new Error(
                                "recaptcha Enterprise site key undefined",
                              ),
                            );
                          })
                          .catch((f) => {
                            p(f);
                          });
                      });
                      return function (d, p) {
                        return u.apply(this, arguments);
                      };
                    })(),
                  );
                })),
                s.apply(this, arguments)
              );
            }
            function o(a, u, d) {
              const p = window.grecaptcha;
              $n(p)
                ? p.enterprise.ready(() => {
                    p.enterprise
                      .execute(a, { action: e })
                      .then((f) => {
                        u(f);
                      })
                      .catch(() => {
                        u("NO_RECAPTCHA");
                      });
                  })
                : d(Error("No reCAPTCHA enterprise script loaded."));
            }
            return new Promise((a, u) => {
              (function i(a) {
                return s.apply(this, arguments);
              })(r.auth)
                .then((d) => {
                  if (!t && $n(window.grecaptcha)) o(d, a, u);
                  else {
                    if (typeof window > "u")
                      return void u(
                        new Error(
                          "RecaptchaVerifier is only supported in browser",
                        ),
                      );
                    let p = (function bi() {
                      return $.recaptchaEnterpriseScript;
                    })();
                    0 !== p.length && (p += d),
                      Be(p)
                        .then(() => {
                          o(d, a, u);
                        })
                        .catch((f) => {
                          u(f);
                        });
                  }
                })
                .catch((d) => {
                  u(d);
                });
            });
          })();
        }
      }
      function hr(n, e, t) {
        return Ke.apply(this, arguments);
      }
      function Ke() {
        return (Ke = (0, c.c)(function* (n, e, t, r = !1) {
          const i = new dr(n);
          let s;
          try {
            s = yield i.verify(t);
          } catch {
            s = yield i.verify(t, !0);
          }
          const o = Object.assign({}, e);
          return (
            Object.assign(o, r ? { captchaResp: s } : { captchaResponse: s }),
            Object.assign(o, { clientType: "CLIENT_TYPE_WEB" }),
            Object.assign(o, { recaptchaVersion: "RECAPTCHA_ENTERPRISE" }),
            o
          );
        })).apply(this, arguments);
      }
      function Y(n, e, t, r) {
        return $e.apply(this, arguments);
      }
      function $e() {
        return (
          ($e = (0, c.c)(function* (n, e, t, r) {
            var i;
            if (
              null !== (i = n._getRecaptchaConfig()) &&
              void 0 !== i &&
              i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")
            ) {
              const s = yield hr(n, e, t, "getOobCode" === t);
              return r(n, s);
            }
            return r(n, e).catch(
              (function () {
                var s = (0, c.c)(function* (o) {
                  if ("auth/missing-recaptcha-token" === o.code) {
                    console.log(
                      `${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`,
                    );
                    const a = yield hr(n, e, t, "getOobCode" === t);
                    return r(n, a);
                  }
                  return Promise.reject(o);
                });
                return function (o) {
                  return s.apply(this, arguments);
                };
              })(),
            );
          })),
          $e.apply(this, arguments)
        );
      }
      function pr(n) {
        const e = n.indexOf(":");
        return e < 0 ? "" : n.substr(0, e + 1);
      }
      function fr(n) {
        if (!n) return null;
        const e = Number(n);
        return isNaN(e) ? null : e;
      }
      class J {
        constructor(e, t) {
          (this.providerId = e), (this.signInMethod = t);
        }
        toJSON() {
          return k("not implemented");
        }
        _getIdTokenResponse(e) {
          return k("not implemented");
        }
        _linkToIdToken(e, t) {
          return k("not implemented");
        }
        _getReauthenticationResolver(e) {
          return k("not implemented");
        }
      }
      function Hi(n, e) {
        return Qe.apply(this, arguments);
      }
      function Qe() {
        return (Qe = (0, c.c)(function* (n, e) {
          return m(n, "POST", "/v1/accounts:signUp", e);
        })).apply(this, arguments);
      }
      function zi(n, e) {
        return et.apply(this, arguments);
      }
      function et() {
        return (et = (0, c.c)(function* (n, e) {
          return R(n, "POST", "/v1/accounts:signInWithPassword", _(n, e));
        })).apply(this, arguments);
      }
      function ot() {
        return (ot = (0, c.c)(function* (n, e) {
          return R(n, "POST", "/v1/accounts:signInWithEmailLink", _(n, e));
        })).apply(this, arguments);
      }
      function at() {
        return (at = (0, c.c)(function* (n, e) {
          return R(n, "POST", "/v1/accounts:signInWithEmailLink", _(n, e));
        })).apply(this, arguments);
      }
      class X extends J {
        constructor(e, t, r, i = null) {
          super("password", r),
            (this._email = e),
            (this._password = t),
            (this._tenantId = i);
        }
        static _fromEmailAndPassword(e, t) {
          return new X(e, t, "password");
        }
        static _fromEmailAndCode(e, t, r = null) {
          return new X(e, t, "emailLink", r);
        }
        toJSON() {
          return {
            email: this._email,
            password: this._password,
            signInMethod: this.signInMethod,
            tenantId: this._tenantId,
          };
        }
        static fromJSON(e) {
          const t = "string" == typeof e ? JSON.parse(e) : e;
          if (t?.email && t?.password) {
            if ("password" === t.signInMethod)
              return this._fromEmailAndPassword(t.email, t.password);
            if ("emailLink" === t.signInMethod)
              return this._fromEmailAndCode(t.email, t.password, t.tenantId);
          }
          return null;
        }
        _getIdTokenResponse(e) {
          var t = this;
          return (0, c.c)(function* () {
            switch (t.signInMethod) {
              case "password":
                return Y(
                  e,
                  {
                    returnSecureToken: !0,
                    email: t._email,
                    password: t._password,
                    clientType: "CLIENT_TYPE_WEB",
                  },
                  "signInWithPassword",
                  zi,
                );
              case "emailLink":
                return (function Yi(n, e) {
                  return ot.apply(this, arguments);
                })(e, { email: t._email, oobCode: t._password });
              default:
                T(e, "internal-error");
            }
          })();
        }
        _linkToIdToken(e, t) {
          var r = this;
          return (0, c.c)(function* () {
            switch (r.signInMethod) {
              case "password":
                return Y(
                  e,
                  {
                    idToken: t,
                    returnSecureToken: !0,
                    email: r._email,
                    password: r._password,
                    clientType: "CLIENT_TYPE_WEB",
                  },
                  "signUpPassword",
                  Hi,
                );
              case "emailLink":
                return (function Ji(n, e) {
                  return at.apply(this, arguments);
                })(e, { idToken: t, email: r._email, oobCode: r._password });
              default:
                T(e, "internal-error");
            }
          })();
        }
        _getReauthenticationResolver(e) {
          return this._getIdTokenResponse(e);
        }
      }
      function O(n, e) {
        return ct.apply(this, arguments);
      }
      function ct() {
        return (ct = (0, c.c)(function* (n, e) {
          return R(n, "POST", "/v1/accounts:signInWithIdp", _(n, e));
        })).apply(this, arguments);
      }
      class ee {
        constructor(e) {
          var t, r, i, s, o, a;
          const u = (0, h.aw)((0, h.kF)(e)),
            d = null !== (t = u.apiKey) && void 0 !== t ? t : null,
            p = null !== (r = u.oobCode) && void 0 !== r ? r : null,
            f = (function rs(n) {
              switch (n) {
                case "recoverEmail":
                  return "RECOVER_EMAIL";
                case "resetPassword":
                  return "PASSWORD_RESET";
                case "signIn":
                  return "EMAIL_SIGNIN";
                case "verifyEmail":
                  return "VERIFY_EMAIL";
                case "verifyAndChangeEmail":
                  return "VERIFY_AND_CHANGE_EMAIL";
                case "revertSecondFactorAddition":
                  return "REVERT_SECOND_FACTOR_ADDITION";
                default:
                  return null;
              }
            })(null !== (i = u.mode) && void 0 !== i ? i : null);
          l(d && p && f, "argument-error"),
            (this.apiKey = d),
            (this.operation = f),
            (this.code = p),
            (this.continueUrl =
              null !== (s = u.continueUrl) && void 0 !== s ? s : null),
            (this.languageCode =
              null !== (o = u.languageCode) && void 0 !== o ? o : null),
            (this.tenantId =
              null !== (a = u.tenantId) && void 0 !== a ? a : null);
        }
        static parseLink(e) {
          const t = (function is(n) {
            const e = (0, h.aw)((0, h.kF)(n)).link,
              t = e ? (0, h.aw)((0, h.kF)(e)).deep_link_id : null,
              r = (0, h.aw)((0, h.kF)(n)).deep_link_id;
            return (
              (r ? (0, h.aw)((0, h.kF)(r)).link : null) || r || t || e || n
            );
          })(e);
          try {
            return new ee(t);
          } catch {
            return null;
          }
        }
      }
      let mr = (() => {
        class n {
          constructor() {
            this.providerId = n.PROVIDER_ID;
          }
          static credential(t, r) {
            return X._fromEmailAndPassword(t, r);
          }
          static credentialWithLink(t, r) {
            const i = ee.parseLink(r);
            return (
              l(i, "argument-error"), X._fromEmailAndCode(t, i.code, i.tenantId)
            );
          }
        }
        return (
          (n.PROVIDER_ID = "password"),
          (n.EMAIL_PASSWORD_SIGN_IN_METHOD = "password"),
          (n.EMAIL_LINK_SIGN_IN_METHOD = "emailLink"),
          n
        );
      })();
      class N {
        constructor(e) {
          (this.providerId = e),
            (this.defaultLanguageCode = null),
            (this.customParameters = {});
        }
        setDefaultLanguage(e) {
          this.defaultLanguageCode = e;
        }
        setCustomParameters(e) {
          return (this.customParameters = e), this;
        }
        getCustomParameters() {
          return this.customParameters;
        }
      }
      class ss extends N {
        constructor() {
          super(...arguments), (this.scopes = []);
        }
        addScope(e) {
          return this.scopes.includes(e) || this.scopes.push(e), this;
        }
        getScopes() {
          return [...this.scopes];
        }
      }
      function gr(n, e) {
        return ft.apply(this, arguments);
      }
      function ft() {
        return (ft = (0, c.c)(function* (n, e) {
          return R(n, "POST", "/v1/accounts:signUp", _(n, e));
        })).apply(this, arguments);
      }
      class A {
        constructor(e) {
          (this.user = e.user),
            (this.providerId = e.providerId),
            (this._tokenResponse = e._tokenResponse),
            (this.operationType = e.operationType);
        }
        static _fromIdTokenResponse(e, t, r, i = !1) {
          return (0, c.c)(function* () {
            const s = yield M._fromIdTokenResponse(e, r, i),
              o = Ir(r);
            return new A({
              user: s,
              providerId: o,
              _tokenResponse: r,
              operationType: t,
            });
          })();
        }
        static _forOperation(e, t, r) {
          return (0, c.c)(function* () {
            yield e._updateTokensIfNecessary(r, !0);
            const i = Ir(r);
            return new A({
              user: e,
              providerId: i,
              _tokenResponse: r,
              operationType: t,
            });
          })();
        }
      }
      function Ir(n) {
        return n.providerId
          ? n.providerId
          : "phoneNumber" in n
            ? "phone"
            : null;
      }
      class he extends h.kx {
        constructor(e, t, r, i) {
          var s;
          super(t.code, t.message),
            (this.operationType = r),
            (this.user = i),
            Object.setPrototypeOf(this, he.prototype),
            (this.customData = {
              appName: e.name,
              tenantId: null !== (s = e.tenantId) && void 0 !== s ? s : void 0,
              _serverResponse: t.customData._serverResponse,
              operationType: r,
            });
        }
        static _fromErrorAndOperation(e, t, r, i) {
          return new he(e, t, r, i);
        }
      }
      function vr(n, e, t, r) {
        return (
          "reauthenticate" === e
            ? t._getReauthenticationResolver(n)
            : t._getIdTokenResponse(n)
        ).catch((s) => {
          throw "auth/multi-factor-auth-required" === s.code
            ? he._fromErrorAndOperation(n, s, e, r)
            : s;
        });
      }
      function It() {
        return (It = (0, c.c)(function* (n, e, t = !1) {
          const r = yield S(
            n,
            e._linkToIdToken(n.auth, yield n.getIdToken()),
            t,
          );
          return A._forOperation(n, "link", r);
        })).apply(this, arguments);
      }
      function yt() {
        return (yt = (0, c.c)(function* (n, e, t = !1) {
          const { auth: r } = n,
            i = "reauthenticate";
          try {
            const s = yield S(n, vr(r, i, e, n), t);
            l(s.idToken, r, "internal-error");
            const o = ae(s.idToken);
            l(o, r, "internal-error");
            const { sub: a } = o;
            return l(n.uid === a, r, "user-mismatch"), A._forOperation(n, i, s);
          } catch (s) {
            throw (
              ("auth/user-not-found" === s?.code && T(r, "user-mismatch"), s)
            );
          }
        })).apply(this, arguments);
      }
      function Er(n, e) {
        return Tt.apply(this, arguments);
      }
      function Tt() {
        return (Tt = (0, c.c)(function* (n, e, t = !1) {
          const r = "signIn",
            i = yield vr(n, r, e),
            s = yield A._fromIdTokenResponse(n, r, i);
          return t || (yield n._updateCurrentUser(s.user)), s;
        })).apply(this, arguments);
      }
      function Et(n, e) {
        return At.apply(this, arguments);
      }
      function At() {
        return (At = (0, c.c)(function* (n, e) {
          return Er(g(n), e);
        })).apply(this, arguments);
      }
      function Nt(n) {
        return bt.apply(this, arguments);
      }
      function bt() {
        return (bt = (0, c.c)(function* (n) {
          const e = g(n);
          e._getPasswordPolicyInternal() && (yield e._updatePasswordPolicy());
        })).apply(this, arguments);
      }
      function Ut() {
        return (Ut = (0, c.c)(function* (n, e, t) {
          const r = g(n),
            o = yield Y(
              r,
              {
                returnSecureToken: !0,
                email: e,
                password: t,
                clientType: "CLIENT_TYPE_WEB",
              },
              "signUpPassword",
              gr,
            ).catch((u) => {
              throw (
                ("auth/password-does-not-meet-requirements" === u.code && Nt(n),
                u)
              );
            }),
            a = yield A._fromIdTokenResponse(r, "signIn", o);
          return yield r._updateCurrentUser(a.user), a;
        })).apply(this, arguments);
      }
      const _e = "__sak";
      class kr {
        constructor(e, t) {
          (this.storageRetriever = e), (this.type = t);
        }
        _isAvailable() {
          try {
            return this.storage
              ? (this.storage.setItem(_e, "1"),
                this.storage.removeItem(_e),
                Promise.resolve(!0))
              : Promise.resolve(!1);
          } catch {
            return Promise.resolve(!1);
          }
        }
        _set(e, t) {
          return this.storage.setItem(e, JSON.stringify(t)), Promise.resolve();
        }
        _get(e) {
          const t = this.storage.getItem(e);
          return Promise.resolve(t ? JSON.parse(t) : null);
        }
        _remove(e) {
          return this.storage.removeItem(e), Promise.resolve();
        }
        get storage() {
          return this.storageRetriever();
        }
      }
      const bs = (() => {
          class n extends kr {
            constructor() {
              super(() => window.localStorage, "LOCAL"),
                (this.boundEventHandler = (t, r) => this.onStorageEvent(t, r)),
                (this.listeners = {}),
                (this.localCache = {}),
                (this.pollTimer = null),
                (this.safariLocalStorageNotSynced =
                  (function ws() {
                    const n = (0, h.Su)();
                    return ze(n) || ue(n);
                  })() &&
                  (function Ai() {
                    try {
                      return !(!window || window === window.top);
                    } catch {
                      return !1;
                    }
                  })()),
                (this.fallbackToPolling = ar()),
                (this._shouldAllowMigration = !0);
            }
            forAllChangedKeys(t) {
              for (const r of Object.keys(this.listeners)) {
                const i = this.storage.getItem(r),
                  s = this.localCache[r];
                i !== s && t(r, s, i);
              }
            }
            onStorageEvent(t, r = !1) {
              if (!t.key)
                return void this.forAllChangedKeys((a, u, d) => {
                  this.notifyListeners(a, d);
                });
              const i = t.key;
              if (
                (r ? this.detachListener() : this.stopPolling(),
                this.safariLocalStorageNotSynced)
              ) {
                const a = this.storage.getItem(i);
                if (t.newValue !== a)
                  null !== t.newValue
                    ? this.storage.setItem(i, t.newValue)
                    : this.storage.removeItem(i);
                else if (this.localCache[i] === t.newValue && !r) return;
              }
              const s = () => {
                  const a = this.storage.getItem(i);
                  (!r && this.localCache[i] === a) ||
                    this.notifyListeners(i, a);
                },
                o = this.storage.getItem(i);
              !(function Ei() {
                return (0, h.Uv)() && 10 === document.documentMode;
              })() ||
              o === t.newValue ||
              t.newValue === t.oldValue
                ? s()
                : setTimeout(s, 10);
            }
            notifyListeners(t, r) {
              this.localCache[t] = r;
              const i = this.listeners[t];
              if (i) for (const s of Array.from(i)) s(r && JSON.parse(r));
            }
            startPolling() {
              this.stopPolling(),
                (this.pollTimer = setInterval(() => {
                  this.forAllChangedKeys((t, r, i) => {
                    this.onStorageEvent(
                      new StorageEvent("storage", {
                        key: t,
                        oldValue: r,
                        newValue: i,
                      }),
                      !0,
                    );
                  });
                }, 1e3));
            }
            stopPolling() {
              this.pollTimer &&
                (clearInterval(this.pollTimer), (this.pollTimer = null));
            }
            attachListener() {
              window.addEventListener("storage", this.boundEventHandler);
            }
            detachListener() {
              window.removeEventListener("storage", this.boundEventHandler);
            }
            _addListener(t, r) {
              0 === Object.keys(this.listeners).length &&
                (this.fallbackToPolling
                  ? this.startPolling()
                  : this.attachListener()),
                this.listeners[t] ||
                  ((this.listeners[t] = new Set()),
                  (this.localCache[t] = this.storage.getItem(t))),
                this.listeners[t].add(r);
            }
            _removeListener(t, r) {
              this.listeners[t] &&
                (this.listeners[t].delete(r),
                0 === this.listeners[t].size && delete this.listeners[t]),
                0 === Object.keys(this.listeners).length &&
                  (this.detachListener(), this.stopPolling());
            }
            _set(t, r) {
              var i = () => super._set,
                s = this;
              return (0, c.c)(function* () {
                yield i().call(s, t, r), (s.localCache[t] = JSON.stringify(r));
              })();
            }
            _get(t) {
              var r = () => super._get,
                i = this;
              return (0, c.c)(function* () {
                const s = yield r().call(i, t);
                return (i.localCache[t] = JSON.stringify(s)), s;
              })();
            }
            _remove(t) {
              var r = () => super._remove,
                i = this;
              return (0, c.c)(function* () {
                yield r().call(i, t), delete i.localCache[t];
              })();
            }
          }
          return (n.type = "LOCAL"), n;
        })(),
        Rr = (() => {
          class n extends kr {
            constructor() {
              super(() => window.sessionStorage, "SESSION");
            }
            _addListener(t, r) {}
            _removeListener(t, r) {}
          }
          return (n.type = "SESSION"), n;
        })();
      let Ls = (() => {
        class n {
          constructor(t) {
            (this.eventTarget = t),
              (this.handlersMap = {}),
              (this.boundEventHandler = this.handleEvent.bind(this));
          }
          static _getInstance(t) {
            const r = this.receivers.find((s) => s.isListeningto(t));
            if (r) return r;
            const i = new n(t);
            return this.receivers.push(i), i;
          }
          isListeningto(t) {
            return this.eventTarget === t;
          }
          handleEvent(t) {
            var r = this;
            return (0, c.c)(function* () {
              const i = t,
                { eventId: s, eventType: o, data: a } = i.data,
                u = r.handlersMap[o];
              if (!u?.size) return;
              i.ports[0].postMessage({
                status: "ack",
                eventId: s,
                eventType: o,
              });
              const d = Array.from(u).map(
                  (function () {
                    var f = (0, c.c)(function* (E) {
                      return E(i.origin, a);
                    });
                    return function (E) {
                      return f.apply(this, arguments);
                    };
                  })(),
                ),
                p = yield (function Cs(n) {
                  return Promise.all(
                    n.map(
                      (function () {
                        var e = (0, c.c)(function* (t) {
                          try {
                            return { fulfilled: !0, value: yield t };
                          } catch (r) {
                            return { fulfilled: !1, reason: r };
                          }
                        });
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    ),
                  );
                })(d);
              i.ports[0].postMessage({
                status: "done",
                eventId: s,
                eventType: o,
                response: p,
              });
            })();
          }
          _subscribe(t, r) {
            0 === Object.keys(this.handlersMap).length &&
              this.eventTarget.addEventListener(
                "message",
                this.boundEventHandler,
              ),
              this.handlersMap[t] || (this.handlersMap[t] = new Set()),
              this.handlersMap[t].add(r);
          }
          _unsubscribe(t, r) {
            this.handlersMap[t] && r && this.handlersMap[t].delete(r),
              (!r || 0 === this.handlersMap[t].size) &&
                delete this.handlersMap[t],
              0 === Object.keys(this.handlersMap).length &&
                this.eventTarget.removeEventListener(
                  "message",
                  this.boundEventHandler,
                );
          }
        }
        return (n.receivers = []), n;
      })();
      function Qt(n = "", e = 10) {
        let t = "";
        for (let r = 0; r < e; r++) t += Math.floor(10 * Math.random());
        return n + t;
      }
      class Ds {
        constructor(e) {
          (this.target = e), (this.handlers = new Set());
        }
        removeMessageHandler(e) {
          e.messageChannel &&
            (e.messageChannel.port1.removeEventListener("message", e.onMessage),
            e.messageChannel.port1.close()),
            this.handlers.delete(e);
        }
        _send(e, t, r = 50) {
          var i = this;
          return (0, c.c)(function* () {
            const s = typeof MessageChannel < "u" ? new MessageChannel() : null;
            if (!s) throw new Error("connection_unavailable");
            let o, a;
            return new Promise((u, d) => {
              const p = Qt("", 20);
              s.port1.start();
              const f = setTimeout(() => {
                d(new Error("unsupported_event"));
              }, r);
              (a = {
                messageChannel: s,
                onMessage(E) {
                  const D = E;
                  if (D.data.eventId === p)
                    switch (D.data.status) {
                      case "ack":
                        clearTimeout(f),
                          (o = setTimeout(() => {
                            d(new Error("timeout"));
                          }, 3e3));
                        break;
                      case "done":
                        clearTimeout(o), u(D.data.response);
                        break;
                      default:
                        clearTimeout(f),
                          clearTimeout(o),
                          d(new Error("invalid_response"));
                    }
                },
              }),
                i.handlers.add(a),
                s.port1.addEventListener("message", a.onMessage),
                i.target.postMessage({ eventType: e, eventId: p, data: t }, [
                  s.port2,
                ]);
            }).finally(() => {
              a && i.removeMessageHandler(a);
            });
          })();
        }
      }
      function I() {
        return window;
      }
      function Zt() {
        return (
          typeof I().WorkerGlobalScope < "u" &&
          "function" == typeof I().importScripts
        );
      }
      function en() {
        return (en = (0, c.c)(function* () {
          if (!navigator?.serviceWorker) return null;
          try {
            return (yield navigator.serviceWorker.ready).active;
          } catch {
            return null;
          }
        })).apply(this, arguments);
      }
      const Sr = "firebaseLocalStorageDb",
        me = "firebaseLocalStorage",
        wr = "fbase_key";
      class re {
        constructor(e) {
          this.request = e;
        }
        toPromise() {
          return new Promise((e, t) => {
            this.request.addEventListener("success", () => {
              e(this.request.result);
            }),
              this.request.addEventListener("error", () => {
                t(this.request.error);
              });
          });
        }
      }
      function ge(n, e) {
        return n
          .transaction([me], e ? "readwrite" : "readonly")
          .objectStore(me);
      }
      function tn() {
        const n = indexedDB.open(Sr, 1);
        return new Promise((e, t) => {
          n.addEventListener("error", () => {
            t(n.error);
          }),
            n.addEventListener("upgradeneeded", () => {
              const r = n.result;
              try {
                r.createObjectStore(me, { keyPath: wr });
              } catch (i) {
                t(i);
              }
            }),
            n.addEventListener(
              "success",
              (0, c.c)(function* () {
                const r = n.result;
                r.objectStoreNames.contains(me)
                  ? e(r)
                  : (r.close(),
                    yield (function Gs() {
                      const n = indexedDB.deleteDatabase(Sr);
                      return new re(n).toPromise();
                    })(),
                    e(yield tn()));
              }),
            );
        });
      }
      function Or(n, e, t) {
        return nn.apply(this, arguments);
      }
      function nn() {
        return (nn = (0, c.c)(function* (n, e, t) {
          const r = ge(n, !0).put({ [wr]: e, value: t });
          return new re(r).toPromise();
        })).apply(this, arguments);
      }
      function rn() {
        return (rn = (0, c.c)(function* (n, e) {
          const t = ge(n, !1).get(e),
            r = yield new re(t).toPromise();
          return void 0 === r ? null : r.value;
        })).apply(this, arguments);
      }
      function Nr(n, e) {
        const t = ge(n, !0).delete(e);
        return new re(t).toPromise();
      }
      const zs = (() => {
        class n {
          constructor() {
            (this.type = "LOCAL"),
              (this._shouldAllowMigration = !0),
              (this.listeners = {}),
              (this.localCache = {}),
              (this.pollTimer = null),
              (this.pendingWrites = 0),
              (this.receiver = null),
              (this.sender = null),
              (this.serviceWorkerReceiverAvailable = !1),
              (this.activeServiceWorker = null),
              (this._workerInitializationPromise =
                this.initializeServiceWorkerMessaging().then(
                  () => {},
                  () => {},
                ));
          }
          _openDb() {
            var t = this;
            return (0, c.c)(function* () {
              return t.db || (t.db = yield tn()), t.db;
            })();
          }
          _withRetries(t) {
            var r = this;
            return (0, c.c)(function* () {
              let i = 0;
              for (;;)
                try {
                  const s = yield r._openDb();
                  return yield t(s);
                } catch (s) {
                  if (i++ > 3) throw s;
                  r.db && (r.db.close(), (r.db = void 0));
                }
            })();
          }
          initializeServiceWorkerMessaging() {
            var t = this;
            return (0, c.c)(function* () {
              return Zt() ? t.initializeReceiver() : t.initializeSender();
            })();
          }
          initializeReceiver() {
            var t = this;
            return (0, c.c)(function* () {
              (t.receiver = Ls._getInstance(
                (function Fs() {
                  return Zt() ? self : null;
                })(),
              )),
                t.receiver._subscribe(
                  "keyChanged",
                  (function () {
                    var r = (0, c.c)(function* (i, s) {
                      return {
                        keyProcessed: (yield t._poll()).includes(s.key),
                      };
                    });
                    return function (i, s) {
                      return r.apply(this, arguments);
                    };
                  })(),
                ),
                t.receiver._subscribe(
                  "ping",
                  (function () {
                    var r = (0, c.c)(function* (i, s) {
                      return ["keyChanged"];
                    });
                    return function (i, s) {
                      return r.apply(this, arguments);
                    };
                  })(),
                );
            })();
          }
          initializeSender() {
            var t = this;
            return (0, c.c)(function* () {
              var r, i;
              if (
                ((t.activeServiceWorker = yield (function xs() {
                  return en.apply(this, arguments);
                })()),
                !t.activeServiceWorker)
              )
                return;
              t.sender = new Ds(t.activeServiceWorker);
              const s = yield t.sender._send("ping", {}, 800);
              s &&
                null !== (r = s[0]) &&
                void 0 !== r &&
                r.fulfilled &&
                null !== (i = s[0]) &&
                void 0 !== i &&
                i.value.includes("keyChanged") &&
                (t.serviceWorkerReceiverAvailable = !0);
            })();
          }
          notifyServiceWorker(t) {
            var r = this;
            return (0, c.c)(function* () {
              if (
                r.sender &&
                r.activeServiceWorker &&
                (function Us() {
                  var n;
                  return (
                    (null === (n = navigator?.serviceWorker) || void 0 === n
                      ? void 0
                      : n.controller) || null
                  );
                })() === r.activeServiceWorker
              )
                try {
                  yield r.sender._send(
                    "keyChanged",
                    { key: t },
                    r.serviceWorkerReceiverAvailable ? 800 : 50,
                  );
                } catch {}
            })();
          }
          _isAvailable() {
            return (0, c.c)(function* () {
              try {
                if (!indexedDB) return !1;
                const t = yield tn();
                return yield Or(t, _e, "1"), yield Nr(t, _e), !0;
              } catch {}
              return !1;
            })();
          }
          _withPendingWrite(t) {
            var r = this;
            return (0, c.c)(function* () {
              r.pendingWrites++;
              try {
                yield t();
              } finally {
                r.pendingWrites--;
              }
            })();
          }
          _set(t, r) {
            var i = this;
            return (0, c.c)(function* () {
              return i._withPendingWrite(
                (0, c.c)(function* () {
                  return (
                    yield i._withRetries((s) => Or(s, t, r)),
                    (i.localCache[t] = r),
                    i.notifyServiceWorker(t)
                  );
                }),
              );
            })();
          }
          _get(t) {
            var r = this;
            return (0, c.c)(function* () {
              const i = yield r._withRetries((s) =>
                (function Ws(n, e) {
                  return rn.apply(this, arguments);
                })(s, t),
              );
              return (r.localCache[t] = i), i;
            })();
          }
          _remove(t) {
            var r = this;
            return (0, c.c)(function* () {
              return r._withPendingWrite(
                (0, c.c)(function* () {
                  return (
                    yield r._withRetries((i) => Nr(i, t)),
                    delete r.localCache[t],
                    r.notifyServiceWorker(t)
                  );
                }),
              );
            })();
          }
          _poll() {
            var t = this;
            return (0, c.c)(function* () {
              const r = yield t._withRetries((o) => {
                const a = ge(o, !1).getAll();
                return new re(a).toPromise();
              });
              if (!r) return [];
              if (0 !== t.pendingWrites) return [];
              const i = [],
                s = new Set();
              if (0 !== r.length)
                for (const { fbase_key: o, value: a } of r)
                  s.add(o),
                    JSON.stringify(t.localCache[o]) !== JSON.stringify(a) &&
                      (t.notifyListeners(o, a), i.push(o));
              for (const o of Object.keys(t.localCache))
                t.localCache[o] &&
                  !s.has(o) &&
                  (t.notifyListeners(o, null), i.push(o));
              return i;
            })();
          }
          notifyListeners(t, r) {
            this.localCache[t] = r;
            const i = this.listeners[t];
            if (i) for (const s of Array.from(i)) s(r);
          }
          startPolling() {
            var t = this;
            this.stopPolling(),
              (this.pollTimer = setInterval(
                (0, c.c)(function* () {
                  return t._poll();
                }),
                800,
              ));
          }
          stopPolling() {
            this.pollTimer &&
              (clearInterval(this.pollTimer), (this.pollTimer = null));
          }
          _addListener(t, r) {
            0 === Object.keys(this.listeners).length && this.startPolling(),
              this.listeners[t] ||
                ((this.listeners[t] = new Set()), this._get(t)),
              this.listeners[t].add(r);
          }
          _removeListener(t, r) {
            this.listeners[t] &&
              (this.listeners[t].delete(r),
              0 === this.listeners[t].size && delete this.listeners[t]),
              0 === Object.keys(this.listeners).length && this.stopPolling();
          }
        }
        return (n.type = "LOCAL"), n;
      })();
      lr("rcb"), new q(3e4, 6e4);
      class pn extends J {
        constructor(e) {
          super("custom", "custom"), (this.params = e);
        }
        _getIdTokenResponse(e) {
          return O(e, this._buildIdpRequest());
        }
        _linkToIdToken(e, t) {
          return O(e, this._buildIdpRequest(t));
        }
        _getReauthenticationResolver(e) {
          return O(e, this._buildIdpRequest());
        }
        _buildIdpRequest(e) {
          const t = {
            requestUri: this.params.requestUri,
            sessionId: this.params.sessionId,
            postBody: this.params.postBody,
            tenantId: this.params.tenantId,
            pendingToken: this.params.pendingToken,
            returnSecureToken: !0,
            returnIdpCredential: !0,
          };
          return e && (t.idToken = e), t;
        }
      }
      function so(n) {
        return Er(n.auth, new pn(n), n.bypassAuthState);
      }
      function oo(n) {
        const { auth: e, user: t } = n;
        return (
          l(t, e, "internal-error"),
          (function Tr(n, e) {
            return yt.apply(this, arguments);
          })(t, new pn(n), n.bypassAuthState)
        );
      }
      function ao(n) {
        return fn.apply(this, arguments);
      }
      function fn() {
        return (fn = (0, c.c)(function* (n) {
          const { auth: e, user: t } = n;
          return (
            l(t, e, "internal-error"),
            (function gt(n, e) {
              return It.apply(this, arguments);
            })(t, new pn(n), n.bypassAuthState)
          );
        })).apply(this, arguments);
      }
      class co {
        constructor(e, t, r, i, s = !1) {
          (this.auth = e),
            (this.resolver = r),
            (this.user = i),
            (this.bypassAuthState = s),
            (this.pendingPromise = null),
            (this.eventManager = null),
            (this.filter = Array.isArray(t) ? t : [t]);
        }
        execute() {
          var e = this;
          return new Promise(
            (function () {
              var t = (0, c.c)(function* (r, i) {
                e.pendingPromise = { resolve: r, reject: i };
                try {
                  (e.eventManager = yield e.resolver._initialize(e.auth)),
                    yield e.onExecution(),
                    e.eventManager.registerConsumer(e);
                } catch (s) {
                  e.reject(s);
                }
              });
              return function (r, i) {
                return t.apply(this, arguments);
              };
            })(),
          );
        }
        onAuthEvent(e) {
          var t = this;
          return (0, c.c)(function* () {
            const {
              urlResponse: r,
              sessionId: i,
              postBody: s,
              tenantId: o,
              error: a,
              type: u,
            } = e;
            if (a) return void t.reject(a);
            const d = {
              auth: t.auth,
              requestUri: r,
              sessionId: i,
              tenantId: o || void 0,
              postBody: s || void 0,
              user: t.user,
              bypassAuthState: t.bypassAuthState,
            };
            try {
              t.resolve(yield t.getIdpTask(u)(d));
            } catch (p) {
              t.reject(p);
            }
          })();
        }
        onError(e) {
          this.reject(e);
        }
        getIdpTask(e) {
          switch (e) {
            case "signInViaPopup":
            case "signInViaRedirect":
              return so;
            case "linkViaPopup":
            case "linkViaRedirect":
              return ao;
            case "reauthViaPopup":
            case "reauthViaRedirect":
              return oo;
            default:
              T(this.auth, "internal-error");
          }
        }
        resolve(e) {
          C(this.pendingPromise, "Pending promise was never set"),
            this.pendingPromise.resolve(e),
            this.unregisterAndCleanUp();
        }
        reject(e) {
          C(this.pendingPromise, "Pending promise was never set"),
            this.pendingPromise.reject(e),
            this.unregisterAndCleanUp();
        }
        unregisterAndCleanUp() {
          this.eventManager && this.eventManager.unregisterConsumer(this),
            (this.pendingPromise = null),
            this.cleanUp();
        }
      }
      new q(2e3, 1e4);
      const uo = "pendingRedirect",
        ie = new Map();
      class lo extends co {
        constructor(e, t, r = !1) {
          super(
            e,
            [
              "signInViaRedirect",
              "linkViaRedirect",
              "reauthViaRedirect",
              "unknown",
            ],
            t,
            void 0,
            r,
          ),
            (this.eventId = null);
        }
        execute() {
          var e = () => super.execute,
            t = this;
          return (0, c.c)(function* () {
            let r = ie.get(t.auth._key());
            if (!r) {
              try {
                const s = (yield (function ho(n, e) {
                  return vn.apply(this, arguments);
                })(t.resolver, t.auth))
                  ? yield e().call(t)
                  : null;
                r = () => Promise.resolve(s);
              } catch (i) {
                r = () => Promise.reject(i);
              }
              ie.set(t.auth._key(), r);
            }
            return (
              t.bypassAuthState ||
                ie.set(t.auth._key(), () => Promise.resolve(null)),
              r()
            );
          })();
        }
        onAuthEvent(e) {
          var t = () => super.onAuthEvent,
            r = this;
          return (0, c.c)(function* () {
            if ("signInViaRedirect" === e.type) return t().call(r, e);
            if ("unknown" !== e.type) {
              if (e.eventId) {
                const i = yield r.auth._redirectUserForId(e.eventId);
                if (i) return (r.user = i), t().call(r, e);
                r.resolve(null);
              }
            } else r.resolve(null);
          })();
        }
        onExecution() {
          return (0, c.c)(function* () {})();
        }
        cleanUp() {}
      }
      function vn() {
        return (vn = (0, c.c)(function* (n, e) {
          const t = (function Lr(n) {
              return ce(uo, n.config.apiKey, n.name);
            })(e),
            r = (function Cr(n) {
              return w(n._redirectPersistence);
            })(n);
          if (!(yield r._isAvailable())) return !1;
          const i = "true" === (yield r._get(t));
          return yield r._remove(t), i;
        })).apply(this, arguments);
      }
      function po(n, e) {
        ie.set(n._key(), e);
      }
      function Dr(n, e) {
        return Rn.apply(this, arguments);
      }
      function Rn() {
        return (Rn = (0, c.c)(function* (n, e, t = !1) {
          const r = g(n),
            i = (function U(n, e) {
              return e
                ? w(e)
                : (l(n._popupRedirectResolver, n, "argument-error"),
                  n._popupRedirectResolver);
            })(r, e),
            o = yield new lo(r, i, t).execute();
          return (
            o &&
              !t &&
              (delete o.user._redirectEventId,
              yield r._persistUserIfCurrent(o.user),
              yield r._setRedirectUser(null, e)),
            o
          );
        })).apply(this, arguments);
      }
      class Io {
        constructor(e) {
          (this.auth = e),
            (this.cachedEventUids = new Set()),
            (this.consumers = new Set()),
            (this.queuedRedirectEvent = null),
            (this.hasHandledPotentialRedirect = !1),
            (this.lastProcessedEventTime = Date.now());
        }
        registerConsumer(e) {
          this.consumers.add(e),
            this.queuedRedirectEvent &&
              this.isEventForConsumer(this.queuedRedirectEvent, e) &&
              (this.sendToConsumer(this.queuedRedirectEvent, e),
              this.saveEventToCache(this.queuedRedirectEvent),
              (this.queuedRedirectEvent = null));
        }
        unregisterConsumer(e) {
          this.consumers.delete(e);
        }
        onEvent(e) {
          if (this.hasEventBeenHandled(e)) return !1;
          let t = !1;
          return (
            this.consumers.forEach((r) => {
              this.isEventForConsumer(e, r) &&
                ((t = !0), this.sendToConsumer(e, r), this.saveEventToCache(e));
            }),
            this.hasHandledPotentialRedirect ||
              !(function vo(n) {
                switch (n.type) {
                  case "signInViaRedirect":
                  case "linkViaRedirect":
                  case "reauthViaRedirect":
                    return !0;
                  case "unknown":
                    return Ur(n);
                  default:
                    return !1;
                }
              })(e) ||
              ((this.hasHandledPotentialRedirect = !0),
              t || ((this.queuedRedirectEvent = e), (t = !0))),
            t
          );
        }
        sendToConsumer(e, t) {
          var r;
          if (e.error && !Ur(e)) {
            const i =
              (null === (r = e.error.code) || void 0 === r
                ? void 0
                : r.split("auth/")[1]) || "internal-error";
            t.onError(P(this.auth, i));
          } else t.onAuthEvent(e);
        }
        isEventForConsumer(e, t) {
          const r =
            null === t.eventId || (!!e.eventId && e.eventId === t.eventId);
          return t.filter.includes(e.type) && r;
        }
        hasEventBeenHandled(e) {
          return (
            Date.now() - this.lastProcessedEventTime >= 6e5 &&
              this.cachedEventUids.clear(),
            this.cachedEventUids.has(xr(e))
          );
        }
        saveEventToCache(e) {
          this.cachedEventUids.add(xr(e)),
            (this.lastProcessedEventTime = Date.now());
        }
      }
      function xr(n) {
        return [n.type, n.eventId, n.sessionId, n.tenantId]
          .filter((e) => e)
          .join("-");
      }
      function Ur({ type: n, error: e }) {
        return "unknown" === n && "auth/no-auth-event" === e?.code;
      }
      function wn() {
        return (wn = (0, c.c)(function* (n, e = {}) {
          return m(n, "GET", "/v1/projects", e);
        })).apply(this, arguments);
      }
      const To = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
        Eo = /^https?/;
      function On() {
        return (
          (On = (0, c.c)(function* (n) {
            if (n.config.emulator) return;
            const { authorizedDomains: e } = yield (function yo(n) {
              return wn.apply(this, arguments);
            })(n);
            for (const t of e)
              try {
                if (Po(t)) return;
              } catch {}
            T(n, "unauthorized-domain");
          })),
          On.apply(this, arguments)
        );
      }
      function Po(n) {
        const e = H(),
          { protocol: t, hostname: r } = new URL(e);
        if (n.startsWith("chrome-extension://")) {
          const o = new URL(n);
          return "" === o.hostname && "" === r
            ? "chrome-extension:" === t &&
                n.replace("chrome-extension://", "") ===
                  e.replace("chrome-extension://", "")
            : "chrome-extension:" === t && o.hostname === r;
        }
        if (!Eo.test(t)) return !1;
        if (To.test(n)) return r === n;
        const i = n.replace(/\./g, "\\.");
        return new RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(r);
      }
      const ko = new q(3e4, 6e4);
      function Fr() {
        const n = I().___jsl;
        if (n?.H)
          for (const e of Object.keys(n.H))
            if (
              ((n.H[e].r = n.H[e].r || []),
              (n.H[e].L = n.H[e].L || []),
              (n.H[e].r = [...n.H[e].L]),
              n.CP)
            )
              for (let t = 0; t < n.CP.length; t++) n.CP[t] = null;
      }
      let ve = null;
      const wo = new q(5e3, 15e3),
        Oo = "__/auth/iframe",
        No = "emulator/auth/iframe",
        bo = {
          style: {
            position: "absolute",
            top: "-100px",
            width: "1px",
            height: "1px",
          },
          "aria-hidden": "true",
          tabindex: "-1",
        },
        Co = new Map([
          ["identitytoolkit.googleapis.com", "p"],
          ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
          ["test-identitytoolkit.sandbox.googleapis.com", "t"],
        ]);
      function Lo(n) {
        const e = n.config;
        l(e.authDomain, n, "auth-domain-config-required");
        const t = e.emulator
            ? we(e, No)
            : `https://${n.config.authDomain}/${Oo}`,
          r = { apiKey: e.apiKey, appName: n.name, v: y.Sg },
          i = Co.get(n.config.apiHost);
        i && (r.eid = i);
        const s = n._getFrameworks();
        return (
          s.length && (r.fw = s.join(",")), `${t}?${(0, h.ik)(r).slice(1)}`
        );
      }
      function Nn() {
        return (
          (Nn = (0, c.c)(function* (n) {
            const e = yield (function So(n) {
                return (
                  (ve =
                    ve ||
                    (function Ro(n) {
                      return new Promise((e, t) => {
                        var r, i, s;
                        function o() {
                          Fr(),
                            gapi.load("gapi.iframes", {
                              callback: () => {
                                e(gapi.iframes.getContext());
                              },
                              ontimeout: () => {
                                Fr(), t(P(n, "network-request-failed"));
                              },
                              timeout: ko.get(),
                            });
                        }
                        if (
                          null !==
                            (i =
                              null === (r = I().gapi) || void 0 === r
                                ? void 0
                                : r.iframes) &&
                          void 0 !== i &&
                          i.Iframe
                        )
                          e(gapi.iframes.getContext());
                        else {
                          if (
                            null === (s = I().gapi) ||
                            void 0 === s ||
                            !s.load
                          ) {
                            const a = lr("iframefcb");
                            return (
                              (I()[a] = () => {
                                gapi.load
                                  ? o()
                                  : t(P(n, "network-request-failed"));
                              }),
                              Be(
                                `${(function Ci() {
                                  return $.gapiScript;
                                })()}?onload=${a}`,
                              ).catch((u) => t(u))
                            );
                          }
                          o();
                        }
                      }).catch((e) => {
                        throw ((ve = null), e);
                      });
                    })(n)),
                  ve
                );
              })(n),
              t = I().gapi;
            return (
              l(t, n, "internal-error"),
              e.open(
                {
                  where: document.body,
                  url: Lo(n),
                  messageHandlersFilter: t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
                  attributes: bo,
                  dontclear: !0,
                },
                (r) =>
                  new Promise(
                    (function () {
                      var i = (0, c.c)(function* (s, o) {
                        yield r.restyle({ setHideOnLeave: !1 });
                        const a = P(n, "network-request-failed"),
                          u = I().setTimeout(() => {
                            o(a);
                          }, wo.get());
                        function d() {
                          I().clearTimeout(u), s(r);
                        }
                        r.ping(d).then(d, () => {
                          o(a);
                        });
                      });
                      return function (s, o) {
                        return i.apply(this, arguments);
                      };
                    })(),
                  ),
              )
            );
          })),
          Nn.apply(this, arguments)
        );
      }
      const Mo = {
        location: "yes",
        resizable: "yes",
        statusbar: "yes",
        toolbar: "no",
      };
      class Vr {
        constructor(e) {
          (this.window = e), (this.associatedEvent = null);
        }
        close() {
          if (this.window)
            try {
              this.window.close();
            } catch {}
        }
      }
      const Ho = "__/auth/handler",
        qo = "emulator/auth/handler",
        zo = encodeURIComponent("fac");
      function Gr(n, e, t, r, i, s) {
        return bn.apply(this, arguments);
      }
      function bn() {
        return (bn = (0, c.c)(function* (n, e, t, r, i, s) {
          l(n.config.authDomain, n, "auth-domain-config-required"),
            l(n.config.apiKey, n, "invalid-api-key");
          const o = {
            apiKey: n.config.apiKey,
            appName: n.name,
            authType: t,
            redirectUrl: r,
            v: y.Sg,
            eventId: i,
          };
          if (e instanceof N) {
            e.setDefaultLanguage(n.languageCode),
              (o.providerId = e.providerId || ""),
              (0, h.t7)(e.getCustomParameters()) ||
                (o.customParameters = JSON.stringify(e.getCustomParameters()));
            for (const [p, f] of Object.entries(s || {})) o[p] = f;
          }
          if (e instanceof ss) {
            const p = e.getScopes().filter((f) => "" !== f);
            p.length > 0 && (o.scopes = p.join(","));
          }
          n.tenantId && (o.tid = n.tenantId);
          const a = o;
          for (const p of Object.keys(a)) void 0 === a[p] && delete a[p];
          const u = yield n._getAppCheckToken(),
            d = u ? `#${zo}=${encodeURIComponent(u)}` : "";
          return `${(function jo({ config: n }) {
            return n.emulator ? we(n, qo) : `https://${n.authDomain}/${Ho}`;
          })(n)}?${(0, h.ik)(a).slice(1)}${d}`;
        })).apply(this, arguments);
      }
      const Cn = "webStorageSupport",
        Ko = class Bo {
          constructor() {
            (this.eventManagers = {}),
              (this.iframes = {}),
              (this.originValidationPromises = {}),
              (this._redirectPersistence = Rr),
              (this._completeRedirectFn = Dr),
              (this._overrideRedirectResult = po);
          }
          _openPopup(e, t, r, i) {
            var s = this;
            return (0, c.c)(function* () {
              var o;
              C(
                null === (o = s.eventManagers[e._key()]) || void 0 === o
                  ? void 0
                  : o.manager,
                "_initialize() not called before _openPopup()",
              );
              const a = yield Gr(e, t, r, H(), i);
              return (function Go(n, e, t, r = 500, i = 600) {
                const s = Math.max(
                    (window.screen.availHeight - i) / 2,
                    0,
                  ).toString(),
                  o = Math.max(
                    (window.screen.availWidth - r) / 2,
                    0,
                  ).toString();
                let a = "";
                const u = Object.assign(Object.assign({}, Mo), {
                    width: r.toString(),
                    height: i.toString(),
                    top: s,
                    left: o,
                  }),
                  d = (0, h.Su)().toLowerCase();
                t && (a = nr(d) ? "_blank" : t),
                  tr(d) &&
                    ((e = e || "http://localhost"), (u.scrollbars = "yes"));
                const p = Object.entries(u).reduce(
                  (E, [D, Te]) => `${E}${D}=${Te},`,
                  "",
                );
                if (
                  (function Ti(n = (0, h.Su)()) {
                    var e;
                    return (
                      ue(n) &&
                      !(
                        null === (e = window.navigator) ||
                        void 0 === e ||
                        !e.standalone
                      )
                    );
                  })(d) &&
                  "_self" !== a
                )
                  return (
                    (function Wo(n, e) {
                      const t = document.createElement("a");
                      (t.href = n), (t.target = e);
                      const r = document.createEvent("MouseEvent");
                      r.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        window,
                        1,
                        0,
                        0,
                        0,
                        0,
                        !1,
                        !1,
                        !1,
                        !1,
                        1,
                        null,
                      ),
                        t.dispatchEvent(r);
                    })(e || "", a),
                    new Vr(null)
                  );
                const f = window.open(e || "", a, p);
                l(f, n, "popup-blocked");
                try {
                  f.focus();
                } catch {}
                return new Vr(f);
              })(e, a, Qt());
            })();
          }
          _openRedirect(e, t, r, i) {
            var s = this;
            return (0, c.c)(function* () {
              return (
                yield s._originValidation(e),
                (function Ms(n) {
                  I().location.href = n;
                })(yield Gr(e, t, r, H(), i)),
                new Promise(() => {})
              );
            })();
          }
          _initialize(e) {
            const t = e._key();
            if (this.eventManagers[t]) {
              const { manager: i, promise: s } = this.eventManagers[t];
              return i
                ? Promise.resolve(i)
                : (C(s, "If manager is not set, promise should be"), s);
            }
            const r = this.initAndGetManager(e);
            return (
              (this.eventManagers[t] = { promise: r }),
              r.catch(() => {
                delete this.eventManagers[t];
              }),
              r
            );
          }
          initAndGetManager(e) {
            var t = this;
            return (0, c.c)(function* () {
              const r = yield (function Do(n) {
                  return Nn.apply(this, arguments);
                })(e),
                i = new Io(e);
              return (
                r.register(
                  "authEvent",
                  (s) => (
                    l(s?.authEvent, e, "invalid-auth-event"),
                    { status: i.onEvent(s.authEvent) ? "ACK" : "ERROR" }
                  ),
                  gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
                ),
                (t.eventManagers[e._key()] = { manager: i }),
                (t.iframes[e._key()] = r),
                i
              );
            })();
          }
          _isIframeWebStorageSupported(e, t) {
            this.iframes[e._key()].send(
              Cn,
              { type: Cn },
              (i) => {
                var s;
                const o =
                  null === (s = i?.[0]) || void 0 === s ? void 0 : s[Cn];
                void 0 !== o && t(!!o), T(e, "internal-error");
              },
              gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
            );
          }
          _originValidation(e) {
            const t = e._key();
            return (
              this.originValidationPromises[t] ||
                (this.originValidationPromises[t] = (function Ao(n) {
                  return On.apply(this, arguments);
                })(e)),
              this.originValidationPromises[t]
            );
          }
          get _shouldInitProactively() {
            return ar() || ze() || ue();
          }
        };
      var zr = "@firebase/auth";
      class $o {
        constructor(e) {
          (this.auth = e), (this.internalListeners = new Map());
        }
        getUid() {
          var e;
          return (
            this.assertAuthConfigured(),
            (null === (e = this.auth.currentUser) || void 0 === e
              ? void 0
              : e.uid) || null
          );
        }
        getToken(e) {
          var t = this;
          return (0, c.c)(function* () {
            return (
              t.assertAuthConfigured(),
              yield t.auth._initializationPromise,
              t.auth.currentUser
                ? { accessToken: yield t.auth.currentUser.getIdToken(e) }
                : null
            );
          })();
        }
        addAuthTokenListener(e) {
          if ((this.assertAuthConfigured(), this.internalListeners.has(e)))
            return;
          const t = this.auth.onIdTokenChanged((r) => {
            e(r?.stsTokenManager.accessToken || null);
          });
          this.internalListeners.set(e, t), this.updateProactiveRefresh();
        }
        removeAuthTokenListener(e) {
          this.assertAuthConfigured();
          const t = this.internalListeners.get(e);
          t &&
            (this.internalListeners.delete(e),
            t(),
            this.updateProactiveRefresh());
        }
        assertAuthConfigured() {
          l(
            this.auth._initializationPromise,
            "dependent-sdk-initialized-before-auth",
          );
        }
        updateProactiveRefresh() {
          this.internalListeners.size > 0
            ? this.auth._startProactiveRefresh()
            : this.auth._stopProactiveRefresh();
        }
      }
      const Qo = (0, h.sX)("authIdTokenMaxAge") || 300;
      let Br = null;
      const Zo = (n) =>
        (function () {
          var e = (0, c.c)(function* (t) {
            const r = t && (yield t.getIdTokenResult()),
              i =
                r && (new Date().getTime() - Date.parse(r.issuedAtTime)) / 1e3;
            if (i && i > Qo) return;
            const s = r?.token;
            Br !== s &&
              ((Br = s),
              yield fetch(n, {
                method: s ? "POST" : "DELETE",
                headers: s ? { Authorization: `Bearer ${s}` } : {},
              }));
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
      function Dn(n = (0, y.WE)()) {
        const e = (0, y.U5)(n, "auth");
        if (e.isInitialized()) return e.getImmediate();
        const t = (function xi(n, e) {
            const t = (0, y.U5)(n, "auth");
            if (t.isInitialized()) {
              const i = t.getImmediate(),
                s = t.getOptions();
              if ((0, h.IN)(s, e ?? {})) return i;
              T(i, "already-initialized");
            }
            return t.initialize({ options: e });
          })(n, { popupRedirectResolver: Ko, persistence: [zs, bs, Rr] }),
          r = (0, h.sX)("authTokenSyncURL");
        if (r) {
          const s = Zo(r);
          (function Es(n, e, t) {
            (0, h.Yj)(n).beforeAuthStateChanged(e, t);
          })(t, s, () => s(t.currentUser)),
            (function Ts(n, e, t, r) {
              (0, h.Yj)(n).onIdTokenChanged(e, t, r);
            })(t, (o) => s(o));
        }
        const i = (0, h.EB)("auth");
        return (
          i &&
            (function Fi(n, e, t) {
              const r = g(n);
              l(r._canInitEmulator, r, "emulator-config-failed"),
                l(/^https?:\/\//.test(e), r, "invalid-emulator-scheme");
              const i = !!t?.disableWarnings,
                s = pr(e),
                { host: o, port: a } = (function Vi(n) {
                  const e = pr(n),
                    t = /(\/\/)?([^?#/]+)/.exec(n.substr(e.length));
                  if (!t) return { host: "", port: null };
                  const r = t[2].split("@").pop() || "",
                    i = /^(\[[^\]]+\])(:|$)/.exec(r);
                  if (i) {
                    const s = i[1];
                    return { host: s, port: fr(r.substr(s.length + 1)) };
                  }
                  {
                    const [s, o] = r.split(":");
                    return { host: s, port: fr(o) };
                  }
                })(e);
              (r.config.emulator = {
                url: `${s}//${o}${null === a ? "" : `:${a}`}/`,
              }),
                (r.settings.appVerificationDisabledForTesting = !0),
                (r.emulatorConfig = Object.freeze({
                  host: o,
                  port: a,
                  protocol: s.replace(":", ""),
                  options: Object.freeze({ disableWarnings: i }),
                })),
                i ||
                  (function Gi() {
                    function n() {
                      const e = document.createElement("p"),
                        t = e.style;
                      (e.innerText =
                        "Running in emulator mode. Do not use with production credentials."),
                        (t.position = "fixed"),
                        (t.width = "100%"),
                        (t.backgroundColor = "#ffffff"),
                        (t.border = ".1em solid #000000"),
                        (t.color = "#b50000"),
                        (t.bottom = "0px"),
                        (t.left = "0px"),
                        (t.margin = "0px"),
                        (t.zIndex = "10000"),
                        (t.textAlign = "center"),
                        e.classList.add("firebase-emulator-warning"),
                        document.body.appendChild(e);
                    }
                    typeof console < "u" &&
                      "function" == typeof console.info &&
                      console.info(
                        "WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.",
                      ),
                      typeof window < "u" &&
                        typeof document < "u" &&
                        ("loading" === document.readyState
                          ? window.addEventListener("DOMContentLoaded", n)
                          : n());
                  })();
            })(t, `http://${i}`),
          t
        );
      }
      (function Oi(n) {
        $ = n;
      })({
        loadJS: (n) =>
          new Promise((e, t) => {
            const r = document.createElement("script");
            r.setAttribute("src", n),
              (r.onload = e),
              (r.onerror = (i) => {
                const s = P("internal-error");
                (s.customData = i), t(s);
              }),
              (r.type = "text/javascript"),
              (r.charset = "UTF-8"),
              (function ea() {
                var n, e;
                return null !==
                  (e =
                    null === (n = document.getElementsByTagName("head")) ||
                    void 0 === n
                      ? void 0
                      : n[0]) && void 0 !== e
                  ? e
                  : document;
              })().appendChild(r);
          }),
        gapiScript: "https://apis.google.com/js/api.js",
        recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
        recaptchaEnterpriseScript:
          "https://www.google.com/recaptcha/enterprise.js?render=",
      }),
        (function Jo(n) {
          (0, y.q4)(
            new ke.Yl(
              "auth",
              (e, { options: t }) => {
                const r = e.getProvider("app").getImmediate(),
                  i = e.getProvider("heartbeat"),
                  s = e.getProvider("app-check-internal"),
                  { apiKey: o, authDomain: a } = r.options;
                l(o && !o.includes(":"), "invalid-api-key", {
                  appName: r.name,
                });
                const u = {
                    apiKey: o,
                    authDomain: a,
                    clientPlatform: n,
                    apiHost: "identitytoolkit.googleapis.com",
                    tokenApiHost: "securetoken.googleapis.com",
                    apiScheme: "https",
                    sdkClientVersion: cr(n),
                  },
                  d = new wi(r, i, s, u);
                return (
                  (function Ui(n, e) {
                    const t = e?.persistence || [],
                      r = (Array.isArray(t) ? t : [t]).map(w);
                    e?.errorMap && n._updateErrorMap(e.errorMap),
                      n._initializeWithPersistence(r, e?.popupRedirectResolver);
                  })(d, t),
                  d
                );
              },
              "PUBLIC",
            )
              .setInstantiationMode("EXPLICIT")
              .setInstanceCreatedCallback((e, t, r) => {
                e.getProvider("auth-internal").initialize();
              }),
          ),
            (0, y.q4)(
              new ke.Yl(
                "auth-internal",
                (e) => {
                  const t = g(e.getProvider("auth").getImmediate());
                  return new $o(t);
                },
                "PRIVATE",
              ).setInstantiationMode("EXPLICIT"),
            ),
            (0, y.Kk)(
              zr,
              "1.6.1",
              (function Yo(n) {
                switch (n) {
                  case "Node":
                    return "node";
                  case "ReactNative":
                    return "rn";
                  case "Worker":
                    return "webworker";
                  case "Cordova":
                    return "cordova";
                  case "WebExtension":
                    return "web-extension";
                  default:
                    return;
                }
              })(n),
            ),
            (0, y.Kk)(zr, "1.6.1", "esm2017");
        })("Browser");
      var ta = v(9240),
        na = v(6088);
      let ra = (() => {
        class n {
          constructor() {
            (this.global = (0, F.uUt)(Ae.f)),
              (this.nav = (0, F.uUt)(ta.wX)),
              (this.utils = (0, F.uUt)(na.e));
          }
          logout() {
            this.utils.loadershow(),
              (function As(n) {
                return (0, h.Yj)(n).signOut();
              })(Dn())
                .then(() => {
                  this.utils.hideLoader(),
                    this.global.remove("uid"),
                    this.nav.navigateRoot("login");
                })
                .catch((r) => {});
          }
          loginUser(t) {
            return new Promise((r, i) => {
              (function ps(n, e, t) {
                return Et((0, h.Yj)(n), mr.credential(e, t)).catch(
                  (function () {
                    var r = (0, c.c)(function* (i) {
                      throw (
                        ("auth/password-does-not-meet-requirements" ===
                          i.code && Nt(n),
                        i)
                      );
                    });
                    return function (i) {
                      return r.apply(this, arguments);
                    };
                  })(),
                );
              })(Dn(), t.email, t.password)
                .then((o) => {
                  r(o.user);
                })
                .catch((o) => {
                  i(o);
                });
            });
          }
          registerUser(t) {
            return new Promise((r, i) => {
              (function hs(n, e, t) {
                return Ut.apply(this, arguments);
              })(Dn(), t.email, t.password)
                .then((o) => {
                  r(o.user);
                })
                .catch((o) => {
                  i(o);
                });
            });
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || n)();
          });
          static #t = (this.ɵprov = F.wxM({
            token: n,
            factory: n.ɵfac,
            providedIn: "root",
          }));
        }
        return n;
      })();
    },
  },
]);
