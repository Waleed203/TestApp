"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [3936],
  {
    3936: (K, S, a) => {
      a.r(S),
        a.d(S, {
          ion_app: () => D,
          ion_buttons: () => B,
          ion_content: () => _,
          ion_footer: () => H,
          ion_header: () => j,
          ion_router_outlet: () => F,
          ion_title: () => U,
          ion_toolbar: () => X,
        });
      var h = a(1528),
        r = a(2992),
        T = a(2784),
        z = a(2032),
        c = a(8523),
        m = a(6384),
        M = a(7716),
        p = a(5256),
        b = a(2816),
        g = a(4908),
        k = a(6944),
        w = a(495),
        C = a(3464),
        Y = a(6256);
      a(4829), a(56), a(1008);
      const D = class {
          constructor(t) {
            (0, r.r)(this, t);
          }
          componentDidLoad() {
            var t = this;
            N(
              (0, h.c)(function* () {
                const o = (0, c.a)(window, "hybrid");
                if (
                  (c.c.getBoolean("_testing") ||
                    a
                      .e(1636)
                      .then(a.bind(a, 1636))
                      .then((i) => i.startTapClick(c.c)),
                  c.c.getBoolean("statusTap", o) &&
                    a
                      .e(7312)
                      .then(a.bind(a, 7312))
                      .then((i) => i.startStatusTap()),
                  c.c.getBoolean("inputShims", Z()))
                ) {
                  const i = (0, c.a)(window, "ios") ? "ios" : "android";
                  a.e(5024)
                    .then(a.bind(a, 5024))
                    .then((s) => s.startInputShims(c.c, i));
                }
                const e = yield Promise.resolve().then(a.bind(a, 2784)),
                  n = o || (0, T.shoudUseCloseWatcher)();
                c.c.getBoolean("hardwareBackButton", n)
                  ? e.startHardwareBackButton()
                  : ((0, T.shoudUseCloseWatcher)() &&
                      (0, z.p)(
                        "experimentalCloseWatcher was set to `true`, but hardwareBackButton was set to `false`. Both config options must be `true` for the Close Watcher API to be used.",
                      ),
                    e.blockHardwareBackButton()),
                  typeof window < "u" &&
                    a
                      .e(9312)
                      .then(a.bind(a, 8888))
                      .then((i) => i.startKeyboardAssist(window)),
                  a
                    .e(9312)
                    .then(a.bind(a, 704))
                    .then((i) => (t.focusVisible = i.startFocusVisible()));
              }),
            );
          }
          setFocus(t) {
            var o = this;
            return (0, h.c)(function* () {
              o.focusVisible && o.focusVisible.setFocus(t);
            })();
          }
          render() {
            const t = (0, c.b)(this);
            return (0, r.h)(r.H, {
              key: "3535eb5c0dab78a78011e552524a98599b2b650f",
              class: {
                [t]: !0,
                "ion-page": !0,
                "force-statusbar-padding": c.c.getBoolean(
                  "_forceStatusbarPadding",
                ),
              },
            });
          }
          get el() {
            return (0, r.f)(this);
          }
        },
        Z = () =>
          !!(
            ((0, c.a)(window, "ios") && (0, c.a)(window, "mobile")) ||
            ((0, c.a)(window, "android") && (0, c.a)(window, "mobileweb"))
          ),
        N = (t) => {
          "requestIdleCallback" in window
            ? window.requestIdleCallback(t)
            : setTimeout(t, 32);
        };
      D.style =
        "html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}html.plt-mobile ion-app [contenteditable]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}";
      const B = class {
        constructor(t) {
          (0, r.r)(this, t), (this.collapse = !1);
        }
        render() {
          const t = (0, c.b)(this);
          return (0, r.h)(r.H, {
            key: "52c0c5535f5688a481746fe8fd92b6c02941526f",
            class: { [t]: !0, "buttons-collapse": this.collapse },
          });
        }
      };
      B.style = {
        ios: ".sc-ion-buttons-ios-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-ios-s ion-button{--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-buttons-ios-s ion-button{--padding-top:3px;--padding-bottom:3px;--padding-start:5px;--padding-end:5px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;min-height:32px}.sc-ion-buttons-ios-s .button-has-icon-only{--padding-top:0;--padding-bottom:0}.sc-ion-buttons-ios-s ion-button:not(.button-round){--border-radius:4px}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button{--color:initial;--border-color:initial;--background-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-solid,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-solid{--background:var(--ion-color-contrast);--background-focused:#000;--background-focused-opacity:.12;--background-activated:#000;--background-activated-opacity:.12;--background-hover:var(--ion-color-base);--background-hover-opacity:0.45;--color:var(--ion-color-base);--color-focused:var(--ion-color-base)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-clear,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-clear{--color-activated:var(--ion-color-contrast);--color-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-outline,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-outline{--color-activated:var(--ion-color-base);--color-focused:var(--ion-color-contrast);--background-activated:var(--ion-color-contrast)}.sc-ion-buttons-ios-s .button-clear,.sc-ion-buttons-ios-s .button-outline{--background-activated:transparent;--background-focused:currentColor;--background-hover:transparent}.sc-ion-buttons-ios-s .button-solid:not(.ion-color){--background-focused:#000;--background-focused-opacity:.12;--background-activated:#000;--background-activated-opacity:.12}.sc-ion-buttons-ios-s ion-icon[slot=start]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-end:0.3em;margin-inline-end:0.3em;font-size:1.41em;line-height:0.67}.sc-ion-buttons-ios-s ion-icon[slot=end]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-start:0.4em;margin-inline-start:0.4em;font-size:1.41em;line-height:0.67}.sc-ion-buttons-ios-s ion-icon[slot=icon-only]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:1.65em;line-height:0.67}",
        md: ".sc-ion-buttons-md-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-md-s ion-button{--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-buttons-md-s ion-button{--padding-top:3px;--padding-bottom:3px;--padding-start:8px;--padding-end:8px;--box-shadow:none;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;min-height:32px}.sc-ion-buttons-md-s .button-has-icon-only{--padding-top:0;--padding-bottom:0}.sc-ion-buttons-md-s ion-button:not(.button-round){--border-radius:2px}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button{--color:initial;--color-focused:var(--ion-color-contrast);--color-hover:var(--ion-color-contrast);--background-activated:transparent;--background-focused:var(--ion-color-contrast);--background-hover:var(--ion-color-contrast)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button-solid,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button-solid{--background:var(--ion-color-contrast);--background-activated:transparent;--background-focused:var(--ion-color-shade);--background-hover:var(--ion-color-base);--color:var(--ion-color-base);--color-focused:var(--ion-color-base);--color-hover:var(--ion-color-base)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button-outline,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button-outline{--border-color:var(--ion-color-contrast)}.sc-ion-buttons-md-s .button-has-icon-only.button-clear{--padding-top:12px;--padding-end:12px;--padding-bottom:12px;--padding-start:12px;--border-radius:50%;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:3rem;height:3rem}.sc-ion-buttons-md-s .button{--background-hover:currentColor}.sc-ion-buttons-md-s .button-solid{--color:var(--ion-toolbar-background, var(--ion-background-color, #fff));--background:var(--ion-toolbar-color, var(--ion-text-color, #424242));--background-activated:transparent;--background-focused:currentColor}.sc-ion-buttons-md-s .button-outline{--color:initial;--background:transparent;--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor;--border-color:currentColor}.sc-ion-buttons-md-s .button-clear{--color:initial;--background:transparent;--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor}.sc-ion-buttons-md-s ion-icon[slot=start]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-end:0.3em;margin-inline-end:0.3em;font-size:1.4em}.sc-ion-buttons-md-s ion-icon[slot=end]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-start:0.4em;margin-inline-start:0.4em;font-size:1.4em}.sc-ion-buttons-md-s ion-icon[slot=icon-only]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:1.8em}",
      };
      const _ = class {
          constructor(t) {
            (0, r.r)(this, t),
              (this.ionScrollStart = (0, r.d)(this, "ionScrollStart", 7)),
              (this.ionScroll = (0, r.d)(this, "ionScroll", 7)),
              (this.ionScrollEnd = (0, r.d)(this, "ionScrollEnd", 7)),
              (this.watchDog = null),
              (this.isScrolling = !1),
              (this.lastScroll = 0),
              (this.queued = !1),
              (this.cTop = -1),
              (this.cBottom = -1),
              (this.isMainContent = !0),
              (this.resizeTimeout = null),
              (this.tabsElement = null),
              (this.detail = {
                scrollTop: 0,
                scrollLeft: 0,
                type: "scroll",
                event: void 0,
                startX: 0,
                startY: 0,
                startTime: 0,
                currentX: 0,
                currentY: 0,
                velocityX: 0,
                velocityY: 0,
                deltaX: 0,
                deltaY: 0,
                currentTime: 0,
                data: void 0,
                isScrolling: !0,
              }),
              (this.color = void 0),
              (this.fullscreen = !1),
              (this.forceOverscroll = void 0),
              (this.scrollX = !1),
              (this.scrollY = !0),
              (this.scrollEvents = !1);
          }
          connectedCallback() {
            if (
              ((this.isMainContent =
                null === this.el.closest("ion-menu, ion-popover, ion-modal")),
              (0, m.m)(this.el))
            ) {
              const t = (this.tabsElement = this.el.closest("ion-tabs"));
              null !== t &&
                ((this.tabsLoadCallback = () => this.resize()),
                t.addEventListener("ionTabBarLoaded", this.tabsLoadCallback));
            }
          }
          disconnectedCallback() {
            if ((this.onScrollEnd(), (0, m.m)(this.el))) {
              const { tabsElement: t, tabsLoadCallback: o } = this;
              null !== t &&
                void 0 !== o &&
                t.removeEventListener("ionTabBarLoaded", o),
                (this.tabsElement = null),
                (this.tabsLoadCallback = void 0);
            }
          }
          onResize() {
            this.resizeTimeout &&
              (clearTimeout(this.resizeTimeout), (this.resizeTimeout = null)),
              (this.resizeTimeout = setTimeout(() => {
                null !== this.el.offsetParent && this.resize();
              }, 100));
          }
          shouldForceOverscroll() {
            const { forceOverscroll: t } = this,
              o = (0, c.b)(this);
            return void 0 === t ? "ios" === o && (0, c.a)("ios") : t;
          }
          resize() {
            this.fullscreen
              ? (0, r.e)(() => this.readDimensions())
              : (0 !== this.cTop || 0 !== this.cBottom) &&
                ((this.cTop = this.cBottom = 0), (0, r.i)(this));
          }
          readDimensions() {
            const t = q(this.el),
              o = Math.max(this.el.offsetTop, 0),
              e = Math.max(t.offsetHeight - o - this.el.offsetHeight, 0);
            (o !== this.cTop || e !== this.cBottom) &&
              ((this.cTop = o), (this.cBottom = e), (0, r.i)(this));
          }
          onScroll(t) {
            const o = Date.now(),
              e = !this.isScrolling;
            (this.lastScroll = o),
              e && this.onScrollStart(),
              !this.queued &&
                this.scrollEvents &&
                ((this.queued = !0),
                (0, r.e)((n) => {
                  (this.queued = !1),
                    (this.detail.event = t),
                    tt(this.detail, this.scrollEl, n, e),
                    this.ionScroll.emit(this.detail);
                }));
          }
          getScrollElement() {
            var t = this;
            return (0, h.c)(function* () {
              return (
                t.scrollEl || (yield new Promise((o) => (0, m.c)(t.el, o))),
                Promise.resolve(t.scrollEl)
              );
            })();
          }
          getBackgroundElement() {
            var t = this;
            return (0, h.c)(function* () {
              return (
                t.backgroundContentEl ||
                  (yield new Promise((o) => (0, m.c)(t.el, o))),
                Promise.resolve(t.backgroundContentEl)
              );
            })();
          }
          scrollToTop(t = 0) {
            return this.scrollToPoint(void 0, 0, t);
          }
          scrollToBottom(t = 0) {
            var o = this;
            return (0, h.c)(function* () {
              const e = yield o.getScrollElement();
              return o.scrollToPoint(
                void 0,
                e.scrollHeight - e.clientHeight,
                t,
              );
            })();
          }
          scrollByPoint(t, o, e) {
            var n = this;
            return (0, h.c)(function* () {
              const i = yield n.getScrollElement();
              return n.scrollToPoint(t + i.scrollLeft, o + i.scrollTop, e);
            })();
          }
          scrollToPoint(t, o, e = 0) {
            var n = this;
            return (0, h.c)(function* () {
              const i = yield n.getScrollElement();
              if (e < 32)
                return (
                  null != o && (i.scrollTop = o),
                  void (null != t && (i.scrollLeft = t))
                );
              let s,
                l = 0;
              const d = new Promise((v) => (s = v)),
                u = i.scrollTop,
                f = i.scrollLeft,
                x = null != o ? o - u : 0,
                y = null != t ? t - f : 0,
                I = (v) => {
                  const ft = Math.min(1, (v - l) / e) - 1,
                    O = Math.pow(ft, 3) + 1;
                  0 !== x && (i.scrollTop = Math.floor(O * x + u)),
                    0 !== y && (i.scrollLeft = Math.floor(O * y + f)),
                    O < 1 ? requestAnimationFrame(I) : s();
                };
              return (
                requestAnimationFrame((v) => {
                  (l = v), I(v);
                }),
                d
              );
            })();
          }
          onScrollStart() {
            (this.isScrolling = !0),
              this.ionScrollStart.emit({ isScrolling: !0 }),
              this.watchDog && clearInterval(this.watchDog),
              (this.watchDog = setInterval(() => {
                this.lastScroll < Date.now() - 120 && this.onScrollEnd();
              }, 100));
          }
          onScrollEnd() {
            this.watchDog && clearInterval(this.watchDog),
              (this.watchDog = null),
              this.isScrolling &&
                ((this.isScrolling = !1),
                this.ionScrollEnd.emit({ isScrolling: !1 }));
          }
          render() {
            const { isMainContent: t, scrollX: o, scrollY: e, el: n } = this,
              i = (0, M.i)(n) ? "rtl" : "ltr",
              s = (0, c.b)(this),
              l = this.shouldForceOverscroll(),
              d = "ios" === s,
              u = t ? "main" : "div";
            return (
              this.resize(),
              (0, r.h)(
                r.H,
                {
                  key: "65d85e1f7f85876a76eec79addc4bd9f697a5d84",
                  class: (0, p.c)(this.color, {
                    [s]: !0,
                    "content-sizing": (0, p.h)("ion-popover", this.el),
                    overscroll: l,
                    [`content-${i}`]: !0,
                  }),
                  style: {
                    "--offset-top": `${this.cTop}px`,
                    "--offset-bottom": `${this.cBottom}px`,
                  },
                },
                (0, r.h)("div", {
                  key: "e2ac474a62cbc864772c497469100436f41289ff",
                  ref: (f) => (this.backgroundContentEl = f),
                  id: "background-content",
                  part: "background",
                }),
                (0, r.h)(
                  u,
                  {
                    key: "567a4bc2bcb13adfd987b088f95ac4b20b789f2c",
                    class: {
                      "inner-scroll": !0,
                      "scroll-x": o,
                      "scroll-y": e,
                      overscroll: (o || e) && l,
                    },
                    ref: (f) => (this.scrollEl = f),
                    onScroll: this.scrollEvents
                      ? (f) => this.onScroll(f)
                      : void 0,
                    part: "scroll",
                  },
                  (0, r.h)("slot", {
                    key: "13909f87dd9f49bf1664ad95038499da376b9480",
                  }),
                ),
                d
                  ? (0, r.h)(
                      "div",
                      { class: "transition-effect" },
                      (0, r.h)("div", { class: "transition-cover" }),
                      (0, r.h)("div", { class: "transition-shadow" }),
                    )
                  : null,
                (0, r.h)("slot", {
                  key: "05b56c139e203cfd1e3dd08054e99328e97e9243",
                  name: "fixed",
                }),
              )
            );
          }
          get el() {
            return (0, r.f)(this);
          }
        },
        q = (t) => {
          const o = t.closest("ion-tabs");
          return (
            o ||
            t.closest(
              "ion-app, ion-page, .ion-page, page-inner, .popover-content",
            ) ||
            ((t) => {
              var o;
              return t.parentElement
                ? t.parentElement
                : null !== (o = t.parentNode) && void 0 !== o && o.host
                  ? t.parentNode.host
                  : null;
            })(t)
          );
        },
        tt = (t, o, e, n) => {
          const i = t.currentX,
            s = t.currentY,
            d = o.scrollLeft,
            u = o.scrollTop,
            f = e - t.currentTime;
          if (
            (n &&
              ((t.startTime = e),
              (t.startX = d),
              (t.startY = u),
              (t.velocityX = t.velocityY = 0)),
            (t.currentTime = e),
            (t.currentX = t.scrollLeft = d),
            (t.currentY = t.scrollTop = u),
            (t.deltaX = d - t.startX),
            (t.deltaY = u - t.startY),
            f > 0 && f < 100)
          ) {
            const y = (u - s) / f;
            (t.velocityX = ((d - i) / f) * 0.7 + 0.3 * t.velocityX),
              (t.velocityY = 0.7 * y + 0.3 * t.velocityY);
          }
        };
      _.style =
        ':host{--background:var(--ion-background-color, #fff);--color:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0 !important;padding:0 !important;font-family:var(--ion-font-family, inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50, #f2f2f2)}#background-content{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);position:absolute;background:var(--background)}.inner-scroll{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;-ms-touch-action:pan-x pan-y pinch-zoom;touch-action:pan-x pan-y pinch-zoom}.scroll-y,.scroll-x{-webkit-overflow-scrolling:touch;z-index:0;will-change:scroll-position}.scroll-y{overflow-y:var(--overflow);overscroll-behavior-y:contain}.scroll-x{overflow-x:var(--overflow);overscroll-behavior-x:contain}.overscroll::before,.overscroll::after{position:absolute;width:1px;height:1px;content:""}.overscroll::before{bottom:-1px}.overscroll::after{top:-1px}:host(.content-sizing){display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-height:0;contain:none}:host(.content-sizing) .inner-scroll{position:relative;top:0;bottom:0;margin-top:calc(var(--offset-top) * -1);margin-bottom:calc(var(--offset-bottom) * -1)}.transition-effect{display:none;position:absolute;width:100%;height:100vh;opacity:0;pointer-events:none}:host(.content-ltr) .transition-effect{left:-100%;}:host(.content-rtl) .transition-effect{right:-100%;}.transition-cover{position:absolute;right:0;width:100%;height:100%;background:black;opacity:0.1}.transition-shadow{display:block;position:absolute;width:100%;height:100%;-webkit-box-shadow:inset -9px 0 9px 0 rgba(0, 0, 100, 0.03);box-shadow:inset -9px 0 9px 0 rgba(0, 0, 100, 0.03)}:host(.content-ltr) .transition-shadow{right:0;}:host(.content-rtl) .transition-shadow{left:0;-webkit-transform:scaleX(-1);transform:scaleX(-1)}::slotted([slot=fixed]){position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0)}';
      const L = (t, o) => {
          (0, r.e)(() => {
            const d = (0, m.l)(
              0,
              1 - (t.scrollTop - (t.scrollHeight - t.clientHeight - 10)) / 10,
              1,
            );
            (0, r.w)(() => {
              o.style.setProperty("--opacity-scale", d.toString());
            });
          });
        },
        H = class {
          constructor(t) {
            var o = this;
            (0, r.r)(this, t),
              (this.keyboardCtrl = null),
              (this.checkCollapsibleFooter = () => {
                if ("ios" !== (0, c.b)(this)) return;
                const { collapse: n } = this,
                  i = "fade" === n;
                if ((this.destroyCollapsibleFooter(), i)) {
                  const s = this.el.closest(
                      "ion-app,ion-page,.ion-page,page-inner",
                    ),
                    l = s ? (0, b.a)(s) : null;
                  if (!l) return void (0, b.p)(this.el);
                  this.setupFadeFooter(l);
                }
              }),
              (this.setupFadeFooter = (function () {
                var e = (0, h.c)(function* (n) {
                  const i = (o.scrollEl = yield (0, b.g)(n));
                  (o.contentScrollCallback = () => {
                    L(i, o.el);
                  }),
                    i.addEventListener("scroll", o.contentScrollCallback),
                    L(i, o.el);
                });
                return function (n) {
                  return e.apply(this, arguments);
                };
              })()),
              (this.keyboardVisible = !1),
              (this.collapse = void 0),
              (this.translucent = !1);
          }
          componentDidLoad() {
            this.checkCollapsibleFooter();
          }
          componentDidUpdate() {
            this.checkCollapsibleFooter();
          }
          connectedCallback() {
            var t = this;
            return (0, h.c)(function* () {
              t.keyboardCtrl = yield (0, g.c)(
                (function () {
                  var o = (0, h.c)(function* (e, n) {
                    !1 === e && void 0 !== n && (yield n),
                      (t.keyboardVisible = e);
                  });
                  return function (e, n) {
                    return o.apply(this, arguments);
                  };
                })(),
              );
            })();
          }
          disconnectedCallback() {
            this.keyboardCtrl && this.keyboardCtrl.destroy();
          }
          destroyCollapsibleFooter() {
            this.scrollEl &&
              this.contentScrollCallback &&
              (this.scrollEl.removeEventListener(
                "scroll",
                this.contentScrollCallback,
              ),
              (this.contentScrollCallback = void 0));
          }
          render() {
            const { translucent: t, collapse: o } = this,
              e = (0, c.b)(this),
              n = this.el.closest("ion-tabs"),
              i = n?.querySelector(":scope > ion-tab-bar");
            return (0, r.h)(
              r.H,
              {
                key: "550b8b8fb614e541e1d369fc1ac5ba1f083913b4",
                role: "contentinfo",
                class: {
                  [e]: !0,
                  [`footer-${e}`]: !0,
                  "footer-translucent": t,
                  [`footer-translucent-${e}`]: t,
                  "footer-toolbar-padding": !(
                    this.keyboardVisible ||
                    (i && "bottom" === i.slot)
                  ),
                  [`footer-collapse-${o}`]: void 0 !== o,
                },
              },
              "ios" === e &&
                t &&
                (0, r.h)("div", { class: "footer-background" }),
              (0, r.h)("slot", {
                key: "d25187ecc2ce7848ba882af078cb634e9d5e8814",
              }),
            );
          }
          get el() {
            return (0, r.f)(this);
          }
        };
      H.style = {
        ios: "ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer.footer-toolbar-padding ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom, 0)}.footer-ios ion-toolbar:first-of-type{--border-width:0.55px 0 0}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.footer-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.footer-translucent-ios ion-toolbar{--opacity:.8}}.footer-ios.ion-no-border ion-toolbar:first-of-type{--border-width:0}.footer-collapse-fade ion-toolbar{--opacity-scale:inherit}",
        md: "ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer.footer-toolbar-padding ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom, 0)}.footer-md{-webkit-box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)}.footer-md.ion-no-border{-webkit-box-shadow:none;box-shadow:none}",
      };
      const A = (t) => {
          const o = document.querySelector(`${t}.ion-cloned-element`);
          if (null !== o) return o;
          const e = document.createElement(t);
          return (
            e.classList.add("ion-cloned-element"),
            e.style.setProperty("display", "none"),
            document.body.appendChild(e),
            e
          );
        },
        R = (t) => {
          if (!t) return;
          const o = t.querySelectorAll("ion-toolbar");
          return {
            el: t,
            toolbars: Array.from(o).map((e) => {
              const n = e.querySelector("ion-title");
              return {
                el: e,
                background: e.shadowRoot.querySelector(".toolbar-background"),
                ionTitleEl: n,
                innerTitleEl: n
                  ? n.shadowRoot.querySelector(".toolbar-title")
                  : null,
                ionButtonsEl: Array.from(e.querySelectorAll("ion-buttons")),
              };
            }),
          };
        },
        P = (t, o) => {
          "fade" !== t.collapse &&
            (void 0 === o
              ? t.style.removeProperty("--opacity-scale")
              : t.style.setProperty("--opacity-scale", o.toString()));
        },
        E = (t, o = !0) => {
          const e = t.el;
          o
            ? (e.classList.remove("header-collapse-condense-inactive"),
              e.removeAttribute("aria-hidden"))
            : (e.classList.add("header-collapse-condense-inactive"),
              e.setAttribute("aria-hidden", "true"));
        },
        W = (t, o, e) => {
          (0, r.e)(() => {
            const n = t.scrollTop,
              i = o.clientHeight,
              s = e ? e.clientHeight : 0;
            if (null !== e && n < s)
              return (
                o.style.setProperty("--opacity-scale", "0"),
                void t.style.setProperty(
                  "clip-path",
                  `inset(${i}px 0px 0px 0px)`,
                )
              );
            const u = (0, m.l)(0, (n - s) / 10, 1);
            (0, r.w)(() => {
              t.style.removeProperty("clip-path"),
                o.style.setProperty("--opacity-scale", u.toString());
            });
          });
        },
        j = class {
          constructor(t) {
            var o = this;
            (0, r.r)(this, t),
              (this.inheritedAttributes = {}),
              (this.setupFadeHeader = (function () {
                var e = (0, h.c)(function* (n, i) {
                  const s = (o.scrollEl = yield (0, b.g)(n));
                  (o.contentScrollCallback = () => {
                    W(o.scrollEl, o.el, i);
                  }),
                    s.addEventListener("scroll", o.contentScrollCallback),
                    W(o.scrollEl, o.el, i);
                });
                return function (n, i) {
                  return e.apply(this, arguments);
                };
              })()),
              (this.collapse = void 0),
              (this.translucent = !1);
          }
          componentWillLoad() {
            this.inheritedAttributes = (0, m.i)(this.el);
          }
          componentDidLoad() {
            this.checkCollapsibleHeader();
          }
          componentDidUpdate() {
            this.checkCollapsibleHeader();
          }
          disconnectedCallback() {
            this.destroyCollapsibleHeader();
          }
          checkCollapsibleHeader() {
            var t = this;
            return (0, h.c)(function* () {
              if ("ios" !== (0, c.b)(t)) return;
              const { collapse: e } = t,
                n = "condense" === e,
                i = "fade" === e;
              if ((t.destroyCollapsibleHeader(), n)) {
                const s = t.el.closest("ion-app,ion-page,.ion-page,page-inner"),
                  l = s ? (0, b.a)(s) : null;
                (0, r.w)(() => {
                  (A("ion-title").size = "large"), A("ion-back-button");
                }),
                  yield t.setupCondenseHeader(l, s);
              } else if (i) {
                const s = t.el.closest("ion-app,ion-page,.ion-page,page-inner"),
                  l = s ? (0, b.a)(s) : null;
                if (!l) return void (0, b.p)(t.el);
                const d = l.querySelector('ion-header[collapse="condense"]');
                yield t.setupFadeHeader(l, d);
              }
            })();
          }
          destroyCollapsibleHeader() {
            this.intersectionObserver &&
              (this.intersectionObserver.disconnect(),
              (this.intersectionObserver = void 0)),
              this.scrollEl &&
                this.contentScrollCallback &&
                (this.scrollEl.removeEventListener(
                  "scroll",
                  this.contentScrollCallback,
                ),
                (this.contentScrollCallback = void 0)),
              this.collapsibleMainHeader &&
                (this.collapsibleMainHeader.classList.remove(
                  "header-collapse-main",
                ),
                (this.collapsibleMainHeader = void 0));
          }
          setupCondenseHeader(t, o) {
            var e = this;
            return (0, h.c)(function* () {
              if (!t || !o) return void (0, b.p)(e.el);
              if (typeof IntersectionObserver > "u") return;
              e.scrollEl = yield (0, b.g)(t);
              const n = o.querySelectorAll("ion-header");
              if (
                ((e.collapsibleMainHeader = Array.from(n).find(
                  (d) => "condense" !== d.collapse,
                )),
                !e.collapsibleMainHeader)
              )
                return;
              const i = R(e.collapsibleMainHeader),
                s = R(e.el);
              i &&
                s &&
                (E(i, !1),
                P(i.el, 0),
                (e.intersectionObserver = new IntersectionObserver(
                  (d) => {
                    ((t, o, e, n) => {
                      (0, r.w)(() => {
                        const i = n.scrollTop;
                        ((t, o, e) => {
                          if (!t[0].isIntersecting) return;
                          const n =
                            t[0].intersectionRatio > 0.9 || e <= 0
                              ? 0
                              : (100 * (1 - t[0].intersectionRatio)) / 75;
                          P(o.el, 1 === n ? void 0 : n);
                        })(t, o, i);
                        const s = t[0],
                          l = s.intersectionRect,
                          d = l.width * l.height,
                          f =
                            0 === d &&
                            0 == s.rootBounds.width * s.rootBounds.height,
                          x = Math.abs(l.left - s.boundingClientRect.left),
                          y = Math.abs(l.right - s.boundingClientRect.right);
                        f ||
                          (d > 0 && (x >= 5 || y >= 5)) ||
                          (s.isIntersecting
                            ? (E(o, !1), E(e))
                            : ((0 === l.x && 0 === l.y) ||
                                (0 !== l.width && 0 !== l.height)) &&
                              i > 0 &&
                              (E(o), E(e, !1), P(o.el)));
                      });
                    })(d, i, s, e.scrollEl);
                  },
                  {
                    root: t,
                    threshold: [0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
                  },
                )),
                e.intersectionObserver.observe(
                  s.toolbars[s.toolbars.length - 1].el,
                ),
                (e.contentScrollCallback = () => {
                  ((t, o, e) => {
                    (0, r.e)(() => {
                      const i = (0, m.l)(1, 1 + -t.scrollTop / 500, 1.1);
                      null ===
                        e.querySelector("ion-refresher.refresher-native") &&
                        (0, r.w)(() => {
                          ((t = [], o = 1, e = !1) => {
                            t.forEach((n) => {
                              const i = n.ionTitleEl,
                                s = n.innerTitleEl;
                              !i ||
                                "large" !== i.size ||
                                ((s.style.transition = e
                                  ? "all 0.2s ease-in-out"
                                  : ""),
                                (s.style.transform = `scale3d(${o}, ${o}, 1)`));
                            });
                          })(o.toolbars, i);
                        });
                    });
                  })(e.scrollEl, s, t);
                }),
                e.scrollEl.addEventListener("scroll", e.contentScrollCallback),
                (0, r.w)(() => {
                  void 0 !== e.collapsibleMainHeader &&
                    e.collapsibleMainHeader.classList.add(
                      "header-collapse-main",
                    );
                }));
            })();
          }
          render() {
            const { translucent: t, inheritedAttributes: o } = this,
              e = (0, c.b)(this),
              n = this.collapse || "none",
              i = (0, p.h)("ion-menu", this.el) ? "none" : "banner";
            return (0, r.h)(
              r.H,
              Object.assign(
                {
                  key: "a33e7e1818cb4718ae36b8bcfa811c4138b85fac",
                  role: i,
                  class: {
                    [e]: !0,
                    [`header-${e}`]: !0,
                    "header-translucent": this.translucent,
                    [`header-collapse-${n}`]: !0,
                    [`header-translucent-${e}`]: this.translucent,
                  },
                },
                o,
              ),
              "ios" === e &&
                t &&
                (0, r.h)("div", { class: "header-background" }),
              (0, r.h)("slot", {
                key: "7e2fa75034f7422a3dc5691e9b3c25393e16c0ca",
              }),
            );
          }
          get el() {
            return (0, r.f)(this);
          }
        };
      j.style = {
        ios: "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-ios ion-toolbar:last-of-type{--border-width:0 0 0.55px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.header-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8}.header-collapse-condense-inactive .header-background{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px)}}.header-ios.ion-no-border ion-toolbar:last-of-type{--border-width:0}.header-collapse-fade ion-toolbar{--opacity-scale:inherit}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:-webkit-sticky;position:sticky;top:0}.header-collapse-condense ion-toolbar:first-of-type{padding-top:0px;z-index:1}.header-collapse-condense ion-toolbar{--background:var(--ion-background-color, #fff);z-index:0}.header-collapse-condense ion-toolbar:last-of-type{--border-width:0px}.header-collapse-condense ion-toolbar ion-searchbar{padding-top:0px;padding-bottom:13px}.header-collapse-main{--opacity-scale:1}.header-collapse-main ion-toolbar{--opacity-scale:inherit}.header-collapse-main ion-toolbar.in-toolbar ion-title,.header-collapse-main ion-toolbar.in-toolbar ion-buttons{-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out}.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-buttons.buttons-collapse{opacity:0;pointer-events:none}.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-buttons.buttons-collapse{visibility:hidden}ion-header:not(.header-collapse-main):has(~ion-content ion-header[collapse=condense],~ion-content ion-header.header-collapse-condense){opacity:0}",
        md: "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-md{-webkit-box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)}.header-collapse-condense{display:none}.header-md.ion-no-border{-webkit-box-shadow:none;box-shadow:none}",
      };
      const F = class {
        constructor(t) {
          (0, r.r)(this, t),
            (this.ionNavWillLoad = (0, r.d)(this, "ionNavWillLoad", 7)),
            (this.ionNavWillChange = (0, r.d)(this, "ionNavWillChange", 3)),
            (this.ionNavDidChange = (0, r.d)(this, "ionNavDidChange", 3)),
            (this.lockController = (0, C.c)()),
            (this.gestureOrAnimationInProgress = !1),
            (this.mode = (0, c.b)(this)),
            (this.delegate = void 0),
            (this.animated = !0),
            (this.animation = void 0),
            (this.swipeHandler = void 0);
        }
        swipeHandlerChanged() {
          this.gesture && this.gesture.enable(void 0 !== this.swipeHandler);
        }
        connectedCallback() {
          var t = this;
          return (0, h.c)(function* () {
            (t.gesture = (yield a
              .e(9312)
              .then(a.bind(a, 4568))).createSwipeBackGesture(
              t.el,
              () =>
                !t.gestureOrAnimationInProgress &&
                !!t.swipeHandler &&
                t.swipeHandler.canStart(),
              () => (
                (t.gestureOrAnimationInProgress = !0),
                void (t.swipeHandler && t.swipeHandler.onStart())
              ),
              (e) => {
                var n;
                return null === (n = t.ani) || void 0 === n
                  ? void 0
                  : n.progressStep(e);
              },
              (e, n, i) => {
                if (t.ani) {
                  t.ani.onFinish(
                    () => {
                      (t.gestureOrAnimationInProgress = !1),
                        t.swipeHandler && t.swipeHandler.onEnd(e);
                    },
                    { oneTimeCallback: !0 },
                  );
                  let s = e ? -0.001 : 0.001;
                  e
                    ? (s += (0, k.g)(
                        [0, 0],
                        [0.32, 0.72],
                        [0, 1],
                        [1, 1],
                        n,
                      )[0])
                    : (t.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)"),
                      (s += (0, k.g)(
                        [0, 0],
                        [1, 0],
                        [0.68, 0.28],
                        [1, 1],
                        n,
                      )[0])),
                    t.ani.progressEnd(e ? 1 : 0, s, i);
                } else t.gestureOrAnimationInProgress = !1;
              },
            )),
              t.swipeHandlerChanged();
          })();
        }
        componentWillLoad() {
          this.ionNavWillLoad.emit();
        }
        disconnectedCallback() {
          this.gesture && (this.gesture.destroy(), (this.gesture = void 0));
        }
        commit(t, o, e) {
          var n = this;
          return (0, h.c)(function* () {
            const i = yield n.lockController.lock();
            let s = !1;
            try {
              s = yield n.transition(t, o, e);
            } catch (l) {
              console.error(l);
            }
            return i(), s;
          })();
        }
        setRouteId(t, o, e, n) {
          var i = this;
          return (0, h.c)(function* () {
            return {
              changed: yield i.setRoot(t, o, {
                duration: "root" === e ? 0 : void 0,
                direction: "back" === e ? "back" : "forward",
                animationBuilder: n,
              }),
              element: i.activeEl,
            };
          })();
        }
        getRouteId() {
          var t = this;
          return (0, h.c)(function* () {
            const o = t.activeEl;
            return o
              ? { id: o.tagName, element: o, params: t.activeParams }
              : void 0;
          })();
        }
        setRoot(t, o, e) {
          var n = this;
          return (0, h.c)(function* () {
            if (n.activeComponent === t && (0, m.s)(o, n.activeParams))
              return !1;
            const i = n.activeEl,
              s = yield (0, w.a)(
                n.delegate,
                n.el,
                t,
                ["ion-page", "ion-page-invisible"],
                o,
              );
            return (
              (n.activeComponent = t),
              (n.activeEl = s),
              (n.activeParams = o),
              yield n.commit(s, i, e),
              yield (0, w.d)(n.delegate, i),
              !0
            );
          })();
        }
        transition(t, o, e = {}) {
          var n = this;
          return (0, h.c)(function* () {
            if (o === t) return !1;
            n.ionNavWillChange.emit();
            const { el: i, mode: s } = n,
              l = n.animated && c.c.getBoolean("animated", !0),
              d = e.animationBuilder || n.animation || c.c.get("navAnimation");
            return (
              yield (0, Y.t)(
                Object.assign(
                  Object.assign(
                    {
                      mode: s,
                      animated: l,
                      enteringEl: t,
                      leavingEl: o,
                      baseEl: i,
                      deepWait: (0, m.m)(i),
                      progressCallback: e.progressAnimation
                        ? (u) => {
                            void 0 === u || n.gestureOrAnimationInProgress
                              ? (n.ani = u)
                              : ((n.gestureOrAnimationInProgress = !0),
                                u.onFinish(
                                  () => {
                                    (n.gestureOrAnimationInProgress = !1),
                                      n.swipeHandler &&
                                        n.swipeHandler.onEnd(!1);
                                  },
                                  { oneTimeCallback: !0 },
                                ),
                                u.progressEnd(0, 0, 0));
                          }
                        : void 0,
                    },
                    e,
                  ),
                  { animationBuilder: d },
                ),
              ),
              n.ionNavDidChange.emit(),
              !0
            );
          })();
        }
        render() {
          return (0, r.h)("slot", {
            key: "69b452a0dc0c10440bdd8700cf4843c43154c707",
          });
        }
        get el() {
          return (0, r.f)(this);
        }
        static get watchers() {
          return { swipeHandler: ["swipeHandlerChanged"] };
        }
      };
      F.style =
        ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}";
      const U = class {
        constructor(t) {
          (0, r.r)(this, t),
            (this.ionStyle = (0, r.d)(this, "ionStyle", 7)),
            (this.color = void 0),
            (this.size = void 0);
        }
        sizeChanged() {
          this.emitStyle();
        }
        connectedCallback() {
          this.emitStyle();
        }
        emitStyle() {
          const t = this.getSize();
          this.ionStyle.emit({ [`title-${t}`]: !0 });
        }
        getSize() {
          return void 0 !== this.size ? this.size : "default";
        }
        render() {
          const t = (0, c.b)(this),
            o = this.getSize();
          return (0, r.h)(
            r.H,
            {
              key: "b68a272a33ec81d282629a569676f64d3215a0c7",
              class: (0, p.c)(this.color, {
                [t]: !0,
                [`title-${o}`]: !0,
                "title-rtl": "rtl" === document.dir,
              }),
            },
            (0, r.h)(
              "div",
              {
                key: "9069816a14e6e358695c5bd465787cf297c761bc",
                class: "toolbar-title",
              },
              (0, r.h)("slot", {
                key: "8894bd04f2292b54050ee864abb5396deadf9874",
              }),
            ),
          );
        }
        get el() {
          return (0, r.f)(this);
        }
        static get watchers() {
          return { size: ["sizeChanged"] };
        }
      };
      U.style = {
        ios: ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{top:0;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:min(1.0625rem, 20.4px);font-weight:600;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}@supports (inset-inline-start: 0){:host{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host{left:0}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(:dir(rtl)){left:unset;right:unset;right:0}}}:host(.title-small){-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px;padding-top:6px;padding-bottom:16px;position:relative;font-size:min(0.8125rem, 23.4px);font-weight:normal}:host(.title-large){-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:2px;padding-bottom:4px;-webkit-transform-origin:left center;transform-origin:left center;position:static;-ms-flex-align:end;align-items:flex-end;min-width:100%;font-size:min(2.125rem, 61.2px);font-weight:700;text-align:start}:host(.title-large.title-rtl){-webkit-transform-origin:right center;transform-origin:right center}:host(.title-large.ion-cloned-element){--color:var(--ion-text-color, #000);font-family:var(--ion-font-family)}:host(.title-large) .toolbar-title{-webkit-transform-origin:inherit;transform-origin:inherit;width:auto}:host-context([dir=rtl]):host(.title-large) .toolbar-title,:host-context([dir=rtl]).title-large .toolbar-title{-webkit-transform-origin:calc(100% - inherit);transform-origin:calc(100% - inherit)}@supports selector(:dir(rtl)){:host(.title-large:dir(rtl)) .toolbar-title{-webkit-transform-origin:calc(100% - inherit);transform-origin:calc(100% - inherit)}}",
        md: ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:0;padding-bottom:0;font-size:1.25rem;font-weight:500;letter-spacing:0.0125em}:host(.title-small){width:100%;height:100%;font-size:0.9375rem;font-weight:normal}",
      };
      const X = class {
        constructor(t) {
          (0, r.r)(this, t),
            (this.childrenStyles = new Map()),
            (this.color = void 0);
        }
        componentWillLoad() {
          const t = Array.from(this.el.querySelectorAll("ion-buttons")),
            o = t.find((i) => "start" === i.slot);
          o && o.classList.add("buttons-first-slot");
          const e = t.reverse(),
            n =
              e.find((i) => "end" === i.slot) ||
              e.find((i) => "primary" === i.slot) ||
              e.find((i) => "secondary" === i.slot);
          n && n.classList.add("buttons-last-slot");
        }
        childrenStyle(t) {
          t.stopPropagation();
          const o = t.target.tagName,
            e = t.detail,
            n = {},
            i = this.childrenStyles.get(o) || {};
          let s = !1;
          Object.keys(e).forEach((l) => {
            const d = `toolbar-${l}`,
              u = e[l];
            u !== i[d] && (s = !0), u && (n[d] = !0);
          }),
            s && (this.childrenStyles.set(o, n), (0, r.i)(this));
        }
        render() {
          const t = (0, c.b)(this),
            o = {};
          return (
            this.childrenStyles.forEach((e) => {
              Object.assign(o, e);
            }),
            (0, r.h)(
              r.H,
              {
                key: "afac0f08f3981483c072984ce047df5dc9cc1e99",
                class: Object.assign(
                  Object.assign({}, o),
                  (0, p.c)(this.color, {
                    [t]: !0,
                    "in-toolbar": (0, p.h)("ion-toolbar", this.el),
                  }),
                ),
              },
              (0, r.h)("div", {
                key: "30d4f1d0ec01cc646398301b5f7d469391eb35d2",
                class: "toolbar-background",
              }),
              (0, r.h)(
                "div",
                {
                  key: "175d1f283e670b57a9bf8fd2a8c5e7d0da749aa8",
                  class: "toolbar-container",
                },
                (0, r.h)("slot", {
                  key: "4853b18092737b32b5995457536fa5a7fc2816ef",
                  name: "start",
                }),
                (0, r.h)("slot", {
                  key: "6eb4921200aad02d7977d134edad6cff2aad91ad",
                  name: "secondary",
                }),
                (0, r.h)(
                  "div",
                  {
                    key: "024e0339c74c4b9a886d49e96723243719643dc2",
                    class: "toolbar-content",
                  },
                  (0, r.h)("slot", {
                    key: "b6452c84692fedd6efe33ac67907d01253b76f8f",
                  }),
                ),
                (0, r.h)("slot", {
                  key: "636e56eeaa318ce45a9c3854a30b8eb2819a33e0",
                  name: "primary",
                }),
                (0, r.h)("slot", {
                  key: "a45c19b93dca3719d75bd4d99acc49de87137a7d",
                  name: "end",
                }),
              ),
            )
          );
        }
        get el() {
          return (0, r.f)(this);
        }
      };
      X.style = {
        ios: ":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;width:100%;padding-right:var(--ion-safe-area-right);padding-left:var(--ion-safe-area-left);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-color-step-50, #f7f7f7));--color:var(--ion-toolbar-color, var(--ion-text-color, #000));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--padding-top:3px;--padding-bottom:3px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:4;order:4;min-width:0}:host(.toolbar-segment) .toolbar-content{display:-ms-inline-flexbox;display:inline-flex}:host(.toolbar-searchbar) .toolbar-container{padding-top:0;padding-bottom:0}:host(.toolbar-searchbar) ::slotted(*){-ms-flex-item-align:start;align-self:start}:host(.toolbar-searchbar) ::slotted(ion-chip){margin-top:3px}::slotted(ion-buttons){min-height:38px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:3;order:3}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}:host(.toolbar-title-large) .toolbar-container{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host(.toolbar-title-large) .toolbar-content ion-title{-ms-flex:1;flex:1;-ms-flex-order:8;order:8;min-width:100%}",
        md: ":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;width:100%;padding-right:var(--ion-safe-area-right);padding-left:var(--ion-safe-area-left);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-background-color, #fff));--color:var(--ion-toolbar-color, var(--ion-text-color, #424242));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, #c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(.buttons-first-slot){-webkit-margin-start:4px;margin-inline-start:4px}::slotted(.buttons-last-slot){-webkit-margin-end:4px;margin-inline-end:4px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}",
      };
    },
    5256: (K, S, a) => {
      a.d(S, { c: () => T, g: () => c, h: () => r, o: () => M });
      var h = a(1528);
      const r = (p, b) => null !== b.closest(p),
        T = (p, b) =>
          "string" == typeof p && p.length > 0
            ? Object.assign({ "ion-color": !0, [`ion-color-${p}`]: !0 }, b)
            : b,
        c = (p) => {
          const b = {};
          return (
            ((p) =>
              void 0 !== p
                ? (Array.isArray(p) ? p : p.split(" "))
                    .filter((g) => null != g)
                    .map((g) => g.trim())
                    .filter((g) => "" !== g)
                : [])(p).forEach((g) => (b[g] = !0)),
            b
          );
        },
        m = /^[a-z][a-z0-9+\-.]*:/,
        M = (function () {
          var p = (0, h.c)(function* (b, g, k, w) {
            if (null != b && "#" !== b[0] && !m.test(b)) {
              const C = document.querySelector("ion-router");
              if (C) return g?.preventDefault(), C.push(b, k, w);
            }
            return !1;
          });
          return function (g, k, w, C) {
            return p.apply(this, arguments);
          };
        })();
    },
  },
]);
