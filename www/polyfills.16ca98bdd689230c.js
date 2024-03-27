(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [260],
  {
    7432: (ce, Ee, ae) => {
      "use strict";
      ae(9408), ae(4728);
    },
    9408: () => {
      window.__Zone_disable_customElements = !0;
    },
    4728: () => {
      "use strict";
      !(function (t) {
        const n = t.performance;
        function i(L) {
          n && n.mark && n.mark(L);
        }
        function o(L, T) {
          n && n.measure && n.measure(L, T);
        }
        i("Zone");
        const c = t.__Zone_symbol_prefix || "__zone_symbol__";
        function a(L) {
          return c + L;
        }
        const y = !0 === t[a("forceDuplicateZoneCheck")];
        if (t.Zone) {
          if (y || "function" != typeof t.Zone.__symbol__)
            throw new Error("Zone already loaded.");
          return t.Zone;
        }
        let d = (() => {
          class L {
            static #e = (this.__symbol__ = a);
            static assertZonePatched() {
              if (t.Promise !== se.ZoneAwarePromise)
                throw new Error(
                  "Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)",
                );
            }
            static get root() {
              let e = L.current;
              for (; e.parent; ) e = e.parent;
              return e;
            }
            static get current() {
              return U.zone;
            }
            static get currentTask() {
              return oe;
            }
            static __load_patch(e, r, k = !1) {
              if (se.hasOwnProperty(e)) {
                if (!k && y) throw Error("Already loaded patch: " + e);
              } else if (!t["__Zone_disable_" + e]) {
                const C = "Zone:" + e;
                i(C), (se[e] = r(t, L, q)), o(C, C);
              }
            }
            get parent() {
              return this._parent;
            }
            get name() {
              return this._name;
            }
            constructor(e, r) {
              (this._parent = e),
                (this._name = r ? r.name || "unnamed" : "<root>"),
                (this._properties = (r && r.properties) || {}),
                (this._zoneDelegate = new v(
                  this,
                  this._parent && this._parent._zoneDelegate,
                  r,
                ));
            }
            get(e) {
              const r = this.getZoneWith(e);
              if (r) return r._properties[e];
            }
            getZoneWith(e) {
              let r = this;
              for (; r; ) {
                if (r._properties.hasOwnProperty(e)) return r;
                r = r._parent;
              }
              return null;
            }
            fork(e) {
              if (!e) throw new Error("ZoneSpec required!");
              return this._zoneDelegate.fork(this, e);
            }
            wrap(e, r) {
              if ("function" != typeof e)
                throw new Error("Expecting function got: " + e);
              const k = this._zoneDelegate.intercept(this, e, r),
                C = this;
              return function () {
                return C.runGuarded(k, this, arguments, r);
              };
            }
            run(e, r, k, C) {
              U = { parent: U, zone: this };
              try {
                return this._zoneDelegate.invoke(this, e, r, k, C);
              } finally {
                U = U.parent;
              }
            }
            runGuarded(e, r = null, k, C) {
              U = { parent: U, zone: this };
              try {
                try {
                  return this._zoneDelegate.invoke(this, e, r, k, C);
                } catch ($) {
                  if (this._zoneDelegate.handleError(this, $)) throw $;
                }
              } finally {
                U = U.parent;
              }
            }
            runTask(e, r, k) {
              if (e.zone != this)
                throw new Error(
                  "A task can only be run in the zone of creation! (Creation: " +
                    (e.zone || K).name +
                    "; Execution: " +
                    this.name +
                    ")",
                );
              if (e.state === x && (e.type === Q || e.type === P)) return;
              const C = e.state != E;
              C && e._transitionTo(E, A), e.runCount++;
              const $ = oe;
              (oe = e), (U = { parent: U, zone: this });
              try {
                e.type == P &&
                  e.data &&
                  !e.data.isPeriodic &&
                  (e.cancelFn = void 0);
                try {
                  return this._zoneDelegate.invokeTask(this, e, r, k);
                } catch (u) {
                  if (this._zoneDelegate.handleError(this, u)) throw u;
                }
              } finally {
                e.state !== x &&
                  e.state !== h &&
                  (e.type == Q || (e.data && e.data.isPeriodic)
                    ? C && e._transitionTo(A, E)
                    : ((e.runCount = 0),
                      this._updateTaskCount(e, -1),
                      C && e._transitionTo(x, E, x))),
                  (U = U.parent),
                  (oe = $);
              }
            }
            scheduleTask(e) {
              if (e.zone && e.zone !== this) {
                let k = this;
                for (; k; ) {
                  if (k === e.zone)
                    throw Error(
                      `can not reschedule task to ${this.name} which is descendants of the original zone ${e.zone.name}`,
                    );
                  k = k.parent;
                }
              }
              e._transitionTo(X, x);
              const r = [];
              (e._zoneDelegates = r), (e._zone = this);
              try {
                e = this._zoneDelegate.scheduleTask(this, e);
              } catch (k) {
                throw (
                  (e._transitionTo(h, X, x),
                  this._zoneDelegate.handleError(this, k),
                  k)
                );
              }
              return (
                e._zoneDelegates === r && this._updateTaskCount(e, 1),
                e.state == X && e._transitionTo(A, X),
                e
              );
            }
            scheduleMicroTask(e, r, k, C) {
              return this.scheduleTask(new p(I, e, r, k, C, void 0));
            }
            scheduleMacroTask(e, r, k, C, $) {
              return this.scheduleTask(new p(P, e, r, k, C, $));
            }
            scheduleEventTask(e, r, k, C, $) {
              return this.scheduleTask(new p(Q, e, r, k, C, $));
            }
            cancelTask(e) {
              if (e.zone != this)
                throw new Error(
                  "A task can only be cancelled in the zone of creation! (Creation: " +
                    (e.zone || K).name +
                    "; Execution: " +
                    this.name +
                    ")",
                );
              if (e.state === A || e.state === E) {
                e._transitionTo(G, A, E);
                try {
                  this._zoneDelegate.cancelTask(this, e);
                } catch (r) {
                  throw (
                    (e._transitionTo(h, G),
                    this._zoneDelegate.handleError(this, r),
                    r)
                  );
                }
                return (
                  this._updateTaskCount(e, -1),
                  e._transitionTo(x, G),
                  (e.runCount = 0),
                  e
                );
              }
            }
            _updateTaskCount(e, r) {
              const k = e._zoneDelegates;
              -1 == r && (e._zoneDelegates = null);
              for (let C = 0; C < k.length; C++)
                k[C]._updateTaskCount(e.type, r);
            }
          }
          return L;
        })();
        const b = {
          name: "",
          onHasTask: (L, T, e, r) => L.hasTask(e, r),
          onScheduleTask: (L, T, e, r) => L.scheduleTask(e, r),
          onInvokeTask: (L, T, e, r, k, C) => L.invokeTask(e, r, k, C),
          onCancelTask: (L, T, e, r) => L.cancelTask(e, r),
        };
        class v {
          constructor(T, e, r) {
            (this._taskCounts = { microTask: 0, macroTask: 0, eventTask: 0 }),
              (this.zone = T),
              (this._parentDelegate = e),
              (this._forkZS = r && (r && r.onFork ? r : e._forkZS)),
              (this._forkDlgt = r && (r.onFork ? e : e._forkDlgt)),
              (this._forkCurrZone =
                r && (r.onFork ? this.zone : e._forkCurrZone)),
              (this._interceptZS = r && (r.onIntercept ? r : e._interceptZS)),
              (this._interceptDlgt =
                r && (r.onIntercept ? e : e._interceptDlgt)),
              (this._interceptCurrZone =
                r && (r.onIntercept ? this.zone : e._interceptCurrZone)),
              (this._invokeZS = r && (r.onInvoke ? r : e._invokeZS)),
              (this._invokeDlgt = r && (r.onInvoke ? e : e._invokeDlgt)),
              (this._invokeCurrZone =
                r && (r.onInvoke ? this.zone : e._invokeCurrZone)),
              (this._handleErrorZS =
                r && (r.onHandleError ? r : e._handleErrorZS)),
              (this._handleErrorDlgt =
                r && (r.onHandleError ? e : e._handleErrorDlgt)),
              (this._handleErrorCurrZone =
                r && (r.onHandleError ? this.zone : e._handleErrorCurrZone)),
              (this._scheduleTaskZS =
                r && (r.onScheduleTask ? r : e._scheduleTaskZS)),
              (this._scheduleTaskDlgt =
                r && (r.onScheduleTask ? e : e._scheduleTaskDlgt)),
              (this._scheduleTaskCurrZone =
                r && (r.onScheduleTask ? this.zone : e._scheduleTaskCurrZone)),
              (this._invokeTaskZS =
                r && (r.onInvokeTask ? r : e._invokeTaskZS)),
              (this._invokeTaskDlgt =
                r && (r.onInvokeTask ? e : e._invokeTaskDlgt)),
              (this._invokeTaskCurrZone =
                r && (r.onInvokeTask ? this.zone : e._invokeTaskCurrZone)),
              (this._cancelTaskZS =
                r && (r.onCancelTask ? r : e._cancelTaskZS)),
              (this._cancelTaskDlgt =
                r && (r.onCancelTask ? e : e._cancelTaskDlgt)),
              (this._cancelTaskCurrZone =
                r && (r.onCancelTask ? this.zone : e._cancelTaskCurrZone)),
              (this._hasTaskZS = null),
              (this._hasTaskDlgt = null),
              (this._hasTaskDlgtOwner = null),
              (this._hasTaskCurrZone = null);
            const k = r && r.onHasTask;
            (k || (e && e._hasTaskZS)) &&
              ((this._hasTaskZS = k ? r : b),
              (this._hasTaskDlgt = e),
              (this._hasTaskDlgtOwner = this),
              (this._hasTaskCurrZone = T),
              r.onScheduleTask ||
                ((this._scheduleTaskZS = b),
                (this._scheduleTaskDlgt = e),
                (this._scheduleTaskCurrZone = this.zone)),
              r.onInvokeTask ||
                ((this._invokeTaskZS = b),
                (this._invokeTaskDlgt = e),
                (this._invokeTaskCurrZone = this.zone)),
              r.onCancelTask ||
                ((this._cancelTaskZS = b),
                (this._cancelTaskDlgt = e),
                (this._cancelTaskCurrZone = this.zone)));
          }
          fork(T, e) {
            return this._forkZS
              ? this._forkZS.onFork(this._forkDlgt, this.zone, T, e)
              : new d(T, e);
          }
          intercept(T, e, r) {
            return this._interceptZS
              ? this._interceptZS.onIntercept(
                  this._interceptDlgt,
                  this._interceptCurrZone,
                  T,
                  e,
                  r,
                )
              : e;
          }
          invoke(T, e, r, k, C) {
            return this._invokeZS
              ? this._invokeZS.onInvoke(
                  this._invokeDlgt,
                  this._invokeCurrZone,
                  T,
                  e,
                  r,
                  k,
                  C,
                )
              : e.apply(r, k);
          }
          handleError(T, e) {
            return (
              !this._handleErrorZS ||
              this._handleErrorZS.onHandleError(
                this._handleErrorDlgt,
                this._handleErrorCurrZone,
                T,
                e,
              )
            );
          }
          scheduleTask(T, e) {
            let r = e;
            if (this._scheduleTaskZS)
              this._hasTaskZS && r._zoneDelegates.push(this._hasTaskDlgtOwner),
                (r = this._scheduleTaskZS.onScheduleTask(
                  this._scheduleTaskDlgt,
                  this._scheduleTaskCurrZone,
                  T,
                  e,
                )),
                r || (r = e);
            else if (e.scheduleFn) e.scheduleFn(e);
            else {
              if (e.type != I) throw new Error("Task is missing scheduleFn.");
              R(e);
            }
            return r;
          }
          invokeTask(T, e, r, k) {
            return this._invokeTaskZS
              ? this._invokeTaskZS.onInvokeTask(
                  this._invokeTaskDlgt,
                  this._invokeTaskCurrZone,
                  T,
                  e,
                  r,
                  k,
                )
              : e.callback.apply(r, k);
          }
          cancelTask(T, e) {
            let r;
            if (this._cancelTaskZS)
              r = this._cancelTaskZS.onCancelTask(
                this._cancelTaskDlgt,
                this._cancelTaskCurrZone,
                T,
                e,
              );
            else {
              if (!e.cancelFn) throw Error("Task is not cancelable");
              r = e.cancelFn(e);
            }
            return r;
          }
          hasTask(T, e) {
            try {
              this._hasTaskZS &&
                this._hasTaskZS.onHasTask(
                  this._hasTaskDlgt,
                  this._hasTaskCurrZone,
                  T,
                  e,
                );
            } catch (r) {
              this.handleError(T, r);
            }
          }
          _updateTaskCount(T, e) {
            const r = this._taskCounts,
              k = r[T],
              C = (r[T] = k + e);
            if (C < 0)
              throw new Error("More tasks executed then were scheduled.");
            (0 != k && 0 != C) ||
              this.hasTask(this.zone, {
                microTask: r.microTask > 0,
                macroTask: r.macroTask > 0,
                eventTask: r.eventTask > 0,
                change: T,
              });
          }
        }
        class p {
          constructor(T, e, r, k, C, $) {
            if (
              ((this._zone = null),
              (this.runCount = 0),
              (this._zoneDelegates = null),
              (this._state = "notScheduled"),
              (this.type = T),
              (this.source = e),
              (this.data = k),
              (this.scheduleFn = C),
              (this.cancelFn = $),
              !r)
            )
              throw new Error("callback is not defined");
            this.callback = r;
            const u = this;
            this.invoke =
              T === Q && k && k.useG
                ? p.invokeTask
                : function () {
                    return p.invokeTask.call(t, u, this, arguments);
                  };
          }
          static invokeTask(T, e, r) {
            T || (T = this), te++;
            try {
              return T.runCount++, T.zone.runTask(T, e, r);
            } finally {
              1 == te && _(), te--;
            }
          }
          get zone() {
            return this._zone;
          }
          get state() {
            return this._state;
          }
          cancelScheduleRequest() {
            this._transitionTo(x, X);
          }
          _transitionTo(T, e, r) {
            if (this._state !== e && this._state !== r)
              throw new Error(
                `${this.type} '${this.source}': can not transition to '${T}', expecting state '${e}'${r ? " or '" + r + "'" : ""}, was '${this._state}'.`,
              );
            (this._state = T), T == x && (this._zoneDelegates = null);
          }
          toString() {
            return this.data && typeof this.data.handleId < "u"
              ? this.data.handleId.toString()
              : Object.prototype.toString.call(this);
          }
          toJSON() {
            return {
              type: this.type,
              state: this.state,
              source: this.source,
              zone: this.zone.name,
              runCount: this.runCount,
            };
          }
        }
        const M = a("setTimeout"),
          Z = a("Promise"),
          N = a("then");
        let J,
          F = [],
          H = !1;
        function z(L) {
          if ((J || (t[Z] && (J = t[Z].resolve(0))), J)) {
            let T = J[N];
            T || (T = J.then), T.call(J, L);
          } else t[M](L, 0);
        }
        function R(L) {
          0 === te && 0 === F.length && z(_), L && F.push(L);
        }
        function _() {
          if (!H) {
            for (H = !0; F.length; ) {
              const L = F;
              F = [];
              for (let T = 0; T < L.length; T++) {
                const e = L[T];
                try {
                  e.zone.runTask(e, null, null);
                } catch (r) {
                  q.onUnhandledError(r);
                }
              }
            }
            q.microtaskDrainDone(), (H = !1);
          }
        }
        const K = { name: "NO ZONE" },
          x = "notScheduled",
          X = "scheduling",
          A = "scheduled",
          E = "running",
          G = "canceling",
          h = "unknown",
          I = "microTask",
          P = "macroTask",
          Q = "eventTask",
          se = {},
          q = {
            symbol: a,
            currentZoneFrame: () => U,
            onUnhandledError: W,
            microtaskDrainDone: W,
            scheduleMicroTask: R,
            showUncaughtError: () => !d[a("ignoreConsoleErrorUncaughtError")],
            patchEventTarget: () => [],
            patchOnProperties: W,
            patchMethod: () => W,
            bindArguments: () => [],
            patchThen: () => W,
            patchMacroTask: () => W,
            patchEventPrototype: () => W,
            isIEOrEdge: () => !1,
            getGlobalObjects: () => {},
            ObjectDefineProperty: () => W,
            ObjectGetOwnPropertyDescriptor: () => {},
            ObjectCreate: () => {},
            ArraySlice: () => [],
            patchClass: () => W,
            wrapWithCurrentZone: () => W,
            filterProperties: () => [],
            attachOriginToPatched: () => W,
            _redefineProperty: () => W,
            patchCallbacks: () => W,
            nativeScheduleMicroTask: z,
          };
        let U = { parent: null, zone: new d(null, null) },
          oe = null,
          te = 0;
        function W() {}
        o("Zone", "Zone"), (t.Zone = d);
      })(globalThis);
      const ce = Object.getOwnPropertyDescriptor,
        Ee = Object.defineProperty,
        ae = Object.getPrototypeOf,
        ge = Object.create,
        Be = Array.prototype.slice,
        ke = "addEventListener",
        Re = "removeEventListener",
        Ne = Zone.__symbol__(ke),
        Ie = Zone.__symbol__(Re),
        le = "true",
        ue = "false",
        ve = Zone.__symbol__("");
      function Me(t, n) {
        return Zone.current.wrap(t, n);
      }
      function Le(t, n, i, o, c) {
        return Zone.current.scheduleMacroTask(t, n, i, o, c);
      }
      const j = Zone.__symbol__,
        Ce = typeof window < "u",
        Te = Ce ? window : void 0,
        Y = (Ce && Te) || globalThis,
        at = "removeAttribute";
      function Ae(t, n) {
        for (let i = t.length - 1; i >= 0; i--)
          "function" == typeof t[i] && (t[i] = Me(t[i], n + "_" + i));
        return t;
      }
      function Fe(t) {
        return (
          !t ||
          (!1 !== t.writable &&
            !("function" == typeof t.get && typeof t.set > "u"))
        );
      }
      const Ue =
          typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope,
        De =
          !("nw" in Y) &&
          typeof Y.process < "u" &&
          "[object process]" === {}.toString.call(Y.process),
        je = !De && !Ue && !(!Ce || !Te.HTMLElement),
        We =
          typeof Y.process < "u" &&
          "[object process]" === {}.toString.call(Y.process) &&
          !Ue &&
          !(!Ce || !Te.HTMLElement),
        Oe = {},
        ze = function (t) {
          if (!(t = t || Y.event)) return;
          let n = Oe[t.type];
          n || (n = Oe[t.type] = j("ON_PROPERTY" + t.type));
          const i = this || t.target || Y,
            o = i[n];
          let c;
          return (
            je && i === Te && "error" === t.type
              ? ((c =
                  o &&
                  o.call(
                    this,
                    t.message,
                    t.filename,
                    t.lineno,
                    t.colno,
                    t.error,
                  )),
                !0 === c && t.preventDefault())
              : ((c = o && o.apply(this, arguments)),
                null != c && !c && t.preventDefault()),
            c
          );
        };
      function Xe(t, n, i) {
        let o = ce(t, n);
        if (
          (!o && i && ce(i, n) && (o = { enumerable: !0, configurable: !0 }),
          !o || !o.configurable)
        )
          return;
        const c = j("on" + n + "patched");
        if (t.hasOwnProperty(c) && t[c]) return;
        delete o.writable, delete o.value;
        const a = o.get,
          y = o.set,
          d = n.slice(2);
        let b = Oe[d];
        b || (b = Oe[d] = j("ON_PROPERTY" + d)),
          (o.set = function (v) {
            let p = this;
            !p && t === Y && (p = Y),
              p &&
                ("function" == typeof p[b] && p.removeEventListener(d, ze),
                y && y.call(p, null),
                (p[b] = v),
                "function" == typeof v && p.addEventListener(d, ze, !1));
          }),
          (o.get = function () {
            let v = this;
            if ((!v && t === Y && (v = Y), !v)) return null;
            const p = v[b];
            if (p) return p;
            if (a) {
              let M = a.call(this);
              if (M)
                return (
                  o.set.call(this, M),
                  "function" == typeof v[at] && v.removeAttribute(n),
                  M
                );
            }
            return null;
          }),
          Ee(t, n, o),
          (t[c] = !0);
      }
      function qe(t, n, i) {
        if (n) for (let o = 0; o < n.length; o++) Xe(t, "on" + n[o], i);
        else {
          const o = [];
          for (const c in t) "on" == c.slice(0, 2) && o.push(c);
          for (let c = 0; c < o.length; c++) Xe(t, o[c], i);
        }
      }
      const re = j("originalInstance");
      function be(t) {
        const n = Y[t];
        if (!n) return;
        (Y[j(t)] = n),
          (Y[t] = function () {
            const c = Ae(arguments, t);
            switch (c.length) {
              case 0:
                this[re] = new n();
                break;
              case 1:
                this[re] = new n(c[0]);
                break;
              case 2:
                this[re] = new n(c[0], c[1]);
                break;
              case 3:
                this[re] = new n(c[0], c[1], c[2]);
                break;
              case 4:
                this[re] = new n(c[0], c[1], c[2], c[3]);
                break;
              default:
                throw new Error("Arg list too long.");
            }
          }),
          he(Y[t], n);
        const i = new n(function () {});
        let o;
        for (o in i)
          ("XMLHttpRequest" === t && "responseBlob" === o) ||
            (function (c) {
              "function" == typeof i[c]
                ? (Y[t].prototype[c] = function () {
                    return this[re][c].apply(this[re], arguments);
                  })
                : Ee(Y[t].prototype, c, {
                    set: function (a) {
                      "function" == typeof a
                        ? ((this[re][c] = Me(a, t + "." + c)),
                          he(this[re][c], a))
                        : (this[re][c] = a);
                    },
                    get: function () {
                      return this[re][c];
                    },
                  });
            })(o);
        for (o in n)
          "prototype" !== o && n.hasOwnProperty(o) && (Y[t][o] = n[o]);
      }
      function fe(t, n, i) {
        let o = t;
        for (; o && !o.hasOwnProperty(n); ) o = ae(o);
        !o && t[n] && (o = t);
        const c = j(n);
        let a = null;
        if (
          o &&
          (!(a = o[c]) || !o.hasOwnProperty(c)) &&
          ((a = o[c] = o[n]), Fe(o && ce(o, n)))
        ) {
          const d = i(a, c, n);
          (o[n] = function () {
            return d(this, arguments);
          }),
            he(o[n], a);
        }
        return a;
      }
      function ut(t, n, i) {
        let o = null;
        function c(a) {
          const y = a.data;
          return (
            (y.args[y.cbIdx] = function () {
              a.invoke.apply(this, arguments);
            }),
            o.apply(y.target, y.args),
            a
          );
        }
        o = fe(
          t,
          n,
          (a) =>
            function (y, d) {
              const b = i(y, d);
              return b.cbIdx >= 0 && "function" == typeof d[b.cbIdx]
                ? Le(b.name, d[b.cbIdx], b, c)
                : a.apply(y, d);
            },
        );
      }
      function he(t, n) {
        t[j("OriginalDelegate")] = n;
      }
      let Ye = !1,
        He = !1;
      function ht() {
        if (Ye) return He;
        Ye = !0;
        try {
          const t = Te.navigator.userAgent;
          (-1 !== t.indexOf("MSIE ") ||
            -1 !== t.indexOf("Trident/") ||
            -1 !== t.indexOf("Edge/")) &&
            (He = !0);
        } catch {}
        return He;
      }
      Zone.__load_patch("ZoneAwarePromise", (t, n, i) => {
        const o = Object.getOwnPropertyDescriptor,
          c = Object.defineProperty,
          y = i.symbol,
          d = [],
          b = !1 !== t[y("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],
          v = y("Promise"),
          p = y("then"),
          M = "__creationTrace__";
        (i.onUnhandledError = (u) => {
          if (i.showUncaughtError()) {
            const l = u && u.rejection;
            l
              ? console.error(
                  "Unhandled Promise rejection:",
                  l instanceof Error ? l.message : l,
                  "; Zone:",
                  u.zone.name,
                  "; Task:",
                  u.task && u.task.source,
                  "; Value:",
                  l,
                  l instanceof Error ? l.stack : void 0,
                )
              : console.error(u);
          }
        }),
          (i.microtaskDrainDone = () => {
            for (; d.length; ) {
              const u = d.shift();
              try {
                u.zone.runGuarded(() => {
                  throw u.throwOriginal ? u.rejection : u;
                });
              } catch (l) {
                N(l);
              }
            }
          });
        const Z = y("unhandledPromiseRejectionHandler");
        function N(u) {
          i.onUnhandledError(u);
          try {
            const l = n[Z];
            "function" == typeof l && l.call(this, u);
          } catch {}
        }
        function F(u) {
          return u && u.then;
        }
        function H(u) {
          return u;
        }
        function J(u) {
          return e.reject(u);
        }
        const z = y("state"),
          R = y("value"),
          _ = y("finally"),
          K = y("parentPromiseValue"),
          x = y("parentPromiseState"),
          X = "Promise.then",
          A = null,
          E = !0,
          G = !1,
          h = 0;
        function I(u, l) {
          return (s) => {
            try {
              q(u, l, s);
            } catch (f) {
              q(u, !1, f);
            }
          };
        }
        const P = function () {
            let u = !1;
            return function (s) {
              return function () {
                u || ((u = !0), s.apply(null, arguments));
              };
            };
          },
          Q = "Promise resolved with itself",
          se = y("currentTaskTrace");
        function q(u, l, s) {
          const f = P();
          if (u === s) throw new TypeError(Q);
          if (u[z] === A) {
            let g = null;
            try {
              ("object" == typeof s || "function" == typeof s) &&
                (g = s && s.then);
            } catch (w) {
              return (
                f(() => {
                  q(u, !1, w);
                })(),
                u
              );
            }
            if (
              l !== G &&
              s instanceof e &&
              s.hasOwnProperty(z) &&
              s.hasOwnProperty(R) &&
              s[z] !== A
            )
              oe(s), q(u, s[z], s[R]);
            else if (l !== G && "function" == typeof g)
              try {
                g.call(s, f(I(u, l)), f(I(u, !1)));
              } catch (w) {
                f(() => {
                  q(u, !1, w);
                })();
              }
            else {
              u[z] = l;
              const w = u[R];
              if (
                ((u[R] = s),
                u[_] === _ && l === E && ((u[z] = u[x]), (u[R] = u[K])),
                l === G && s instanceof Error)
              ) {
                const m =
                  n.currentTask && n.currentTask.data && n.currentTask.data[M];
                m &&
                  c(s, se, {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0,
                    value: m,
                  });
              }
              for (let m = 0; m < w.length; )
                te(u, w[m++], w[m++], w[m++], w[m++]);
              if (0 == w.length && l == G) {
                u[z] = h;
                let m = s;
                try {
                  throw new Error(
                    "Uncaught (in promise): " +
                      (function a(u) {
                        return u && u.toString === Object.prototype.toString
                          ? ((u.constructor && u.constructor.name) || "") +
                              ": " +
                              JSON.stringify(u)
                          : u
                            ? u.toString()
                            : Object.prototype.toString.call(u);
                      })(s) +
                      (s && s.stack ? "\n" + s.stack : ""),
                  );
                } catch (D) {
                  m = D;
                }
                b && (m.throwOriginal = !0),
                  (m.rejection = s),
                  (m.promise = u),
                  (m.zone = n.current),
                  (m.task = n.currentTask),
                  d.push(m),
                  i.scheduleMicroTask();
              }
            }
          }
          return u;
        }
        const U = y("rejectionHandledHandler");
        function oe(u) {
          if (u[z] === h) {
            try {
              const l = n[U];
              l &&
                "function" == typeof l &&
                l.call(this, { rejection: u[R], promise: u });
            } catch {}
            u[z] = G;
            for (let l = 0; l < d.length; l++)
              u === d[l].promise && d.splice(l, 1);
          }
        }
        function te(u, l, s, f, g) {
          oe(u);
          const w = u[z],
            m = w
              ? "function" == typeof f
                ? f
                : H
              : "function" == typeof g
                ? g
                : J;
          l.scheduleMicroTask(
            X,
            () => {
              try {
                const D = u[R],
                  O = !!s && _ === s[_];
                O && ((s[K] = D), (s[x] = w));
                const S = l.run(m, void 0, O && m !== J && m !== H ? [] : [D]);
                q(s, !0, S);
              } catch (D) {
                q(s, !1, D);
              }
            },
            s,
          );
        }
        const L = function () {},
          T = t.AggregateError;
        class e {
          static toString() {
            return "function ZoneAwarePromise() { [native code] }";
          }
          static resolve(l) {
            return l instanceof e ? l : q(new this(null), E, l);
          }
          static reject(l) {
            return q(new this(null), G, l);
          }
          static withResolvers() {
            const l = {};
            return (
              (l.promise = new e((s, f) => {
                (l.resolve = s), (l.reject = f);
              })),
              l
            );
          }
          static any(l) {
            if (!l || "function" != typeof l[Symbol.iterator])
              return Promise.reject(new T([], "All promises were rejected"));
            const s = [];
            let f = 0;
            try {
              for (let m of l) f++, s.push(e.resolve(m));
            } catch {
              return Promise.reject(new T([], "All promises were rejected"));
            }
            if (0 === f)
              return Promise.reject(new T([], "All promises were rejected"));
            let g = !1;
            const w = [];
            return new e((m, D) => {
              for (let O = 0; O < s.length; O++)
                s[O].then(
                  (S) => {
                    g || ((g = !0), m(S));
                  },
                  (S) => {
                    w.push(S),
                      f--,
                      0 === f &&
                        ((g = !0), D(new T(w, "All promises were rejected")));
                  },
                );
            });
          }
          static race(l) {
            let s,
              f,
              g = new this((D, O) => {
                (s = D), (f = O);
              });
            function w(D) {
              s(D);
            }
            function m(D) {
              f(D);
            }
            for (let D of l) F(D) || (D = this.resolve(D)), D.then(w, m);
            return g;
          }
          static all(l) {
            return e.allWithCallback(l);
          }
          static allSettled(l) {
            return (
              this && this.prototype instanceof e ? this : e
            ).allWithCallback(l, {
              thenCallback: (f) => ({ status: "fulfilled", value: f }),
              errorCallback: (f) => ({ status: "rejected", reason: f }),
            });
          }
          static allWithCallback(l, s) {
            let f,
              g,
              w = new this((S, V) => {
                (f = S), (g = V);
              }),
              m = 2,
              D = 0;
            const O = [];
            for (let S of l) {
              F(S) || (S = this.resolve(S));
              const V = D;
              try {
                S.then(
                  (B) => {
                    (O[V] = s ? s.thenCallback(B) : B), m--, 0 === m && f(O);
                  },
                  (B) => {
                    s
                      ? ((O[V] = s.errorCallback(B)), m--, 0 === m && f(O))
                      : g(B);
                  },
                );
              } catch (B) {
                g(B);
              }
              m++, D++;
            }
            return (m -= 2), 0 === m && f(O), w;
          }
          constructor(l) {
            const s = this;
            if (!(s instanceof e))
              throw new Error("Must be an instanceof Promise.");
            (s[z] = A), (s[R] = []);
            try {
              const f = P();
              l && l(f(I(s, E)), f(I(s, G)));
            } catch (f) {
              q(s, !1, f);
            }
          }
          get [Symbol.toStringTag]() {
            return "Promise";
          }
          get [Symbol.species]() {
            return e;
          }
          then(l, s) {
            let f = this.constructor?.[Symbol.species];
            (!f || "function" != typeof f) && (f = this.constructor || e);
            const g = new f(L),
              w = n.current;
            return (
              this[z] == A ? this[R].push(w, g, l, s) : te(this, w, g, l, s), g
            );
          }
          catch(l) {
            return this.then(null, l);
          }
          finally(l) {
            let s = this.constructor?.[Symbol.species];
            (!s || "function" != typeof s) && (s = e);
            const f = new s(L);
            f[_] = _;
            const g = n.current;
            return (
              this[z] == A ? this[R].push(g, f, l, l) : te(this, g, f, l, l), f
            );
          }
        }
        (e.resolve = e.resolve),
          (e.reject = e.reject),
          (e.race = e.race),
          (e.all = e.all);
        const r = (t[v] = t.Promise);
        t.Promise = e;
        const k = y("thenPatched");
        function C(u) {
          const l = u.prototype,
            s = o(l, "then");
          if (s && (!1 === s.writable || !s.configurable)) return;
          const f = l.then;
          (l[p] = f),
            (u.prototype.then = function (g, w) {
              return new e((D, O) => {
                f.call(this, D, O);
              }).then(g, w);
            }),
            (u[k] = !0);
        }
        return (
          (i.patchThen = C),
          r &&
            (C(r),
            fe(t, "fetch", (u) =>
              (function $(u) {
                return function (l, s) {
                  let f = u.apply(l, s);
                  if (f instanceof e) return f;
                  let g = f.constructor;
                  return g[k] || C(g), f;
                };
              })(u),
            )),
          (Promise[n.__symbol__("uncaughtPromiseErrors")] = d),
          e
        );
      }),
        Zone.__load_patch("toString", (t) => {
          const n = Function.prototype.toString,
            i = j("OriginalDelegate"),
            o = j("Promise"),
            c = j("Error"),
            a = function () {
              if ("function" == typeof this) {
                const v = this[i];
                if (v)
                  return "function" == typeof v
                    ? n.call(v)
                    : Object.prototype.toString.call(v);
                if (this === Promise) {
                  const p = t[o];
                  if (p) return n.call(p);
                }
                if (this === Error) {
                  const p = t[c];
                  if (p) return n.call(p);
                }
              }
              return n.call(this);
            };
          (a[i] = n), (Function.prototype.toString = a);
          const y = Object.prototype.toString;
          Object.prototype.toString = function () {
            return "function" == typeof Promise && this instanceof Promise
              ? "[object Promise]"
              : y.call(this);
          };
        });
      let ye = !1;
      if (typeof window < "u")
        try {
          const t = Object.defineProperty({}, "passive", {
            get: function () {
              ye = !0;
            },
          });
          window.addEventListener("test", t, t),
            window.removeEventListener("test", t, t);
        } catch {
          ye = !1;
        }
      const dt = { useG: !0 },
        ne = {},
        $e = {},
        Ke = new RegExp("^" + ve + "(\\w+)(true|false)$"),
        Je = j("propagationStopped");
      function Qe(t, n) {
        const i = (n ? n(t) : t) + ue,
          o = (n ? n(t) : t) + le,
          c = ve + i,
          a = ve + o;
        (ne[t] = {}), (ne[t][ue] = c), (ne[t][le] = a);
      }
      function _t(t, n, i, o) {
        const c = (o && o.add) || ke,
          a = (o && o.rm) || Re,
          y = (o && o.listeners) || "eventListeners",
          d = (o && o.rmAll) || "removeAllListeners",
          b = j(c),
          v = "." + c + ":",
          p = "prependListener",
          M = "." + p + ":",
          Z = function (R, _, K) {
            if (R.isRemoved) return;
            const x = R.callback;
            let X;
            "object" == typeof x &&
              x.handleEvent &&
              ((R.callback = (E) => x.handleEvent(E)),
              (R.originalDelegate = x));
            try {
              R.invoke(R, _, [K]);
            } catch (E) {
              X = E;
            }
            const A = R.options;
            return (
              A &&
                "object" == typeof A &&
                A.once &&
                _[a].call(
                  _,
                  K.type,
                  R.originalDelegate ? R.originalDelegate : R.callback,
                  A,
                ),
              X
            );
          };
        function N(R, _, K) {
          if (!(_ = _ || t.event)) return;
          const x = R || _.target || t,
            X = x[ne[_.type][K ? le : ue]];
          if (X) {
            const A = [];
            if (1 === X.length) {
              const E = Z(X[0], x, _);
              E && A.push(E);
            } else {
              const E = X.slice();
              for (let G = 0; G < E.length && (!_ || !0 !== _[Je]); G++) {
                const h = Z(E[G], x, _);
                h && A.push(h);
              }
            }
            if (1 === A.length) throw A[0];
            for (let E = 0; E < A.length; E++) {
              const G = A[E];
              n.nativeScheduleMicroTask(() => {
                throw G;
              });
            }
          }
        }
        const F = function (R) {
            return N(this, R, !1);
          },
          H = function (R) {
            return N(this, R, !0);
          };
        function J(R, _) {
          if (!R) return !1;
          let K = !0;
          _ && void 0 !== _.useG && (K = _.useG);
          const x = _ && _.vh;
          let X = !0;
          _ && void 0 !== _.chkDup && (X = _.chkDup);
          let A = !1;
          _ && void 0 !== _.rt && (A = _.rt);
          let E = R;
          for (; E && !E.hasOwnProperty(c); ) E = ae(E);
          if ((!E && R[c] && (E = R), !E || E[b])) return !1;
          const G = _ && _.eventNameToString,
            h = {},
            I = (E[b] = E[c]),
            P = (E[j(a)] = E[a]),
            Q = (E[j(y)] = E[y]),
            se = (E[j(d)] = E[d]);
          let q;
          _ && _.prepend && (q = E[j(_.prepend)] = E[_.prepend]);
          const e = K
              ? function (s) {
                  if (!h.isExisting)
                    return I.call(
                      h.target,
                      h.eventName,
                      h.capture ? H : F,
                      h.options,
                    );
                }
              : function (s) {
                  return I.call(h.target, h.eventName, s.invoke, h.options);
                },
            r = K
              ? function (s) {
                  if (!s.isRemoved) {
                    const f = ne[s.eventName];
                    let g;
                    f && (g = f[s.capture ? le : ue]);
                    const w = g && s.target[g];
                    if (w)
                      for (let m = 0; m < w.length; m++)
                        if (w[m] === s) {
                          w.splice(m, 1),
                            (s.isRemoved = !0),
                            0 === w.length &&
                              ((s.allRemoved = !0), (s.target[g] = null));
                          break;
                        }
                  }
                  if (s.allRemoved)
                    return P.call(
                      s.target,
                      s.eventName,
                      s.capture ? H : F,
                      s.options,
                    );
                }
              : function (s) {
                  return P.call(s.target, s.eventName, s.invoke, s.options);
                },
            C =
              _ && _.diff
                ? _.diff
                : function (s, f) {
                    const g = typeof f;
                    return (
                      ("function" === g && s.callback === f) ||
                      ("object" === g && s.originalDelegate === f)
                    );
                  },
            $ = Zone[j("UNPATCHED_EVENTS")],
            u = t[j("PASSIVE_EVENTS")],
            l = function (s, f, g, w, m = !1, D = !1) {
              return function () {
                const O = this || t;
                let S = arguments[0];
                _ && _.transferEventName && (S = _.transferEventName(S));
                let V = arguments[1];
                if (!V) return s.apply(this, arguments);
                if (De && "uncaughtException" === S)
                  return s.apply(this, arguments);
                let B = !1;
                if ("function" != typeof V) {
                  if (!V.handleEvent) return s.apply(this, arguments);
                  B = !0;
                }
                if (x && !x(s, V, O, arguments)) return;
                const de = ye && !!u && -1 !== u.indexOf(S),
                  ee = (function U(s, f) {
                    return !ye && "object" == typeof s && s
                      ? !!s.capture
                      : ye && f
                        ? "boolean" == typeof s
                          ? { capture: s, passive: !0 }
                          : s
                            ? "object" == typeof s && !1 !== s.passive
                              ? { ...s, passive: !0 }
                              : s
                            : { passive: !0 }
                        : s;
                  })(arguments[2], de),
                  Pe =
                    ee &&
                    "object" == typeof ee &&
                    ee.signal &&
                    "object" == typeof ee.signal
                      ? ee.signal
                      : void 0;
                if (Pe?.aborted) return;
                if ($)
                  for (let _e = 0; _e < $.length; _e++)
                    if (S === $[_e])
                      return de
                        ? s.call(O, S, V, ee)
                        : s.apply(this, arguments);
                const Ge = !!ee && ("boolean" == typeof ee || ee.capture),
                  rt = !(!ee || "object" != typeof ee) && ee.once,
                  vt = Zone.current;
                let Ve = ne[S];
                Ve || (Qe(S, G), (Ve = ne[S]));
                const ot = Ve[Ge ? le : ue];
                let Ze,
                  me = O[ot],
                  st = !1;
                if (me) {
                  if (((st = !0), X))
                    for (let _e = 0; _e < me.length; _e++)
                      if (C(me[_e], V)) return;
                } else me = O[ot] = [];
                const it = O.constructor.name,
                  ct = $e[it];
                ct && (Ze = ct[S]),
                  Ze || (Ze = it + f + (G ? G(S) : S)),
                  (h.options = ee),
                  rt && (h.options.once = !1),
                  (h.target = O),
                  (h.capture = Ge),
                  (h.eventName = S),
                  (h.isExisting = st);
                const we = K ? dt : void 0;
                we && (we.taskData = h), Pe && (h.options.signal = void 0);
                const ie = vt.scheduleEventTask(Ze, V, we, g, w);
                return (
                  Pe &&
                    ((h.options.signal = Pe),
                    s.call(
                      Pe,
                      "abort",
                      () => {
                        ie.zone.cancelTask(ie);
                      },
                      { once: !0 },
                    )),
                  (h.target = null),
                  we && (we.taskData = null),
                  rt && (ee.once = !0),
                  (!ye && "boolean" == typeof ie.options) || (ie.options = ee),
                  (ie.target = O),
                  (ie.capture = Ge),
                  (ie.eventName = S),
                  B && (ie.originalDelegate = V),
                  D ? me.unshift(ie) : me.push(ie),
                  m ? O : void 0
                );
              };
            };
          return (
            (E[c] = l(I, v, e, r, A)),
            q &&
              (E[p] = l(
                q,
                M,
                function (s) {
                  return q.call(h.target, h.eventName, s.invoke, h.options);
                },
                r,
                A,
                !0,
              )),
            (E[a] = function () {
              const s = this || t;
              let f = arguments[0];
              _ && _.transferEventName && (f = _.transferEventName(f));
              const g = arguments[2],
                w = !!g && ("boolean" == typeof g || g.capture),
                m = arguments[1];
              if (!m) return P.apply(this, arguments);
              if (x && !x(P, m, s, arguments)) return;
              const D = ne[f];
              let O;
              D && (O = D[w ? le : ue]);
              const S = O && s[O];
              if (S)
                for (let V = 0; V < S.length; V++) {
                  const B = S[V];
                  if (C(B, m))
                    return (
                      S.splice(V, 1),
                      (B.isRemoved = !0),
                      0 === S.length &&
                        ((B.allRemoved = !0),
                        (s[O] = null),
                        "string" == typeof f) &&
                        (s[ve + "ON_PROPERTY" + f] = null),
                      B.zone.cancelTask(B),
                      A ? s : void 0
                    );
                }
              return P.apply(this, arguments);
            }),
            (E[y] = function () {
              const s = this || t;
              let f = arguments[0];
              _ && _.transferEventName && (f = _.transferEventName(f));
              const g = [],
                w = et(s, G ? G(f) : f);
              for (let m = 0; m < w.length; m++) {
                const D = w[m];
                g.push(D.originalDelegate ? D.originalDelegate : D.callback);
              }
              return g;
            }),
            (E[d] = function () {
              const s = this || t;
              let f = arguments[0];
              if (f) {
                _ && _.transferEventName && (f = _.transferEventName(f));
                const g = ne[f];
                if (g) {
                  const D = s[g[ue]],
                    O = s[g[le]];
                  if (D) {
                    const S = D.slice();
                    for (let V = 0; V < S.length; V++) {
                      const B = S[V];
                      this[a].call(
                        this,
                        f,
                        B.originalDelegate ? B.originalDelegate : B.callback,
                        B.options,
                      );
                    }
                  }
                  if (O) {
                    const S = O.slice();
                    for (let V = 0; V < S.length; V++) {
                      const B = S[V];
                      this[a].call(
                        this,
                        f,
                        B.originalDelegate ? B.originalDelegate : B.callback,
                        B.options,
                      );
                    }
                  }
                }
              } else {
                const g = Object.keys(s);
                for (let w = 0; w < g.length; w++) {
                  const D = Ke.exec(g[w]);
                  let O = D && D[1];
                  O && "removeListener" !== O && this[d].call(this, O);
                }
                this[d].call(this, "removeListener");
              }
              if (A) return this;
            }),
            he(E[c], I),
            he(E[a], P),
            se && he(E[d], se),
            Q && he(E[y], Q),
            !0
          );
        }
        let z = [];
        for (let R = 0; R < i.length; R++) z[R] = J(i[R], o);
        return z;
      }
      function et(t, n) {
        if (!n) {
          const a = [];
          for (let y in t) {
            const d = Ke.exec(y);
            let b = d && d[1];
            if (b && (!n || b === n)) {
              const v = t[y];
              if (v) for (let p = 0; p < v.length; p++) a.push(v[p]);
            }
          }
          return a;
        }
        let i = ne[n];
        i || (Qe(n), (i = ne[n]));
        const o = t[i[ue]],
          c = t[i[le]];
        return o ? (c ? o.concat(c) : o.slice()) : c ? c.slice() : [];
      }
      function Et(t, n) {
        const i = t.Event;
        i &&
          i.prototype &&
          n.patchMethod(
            i.prototype,
            "stopImmediatePropagation",
            (o) =>
              function (c, a) {
                (c[Je] = !0), o && o.apply(c, a);
              },
          );
      }
      function Tt(t, n, i, o, c) {
        const a = Zone.__symbol__(o);
        if (n[a]) return;
        const y = (n[a] = n[o]);
        (n[o] = function (d, b, v) {
          return (
            b &&
              b.prototype &&
              c.forEach(function (p) {
                const M = `${i}.${o}::` + p,
                  Z = b.prototype;
                try {
                  if (Z.hasOwnProperty(p)) {
                    const N = t.ObjectGetOwnPropertyDescriptor(Z, p);
                    N && N.value
                      ? ((N.value = t.wrapWithCurrentZone(N.value, M)),
                        t._redefineProperty(b.prototype, p, N))
                      : Z[p] && (Z[p] = t.wrapWithCurrentZone(Z[p], M));
                  } else Z[p] && (Z[p] = t.wrapWithCurrentZone(Z[p], M));
                } catch {}
              }),
            y.call(n, d, b, v)
          );
        }),
          t.attachOriginToPatched(n[o], y);
      }
      function tt(t, n, i) {
        if (!i || 0 === i.length) return n;
        const o = i.filter((a) => a.target === t);
        if (!o || 0 === o.length) return n;
        const c = o[0].ignoreProperties;
        return n.filter((a) => -1 === c.indexOf(a));
      }
      function nt(t, n, i, o) {
        t && qe(t, tt(t, n, i), o);
      }
      function xe(t) {
        return Object.getOwnPropertyNames(t)
          .filter((n) => n.startsWith("on") && n.length > 2)
          .map((n) => n.substring(2));
      }
      Zone.__load_patch("util", (t, n, i) => {
        const o = xe(t);
        (i.patchOnProperties = qe),
          (i.patchMethod = fe),
          (i.bindArguments = Ae),
          (i.patchMacroTask = ut);
        const c = n.__symbol__("BLACK_LISTED_EVENTS"),
          a = n.__symbol__("UNPATCHED_EVENTS");
        t[a] && (t[c] = t[a]),
          t[c] && (n[c] = n[a] = t[c]),
          (i.patchEventPrototype = Et),
          (i.patchEventTarget = _t),
          (i.isIEOrEdge = ht),
          (i.ObjectDefineProperty = Ee),
          (i.ObjectGetOwnPropertyDescriptor = ce),
          (i.ObjectCreate = ge),
          (i.ArraySlice = Be),
          (i.patchClass = be),
          (i.wrapWithCurrentZone = Me),
          (i.filterProperties = tt),
          (i.attachOriginToPatched = he),
          (i._redefineProperty = Object.defineProperty),
          (i.patchCallbacks = Tt),
          (i.getGlobalObjects = () => ({
            globalSources: $e,
            zoneSymbolEventNames: ne,
            eventNames: o,
            isBrowser: je,
            isMix: We,
            isNode: De,
            TRUE_STR: le,
            FALSE_STR: ue,
            ZONE_SYMBOL_PREFIX: ve,
            ADD_EVENT_LISTENER_STR: ke,
            REMOVE_EVENT_LISTENER_STR: Re,
          }));
      });
      const Se = j("zoneTask");
      function pe(t, n, i, o) {
        let c = null,
          a = null;
        i += o;
        const y = {};
        function d(v) {
          const p = v.data;
          return (
            (p.args[0] = function () {
              return v.invoke.apply(this, arguments);
            }),
            (p.handleId = c.apply(t, p.args)),
            v
          );
        }
        function b(v) {
          return a.call(t, v.data.handleId);
        }
        (c = fe(
          t,
          (n += o),
          (v) =>
            function (p, M) {
              if ("function" == typeof M[0]) {
                const Z = {
                    isPeriodic: "Interval" === o,
                    delay:
                      "Timeout" === o || "Interval" === o ? M[1] || 0 : void 0,
                    args: M,
                  },
                  N = M[0];
                M[0] = function () {
                  try {
                    return N.apply(this, arguments);
                  } finally {
                    Z.isPeriodic ||
                      ("number" == typeof Z.handleId
                        ? delete y[Z.handleId]
                        : Z.handleId && (Z.handleId[Se] = null));
                  }
                };
                const F = Le(n, M[0], Z, d, b);
                if (!F) return F;
                const H = F.data.handleId;
                return (
                  "number" == typeof H ? (y[H] = F) : H && (H[Se] = F),
                  H &&
                    H.ref &&
                    H.unref &&
                    "function" == typeof H.ref &&
                    "function" == typeof H.unref &&
                    ((F.ref = H.ref.bind(H)), (F.unref = H.unref.bind(H))),
                  "number" == typeof H || H ? H : F
                );
              }
              return v.apply(t, M);
            },
        )),
          (a = fe(
            t,
            i,
            (v) =>
              function (p, M) {
                const Z = M[0];
                let N;
                "number" == typeof Z
                  ? (N = y[Z])
                  : ((N = Z && Z[Se]), N || (N = Z)),
                  N && "string" == typeof N.type
                    ? "notScheduled" !== N.state &&
                      ((N.cancelFn && N.data.isPeriodic) || 0 === N.runCount) &&
                      ("number" == typeof Z ? delete y[Z] : Z && (Z[Se] = null),
                      N.zone.cancelTask(N))
                    : v.apply(t, M);
              },
          ));
      }
      Zone.__load_patch("legacy", (t) => {
        const n = t[Zone.__symbol__("legacyPatch")];
        n && n();
      }),
        Zone.__load_patch("timers", (t) => {
          const n = "set",
            i = "clear";
          pe(t, n, i, "Timeout"),
            pe(t, n, i, "Interval"),
            pe(t, n, i, "Immediate");
        }),
        Zone.__load_patch("requestAnimationFrame", (t) => {
          pe(t, "request", "cancel", "AnimationFrame"),
            pe(t, "mozRequest", "mozCancel", "AnimationFrame"),
            pe(t, "webkitRequest", "webkitCancel", "AnimationFrame");
        }),
        Zone.__load_patch("blocking", (t, n) => {
          const i = ["alert", "prompt", "confirm"];
          for (let o = 0; o < i.length; o++)
            fe(
              t,
              i[o],
              (a, y, d) =>
                function (b, v) {
                  return n.current.run(a, t, v, d);
                },
            );
        }),
        Zone.__load_patch("EventTarget", (t, n, i) => {
          (function kt(t, n) {
            n.patchEventPrototype(t, n);
          })(t, i),
            (function gt(t, n) {
              if (Zone[n.symbol("patchEventTarget")]) return;
              const {
                eventNames: i,
                zoneSymbolEventNames: o,
                TRUE_STR: c,
                FALSE_STR: a,
                ZONE_SYMBOL_PREFIX: y,
              } = n.getGlobalObjects();
              for (let b = 0; b < i.length; b++) {
                const v = i[b],
                  Z = y + (v + a),
                  N = y + (v + c);
                (o[v] = {}), (o[v][a] = Z), (o[v][c] = N);
              }
              const d = t.EventTarget;
              d && d.prototype && n.patchEventTarget(t, n, [d && d.prototype]);
            })(t, i);
          const o = t.XMLHttpRequestEventTarget;
          o && o.prototype && i.patchEventTarget(t, i, [o.prototype]);
        }),
        Zone.__load_patch("MutationObserver", (t, n, i) => {
          be("MutationObserver"), be("WebKitMutationObserver");
        }),
        Zone.__load_patch("IntersectionObserver", (t, n, i) => {
          be("IntersectionObserver");
        }),
        Zone.__load_patch("FileReader", (t, n, i) => {
          be("FileReader");
        }),
        Zone.__load_patch("on_property", (t, n, i) => {
          !(function yt(t, n) {
            if ((De && !We) || Zone[t.symbol("patchEvents")]) return;
            const i = n.__Zone_ignore_on_properties;
            let o = [];
            if (je) {
              const c = window;
              o = o.concat([
                "Document",
                "SVGElement",
                "Element",
                "HTMLElement",
                "HTMLBodyElement",
                "HTMLMediaElement",
                "HTMLFrameSetElement",
                "HTMLFrameElement",
                "HTMLIFrameElement",
                "HTMLMarqueeElement",
                "Worker",
              ]);
              const a = (function ft() {
                try {
                  const t = Te.navigator.userAgent;
                  if (-1 !== t.indexOf("MSIE ") || -1 !== t.indexOf("Trident/"))
                    return !0;
                } catch {}
                return !1;
              })()
                ? [{ target: c, ignoreProperties: ["error"] }]
                : [];
              nt(c, xe(c), i && i.concat(a), ae(c));
            }
            o = o.concat([
              "XMLHttpRequest",
              "XMLHttpRequestEventTarget",
              "IDBIndex",
              "IDBRequest",
              "IDBOpenDBRequest",
              "IDBDatabase",
              "IDBTransaction",
              "IDBCursor",
              "WebSocket",
            ]);
            for (let c = 0; c < o.length; c++) {
              const a = n[o[c]];
              a && a.prototype && nt(a.prototype, xe(a.prototype), i);
            }
          })(i, t);
        }),
        Zone.__load_patch("customElements", (t, n, i) => {
          !(function mt(t, n) {
            const { isBrowser: i, isMix: o } = n.getGlobalObjects();
            (i || o) &&
              t.customElements &&
              "customElements" in t &&
              n.patchCallbacks(
                n,
                t.customElements,
                "customElements",
                "define",
                [
                  "connectedCallback",
                  "disconnectedCallback",
                  "adoptedCallback",
                  "attributeChangedCallback",
                  "formAssociatedCallback",
                  "formDisabledCallback",
                  "formResetCallback",
                  "formStateRestoreCallback",
                ],
              );
          })(t, i);
        }),
        Zone.__load_patch("XHR", (t, n) => {
          !(function b(v) {
            const p = v.XMLHttpRequest;
            if (!p) return;
            const M = p.prototype;
            let N = M[Ne],
              F = M[Ie];
            if (!N) {
              const h = v.XMLHttpRequestEventTarget;
              if (h) {
                const I = h.prototype;
                (N = I[Ne]), (F = I[Ie]);
              }
            }
            const H = "readystatechange",
              J = "scheduled";
            function z(h) {
              const I = h.data,
                P = I.target;
              (P[a] = !1), (P[d] = !1);
              const Q = P[c];
              N || ((N = P[Ne]), (F = P[Ie])), Q && F.call(P, H, Q);
              const se = (P[c] = () => {
                if (P.readyState === P.DONE)
                  if (!I.aborted && P[a] && h.state === J) {
                    const U = P[n.__symbol__("loadfalse")];
                    if (0 !== P.status && U && U.length > 0) {
                      const oe = h.invoke;
                      (h.invoke = function () {
                        const te = P[n.__symbol__("loadfalse")];
                        for (let W = 0; W < te.length; W++)
                          te[W] === h && te.splice(W, 1);
                        !I.aborted && h.state === J && oe.call(h);
                      }),
                        U.push(h);
                    } else h.invoke();
                  } else !I.aborted && !1 === P[a] && (P[d] = !0);
              });
              return (
                N.call(P, H, se),
                P[i] || (P[i] = h),
                E.apply(P, I.args),
                (P[a] = !0),
                h
              );
            }
            function R() {}
            function _(h) {
              const I = h.data;
              return (I.aborted = !0), G.apply(I.target, I.args);
            }
            const K = fe(
                M,
                "open",
                () =>
                  function (h, I) {
                    return (h[o] = 0 == I[2]), (h[y] = I[1]), K.apply(h, I);
                  },
              ),
              X = j("fetchTaskAborting"),
              A = j("fetchTaskScheduling"),
              E = fe(
                M,
                "send",
                () =>
                  function (h, I) {
                    if (!0 === n.current[A] || h[o]) return E.apply(h, I);
                    {
                      const P = {
                          target: h,
                          url: h[y],
                          isPeriodic: !1,
                          args: I,
                          aborted: !1,
                        },
                        Q = Le("XMLHttpRequest.send", R, P, z, _);
                      h &&
                        !0 === h[d] &&
                        !P.aborted &&
                        Q.state === J &&
                        Q.invoke();
                    }
                  },
              ),
              G = fe(
                M,
                "abort",
                () =>
                  function (h, I) {
                    const P = (function Z(h) {
                      return h[i];
                    })(h);
                    if (P && "string" == typeof P.type) {
                      if (null == P.cancelFn || (P.data && P.data.aborted))
                        return;
                      P.zone.cancelTask(P);
                    } else if (!0 === n.current[X]) return G.apply(h, I);
                  },
              );
          })(t);
          const i = j("xhrTask"),
            o = j("xhrSync"),
            c = j("xhrListener"),
            a = j("xhrScheduled"),
            y = j("xhrURL"),
            d = j("xhrErrorBeforeScheduled");
        }),
        Zone.__load_patch("geolocation", (t) => {
          t.navigator &&
            t.navigator.geolocation &&
            (function lt(t, n) {
              const i = t.constructor.name;
              for (let o = 0; o < n.length; o++) {
                const c = n[o],
                  a = t[c];
                if (a) {
                  if (!Fe(ce(t, c))) continue;
                  t[c] = ((d) => {
                    const b = function () {
                      return d.apply(this, Ae(arguments, i + "." + c));
                    };
                    return he(b, d), b;
                  })(a);
                }
              }
            })(t.navigator.geolocation, [
              "getCurrentPosition",
              "watchPosition",
            ]);
        }),
        Zone.__load_patch("PromiseRejectionEvent", (t, n) => {
          function i(o) {
            return function (c) {
              et(t, o).forEach((y) => {
                const d = t.PromiseRejectionEvent;
                if (d) {
                  const b = new d(o, {
                    promise: c.promise,
                    reason: c.rejection,
                  });
                  y.invoke(b);
                }
              });
            };
          }
          t.PromiseRejectionEvent &&
            ((n[j("unhandledPromiseRejectionHandler")] =
              i("unhandledrejection")),
            (n[j("rejectionHandledHandler")] = i("rejectionhandled")));
        }),
        Zone.__load_patch("queueMicrotask", (t, n, i) => {
          !(function pt(t, n) {
            n.patchMethod(
              t,
              "queueMicrotask",
              (i) =>
                function (o, c) {
                  Zone.current.scheduleMicroTask("queueMicrotask", c[0]);
                },
            );
          })(t, i);
        });
    },
  },
  (ce) => {
    ce((ce.s = 7432));
  },
]);
