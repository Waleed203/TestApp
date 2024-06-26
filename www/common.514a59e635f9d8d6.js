"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [9312],
  {
    436: (O, v, r) => {
      r.d(v, { c: () => a });
      var t = r(2992),
        e = r(5988),
        l = r(2528);
      const a = (n, c) => {
        let s, o;
        const f = (d, u, E) => {
            if (typeof document > "u") return;
            const w = document.elementFromPoint(d, u);
            w && c(w) ? w !== s && (i(), p(w, E)) : i();
          },
          p = (d, u) => {
            (s = d), o || (o = s);
            const E = s;
            (0, t.w)(() => E.classList.add("ion-activated")), u();
          },
          i = (d = !1) => {
            if (!s) return;
            const u = s;
            (0, t.w)(() => u.classList.remove("ion-activated")),
              d && o !== s && s.click(),
              (s = void 0);
          };
        return (0, l.createGesture)({
          el: n,
          gestureName: "buttonActiveDrag",
          threshold: 0,
          onStart: (d) => f(d.currentX, d.currentY, e.a),
          onMove: (d) => f(d.currentX, d.currentY, e.b),
          onEnd: () => {
            i(!0), (0, e.h)(), (o = void 0);
          },
        });
      };
    },
    1008: (O, v, r) => {
      r.d(v, { g: () => e });
      var t = r(4829);
      const e = () => {
        if (void 0 !== t.w) return t.w.Capacitor;
      };
    },
    5984: (O, v, r) => {
      r.d(v, { c: () => t, i: () => e });
      const t = (l, a, n) =>
          "function" == typeof n
            ? n(l, a)
            : "string" == typeof n
              ? l[n] === a[n]
              : Array.isArray(a)
                ? a.includes(l)
                : l === a,
        e = (l, a, n) =>
          void 0 !== l &&
          (Array.isArray(l) ? l.some((c) => t(c, a, n)) : t(l, a, n));
    },
    7716: (O, v, r) => {
      r.d(v, { i: () => t });
      const t = (e) =>
        e && "" !== e.dir
          ? "rtl" === e.dir.toLowerCase()
          : "rtl" === document?.dir.toLowerCase();
    },
    704: (O, v, r) => {
      r.r(v), r.d(v, { startFocusVisible: () => a });
      const t = "ion-focused",
        l = [
          "Tab",
          "ArrowDown",
          "Space",
          "Escape",
          " ",
          "Shift",
          "Enter",
          "ArrowLeft",
          "ArrowRight",
          "ArrowUp",
          "Home",
          "End",
        ],
        a = (n) => {
          let c = [],
            s = !0;
          const o = n ? n.shadowRoot : document,
            f = n || document.body,
            p = (y) => {
              c.forEach((_) => _.classList.remove(t)),
                y.forEach((_) => _.classList.add(t)),
                (c = y);
            },
            i = () => {
              (s = !1), p([]);
            },
            d = (y) => {
              (s = l.includes(y.key)), s || p([]);
            },
            u = (y) => {
              if (s && void 0 !== y.composedPath) {
                const _ = y
                  .composedPath()
                  .filter(
                    (m) =>
                      !!m.classList && m.classList.contains("ion-focusable"),
                  );
                p(_);
              }
            },
            E = () => {
              o.activeElement === f && p([]);
            };
          return (
            o.addEventListener("keydown", d),
            o.addEventListener("focusin", u),
            o.addEventListener("focusout", E),
            o.addEventListener("touchstart", i, { passive: !0 }),
            o.addEventListener("mousedown", i),
            {
              destroy: () => {
                o.removeEventListener("keydown", d),
                  o.removeEventListener("focusin", u),
                  o.removeEventListener("focusout", E),
                  o.removeEventListener("touchstart", i),
                  o.removeEventListener("mousedown", i);
              },
              setFocus: p,
            }
          );
        };
    },
    8507: (O, v, r) => {
      r.d(v, { c: () => e });
      var t = r(6384);
      const e = (c) => {
          const s = c;
          let o;
          return {
            hasLegacyControl: () => {
              if (void 0 === o) {
                const p = void 0 !== s.label || l(s),
                  i =
                    s.hasAttribute("aria-label") ||
                    (s.hasAttribute("aria-labelledby") &&
                      null === s.shadowRoot),
                  d = (0, t.h)(s);
                o = !0 === s.legacy || (!p && !i && null !== d);
              }
              return o;
            },
          };
        },
        l = (c) =>
          !!(
            (a.includes(c.tagName) &&
              null !== c.querySelector('[slot="label"]')) ||
            (n.includes(c.tagName) && "" !== c.textContent)
          ),
        a = ["ION-INPUT", "ION-TEXTAREA", "ION-SELECT", "ION-RANGE"],
        n = ["ION-TOGGLE", "ION-CHECKBOX", "ION-RADIO"];
    },
    5988: (O, v, r) => {
      r.d(v, {
        I: () => e,
        a: () => s,
        b: () => o,
        c: () => c,
        d: () => p,
        h: () => f,
      });
      var t = r(1008),
        e = (function (i) {
          return (
            (i.Heavy = "HEAVY"), (i.Medium = "MEDIUM"), (i.Light = "LIGHT"), i
          );
        })(e || {});
      const a = {
          getEngine() {
            const i = window.TapticEngine;
            if (i) return i;
            const d = (0, t.g)();
            return d?.isPluginAvailable("Haptics") ? d.Plugins.Haptics : void 0;
          },
          available() {
            if (!this.getEngine()) return !1;
            const d = (0, t.g)();
            return (
              "web" !== d?.getPlatform() ||
              (typeof navigator < "u" && void 0 !== navigator.vibrate)
            );
          },
          isCordova: () => void 0 !== window.TapticEngine,
          isCapacitor: () => void 0 !== (0, t.g)(),
          impact(i) {
            const d = this.getEngine();
            if (!d) return;
            const u = this.isCapacitor() ? i.style : i.style.toLowerCase();
            d.impact({ style: u });
          },
          notification(i) {
            const d = this.getEngine();
            if (!d) return;
            const u = this.isCapacitor() ? i.type : i.type.toLowerCase();
            d.notification({ type: u });
          },
          selection() {
            const i = this.isCapacitor() ? e.Light : "light";
            this.impact({ style: i });
          },
          selectionStart() {
            const i = this.getEngine();
            i &&
              (this.isCapacitor()
                ? i.selectionStart()
                : i.gestureSelectionStart());
          },
          selectionChanged() {
            const i = this.getEngine();
            i &&
              (this.isCapacitor()
                ? i.selectionChanged()
                : i.gestureSelectionChanged());
          },
          selectionEnd() {
            const i = this.getEngine();
            i &&
              (this.isCapacitor() ? i.selectionEnd() : i.gestureSelectionEnd());
          },
        },
        n = () => a.available(),
        c = () => {
          n() && a.selection();
        },
        s = () => {
          n() && a.selectionStart();
        },
        o = () => {
          n() && a.selectionChanged();
        },
        f = () => {
          n() && a.selectionEnd();
        },
        p = (i) => {
          n() && a.impact(i);
        };
    },
    2816: (O, v, r) => {
      r.d(v, {
        I: () => c,
        a: () => p,
        b: () => n,
        c: () => u,
        d: () => w,
        f: () => i,
        g: () => f,
        i: () => o,
        p: () => E,
        r: () => y,
        s: () => d,
      });
      var t = r(1528),
        e = r(6384),
        l = r(2032);
      const n = "ion-content",
        c = ".ion-content-scroll-host",
        s = `${n}, ${c}`,
        o = (_) => "ION-CONTENT" === _.tagName,
        f = (function () {
          var _ = (0, t.c)(function* (m) {
            return o(m)
              ? (yield new Promise((h) => (0, e.c)(m, h)), m.getScrollElement())
              : m;
          });
          return function (h) {
            return _.apply(this, arguments);
          };
        })(),
        p = (_) => _.querySelector(c) || _.querySelector(s),
        i = (_) => _.closest(s),
        d = (_, m) =>
          o(_)
            ? _.scrollToTop(m)
            : Promise.resolve(
                _.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: m > 0 ? "smooth" : "auto",
                }),
              ),
        u = (_, m, h, C) =>
          o(_)
            ? _.scrollByPoint(m, h, C)
            : Promise.resolve(
                _.scrollBy({
                  top: h,
                  left: m,
                  behavior: C > 0 ? "smooth" : "auto",
                }),
              ),
        E = (_) => (0, l.b)(_, n),
        w = (_) => {
          if (o(_)) {
            const h = _.scrollY;
            return (_.scrollY = !1), h;
          }
          return _.style.setProperty("overflow", "hidden"), !0;
        },
        y = (_, m) => {
          o(_) ? (_.scrollY = m) : _.style.removeProperty("overflow");
        };
    },
    4812: (O, v, r) => {
      r.d(v, {
        a: () => t,
        b: () => u,
        c: () => s,
        d: () => E,
        e: () => b,
        f: () => c,
        g: () => w,
        h: () => l,
        i: () => e,
        j: () => C,
        k: () => M,
        l: () => o,
        m: () => i,
        n: () => y,
        o: () => p,
        p: () => n,
        q: () => a,
        r: () => h,
        s: () => g,
        t: () => d,
        u: () => _,
        v: () => m,
        w: () => f,
      });
      const t =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",
        e =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",
        l =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",
        a =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",
        n =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",
        c =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",
        s =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",
        o =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",
        f =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",
        p =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",
        i =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",
        d =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",
        u =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",
        E =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",
        w =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",
        y =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",
        _ =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",
        m =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",
        h =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",
        C =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",
        M =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",
        g =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",
        b =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>";
    },
    6132: (O, v, r) => {
      r.d(v, { c: () => a, g: () => n });
      var t = r(4829),
        e = r(6384),
        l = r(2032);
      const a = (s, o, f) => {
          let p, i;
          if (void 0 !== t.w && "MutationObserver" in t.w) {
            const w = Array.isArray(o) ? o : [o];
            (p = new MutationObserver((y) => {
              for (const _ of y)
                for (const m of _.addedNodes)
                  if (m.nodeType === Node.ELEMENT_NODE && w.includes(m.slot))
                    return f(), void (0, e.r)(() => d(m));
            })),
              p.observe(s, { childList: !0 });
          }
          const d = (w) => {
              var y;
              i && (i.disconnect(), (i = void 0)),
                (i = new MutationObserver((_) => {
                  f();
                  for (const m of _)
                    for (const h of m.removedNodes)
                      h.nodeType === Node.ELEMENT_NODE && h.slot === o && E();
                })),
                i.observe(
                  null !== (y = w.parentElement) && void 0 !== y ? y : w,
                  { subtree: !0, childList: !0 },
                );
            },
            E = () => {
              i && (i.disconnect(), (i = void 0));
            };
          return {
            destroy: () => {
              p && (p.disconnect(), (p = void 0)), E();
            },
          };
        },
        n = (s, o, f) => {
          const p = null == s ? 0 : s.toString().length,
            i = c(p, o);
          if (void 0 === f) return i;
          try {
            return f(p, o);
          } catch (d) {
            return (0, l.a)("Exception in provided `counterFormatter`.", d), i;
          }
        },
        c = (s, o) => `${s} / ${o}`;
    },
    8888: (O, v, r) => {
      r.r(v),
        r.d(v, {
          KEYBOARD_DID_CLOSE: () => n,
          KEYBOARD_DID_OPEN: () => a,
          copyVisualViewport: () => M,
          keyboardDidClose: () => _,
          keyboardDidOpen: () => w,
          keyboardDidResize: () => y,
          resetKeyboardAssist: () => p,
          setKeyboardClose: () => E,
          setKeyboardOpen: () => u,
          startKeyboardAssist: () => i,
          trackViewportChanges: () => C,
        });
      var t = r(56);
      r(1008), r(4829);
      const a = "ionKeyboardDidShow",
        n = "ionKeyboardDidHide";
      let s = {},
        o = {},
        f = !1;
      const p = () => {
          (s = {}), (o = {}), (f = !1);
        },
        i = (g) => {
          if (t.K.getEngine()) d(g);
          else {
            if (!g.visualViewport) return;
            (o = M(g.visualViewport)),
              (g.visualViewport.onresize = () => {
                C(g), w() || y(g) ? u(g) : _(g) && E(g);
              });
          }
        },
        d = (g) => {
          g.addEventListener("keyboardDidShow", (b) => u(g, b)),
            g.addEventListener("keyboardDidHide", () => E(g));
        },
        u = (g, b) => {
          m(g, b), (f = !0);
        },
        E = (g) => {
          h(g), (f = !1);
        },
        w = () =>
          !f && s.width === o.width && (s.height - o.height) * o.scale > 150,
        y = (g) => f && !_(g),
        _ = (g) => f && o.height === g.innerHeight,
        m = (g, b) => {
          const D = new CustomEvent(a, {
            detail: {
              keyboardHeight: b ? b.keyboardHeight : g.innerHeight - o.height,
            },
          });
          g.dispatchEvent(D);
        },
        h = (g) => {
          const b = new CustomEvent(n);
          g.dispatchEvent(b);
        },
        C = (g) => {
          (s = Object.assign({}, o)), (o = M(g.visualViewport));
        },
        M = (g) => ({
          width: Math.round(g.width),
          height: Math.round(g.height),
          offsetTop: g.offsetTop,
          offsetLeft: g.offsetLeft,
          pageTop: g.pageTop,
          pageLeft: g.pageLeft,
          scale: g.scale,
        });
    },
    56: (O, v, r) => {
      r.d(v, { K: () => a, a: () => l });
      var t = r(1008),
        e = (function (n) {
          return (
            (n.Unimplemented = "UNIMPLEMENTED"),
            (n.Unavailable = "UNAVAILABLE"),
            n
          );
        })(e || {}),
        l = (function (n) {
          return (
            (n.Body = "body"),
            (n.Ionic = "ionic"),
            (n.Native = "native"),
            (n.None = "none"),
            n
          );
        })(l || {});
      const a = {
        getEngine() {
          const n = (0, t.g)();
          if (n?.isPluginAvailable("Keyboard")) return n.Plugins.Keyboard;
        },
        getResizeMode() {
          const n = this.getEngine();
          return n?.getResizeMode
            ? n.getResizeMode().catch((c) => {
                if (c.code !== e.Unimplemented) throw c;
              })
            : Promise.resolve(void 0);
        },
      };
    },
    4908: (O, v, r) => {
      r.d(v, { c: () => c });
      var t = r(1528),
        e = r(4829),
        l = r(56);
      const a = (s) =>
          void 0 === e.d || s === l.a.None || void 0 === s
            ? null
            : e.d.querySelector("ion-app") ?? e.d.body,
        n = (s) => {
          const o = a(s);
          return null === o ? 0 : o.clientHeight;
        },
        c = (function () {
          var s = (0, t.c)(function* (o) {
            let f, p, i, d;
            const u = (function () {
                var m = (0, t.c)(function* () {
                  const h = yield l.K.getResizeMode(),
                    C = void 0 === h ? void 0 : h.mode;
                  (f = () => {
                    void 0 === d && (d = n(C)), (i = !0), E(i, C);
                  }),
                    (p = () => {
                      (i = !1), E(i, C);
                    }),
                    null == e.w || e.w.addEventListener("keyboardWillShow", f),
                    null == e.w || e.w.addEventListener("keyboardWillHide", p);
                });
                return function () {
                  return m.apply(this, arguments);
                };
              })(),
              E = (m, h) => {
                o && o(m, w(h));
              },
              w = (m) => {
                if (0 === d || d === n(m)) return;
                const h = a(m);
                return null !== h
                  ? new Promise((C) => {
                      const g = new ResizeObserver(() => {
                        h.clientHeight === d && (g.disconnect(), C());
                      });
                      g.observe(h);
                    })
                  : void 0;
              };
            return (
              yield u(),
              {
                init: u,
                destroy: () => {
                  null == e.w || e.w.removeEventListener("keyboardWillShow", f),
                    null == e.w ||
                      e.w.removeEventListener("keyboardWillHide", p),
                    (f = p = void 0);
                },
                isKeyboardVisible: () => i,
              }
            );
          });
          return function (f) {
            return s.apply(this, arguments);
          };
        })();
    },
    3464: (O, v, r) => {
      r.d(v, { c: () => e });
      var t = r(1528);
      const e = () => {
        let l;
        return {
          lock: (function () {
            var n = (0, t.c)(function* () {
              const c = l;
              let s;
              return (
                (l = new Promise((o) => (s = o))), void 0 !== c && (yield c), s
              );
            });
            return function () {
              return n.apply(this, arguments);
            };
          })(),
        };
      };
    },
    7620: (O, v, r) => {
      r.d(v, { c: () => l });
      var t = r(4829),
        e = r(6384);
      const l = (a, n, c) => {
        let s;
        const o = () => !(void 0 === n() || void 0 !== a.label || null === c()),
          p = () => {
            const d = n();
            if (void 0 === d) return;
            if (!o()) return void d.style.removeProperty("width");
            const u = c().scrollWidth;
            if (
              0 === u &&
              null === d.offsetParent &&
              void 0 !== t.w &&
              "IntersectionObserver" in t.w
            ) {
              if (void 0 !== s) return;
              const E = (s = new IntersectionObserver(
                (w) => {
                  1 === w[0].intersectionRatio &&
                    (p(), E.disconnect(), (s = void 0));
                },
                { threshold: 0.01, root: a },
              ));
              E.observe(d);
            } else d.style.setProperty("width", 0.75 * u + "px");
          };
        return {
          calculateNotchWidth: () => {
            o() &&
              (0, e.r)(() => {
                p();
              });
          },
          destroy: () => {
            s && (s.disconnect(), (s = void 0));
          },
        };
      };
    },
    9096: (O, v, r) => {
      r.d(v, { S: () => e });
      const e = {
        bubbles: {
          dur: 1e3,
          circles: 9,
          fn: (l, a, n) => {
            const c = (l * a) / n - l + "ms",
              s = (2 * Math.PI * a) / n;
            return {
              r: 5,
              style: {
                top: 32 * Math.sin(s) + "%",
                left: 32 * Math.cos(s) + "%",
                "animation-delay": c,
              },
            };
          },
        },
        circles: {
          dur: 1e3,
          circles: 8,
          fn: (l, a, n) => {
            const c = a / n,
              s = l * c - l + "ms",
              o = 2 * Math.PI * c;
            return {
              r: 5,
              style: {
                top: 32 * Math.sin(o) + "%",
                left: 32 * Math.cos(o) + "%",
                "animation-delay": s,
              },
            };
          },
        },
        circular: {
          dur: 1400,
          elmDuration: !0,
          circles: 1,
          fn: () => ({
            r: 20,
            cx: 48,
            cy: 48,
            fill: "none",
            viewBox: "24 24 48 48",
            transform: "translate(0,0)",
            style: {},
          }),
        },
        crescent: { dur: 750, circles: 1, fn: () => ({ r: 26, style: {} }) },
        dots: {
          dur: 750,
          circles: 3,
          fn: (l, a) => ({
            r: 6,
            style: {
              left: 32 - 32 * a + "%",
              "animation-delay": -110 * a + "ms",
            },
          }),
        },
        lines: {
          dur: 1e3,
          lines: 8,
          fn: (l, a, n) => ({
            y1: 14,
            y2: 26,
            style: {
              transform: `rotate(${(360 / n) * a + (a < n / 2 ? 180 : -180)}deg)`,
              "animation-delay": (l * a) / n - l + "ms",
            },
          }),
        },
        "lines-small": {
          dur: 1e3,
          lines: 8,
          fn: (l, a, n) => ({
            y1: 12,
            y2: 20,
            style: {
              transform: `rotate(${(360 / n) * a + (a < n / 2 ? 180 : -180)}deg)`,
              "animation-delay": (l * a) / n - l + "ms",
            },
          }),
        },
        "lines-sharp": {
          dur: 1e3,
          lines: 12,
          fn: (l, a, n) => ({
            y1: 17,
            y2: 29,
            style: {
              transform: `rotate(${30 * a + (a < 6 ? 180 : -180)}deg)`,
              "animation-delay": (l * a) / n - l + "ms",
            },
          }),
        },
        "lines-sharp-small": {
          dur: 1e3,
          lines: 12,
          fn: (l, a, n) => ({
            y1: 12,
            y2: 20,
            style: {
              transform: `rotate(${30 * a + (a < 6 ? 180 : -180)}deg)`,
              "animation-delay": (l * a) / n - l + "ms",
            },
          }),
        },
      };
    },
    4568: (O, v, r) => {
      r.r(v), r.d(v, { createSwipeBackGesture: () => n });
      var t = r(6384),
        e = r(7716),
        l = r(2528);
      r(6560);
      const n = (c, s, o, f, p) => {
        const i = c.ownerDocument.defaultView;
        let d = (0, e.i)(c);
        const E = (h) => (d ? -h.deltaX : h.deltaX);
        return (0, l.createGesture)({
          el: c,
          gestureName: "goback-swipe",
          gesturePriority: 101,
          threshold: 10,
          canStart: (h) => (
            (d = (0, e.i)(c)),
            ((h) => {
              const { startX: M } = h;
              return d ? M >= i.innerWidth - 50 : M <= 50;
            })(h) && s()
          ),
          onStart: o,
          onMove: (h) => {
            const M = E(h) / i.innerWidth;
            f(M);
          },
          onEnd: (h) => {
            const C = E(h),
              M = i.innerWidth,
              g = C / M,
              b = ((h) => (d ? -h.velocityX : h.velocityX))(h),
              D = b >= 0 && (b > 0.2 || C > M / 2),
              P = (D ? 1 - g : g) * M;
            let L = 0;
            if (P > 5) {
              const x = P / Math.abs(b);
              L = Math.min(x, 540);
            }
            p(D, g <= 0 ? 0.01 : (0, t.l)(0, g, 0.9999), L);
          },
        });
      };
    },
    7128: (O, v, r) => {
      r.d(v, { w: () => t });
      const t = (a, n, c) => {
          if (typeof MutationObserver > "u") return;
          const s = new MutationObserver((o) => {
            c(e(o, n));
          });
          return s.observe(a, { childList: !0, subtree: !0 }), s;
        },
        e = (a, n) => {
          let c;
          return (
            a.forEach((s) => {
              for (let o = 0; o < s.addedNodes.length; o++)
                c = l(s.addedNodes[o], n) || c;
            }),
            c
          );
        },
        l = (a, n) => {
          if (1 !== a.nodeType) return;
          const c = a;
          return (
            c.tagName === n.toUpperCase()
              ? [c]
              : Array.from(c.querySelectorAll(n))
          ).find((o) => o.value === c.value);
        };
    },
    6828: (O, v, r) => {
      r.d(v, { U: () => d });
      var t = r(4496),
        e = r(2112),
        l = r(1368);
      function a(u, E) {
        if ((1 & u && (t.I0R(0, "span"), t.OEk(1), t.C$Y()), 2 & u)) {
          const w = t.GaO(2);
          t.yG2(), t.cNF(w.title);
        }
      }
      function n(u, E) {
        1 & u && t.wR5(0, "ion-icon", 6);
      }
      function c(u, E) {
        if (
          (1 & u &&
            (t.I0R(0, "div", 3),
            t.yuY(1, a, 2, 1, "span", 4)(2, n, 1, 0, "ion-icon", 5),
            t.C$Y()),
          2 & u)
        ) {
          const w = t.GaO();
          t.yG2(), t.E7m("ngIf", !w.state), t.yG2(), t.E7m("ngIf", !w.state);
        }
      }
      function s(u, E) {
        1 & u && (t.I0R(0, "span"), t.OEk(1, "Signing In..."), t.C$Y());
      }
      function o(u, E) {
        1 & u && (t.I0R(0, "span"), t.OEk(1, "Signing Up..."), t.C$Y());
      }
      function f(u, E) {
        if (
          (1 & u &&
            (t.I0R(0, "span"),
            t.yuY(1, s, 2, 0, "span", 4)(2, o, 2, 0, "span", 4),
            t.C$Y()),
          2 & u)
        ) {
          const w = t.GaO(2);
          t.yG2(),
            t.E7m("ngIf", "Sign In" == w.title),
            t.yG2(),
            t.E7m("ngIf", "Sign Up" == w.title);
        }
      }
      function p(u, E) {
        1 & u && t.wR5(0, "ion-spinner");
      }
      function i(u, E) {
        if (
          (1 & u &&
            (t.I0R(0, "div", 3),
            t.yuY(1, f, 3, 2, "span", 4)(2, p, 1, 0, "ion-spinner", 4),
            t.C$Y()),
          2 & u)
        ) {
          const w = t.GaO();
          t.yG2(), t.E7m("ngIf", w.state), t.yG2(), t.E7m("ngIf", w.state);
        }
      }
      let d = (() => {
        class u {
          constructor() {
            (this.title = ""), (this.state = !1);
          }
          ngOnInit() {
            console.log("in btn component", this.title, this.state);
          }
          static #t = (this.ɵfac = function (y) {
            return new (y || u)();
          });
          static #n = (this.ɵcmp = t.In1({
            type: u,
            selectors: [["app-btn"]],
            inputs: { title: "title", form: "form", state: "state" },
            decls: 4,
            vars: 3,
            consts: [
              [1, "btnDiv"],
              ["type", "submit", 3, "disabled"],
              ["class", "signingInNow", 4, "ngIf"],
              [1, "signingInNow"],
              [4, "ngIf"],
              ["style", "font-size: 20px;", "name", "arrow-forward", 4, "ngIf"],
              ["name", "arrow-forward", 2, "font-size", "20px"],
            ],
            template: function (y, _) {
              1 & y &&
                (t.I0R(0, "div", 0)(1, "ion-button", 1),
                t.yuY(2, c, 3, 2, "div", 2)(3, i, 3, 2, "div", 2),
                t.C$Y()()),
                2 & y &&
                  (t.yG2(),
                  t.E7m("disabled", _.form.invalid),
                  t.yG2(),
                  t.E7m("ngIf", !_.state),
                  t.yG2(),
                  t.E7m("ngIf", _.state));
            },
            dependencies: [e.sn, e.Ko, e.YA, l.u_],
            styles: [
              ".btnDiv[_ngcontent-%COMP%]{width:100%;margin:5% auto}.btnDiv[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:100%;--background: #4A53D8;color:#fff;font-weight:700;font-family:Poppins,sans-serif;text-transform:capitalize;height:60px;--border-radius: 5px}.signingInNow[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center}",
            ],
          }));
        }
        return u;
      })();
    },
    6032: (O, v, r) => {
      r.d(v, { k: () => o });
      var t = r(1528),
        e = r(4496),
        l = r(2112),
        a = r(5880),
        n = r(1368);
      function c(f, p) {
        1 & f && e.wR5(0, "ion-back-button", 4);
      }
      function s(f, p) {
        if (1 & f) {
          const i = e.KQA();
          e.I0R(0, "ion-buttons", 5),
            e.qCj("click", function () {
              e.usT(i);
              const u = e.GaO();
              return e.CGJ(u.logout());
            }),
            e.wR5(1, "ion-icon", 6),
            e.C$Y();
        }
      }
      let o = (() => {
        class f {
          constructor() {
            (this.title = ""),
              (this.authService = (0, e.uUt)(a.o)),
              (this.alertCtrl = (0, e.uUt)(l.iW));
          }
          logout() {
            var i = this;
            return (0, t.c)(function* () {
              var u;
              yield (yield i.alertCtrl.create({
                header: "Log Out",
                message: "Do you want to logout from your account?",
                cssClass: "input-alert",
                buttons: [
                  {
                    text: "Confirm",
                    handler:
                      ((u = (0, t.c)(function* () {
                        i.authService.logout();
                      })),
                      function () {
                        return u.apply(this, arguments);
                      }),
                  },
                  {
                    text: "Cancel",
                    handler: (function () {
                      var u = (0, t.c)(function* () {});
                      return function () {
                        return u.apply(this, arguments);
                      };
                    })(),
                  },
                ],
              })).present();
            })();
          }
          ngOnInit() {}
          static #t = (this.ɵfac = function (d) {
            return new (d || f)();
          });
          static #n = (this.ɵcmp = e.In1({
            type: f,
            selectors: [["app-header"]],
            inputs: { title: "title", showBack: "showBack" },
            decls: 7,
            vars: 3,
            consts: [
              [1, "ion-no-border"],
              ["slot", "start"],
              ["defaultHref", "/tabs/tabs1", 4, "ngIf"],
              ["slot", "end", "class", "endButtons", 3, "click", 4, "ngIf"],
              ["defaultHref", "/tabs/tabs1"],
              ["slot", "end", 1, "endButtons", 3, "click"],
              ["name", "log-out-outline"],
            ],
            template: function (d, u) {
              1 & d &&
                (e.I0R(0, "ion-header", 0)(1, "ion-toolbar")(
                  2,
                  "ion-buttons",
                  1,
                ),
                e.yuY(3, c, 1, 0, "ion-back-button", 2),
                e.C$Y(),
                e.I0R(4, "ion-title"),
                e.OEk(5),
                e.C$Y(),
                e.yuY(6, s, 2, 0, "ion-buttons", 3),
                e.C$Y()()),
                2 & d &&
                  (e.yG2(3),
                  e.E7m("ngIf", u.showBack),
                  e.yG2(2),
                  e.cNF(u.title),
                  e.yG2(),
                  e.E7m("ngIf", "List of Characters" == u.title));
            },
            dependencies: [l.GS, l.wB, l.Ko, l.tM, l.Md, l.Im, n.u_],
            styles: [
              "ion-toolbar[_ngcontent-%COMP%]{--background: var(--toolbar-background-color);color:var(--light-mode-toolbar-text-color)}.endButtons[_ngcontent-%COMP%]{margin-right:20px}.endButtons[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--light-mode-toolbar-text-color);font-size:23px}",
            ],
          }));
        }
        return f;
      })();
    },
    8604: (O, v, r) => {
      r.d(v, { O: () => a });
      var t = r(4496),
        e = r(2112);
      function l(n, c) {
        if (1 & n) {
          const s = t.KQA();
          t.I0R(0, "ion-content")(1, "div", 1),
            t.qCj("click", function () {
              t.usT(s);
              const f = t.GaO();
              return t.CGJ(f.close());
            }),
            t.wR5(2, "ion-icon", 2),
            t.C$Y(),
            t.I0R(3, "div", 3)(4, "div", 4),
            t.wR5(5, "img", 5),
            t.C$Y(),
            t.I0R(6, "div", 6),
            t.OEk(7, " Mobile not connected to the internet. "),
            t.C$Y()()();
        }
      }
      let a = (() => {
        class n {
          constructor() {
            (this.openThis = !1), (this.modalCtrl = (0, t.uUt)(e.qS));
          }
          close() {
            (this.openThis = !1), this.modalCtrl.dismiss();
          }
          ngOnInit() {}
          static #t = (this.ɵfac = function (o) {
            return new (o || n)();
          });
          static #n = (this.ɵcmp = t.In1({
            type: n,
            selectors: [["app-internet"]],
            inputs: { openThis: "openThis" },
            decls: 2,
            vars: 1,
            consts: [
              ["mode", "ios", 3, "isOpen"],
              [1, "closeIcon", 3, "click"],
              ["name", "close"],
              [1, "wapper"],
              [1, "imageDiv"],
              ["src", "./assets/imgs/no-wifi.png"],
              [1, "text"],
            ],
            template: function (o, f) {
              1 & o &&
                (t.I0R(0, "ion-modal", 0),
                t.yuY(1, l, 8, 0, "ng-template"),
                t.C$Y()),
                2 & o && t.E7m("isOpen", f.openThis);
            },
            dependencies: [e._i, e.Ko, e.yc],
            styles: [
              "ion-content[_ngcontent-%COMP%]{--background: #222;position:relative}.closeIcon[_ngcontent-%COMP%]{position:absolute;right:20px;top:20px}.closeIcon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:16px;color:#fff}.wapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:50% auto 0}.imageDiv[_ngcontent-%COMP%]{width:100%;text-align:center;display:flex;justify-content:center}.imageDiv[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:200px;height:200px}.text[_ngcontent-%COMP%]{color:#fff;font-size:20px;width:90%;text-align:center;margin:5% auto}",
            ],
          }));
        }
        return n;
      })();
    },
  },
]);
