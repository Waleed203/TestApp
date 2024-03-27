"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [8048],
  {
    8048: (ve, R, y) => {
      y.r(R),
        y.d(R, {
          ion_datetime: () => H,
          ion_picker: () => U,
          ion_picker_column: () => N,
        });
      var P = y(1528),
        o = y(2992),
        Z = y(704),
        A = y(6384),
        M = y(2032),
        W = y(7716),
        L = y(5256),
        _ = y(4812),
        E = y(8523),
        r = y(1136),
        ee = y(3464),
        w = y(3816),
        I = y(388),
        F = y(5988);
      y(4829), y(2784), y(1008);
      const Y = (e, i, t, n) =>
          !!(
            null === e.day ||
            (void 0 !== n && !n.includes(e.day)) ||
            (i && (0, r.i)(e, i)) ||
            (t && (0, r.b)(e, t))
          ),
        z = (e, { minParts: i, maxParts: t }) =>
          !!(
            ((e, i, t) => !!((i && i.year > e) || (t && t.year < e)))(
              e.year,
              i,
              t,
            ) ||
            (i && (0, r.i)(e, i)) ||
            (t && (0, r.b)(e, t))
          ),
        H = class {
          constructor(e) {
            var i = this;
            (0, o.r)(this, e),
              (this.ionCancel = (0, o.d)(this, "ionCancel", 7)),
              (this.ionChange = (0, o.d)(this, "ionChange", 7)),
              (this.ionValueChange = (0, o.d)(this, "ionValueChange", 7)),
              (this.ionFocus = (0, o.d)(this, "ionFocus", 7)),
              (this.ionBlur = (0, o.d)(this, "ionBlur", 7)),
              (this.ionStyle = (0, o.d)(this, "ionStyle", 7)),
              (this.ionRender = (0, o.d)(this, "ionRender", 7)),
              (this.inputId = "ion-dt-" + de++),
              (this.prevPresentation = null),
              (this.warnIfIncorrectValueUsage = () => {
                const { multiple: t, value: n } = this;
                !t &&
                  Array.isArray(n) &&
                  (0, M.p)(
                    `ion-datetime was passed an array of values, but multiple="false". This is incorrect usage and may result in unexpected behaviors. To dismiss this warning, pass a string to the "value" property when multiple="false".\n\n  Value Passed: [${n.map((a) => `'${a}'`).join(", ")}]\n`,
                    this.el,
                  );
              }),
              (this.setValue = (t) => {
                (this.value = t), this.ionChange.emit({ value: t });
              }),
              (this.getActivePartsWithFallback = () => {
                var t;
                const { defaultParts: n } = this;
                return null !== (t = this.getActivePart()) && void 0 !== t
                  ? t
                  : n;
              }),
              (this.getActivePart = () => {
                const { activeParts: t } = this;
                return Array.isArray(t) ? t[0] : t;
              }),
              (this.closeParentOverlay = () => {
                const t = this.el.closest("ion-modal, ion-popover");
                t && t.dismiss();
              }),
              (this.setWorkingParts = (t) => {
                this.workingParts = Object.assign({}, t);
              }),
              (this.setActiveParts = (t, n = !1) => {
                if (this.readonly) return;
                const {
                    multiple: a,
                    minParts: s,
                    maxParts: l,
                    activeParts: d,
                  } = this,
                  c = (0, r.v)(t, s, l);
                if ((this.setWorkingParts(c), a)) {
                  const p = Array.isArray(d) ? d : [d];
                  this.activeParts = n
                    ? p.filter((f) => !(0, r.c)(f, c))
                    : [...p, c];
                } else this.activeParts = Object.assign({}, c);
                null !== this.el.querySelector('[slot="buttons"]') ||
                  this.showDefaultButtons ||
                  this.confirm();
              }),
              (this.initializeKeyboardListeners = () => {
                const t = this.calendarBodyRef;
                if (!t) return;
                const n = this.el.shadowRoot,
                  a = t.querySelector(".calendar-month:nth-of-type(2)"),
                  l = new MutationObserver((d) => {
                    var c;
                    (null !== (c = d[0].oldValue) &&
                      void 0 !== c &&
                      c.includes("ion-focused")) ||
                      !t.classList.contains("ion-focused") ||
                      this.focusWorkingDay(a);
                  });
                l.observe(t, {
                  attributeFilter: ["class"],
                  attributeOldValue: !0,
                }),
                  (this.destroyKeyboardMO = () => {
                    l?.disconnect();
                  }),
                  t.addEventListener("keydown", (d) => {
                    const c = n.activeElement;
                    if (!c || !c.classList.contains("calendar-day")) return;
                    const h = (0, r.f)(c);
                    let p;
                    switch (d.key) {
                      case "ArrowDown":
                        d.preventDefault(), (p = (0, r.p)(h));
                        break;
                      case "ArrowUp":
                        d.preventDefault(), (p = (0, r.o)(h));
                        break;
                      case "ArrowRight":
                        d.preventDefault(), (p = (0, r.n)(h));
                        break;
                      case "ArrowLeft":
                        d.preventDefault(), (p = (0, r.m)(h));
                        break;
                      case "Home":
                        d.preventDefault(), (p = (0, r.l)(h));
                        break;
                      case "End":
                        d.preventDefault(), (p = (0, r.k)(h));
                        break;
                      case "PageUp":
                        d.preventDefault(),
                          (p = d.shiftKey ? (0, r.j)(h) : (0, r.d)(h));
                        break;
                      case "PageDown":
                        d.preventDefault(),
                          (p = d.shiftKey ? (0, r.h)(h) : (0, r.e)(h));
                        break;
                      default:
                        return;
                    }
                    Y(p, this.minParts, this.maxParts) ||
                      (this.setWorkingParts(
                        Object.assign(Object.assign({}, this.workingParts), p),
                      ),
                      requestAnimationFrame(() => this.focusWorkingDay(a)));
                  });
              }),
              (this.focusWorkingDay = (t) => {
                const n = t.querySelectorAll(".calendar-day-padding"),
                  { day: a } = this.workingParts;
                if (null === a) return;
                const s = t.querySelector(
                  `.calendar-day-wrapper:nth-of-type(${n.length + a}) .calendar-day`,
                );
                s && s.focus();
              }),
              (this.processMinParts = () => {
                const { min: t, defaultParts: n } = this;
                this.minParts = void 0 !== t ? (0, r.q)(t, n) : void 0;
              }),
              (this.processMaxParts = () => {
                const { max: t, defaultParts: n } = this;
                this.maxParts = void 0 !== t ? (0, r.r)(t, n) : void 0;
              }),
              (this.initializeCalendarListener = () => {
                const t = this.calendarBodyRef;
                if (!t) return;
                const n = t.querySelectorAll(".calendar-month"),
                  a = n[0],
                  s = n[1],
                  l = n[2],
                  c =
                    "ios" === (0, E.b)(this) &&
                    typeof navigator < "u" &&
                    navigator.maxTouchPoints > 1;
                (0, o.w)(() => {
                  t.scrollLeft = a.clientWidth * ((0, W.i)(this.el) ? -1 : 1);
                  const h = (u) => {
                      const x = t.getBoundingClientRect(),
                        b = t.scrollLeft <= 2 ? a : l,
                        k = b.getBoundingClientRect();
                      if (Math.abs(k.x - x.x) > 2) return;
                      const { forceRenderDate: v } = this;
                      return void 0 !== v
                        ? { month: v.month, year: v.year, day: v.day }
                        : b === a
                          ? (0, r.d)(u)
                          : b === l
                            ? (0, r.e)(u)
                            : void 0;
                    },
                    p = () => {
                      c && (t.style.removeProperty("pointer-events"), (g = !1));
                      const u = h(this.workingParts);
                      if (!u) return;
                      const { month: x, day: b, year: k } = u;
                      z(
                        { month: x, year: k, day: null },
                        {
                          minParts: Object.assign(
                            Object.assign({}, this.minParts),
                            { day: null },
                          ),
                          maxParts: Object.assign(
                            Object.assign({}, this.maxParts),
                            { day: null },
                          ),
                        },
                      ) ||
                        (t.style.setProperty("overflow", "hidden"),
                        (0, o.w)(() => {
                          this.setWorkingParts(
                            Object.assign(
                              Object.assign({}, this.workingParts),
                              { month: x, day: b, year: k },
                            ),
                          ),
                            (t.scrollLeft =
                              s.clientWidth * ((0, W.i)(this.el) ? -1 : 1)),
                            t.style.removeProperty("overflow"),
                            this.resolveForceDateScrolling &&
                              this.resolveForceDateScrolling();
                        }));
                    };
                  let f,
                    g = !1;
                  const m = () => {
                    f && clearTimeout(f),
                      !g &&
                        c &&
                        (t.style.setProperty("pointer-events", "none"),
                        (g = !0)),
                      (f = setTimeout(p, 50));
                  };
                  t.addEventListener("scroll", m),
                    (this.destroyCalendarListener = () => {
                      t.removeEventListener("scroll", m);
                    });
                });
              }),
              (this.destroyInteractionListeners = () => {
                const { destroyCalendarListener: t, destroyKeyboardMO: n } =
                  this;
                void 0 !== t && t(), void 0 !== n && n();
              }),
              (this.processValue = (t) => {
                const n = null != t && (!Array.isArray(t) || t.length > 0),
                  a = n ? (0, r.s)(t) : this.defaultParts,
                  { minParts: s, maxParts: l, workingParts: d, el: c } = this;
                if ((this.warnIfIncorrectValueUsage(), !a)) return;
                n && (0, r.w)(a, s, l);
                const h = Array.isArray(a) ? a[0] : a,
                  p = (0, r.P)(h, s, l),
                  { month: f, day: g, year: m, hour: u, minute: x } = p,
                  b = (0, r.Q)(u);
                this.activeParts = n
                  ? Array.isArray(a)
                    ? [...a]
                    : { month: f, day: g, year: m, hour: u, minute: x, ampm: b }
                  : [];
                const k =
                    (void 0 !== f && f !== d.month) ||
                    (void 0 !== m && m !== d.year),
                  v = c.classList.contains("datetime-ready"),
                  { isGridStyle: O, showMonthAndYear: C } = this;
                let D = !0;
                if (Array.isArray(a)) {
                  const j = a[0].month;
                  for (const B of a)
                    if (B.month !== j) {
                      D = !1;
                      break;
                    }
                }
                D &&
                  (O && k && v && !C
                    ? this.animateToDate(p)
                    : this.setWorkingParts({
                        month: f,
                        day: g,
                        year: m,
                        hour: u,
                        minute: x,
                        ampm: b,
                      }));
              }),
              (this.animateToDate = (function () {
                var t = (0, P.c)(function* (n) {
                  const { workingParts: a } = i;
                  i.forceRenderDate = n;
                  const s = new Promise((d) => {
                    i.resolveForceDateScrolling = d;
                  });
                  (0, r.i)(n, a) ? i.prevMonth() : i.nextMonth(),
                    yield s,
                    (i.resolveForceDateScrolling = void 0),
                    (i.forceRenderDate = void 0);
                });
                return function (n) {
                  return t.apply(this, arguments);
                };
              })()),
              (this.onFocus = () => {
                this.ionFocus.emit();
              }),
              (this.onBlur = () => {
                this.ionBlur.emit();
              }),
              (this.hasValue = () => null != this.value),
              (this.nextMonth = () => {
                const t = this.calendarBodyRef;
                if (!t) return;
                const n = t.querySelector(".calendar-month:last-of-type");
                n &&
                  t.scrollTo({
                    top: 0,
                    left: 2 * n.offsetWidth * ((0, W.i)(this.el) ? -1 : 1),
                    behavior: "smooth",
                  });
              }),
              (this.prevMonth = () => {
                const t = this.calendarBodyRef;
                !t ||
                  !t.querySelector(".calendar-month:first-of-type") ||
                  t.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }),
              (this.toggleMonthAndYearView = () => {
                this.showMonthAndYear = !this.showMonthAndYear;
              }),
              (this.showMonthAndYear = !1),
              (this.activeParts = []),
              (this.workingParts = {
                month: 5,
                day: 28,
                year: 2021,
                hour: 13,
                minute: 52,
                ampm: "pm",
              }),
              (this.isTimePopoverOpen = !1),
              (this.forceRenderDate = void 0),
              (this.color = "primary"),
              (this.name = this.inputId),
              (this.disabled = !1),
              (this.readonly = !1),
              (this.isDateEnabled = void 0),
              (this.min = void 0),
              (this.max = void 0),
              (this.presentation = "date-time"),
              (this.cancelText = "Cancel"),
              (this.doneText = "Done"),
              (this.clearText = "Clear"),
              (this.yearValues = void 0),
              (this.monthValues = void 0),
              (this.dayValues = void 0),
              (this.hourValues = void 0),
              (this.minuteValues = void 0),
              (this.locale = "default"),
              (this.firstDayOfWeek = 0),
              (this.titleSelectedDatesFormatter = void 0),
              (this.multiple = !1),
              (this.highlightedDates = void 0),
              (this.value = void 0),
              (this.showDefaultTitle = !1),
              (this.showDefaultButtons = !1),
              (this.showClearButton = !1),
              (this.showDefaultTimeLabel = !0),
              (this.hourCycle = void 0),
              (this.size = "fixed"),
              (this.preferWheel = !1);
          }
          disabledChanged() {
            this.emitStyle();
          }
          minChanged() {
            this.processMinParts();
          }
          maxChanged() {
            this.processMaxParts();
          }
          get isGridStyle() {
            const { presentation: e, preferWheel: i } = this;
            return (
              ("date" === e || "date-time" === e || "time-date" === e) && !i
            );
          }
          yearValuesChanged() {
            this.parsedYearValues = (0, r.t)(this.yearValues);
          }
          monthValuesChanged() {
            this.parsedMonthValues = (0, r.t)(this.monthValues);
          }
          dayValuesChanged() {
            this.parsedDayValues = (0, r.t)(this.dayValues);
          }
          hourValuesChanged() {
            this.parsedHourValues = (0, r.t)(this.hourValues);
          }
          minuteValuesChanged() {
            this.parsedMinuteValues = (0, r.t)(this.minuteValues);
          }
          valueChanged() {
            var e = this;
            return (0, P.c)(function* () {
              const { value: i } = e;
              e.hasValue() && e.processValue(i),
                e.emitStyle(),
                e.ionValueChange.emit({ value: i });
            })();
          }
          confirm(e = !1) {
            var i = this;
            return (0, P.c)(function* () {
              const {
                isCalendarPicker: t,
                activeParts: n,
                preferWheel: a,
                workingParts: s,
              } = i;
              (void 0 !== n || !t) &&
                (Array.isArray(n) && 0 === n.length
                  ? i.setValue(a ? (0, r.u)(s) : void 0)
                  : i.setValue((0, r.u)(n))),
                e && i.closeParentOverlay();
            })();
          }
          reset(e) {
            var i = this;
            return (0, P.c)(function* () {
              i.processValue(e);
            })();
          }
          cancel(e = !1) {
            var i = this;
            return (0, P.c)(function* () {
              i.ionCancel.emit(), e && i.closeParentOverlay();
            })();
          }
          get isCalendarPicker() {
            const { presentation: e } = this;
            return "date" === e || "date-time" === e || "time-date" === e;
          }
          connectedCallback() {
            this.clearFocusVisible = (0, Z.startFocusVisible)(this.el).destroy;
          }
          disconnectedCallback() {
            this.clearFocusVisible &&
              (this.clearFocusVisible(), (this.clearFocusVisible = void 0));
          }
          initializeListeners() {
            this.initializeCalendarListener(),
              this.initializeKeyboardListeners();
          }
          componentDidLoad() {
            const i = new IntersectionObserver(
              (s) => {
                s[0].isIntersecting &&
                  (this.initializeListeners(),
                  (0, o.w)(() => {
                    this.el.classList.add("datetime-ready");
                  }));
              },
              { threshold: 0.01 },
            );
            (0, A.r)(() => i?.observe(this.el));
            const n = new IntersectionObserver(
              (s) => {
                s[0].isIntersecting ||
                  (this.destroyInteractionListeners(),
                  (this.showMonthAndYear = !1),
                  (0, o.w)(() => {
                    this.el.classList.remove("datetime-ready");
                  }));
              },
              { threshold: 0 },
            );
            (0, A.r)(() => n?.observe(this.el));
            const a = (0, A.g)(this.el);
            a.addEventListener("ionFocus", (s) => s.stopPropagation()),
              a.addEventListener("ionBlur", (s) => s.stopPropagation());
          }
          componentDidRender() {
            const {
                presentation: e,
                prevPresentation: i,
                calendarBodyRef: t,
                minParts: n,
                preferWheel: a,
                forceRenderDate: s,
              } = this,
              l = !a && ["date-time", "time-date", "date"].includes(e);
            if (void 0 !== n && l && t) {
              const d = t.querySelector(".calendar-month:nth-of-type(1)");
              d &&
                void 0 === s &&
                (t.scrollLeft = d.clientWidth * ((0, W.i)(this.el) ? -1 : 1));
            }
            null !== i
              ? e !== i &&
                ((this.prevPresentation = e),
                this.destroyInteractionListeners(),
                this.initializeListeners(),
                (this.showMonthAndYear = !1),
                (0, A.r)(() => {
                  this.ionRender.emit();
                }))
              : (this.prevPresentation = e);
          }
          componentWillLoad() {
            const {
              el: e,
              highlightedDates: i,
              multiple: t,
              presentation: n,
              preferWheel: a,
            } = this;
            t &&
              ("date" !== n &&
                (0, M.p)(
                  'Multiple date selection is only supported for presentation="date".',
                  e,
                ),
              a &&
                (0, M.p)(
                  'Multiple date selection is not supported with preferWheel="true".',
                  e,
                )),
              void 0 !== i &&
                ("date" !== n &&
                  "date-time" !== n &&
                  "time-date" !== n &&
                  (0, M.p)(
                    "The highlightedDates property is only supported with the date, date-time, and time-date presentations.",
                    e,
                  ),
                a &&
                  (0, M.p)(
                    'The highlightedDates property is not supported with preferWheel="true".',
                    e,
                  ));
            const s = (this.parsedHourValues = (0, r.t)(this.hourValues)),
              l = (this.parsedMinuteValues = (0, r.t)(this.minuteValues)),
              d = (this.parsedMonthValues = (0, r.t)(this.monthValues)),
              c = (this.parsedYearValues = (0, r.t)(this.yearValues)),
              h = (this.parsedDayValues = (0, r.t)(this.dayValues)),
              p = (this.todayParts = (0, r.s)((0, r.x)()));
            this.processMinParts(),
              this.processMaxParts(),
              (this.defaultParts = (0, r.y)({
                refParts: p,
                monthValues: d,
                dayValues: h,
                yearValues: c,
                hourValues: s,
                minuteValues: l,
                minParts: this.minParts,
                maxParts: this.maxParts,
              })),
              this.processValue(this.value),
              this.emitStyle();
          }
          emitStyle() {
            this.ionStyle.emit({
              interactive: !0,
              datetime: !0,
              "interactive-disabled": this.disabled,
            });
          }
          renderFooter() {
            const {
                disabled: e,
                readonly: i,
                showDefaultButtons: t,
                showClearButton: n,
              } = this,
              a = e || i;
            if (null === this.el.querySelector('[slot="buttons"]') && !t && !n)
              return;
            const l = () => {
              this.reset(), this.setValue(void 0);
            };
            return (0, o.h)(
              "div",
              { class: "datetime-footer" },
              (0, o.h)(
                "div",
                { class: "datetime-buttons" },
                (0, o.h)(
                  "div",
                  {
                    class: {
                      "datetime-action-buttons": !0,
                      "has-clear-button": this.showClearButton,
                    },
                  },
                  (0, o.h)(
                    "slot",
                    { name: "buttons" },
                    (0, o.h)(
                      "ion-buttons",
                      null,
                      t &&
                        (0, o.h)(
                          "ion-button",
                          {
                            id: "cancel-button",
                            color: this.color,
                            onClick: () => this.cancel(!0),
                            disabled: a,
                          },
                          this.cancelText,
                        ),
                      (0, o.h)(
                        "div",
                        { class: "datetime-action-buttons-container" },
                        n &&
                          (0, o.h)(
                            "ion-button",
                            {
                              id: "clear-button",
                              color: this.color,
                              onClick: () => l(),
                              disabled: a,
                            },
                            this.clearText,
                          ),
                        t &&
                          (0, o.h)(
                            "ion-button",
                            {
                              id: "confirm-button",
                              color: this.color,
                              onClick: () => this.confirm(!0),
                              disabled: a,
                            },
                            this.doneText,
                          ),
                      ),
                    ),
                  ),
                ),
              ),
            );
          }
          renderWheelPicker(e = this.presentation) {
            const i =
              "time-date" === e
                ? [
                    this.renderTimePickerColumns(e),
                    this.renderDatePickerColumns(e),
                  ]
                : [
                    this.renderDatePickerColumns(e),
                    this.renderTimePickerColumns(e),
                  ];
            return (0, o.h)("ion-picker-internal", null, i);
          }
          renderDatePickerColumns(e) {
            return "date-time" === e || "time-date" === e
              ? this.renderCombinedDatePickerColumn()
              : this.renderIndividualDatePickerColumns(e);
          }
          renderCombinedDatePickerColumn() {
            const {
                defaultParts: e,
                disabled: i,
                workingParts: t,
                locale: n,
                minParts: a,
                maxParts: s,
                todayParts: l,
                isDateEnabled: d,
              } = this,
              c = this.getActivePartsWithFallback(),
              h = (0, r.z)(t),
              p = h[h.length - 1];
            (h[0].day = 1), (p.day = (0, r.A)(p.month, p.year));
            const f = void 0 !== a && (0, r.b)(a, h[0]) ? a : h[0],
              g = void 0 !== s && (0, r.i)(s, p) ? s : p,
              m = (0, r.B)(
                n,
                l,
                f,
                g,
                this.parsedDayValues,
                this.parsedMonthValues,
              );
            let u = m.items;
            const x = m.parts;
            return (
              d &&
                (u = u.map((k, v) => {
                  const O = x[v];
                  let C;
                  try {
                    C = !d((0, r.u)(O));
                  } catch (D) {
                    (0, M.a)(
                      "Exception thrown from provided `isDateEnabled` function. Please check your function and try again.",
                      D,
                    );
                  }
                  return Object.assign(Object.assign({}, k), { disabled: C });
                })),
              (0, o.h)("ion-picker-column-internal", {
                class: "date-column",
                color: this.color,
                disabled: i,
                items: u,
                value:
                  null !== t.day
                    ? `${t.year}-${t.month}-${t.day}`
                    : `${e.year}-${e.month}-${e.day}`,
                onIonChange: (k) => {
                  this.destroyCalendarListener &&
                    this.destroyCalendarListener();
                  const { value: v } = k.detail,
                    O = x.find(
                      ({ month: C, day: D, year: j }) => v === `${j}-${C}-${D}`,
                    );
                  this.setWorkingParts(Object.assign(Object.assign({}, t), O)),
                    this.setActiveParts(Object.assign(Object.assign({}, c), O)),
                    this.initializeCalendarListener(),
                    k.stopPropagation();
                },
              })
            );
          }
          renderIndividualDatePickerColumns(e) {
            const { workingParts: i, isDateEnabled: t } = this,
              a =
                "year" !== e && "time" !== e
                  ? (0, r.C)(
                      this.locale,
                      i,
                      this.minParts,
                      this.maxParts,
                      this.parsedMonthValues,
                    )
                  : [];
            let l =
              "date" === e
                ? (0, r.D)(
                    this.locale,
                    i,
                    this.minParts,
                    this.maxParts,
                    this.parsedDayValues,
                  )
                : [];
            t &&
              (l = l.map((f) => {
                const { value: g } = f,
                  m = "string" == typeof g ? parseInt(g) : g,
                  u = { month: i.month, day: m, year: i.year };
                let x;
                try {
                  x = !t((0, r.u)(u));
                } catch (b) {
                  (0, M.a)(
                    "Exception thrown from provided `isDateEnabled` function. Please check your function and try again.",
                    b,
                  );
                }
                return Object.assign(Object.assign({}, f), { disabled: x });
              }));
            const c =
              "month" !== e && "time" !== e
                ? (0, r.E)(
                    this.locale,
                    this.defaultParts,
                    this.minParts,
                    this.maxParts,
                    this.parsedYearValues,
                  )
                : [];
            let p = [];
            return (
              (p = (0, r.F)(this.locale, { month: "numeric", day: "numeric" })
                ? [
                    this.renderMonthPickerColumn(a),
                    this.renderDayPickerColumn(l),
                    this.renderYearPickerColumn(c),
                  ]
                : [
                    this.renderDayPickerColumn(l),
                    this.renderMonthPickerColumn(a),
                    this.renderYearPickerColumn(c),
                  ]),
              p
            );
          }
          renderDayPickerColumn(e) {
            var i;
            if (0 === e.length) return [];
            const { disabled: t, workingParts: n } = this,
              a = this.getActivePartsWithFallback();
            return (0, o.h)("ion-picker-column-internal", {
              class: "day-column",
              color: this.color,
              disabled: t,
              items: e,
              value:
                null !== (i = null !== n.day ? n.day : this.defaultParts.day) &&
                void 0 !== i
                  ? i
                  : void 0,
              onIonChange: (s) => {
                this.destroyCalendarListener && this.destroyCalendarListener(),
                  this.setWorkingParts(
                    Object.assign(Object.assign({}, n), {
                      day: s.detail.value,
                    }),
                  ),
                  this.setActiveParts(
                    Object.assign(Object.assign({}, a), {
                      day: s.detail.value,
                    }),
                  ),
                  this.initializeCalendarListener(),
                  s.stopPropagation();
              },
            });
          }
          renderMonthPickerColumn(e) {
            if (0 === e.length) return [];
            const { disabled: i, workingParts: t } = this,
              n = this.getActivePartsWithFallback();
            return (0, o.h)("ion-picker-column-internal", {
              class: "month-column",
              color: this.color,
              disabled: i,
              items: e,
              value: t.month,
              onIonChange: (a) => {
                this.destroyCalendarListener && this.destroyCalendarListener(),
                  this.setWorkingParts(
                    Object.assign(Object.assign({}, t), {
                      month: a.detail.value,
                    }),
                  ),
                  this.setActiveParts(
                    Object.assign(Object.assign({}, n), {
                      month: a.detail.value,
                    }),
                  ),
                  this.initializeCalendarListener(),
                  a.stopPropagation();
              },
            });
          }
          renderYearPickerColumn(e) {
            if (0 === e.length) return [];
            const { disabled: i, workingParts: t } = this,
              n = this.getActivePartsWithFallback();
            return (0, o.h)("ion-picker-column-internal", {
              class: "year-column",
              color: this.color,
              disabled: i,
              items: e,
              value: t.year,
              onIonChange: (a) => {
                this.destroyCalendarListener && this.destroyCalendarListener(),
                  this.setWorkingParts(
                    Object.assign(Object.assign({}, t), {
                      year: a.detail.value,
                    }),
                  ),
                  this.setActiveParts(
                    Object.assign(Object.assign({}, n), {
                      year: a.detail.value,
                    }),
                  ),
                  this.initializeCalendarListener(),
                  a.stopPropagation();
              },
            });
          }
          renderTimePickerColumns(e) {
            if (["date", "month", "month-year", "year"].includes(e)) return [];
            const t = void 0 !== this.getActivePart(),
              {
                hoursData: n,
                minutesData: a,
                dayPeriodData: s,
              } = (0, r.G)(
                this.locale,
                this.workingParts,
                this.hourCycle,
                t ? this.minParts : void 0,
                t ? this.maxParts : void 0,
                this.parsedHourValues,
                this.parsedMinuteValues,
              );
            return [
              this.renderHourPickerColumn(n),
              this.renderMinutePickerColumn(a),
              this.renderDayPeriodPickerColumn(s),
            ];
          }
          renderHourPickerColumn(e) {
            const { disabled: i, workingParts: t } = this;
            if (0 === e.length) return [];
            const n = this.getActivePartsWithFallback();
            return (0, o.h)("ion-picker-column-internal", {
              color: this.color,
              disabled: i,
              value: n.hour,
              items: e,
              numericInput: !0,
              onIonChange: (a) => {
                this.setWorkingParts(
                  Object.assign(Object.assign({}, t), { hour: a.detail.value }),
                ),
                  this.setActiveParts(
                    Object.assign(Object.assign({}, n), {
                      hour: a.detail.value,
                    }),
                  ),
                  a.stopPropagation();
              },
            });
          }
          renderMinutePickerColumn(e) {
            const { disabled: i, workingParts: t } = this;
            if (0 === e.length) return [];
            const n = this.getActivePartsWithFallback();
            return (0, o.h)("ion-picker-column-internal", {
              color: this.color,
              disabled: i,
              value: n.minute,
              items: e,
              numericInput: !0,
              onIonChange: (a) => {
                this.setWorkingParts(
                  Object.assign(Object.assign({}, t), {
                    minute: a.detail.value,
                  }),
                ),
                  this.setActiveParts(
                    Object.assign(Object.assign({}, n), {
                      minute: a.detail.value,
                    }),
                  ),
                  a.stopPropagation();
              },
            });
          }
          renderDayPeriodPickerColumn(e) {
            const { disabled: i, workingParts: t } = this;
            if (0 === e.length) return [];
            const n = this.getActivePartsWithFallback(),
              a = (0, r.H)(this.locale);
            return (0, o.h)("ion-picker-column-internal", {
              style: a ? { order: "-1" } : {},
              color: this.color,
              disabled: i,
              value: n.ampm,
              items: e,
              onIonChange: (s) => {
                const l = (0, r.R)(t, s.detail.value);
                this.setWorkingParts(
                  Object.assign(Object.assign({}, t), {
                    ampm: s.detail.value,
                    hour: l,
                  }),
                ),
                  this.setActiveParts(
                    Object.assign(Object.assign({}, n), {
                      ampm: s.detail.value,
                      hour: l,
                    }),
                  ),
                  s.stopPropagation();
              },
            });
          }
          renderWheelView(e) {
            const { locale: i } = this,
              n = (0, r.F)(i) ? "month-first" : "year-first";
            return (0, o.h)(
              "div",
              { class: { [`wheel-order-${n}`]: !0 } },
              this.renderWheelPicker(e),
            );
          }
          renderCalendarHeader(e) {
            const { disabled: i } = this,
              t = "ios" === e ? _.l : _.p,
              n = "ios" === e ? _.o : _.q,
              a =
                i ||
                ((e, i, t) => {
                  const n = Object.assign(
                    Object.assign({}, (0, r.d)(this.workingParts)),
                    { day: null },
                  );
                  return z(n, { minParts: i, maxParts: t });
                })(0, this.minParts, this.maxParts),
              s =
                i ||
                ((e, i) => {
                  const t = Object.assign(
                    Object.assign({}, (0, r.e)(this.workingParts)),
                    { day: null },
                  );
                  return z(t, { maxParts: i });
                })(0, this.maxParts),
              l = this.el.getAttribute("dir") || void 0;
            return (0, o.h)(
              "div",
              { class: "calendar-header" },
              (0, o.h)(
                "div",
                { class: "calendar-action-buttons" },
                (0, o.h)(
                  "div",
                  { class: "calendar-month-year" },
                  (0, o.h)(
                    "ion-item",
                    {
                      part: "month-year-button",
                      ref: (d) => (this.monthYearToggleItemRef = d),
                      button: !0,
                      "aria-label": "Show year picker",
                      detail: !1,
                      lines: "none",
                      disabled: i,
                      onClick: () => {
                        var d;
                        this.toggleMonthAndYearView();
                        const { monthYearToggleItemRef: c } = this;
                        if (c) {
                          const h =
                            null === (d = c.shadowRoot) || void 0 === d
                              ? void 0
                              : d.querySelector(".item-native");
                          h &&
                            h.setAttribute(
                              "aria-label",
                              this.showMonthAndYear
                                ? "Hide year picker"
                                : "Show year picker",
                            );
                        }
                      },
                    },
                    (0, o.h)(
                      "ion-label",
                      null,
                      (0, r.J)(this.locale, this.workingParts),
                      (0, o.h)("ion-icon", {
                        "aria-hidden": "true",
                        icon: this.showMonthAndYear ? t : n,
                        lazy: !1,
                        flipRtl: !0,
                      }),
                    ),
                  ),
                ),
                (0, o.h)(
                  "div",
                  { class: "calendar-next-prev" },
                  (0, o.h)(
                    "ion-buttons",
                    null,
                    (0, o.h)(
                      "ion-button",
                      {
                        "aria-label": "Previous month",
                        disabled: a,
                        onClick: () => this.prevMonth(),
                      },
                      (0, o.h)("ion-icon", {
                        dir: l,
                        "aria-hidden": "true",
                        slot: "icon-only",
                        icon: _.c,
                        lazy: !1,
                        flipRtl: !0,
                      }),
                    ),
                    (0, o.h)(
                      "ion-button",
                      {
                        "aria-label": "Next month",
                        disabled: s,
                        onClick: () => this.nextMonth(),
                      },
                      (0, o.h)("ion-icon", {
                        dir: l,
                        "aria-hidden": "true",
                        slot: "icon-only",
                        icon: _.o,
                        lazy: !1,
                        flipRtl: !0,
                      }),
                    ),
                  ),
                ),
              ),
              (0, o.h)(
                "div",
                { class: "calendar-days-of-week", "aria-hidden": "true" },
                (0, r.I)(this.locale, e, this.firstDayOfWeek % 7).map((d) =>
                  (0, o.h)("div", { class: "day-of-week" }, d),
                ),
              ),
            );
          }
          renderMonth(e, i) {
            const { disabled: t, readonly: n } = this,
              a =
                void 0 === this.parsedYearValues ||
                this.parsedYearValues.includes(i),
              s =
                void 0 === this.parsedMonthValues ||
                this.parsedMonthValues.includes(e),
              l = !a || !s,
              d = t || n,
              c =
                t ||
                z(
                  { month: e, year: i, day: null },
                  {
                    minParts: Object.assign(Object.assign({}, this.minParts), {
                      day: null,
                    }),
                    maxParts: Object.assign(Object.assign({}, this.maxParts), {
                      day: null,
                    }),
                  },
                ),
              h = this.workingParts.month === e && this.workingParts.year === i,
              p = this.getActivePartsWithFallback();
            return (0, o.h)(
              "div",
              {
                "aria-hidden": h ? null : "true",
                class: {
                  "calendar-month": !0,
                  "calendar-month-disabled": !h && c,
                },
              },
              (0, o.h)(
                "div",
                { class: "calendar-month-grid" },
                (0, r.K)(e, i, this.firstDayOfWeek % 7).map((f, g) => {
                  const { day: m, dayOfWeek: u } = f,
                    {
                      el: x,
                      highlightedDates: b,
                      isDateEnabled: k,
                      multiple: v,
                    } = this,
                    O = { month: e, day: m, year: i },
                    C = null === m,
                    {
                      isActive: D,
                      isToday: j,
                      ariaLabel: B,
                      ariaSelected: ge,
                      disabled: be,
                      text: ye,
                    } = ((e, i, t, n, a, s, l) => {
                      const c =
                          void 0 !==
                          (Array.isArray(t) ? t : [t]).find((f) =>
                            (0, r.c)(i, f),
                          ),
                        h = (0, r.c)(i, n);
                      return {
                        disabled: Y(i, a, s, l),
                        isActive: c,
                        isToday: h,
                        ariaSelected: c ? "true" : null,
                        ariaLabel: (0, r.g)(e, h, i),
                        text: null != i.day ? (0, r.a)(e, i) : null,
                      };
                    })(
                      this.locale,
                      O,
                      this.activeParts,
                      this.todayParts,
                      this.minParts,
                      this.maxParts,
                      this.parsedDayValues,
                    ),
                    J = (0, r.u)(O);
                  let T = l || be;
                  if (!T && void 0 !== k)
                    try {
                      T = !k(J);
                    } catch (S) {
                      (0, M.a)(
                        "Exception thrown from provided `isDateEnabled` function. Please check your function and try again.",
                        x,
                        S,
                      );
                    }
                  const xe = T && d,
                    ke = T || d;
                  let V, Q;
                  return (
                    void 0 !== b &&
                      !D &&
                      null !== m &&
                      (V = ((e, i, t) => {
                        if (Array.isArray(e)) {
                          const n = i.split("T")[0],
                            a = e.find((s) => s.date === n);
                          if (a)
                            return {
                              textColor: a.textColor,
                              backgroundColor: a.backgroundColor,
                            };
                        } else
                          try {
                            return e(i);
                          } catch (n) {
                            (0, M.a)(
                              "Exception thrown from provided `highlightedDates` callback. Please check your function and try again.",
                              t,
                              n,
                            );
                          }
                      })(b, J, x)),
                    C ||
                      (Q = `calendar-day${D ? " active" : ""}${j ? " today" : ""}${T ? " disabled" : ""}`),
                    (0, o.h)(
                      "div",
                      { class: "calendar-day-wrapper" },
                      (0, o.h)(
                        "button",
                        {
                          ref: (S) => {
                            S &&
                              (S.style.setProperty(
                                "color",
                                `${V ? V.textColor : ""}`,
                                "important",
                              ),
                              S.style.setProperty(
                                "background-color",
                                `${V ? V.backgroundColor : ""}`,
                                "important",
                              ));
                          },
                          tabindex: "-1",
                          "data-day": m,
                          "data-month": e,
                          "data-year": i,
                          "data-index": g,
                          "data-day-of-week": u,
                          disabled: ke,
                          class: {
                            "calendar-day-padding": C,
                            "calendar-day": !0,
                            "calendar-day-active": D,
                            "calendar-day-constrained": xe,
                            "calendar-day-today": j,
                          },
                          part: Q,
                          "aria-hidden": C ? "true" : null,
                          "aria-selected": ge,
                          "aria-label": B,
                          onClick: () => {
                            C ||
                              (this.setWorkingParts(
                                Object.assign(
                                  Object.assign({}, this.workingParts),
                                  { month: e, day: m, year: i },
                                ),
                              ),
                              v
                                ? this.setActiveParts(
                                    { month: e, day: m, year: i },
                                    D,
                                  )
                                : this.setActiveParts(
                                    Object.assign(Object.assign({}, p), {
                                      month: e,
                                      day: m,
                                      year: i,
                                    }),
                                  ));
                          },
                        },
                        ye,
                      ),
                    )
                  );
                }),
              ),
            );
          }
          renderCalendarBody() {
            return (0, o.h)(
              "div",
              {
                class: "calendar-body ion-focusable",
                ref: (e) => (this.calendarBodyRef = e),
                tabindex: "0",
              },
              (0, r.z)(this.workingParts, this.forceRenderDate).map(
                ({ month: e, year: i }) => this.renderMonth(e, i),
              ),
            );
          }
          renderCalendar(e) {
            return (0, o.h)(
              "div",
              { class: "datetime-calendar", key: "datetime-calendar" },
              this.renderCalendarHeader(e),
              this.renderCalendarBody(),
            );
          }
          renderTimeLabel() {
            if (
              null !== this.el.querySelector('[slot="time-label"]') ||
              this.showDefaultTimeLabel
            )
              return (0, o.h)("slot", { name: "time-label" }, "Time");
          }
          renderTimeOverlay() {
            var e = this;
            const {
                disabled: i,
                hourCycle: t,
                isTimePopoverOpen: n,
                locale: a,
              } = this,
              s = (0, r.L)(a, t),
              l = this.getActivePartsWithFallback();
            return [
              (0, o.h)("div", { class: "time-header" }, this.renderTimeLabel()),
              (0, o.h)(
                "button",
                {
                  class: { "time-body": !0, "time-body-active": n },
                  part: "time-button" + (n ? " active" : ""),
                  "aria-expanded": "false",
                  "aria-haspopup": "true",
                  disabled: i,
                  onClick:
                    ((d = (0, P.c)(function* (c) {
                      const { popoverRef: h } = e;
                      h &&
                        ((e.isTimePopoverOpen = !0),
                        h.present(
                          new CustomEvent("ionShadowTarget", {
                            detail: { ionShadowTarget: c.target },
                          }),
                        ),
                        yield h.onWillDismiss(),
                        (e.isTimePopoverOpen = !1));
                    })),
                    function (h) {
                      return d.apply(this, arguments);
                    }),
                },
                (0, r.M)(a, l, s),
              ),
              (0, o.h)(
                "ion-popover",
                {
                  alignment: "center",
                  translucent: !0,
                  overlayIndex: 1,
                  arrow: !1,
                  onWillPresent: (d) => {
                    d.target
                      .querySelectorAll("ion-picker-column-internal")
                      .forEach((h) => h.scrollActiveItemIntoView());
                  },
                  style: {
                    "--offset-y": "-10px",
                    "--min-width": "fit-content",
                  },
                  keyboardEvents: !0,
                  ref: (d) => (this.popoverRef = d),
                },
                this.renderWheelPicker("time"),
              ),
            ];
            var d;
          }
          getHeaderSelectedDateText() {
            const {
                activeParts: e,
                multiple: i,
                titleSelectedDatesFormatter: t,
              } = this,
              n = Array.isArray(e);
            let a;
            if (i && n && 1 !== e.length) {
              if (((a = `${e.length} days`), void 0 !== t))
                try {
                  a = t((0, r.u)(e));
                } catch (s) {
                  (0, M.a)(
                    "Exception in provided `titleSelectedDatesFormatter`: ",
                    s,
                  );
                }
            } else a = (0, r.N)(this.locale, this.getActivePartsWithFallback());
            return a;
          }
          renderHeader(e = !0) {
            if (
              null !== this.el.querySelector('[slot="title"]') ||
              this.showDefaultTitle
            )
              return (0, o.h)(
                "div",
                { class: "datetime-header" },
                (0, o.h)(
                  "div",
                  { class: "datetime-title" },
                  (0, o.h)("slot", { name: "title" }, "Select Date"),
                ),
                e &&
                  (0, o.h)(
                    "div",
                    { class: "datetime-selected-date" },
                    this.getHeaderSelectedDateText(),
                  ),
              );
          }
          renderTime() {
            const { presentation: e } = this;
            return (0, o.h)(
              "div",
              { class: "datetime-time" },
              "time" === e
                ? this.renderWheelPicker()
                : this.renderTimeOverlay(),
            );
          }
          renderCalendarViewMonthYearPicker() {
            return (0, o.h)(
              "div",
              { class: "datetime-year" },
              this.renderWheelView("month-year"),
            );
          }
          renderDatetime(e) {
            const { presentation: i, preferWheel: t } = this;
            if (t && ("date" === i || "date-time" === i || "time-date" === i))
              return [
                this.renderHeader(!1),
                this.renderWheelView(),
                this.renderFooter(),
              ];
            switch (i) {
              case "date-time":
                return [
                  this.renderHeader(),
                  this.renderCalendar(e),
                  this.renderCalendarViewMonthYearPicker(),
                  this.renderTime(),
                  this.renderFooter(),
                ];
              case "time-date":
                return [
                  this.renderHeader(),
                  this.renderTime(),
                  this.renderCalendar(e),
                  this.renderCalendarViewMonthYearPicker(),
                  this.renderFooter(),
                ];
              case "time":
                return [
                  this.renderHeader(!1),
                  this.renderTime(),
                  this.renderFooter(),
                ];
              case "month":
              case "month-year":
              case "year":
                return [
                  this.renderHeader(!1),
                  this.renderWheelView(),
                  this.renderFooter(),
                ];
              default:
                return [
                  this.renderHeader(),
                  this.renderCalendar(e),
                  this.renderCalendarViewMonthYearPicker(),
                  this.renderFooter(),
                ];
            }
          }
          render() {
            const {
                name: e,
                value: i,
                disabled: t,
                el: n,
                color: a,
                readonly: s,
                showMonthAndYear: l,
                preferWheel: d,
                presentation: c,
                size: h,
                isGridStyle: p,
              } = this,
              f = (0, E.b)(this),
              g = "year" === c || "month" === c || "month-year" === c,
              m = l || g,
              u = l && !g,
              b = ("date" === c || "date-time" === c || "time-date" === c) && d;
            return (
              (0, A.d)(!0, n, e, (0, r.O)(i), t),
              (0, o.h)(
                o.H,
                {
                  key: "b00545b7bbba3ccf35d53c1eec4f1614fb830c11",
                  "aria-disabled": t ? "true" : null,
                  onFocus: this.onFocus,
                  onBlur: this.onBlur,
                  class: Object.assign(
                    {},
                    (0, L.c)(a, {
                      [f]: !0,
                      "datetime-readonly": s,
                      "datetime-disabled": t,
                      "show-month-and-year": m,
                      "month-year-picker-open": u,
                      [`datetime-presentation-${c}`]: !0,
                      [`datetime-size-${h}`]: !0,
                      "datetime-prefer-wheel": b,
                      "datetime-grid": p,
                    }),
                  ),
                },
                this.renderDatetime(f),
              )
            );
          }
          get el() {
            return (0, o.f)(this);
          }
          static get watchers() {
            return {
              disabled: ["disabledChanged"],
              min: ["minChanged"],
              max: ["maxChanged"],
              yearValues: ["yearValuesChanged"],
              monthValues: ["monthValuesChanged"],
              dayValues: ["dayValuesChanged"],
              hourValues: ["hourValuesChanged"],
              minuteValues: ["minuteValuesChanged"],
              value: ["valueChanged"],
            };
          }
        };
      let de = 0;
      H.style = {
        ios: ":host{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;background:var(--background);overflow:hidden}ion-picker-column-internal{min-width:26px}:host(.datetime-size-fixed){width:auto;height:auto}:host(.datetime-size-fixed:not(.datetime-prefer-wheel)){max-width:350px}:host(.datetime-size-fixed.datetime-prefer-wheel){min-width:350px;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content}:host(.datetime-size-cover){width:100%}:host .calendar-body,:host .datetime-year{opacity:0}:host(:not(.datetime-ready)) .datetime-year{position:absolute;pointer-events:none}:host(.datetime-ready) .calendar-body{opacity:1}:host(.datetime-ready) .datetime-year{display:none;opacity:1}:host .wheel-order-year-first .day-column{-ms-flex-order:3;order:3;text-align:end}:host .wheel-order-year-first .month-column{-ms-flex-order:2;order:2;text-align:end}:host .wheel-order-year-first .year-column{-ms-flex-order:1;order:1;text-align:start}:host .datetime-calendar,:host .datetime-year{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-flow:column;flex-flow:column}:host(.show-month-and-year) .datetime-year{display:-ms-flexbox;display:flex}@supports (background: -webkit-named-image(apple-pay-logo-black)) and (not (aspect-ratio: 1/1)){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{position:absolute;visibility:hidden;pointer-events:none}@supports (inset-inline-start: 0){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{inset-inline-start:-99999px}}@supports not (inset-inline-start: 0){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{left:-99999px}:host-context([dir=rtl]):host(.show-month-and-year) .calendar-next-prev,:host-context([dir=rtl]).show-month-and-year .calendar-next-prev,:host-context([dir=rtl]):host(.show-month-and-year) .calendar-days-of-week,:host-context([dir=rtl]).show-month-and-year .calendar-days-of-week,:host-context([dir=rtl]):host(.show-month-and-year) .calendar-body,:host-context([dir=rtl]).show-month-and-year .calendar-body,:host-context([dir=rtl]):host(.show-month-and-year) .datetime-time,:host-context([dir=rtl]).show-month-and-year .datetime-time{left:unset;right:unset;right:-99999px}@supports selector(:dir(rtl)){:host(.show-month-and-year:dir(rtl)) .calendar-next-prev,:host(.show-month-and-year:dir(rtl)) .calendar-days-of-week,:host(.show-month-and-year:dir(rtl)) .calendar-body,:host(.show-month-and-year:dir(rtl)) .datetime-time{left:unset;right:unset;right:-99999px}}}}@supports (not (background: -webkit-named-image(apple-pay-logo-black))) or ((background: -webkit-named-image(apple-pay-logo-black)) and (aspect-ratio: 1/1)){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{display:none}}:host(.month-year-picker-open) .datetime-footer{display:none}:host(.datetime-disabled){pointer-events:none}:host(.datetime-disabled) .calendar-days-of-week,:host(.datetime-disabled) .datetime-time{opacity:0.4}:host(.datetime-readonly){pointer-events:none;}:host(.datetime-readonly) .calendar-action-buttons,:host(.datetime-readonly) .calendar-body,:host(.datetime-readonly) .datetime-year{pointer-events:initial}:host(.datetime-readonly) .calendar-day[disabled]:not(.calendar-day-constrained),:host(.datetime-readonly) .datetime-action-buttons ion-button[disabled]{opacity:1}:host .datetime-header .datetime-title{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host .datetime-action-buttons.has-clear-button{width:100%}:host .datetime-action-buttons ion-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.datetime-action-buttons .datetime-action-buttons-container{display:-ms-flexbox;display:flex}:host .calendar-action-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host .calendar-action-buttons ion-item,:host .calendar-action-buttons ion-button{--background:translucent}:host .calendar-action-buttons ion-item ion-label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:auto}:host .calendar-action-buttons ion-item ion-icon{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:0;padding-inline-end:0;padding-top:0;padding-bottom:0}:host .calendar-days-of-week{display:grid;grid-template-columns:repeat(7, 1fr);text-align:center}.calendar-days-of-week .day-of-week{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0}:host .calendar-body{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;overflow-x:scroll;overflow-y:hidden;scrollbar-width:none;outline:none}:host .calendar-body .calendar-month{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;scroll-snap-align:start;scroll-snap-stop:always;-ms-flex-negative:0;flex-shrink:0;width:100%}:host .calendar-body .calendar-month-disabled{scroll-snap-align:none}:host .calendar-body::-webkit-scrollbar{display:none}:host .calendar-body .calendar-month-grid{display:grid;grid-template-columns:repeat(7, 1fr)}:host .calendar-day-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;min-width:0;min-height:0;overflow:visible}.calendar-day{border-radius:50%;-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:0px;padding-bottom:0px;-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-end:0px;margin-inline-end:0px;margin-top:0px;margin-bottom:0px;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border:none;outline:none;background:none;color:currentColor;font-family:var(--ion-font-family, inherit);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;z-index:0}:host .calendar-day[disabled]{pointer-events:none;opacity:0.4}.calendar-day:focus{background:rgba(var(--ion-color-base-rgb), 0.2);-webkit-box-shadow:0px 0px 0px 4px rgba(var(--ion-color-base-rgb), 0.2);box-shadow:0px 0px 0px 4px rgba(var(--ion-color-base-rgb), 0.2)}:host .datetime-time{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host(.datetime-presentation-time) .datetime-time{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host ion-popover{--height:200px}:host .time-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .time-body{border-radius:8px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;display:-ms-flexbox;display:flex;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}:host .time-body-active{color:var(--ion-color-base)}:host(.in-item){position:static}:host(.show-month-and-year) .calendar-action-buttons ion-item{--color:var(--ion-color-base)}:host{--background:var(--ion-color-light, #ffffff);--background-rgb:var(--ion-color-light-rgb);--title-color:var(--ion-color-step-600, #666666)}:host(.datetime-presentation-date-time:not(.datetime-prefer-wheel)),:host(.datetime-presentation-time-date:not(.datetime-prefer-wheel)),:host(.datetime-presentation-date:not(.datetime-prefer-wheel)){min-height:350px}:host .datetime-header{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:16px;padding-bottom:16px;border-bottom:0.55px solid var(--ion-color-step-200, #cccccc);font-size:min(0.875rem, 22.4px)}:host .datetime-header .datetime-title{color:var(--title-color)}:host .datetime-header .datetime-selected-date{margin-top:10px}:host .calendar-action-buttons ion-item{--padding-start:16px;--background-hover:transparent;--background-activated:transparent;font-size:min(1rem, 25.6px);font-weight:600}:host .calendar-action-buttons ion-item ion-icon,:host .calendar-action-buttons ion-buttons ion-button{color:var(--ion-color-base)}:host .calendar-action-buttons ion-buttons{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:0}:host .calendar-action-buttons ion-buttons ion-button{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}:host .calendar-days-of-week{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:0;padding-bottom:0;color:var(--ion-color-step-300, #b3b3b3);font-size:min(0.75rem, 19.2px);font-weight:600;line-height:24px;text-transform:uppercase}@supports (border-radius: mod(1px, 1px)){.calendar-days-of-week .day-of-week{width:clamp(20px, calc(mod(min(1rem, 24px), 24px) * 10), 100%);height:24px;overflow:hidden}.calendar-day{border-radius:max(8px, mod(min(1rem, 24px), 24px) * 10)}}@supports ((border-radius: mod(1px, 1px)) and (background: -webkit-named-image(apple-pay-logo-black)) and (not (contain-intrinsic-size: none))) or (not (border-radius: mod(1px, 1px))){.calendar-days-of-week .day-of-week{width:auto;height:auto;overflow:initial}.calendar-day{border-radius:32px}}:host .calendar-body .calendar-month .calendar-month-grid{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;-ms-flex-align:center;align-items:center;height:calc(100% - 16px)}:host .calendar-day-wrapper{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;height:0;min-height:1rem}:host .calendar-day{width:40px;min-width:40px;height:40px;font-size:min(1.25rem, 32px)}.calendar-day.calendar-day-active{background:rgba(var(--ion-color-base-rgb), 0.2)}:host .calendar-day.calendar-day-today{color:var(--ion-color-base)}:host .calendar-day.calendar-day-active{color:var(--ion-color-base);font-weight:600}:host .calendar-day.calendar-day-today.calendar-day-active{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host .datetime-time{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:8px;padding-bottom:16px;font-size:min(1rem, 25.6px)}:host .datetime-time .time-header{font-weight:600}:host .datetime-buttons{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;border-top:0.55px solid var(--ion-color-step-200, #cccccc)}:host .datetime-buttons ::slotted(ion-buttons),:host .datetime-buttons ion-buttons{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}:host .datetime-action-buttons{width:100%}",
        md: ":host{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;background:var(--background);overflow:hidden}ion-picker-column-internal{min-width:26px}:host(.datetime-size-fixed){width:auto;height:auto}:host(.datetime-size-fixed:not(.datetime-prefer-wheel)){max-width:350px}:host(.datetime-size-fixed.datetime-prefer-wheel){min-width:350px;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content}:host(.datetime-size-cover){width:100%}:host .calendar-body,:host .datetime-year{opacity:0}:host(:not(.datetime-ready)) .datetime-year{position:absolute;pointer-events:none}:host(.datetime-ready) .calendar-body{opacity:1}:host(.datetime-ready) .datetime-year{display:none;opacity:1}:host .wheel-order-year-first .day-column{-ms-flex-order:3;order:3;text-align:end}:host .wheel-order-year-first .month-column{-ms-flex-order:2;order:2;text-align:end}:host .wheel-order-year-first .year-column{-ms-flex-order:1;order:1;text-align:start}:host .datetime-calendar,:host .datetime-year{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-flow:column;flex-flow:column}:host(.show-month-and-year) .datetime-year{display:-ms-flexbox;display:flex}@supports (background: -webkit-named-image(apple-pay-logo-black)) and (not (aspect-ratio: 1/1)){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{position:absolute;visibility:hidden;pointer-events:none}@supports (inset-inline-start: 0){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{inset-inline-start:-99999px}}@supports not (inset-inline-start: 0){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{left:-99999px}:host-context([dir=rtl]):host(.show-month-and-year) .calendar-next-prev,:host-context([dir=rtl]).show-month-and-year .calendar-next-prev,:host-context([dir=rtl]):host(.show-month-and-year) .calendar-days-of-week,:host-context([dir=rtl]).show-month-and-year .calendar-days-of-week,:host-context([dir=rtl]):host(.show-month-and-year) .calendar-body,:host-context([dir=rtl]).show-month-and-year .calendar-body,:host-context([dir=rtl]):host(.show-month-and-year) .datetime-time,:host-context([dir=rtl]).show-month-and-year .datetime-time{left:unset;right:unset;right:-99999px}@supports selector(:dir(rtl)){:host(.show-month-and-year:dir(rtl)) .calendar-next-prev,:host(.show-month-and-year:dir(rtl)) .calendar-days-of-week,:host(.show-month-and-year:dir(rtl)) .calendar-body,:host(.show-month-and-year:dir(rtl)) .datetime-time{left:unset;right:unset;right:-99999px}}}}@supports (not (background: -webkit-named-image(apple-pay-logo-black))) or ((background: -webkit-named-image(apple-pay-logo-black)) and (aspect-ratio: 1/1)){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{display:none}}:host(.month-year-picker-open) .datetime-footer{display:none}:host(.datetime-disabled){pointer-events:none}:host(.datetime-disabled) .calendar-days-of-week,:host(.datetime-disabled) .datetime-time{opacity:0.4}:host(.datetime-readonly){pointer-events:none;}:host(.datetime-readonly) .calendar-action-buttons,:host(.datetime-readonly) .calendar-body,:host(.datetime-readonly) .datetime-year{pointer-events:initial}:host(.datetime-readonly) .calendar-day[disabled]:not(.calendar-day-constrained),:host(.datetime-readonly) .datetime-action-buttons ion-button[disabled]{opacity:1}:host .datetime-header .datetime-title{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host .datetime-action-buttons.has-clear-button{width:100%}:host .datetime-action-buttons ion-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.datetime-action-buttons .datetime-action-buttons-container{display:-ms-flexbox;display:flex}:host .calendar-action-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host .calendar-action-buttons ion-item,:host .calendar-action-buttons ion-button{--background:translucent}:host .calendar-action-buttons ion-item ion-label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:auto}:host .calendar-action-buttons ion-item ion-icon{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:0;padding-inline-end:0;padding-top:0;padding-bottom:0}:host .calendar-days-of-week{display:grid;grid-template-columns:repeat(7, 1fr);text-align:center}.calendar-days-of-week .day-of-week{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0}:host .calendar-body{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;overflow-x:scroll;overflow-y:hidden;scrollbar-width:none;outline:none}:host .calendar-body .calendar-month{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;scroll-snap-align:start;scroll-snap-stop:always;-ms-flex-negative:0;flex-shrink:0;width:100%}:host .calendar-body .calendar-month-disabled{scroll-snap-align:none}:host .calendar-body::-webkit-scrollbar{display:none}:host .calendar-body .calendar-month-grid{display:grid;grid-template-columns:repeat(7, 1fr)}:host .calendar-day-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;min-width:0;min-height:0;overflow:visible}.calendar-day{border-radius:50%;-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:0px;padding-bottom:0px;-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-end:0px;margin-inline-end:0px;margin-top:0px;margin-bottom:0px;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border:none;outline:none;background:none;color:currentColor;font-family:var(--ion-font-family, inherit);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;z-index:0}:host .calendar-day[disabled]{pointer-events:none;opacity:0.4}.calendar-day:focus{background:rgba(var(--ion-color-base-rgb), 0.2);-webkit-box-shadow:0px 0px 0px 4px rgba(var(--ion-color-base-rgb), 0.2);box-shadow:0px 0px 0px 4px rgba(var(--ion-color-base-rgb), 0.2)}:host .datetime-time{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host(.datetime-presentation-time) .datetime-time{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host ion-popover{--height:200px}:host .time-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .time-body{border-radius:8px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;display:-ms-flexbox;display:flex;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}:host .time-body-active{color:var(--ion-color-base)}:host(.in-item){position:static}:host(.show-month-and-year) .calendar-action-buttons ion-item{--color:var(--ion-color-base)}:host{--background:var(--ion-color-step-100, #ffffff);--title-color:var(--ion-color-contrast)}:host .datetime-header{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:20px;padding-bottom:20px;background:var(--ion-color-base);color:var(--title-color)}:host .datetime-header .datetime-title{font-size:0.75rem;text-transform:uppercase}:host .datetime-header .datetime-selected-date{margin-top:30px;font-size:2.125rem}:host .datetime-calendar .calendar-action-buttons ion-item{--padding-start:20px}:host .calendar-action-buttons ion-item,:host .calendar-action-buttons ion-button{--color:var(--ion-color-step-650, #595959)}:host .calendar-days-of-week{-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:0px;padding-bottom:0px;color:var(--ion-color-step-500, gray);font-size:0.875rem;line-height:36px}:host .calendar-body .calendar-month .calendar-month-grid{-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:4px;padding-bottom:4px;grid-template-rows:repeat(6, 1fr)}:host .calendar-day{width:42px;min-width:42px;height:42px;font-size:0.875rem}:host .calendar-day.calendar-day-today{border:1px solid var(--ion-color-base);color:var(--ion-color-base)}:host .calendar-day.calendar-day-active{color:var(--ion-color-contrast)}.calendar-day.calendar-day-active{border:1px solid var(--ion-color-base);background:var(--ion-color-base)}:host .datetime-time{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:8px;padding-bottom:8px}:host .time-header{color:var(--ion-color-step-650, #595959)}:host(.datetime-presentation-month) .datetime-year,:host(.datetime-presentation-year) .datetime-year,:host(.datetime-presentation-month-year) .datetime-year{margin-top:20px;margin-bottom:20px}:host .datetime-buttons{-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:10px;padding-bottom:10px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end}",
      };
      const $ = (e) => {
          const i = (0, I.c)(),
            t = (0, I.c)(),
            n = (0, I.c)();
          return (
            t
              .addElement(e.querySelector("ion-backdrop"))
              .fromTo("opacity", 0.01, "var(--backdrop-opacity)")
              .beforeStyles({ "pointer-events": "none" })
              .afterClearStyles(["pointer-events"]),
            n
              .addElement(e.querySelector(".picker-wrapper"))
              .fromTo("transform", "translateY(100%)", "translateY(0%)"),
            i
              .addElement(e)
              .easing("cubic-bezier(.36,.66,.04,1)")
              .duration(400)
              .addAnimation([t, n])
          );
        },
        K = (e) => {
          const i = (0, I.c)(),
            t = (0, I.c)(),
            n = (0, I.c)();
          return (
            t
              .addElement(e.querySelector("ion-backdrop"))
              .fromTo("opacity", "var(--backdrop-opacity)", 0.01),
            n
              .addElement(e.querySelector(".picker-wrapper"))
              .fromTo("transform", "translateY(0%)", "translateY(100%)"),
            i
              .addElement(e)
              .easing("cubic-bezier(.36,.66,.04,1)")
              .duration(400)
              .addAnimation([t, n])
          );
        },
        U = class {
          constructor(e) {
            (0, o.r)(this, e),
              (this.didPresent = (0, o.d)(this, "ionPickerDidPresent", 7)),
              (this.willPresent = (0, o.d)(this, "ionPickerWillPresent", 7)),
              (this.willDismiss = (0, o.d)(this, "ionPickerWillDismiss", 7)),
              (this.didDismiss = (0, o.d)(this, "ionPickerDidDismiss", 7)),
              (this.didPresentShorthand = (0, o.d)(this, "didPresent", 7)),
              (this.willPresentShorthand = (0, o.d)(this, "willPresent", 7)),
              (this.willDismissShorthand = (0, o.d)(this, "willDismiss", 7)),
              (this.didDismissShorthand = (0, o.d)(this, "didDismiss", 7)),
              (this.delegateController = (0, w.d)(this)),
              (this.lockController = (0, ee.c)()),
              (this.triggerController = (0, w.e)()),
              (this.onBackdropTap = () => {
                this.dismiss(void 0, w.B);
              }),
              (this.dispatchCancelHandler = (i) => {
                if ((0, w.i)(i.detail.role)) {
                  const n = this.buttons.find((a) => "cancel" === a.role);
                  this.callButtonHandler(n);
                }
              }),
              (this.presented = !1),
              (this.overlayIndex = void 0),
              (this.delegate = void 0),
              (this.hasController = !1),
              (this.keyboardClose = !0),
              (this.enterAnimation = void 0),
              (this.leaveAnimation = void 0),
              (this.buttons = []),
              (this.columns = []),
              (this.cssClass = void 0),
              (this.duration = 0),
              (this.showBackdrop = !0),
              (this.backdropDismiss = !0),
              (this.animated = !0),
              (this.htmlAttributes = void 0),
              (this.isOpen = !1),
              (this.trigger = void 0);
          }
          onIsOpenChange(e, i) {
            !0 === e && !1 === i
              ? this.present()
              : !1 === e && !0 === i && this.dismiss();
          }
          triggerChanged() {
            const { trigger: e, el: i, triggerController: t } = this;
            e && t.addClickListener(i, e);
          }
          connectedCallback() {
            (0, w.j)(this.el), this.triggerChanged();
          }
          disconnectedCallback() {
            this.triggerController.removeClickListener();
          }
          componentWillLoad() {
            (0, w.k)(this.el);
          }
          componentDidLoad() {
            !0 === this.isOpen && (0, A.r)(() => this.present()),
              this.triggerChanged();
          }
          present() {
            var e = this;
            return (0, P.c)(function* () {
              const i = yield e.lockController.lock();
              yield e.delegateController.attachViewToDom(),
                yield (0, w.f)(e, "pickerEnter", $, $, void 0),
                e.duration > 0 &&
                  (e.durationTimeout = setTimeout(
                    () => e.dismiss(),
                    e.duration,
                  )),
                i();
            })();
          }
          dismiss(e, i) {
            var t = this;
            return (0, P.c)(function* () {
              const n = yield t.lockController.lock();
              t.durationTimeout && clearTimeout(t.durationTimeout);
              const a = yield (0, w.g)(t, e, i, "pickerLeave", K, K);
              return a && t.delegateController.removeViewFromDom(), n(), a;
            })();
          }
          onDidDismiss() {
            return (0, w.h)(this.el, "ionPickerDidDismiss");
          }
          onWillDismiss() {
            return (0, w.h)(this.el, "ionPickerWillDismiss");
          }
          getColumn(e) {
            return Promise.resolve(this.columns.find((i) => i.name === e));
          }
          buttonClick(e) {
            var i = this;
            return (0, P.c)(function* () {
              const t = e.role;
              return (0, w.i)(t)
                ? i.dismiss(void 0, t)
                : (yield i.callButtonHandler(e))
                  ? i.dismiss(i.getSelected(), e.role)
                  : Promise.resolve();
            })();
          }
          callButtonHandler(e) {
            var i = this;
            return (0, P.c)(function* () {
              return !(
                e && !1 === (yield (0, w.s)(e.handler, i.getSelected()))
              );
            })();
          }
          getSelected() {
            const e = {};
            return (
              this.columns.forEach((i, t) => {
                const n =
                  void 0 !== i.selectedIndex
                    ? i.options[i.selectedIndex]
                    : void 0;
                e[i.name] = {
                  text: n ? n.text : void 0,
                  value: n ? n.value : void 0,
                  columnIndex: t,
                };
              }),
              e
            );
          }
          render() {
            const { htmlAttributes: e } = this,
              i = (0, E.b)(this);
            return (0, o.h)(
              o.H,
              Object.assign(
                {
                  key: "c266cc072afaba2da22f70d8b62dc4bc6756d188",
                  "aria-modal": "true",
                  tabindex: "-1",
                },
                e,
                {
                  style: { zIndex: `${2e4 + this.overlayIndex}` },
                  class: Object.assign(
                    { [i]: !0, [`picker-${i}`]: !0, "overlay-hidden": !0 },
                    (0, L.g)(this.cssClass),
                  ),
                  onIonBackdropTap: this.onBackdropTap,
                  onIonPickerWillDismiss: this.dispatchCancelHandler,
                },
              ),
              (0, o.h)("ion-backdrop", {
                key: "35ee3e5028028835580e28ac2c8db65a924d5d6a",
                visible: this.showBackdrop,
                tappable: this.backdropDismiss,
              }),
              (0, o.h)("div", {
                key: "8b454e6edbcfc45c57d3d8baf7c14b7905921a6e",
                tabindex: "0",
              }),
              (0, o.h)(
                "div",
                {
                  key: "e0fee78ec6d097bf0963190f748e5daad602e0f7",
                  class: "picker-wrapper ion-overlay-wrapper",
                  role: "dialog",
                },
                (0, o.h)(
                  "div",
                  {
                    key: "ce66bca18fc3e982ad7d6660f27cb1a03fb8247b",
                    class: "picker-toolbar",
                  },
                  this.buttons.map((t) =>
                    (0, o.h)(
                      "div",
                      { class: he(t) },
                      (0, o.h)(
                        "button",
                        {
                          type: "button",
                          onClick: () => this.buttonClick(t),
                          class: pe(t),
                        },
                        t.text,
                      ),
                    ),
                  ),
                ),
                (0, o.h)(
                  "div",
                  {
                    key: "a58b9523fe16f109dd6de0610717c5077fed964b",
                    class: "picker-columns",
                  },
                  (0, o.h)("div", {
                    key: "acd54c0314cff51e8513a08dd9755c4b847c0617",
                    class: "picker-above-highlight",
                  }),
                  this.presented &&
                    this.columns.map((t) =>
                      (0, o.h)("ion-picker-column", { col: t }),
                    ),
                  (0, o.h)("div", {
                    key: "604730bd87582d048d850c6e0a0f29ba33258918",
                    class: "picker-below-highlight",
                  }),
                ),
              ),
              (0, o.h)("div", {
                key: "93baf5e6e57aec5f084d7d5b24af14e7d8126b5a",
                tabindex: "0",
              }),
            );
          }
          get el() {
            return (0, o.f)(this);
          }
          static get watchers() {
            return { isOpen: ["onIsOpenChange"], trigger: ["triggerChanged"] };
          }
        },
        he = (e) => ({
          [`picker-toolbar-${e.role}`]: void 0 !== e.role,
          "picker-toolbar-button": !0,
        }),
        pe = (e) =>
          Object.assign(
            { "picker-button": !0, "ion-activatable": !0 },
            (0, L.g)(e.cssClass),
          );
      U.style = {
        ios: ".sc-ion-picker-ios-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}@supports (inset-inline-start: 0){.sc-ion-picker-ios-h{inset-inline-start:0}}@supports not (inset-inline-start: 0){.sc-ion-picker-ios-h{left:0}[dir=rtl].sc-ion-picker-ios-h,[dir=rtl] .sc-ion-picker-ios-h{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.sc-ion-picker-ios-h:dir(rtl){left:unset;right:unset;right:0}}}.overlay-hidden.sc-ion-picker-ios-h{display:none}.picker-wrapper.sc-ion-picker-ios{border-radius:var(--border-radius);left:0;right:0;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}.picker-toolbar.sc-ion-picker-ios{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-ios{border:0;font-family:inherit}.picker-button.sc-ion-picker-ios:active,.picker-button.sc-ion-picker-ios:focus{outline:none}.picker-columns.sc-ion-picker-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom, 0);contain:strict;overflow:hidden}.picker-above-highlight.sc-ion-picker-ios,.picker-below-highlight.sc-ion-picker-ios{display:none;pointer-events:none}.sc-ion-picker-ios-h{--background:var(--ion-background-color, #fff);--border-width:1px 0 0;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.26);color:var(--ion-item-color, var(--ion-text-color, #000))}.picker-toolbar.sc-ion-picker-ios{display:-ms-flexbox;display:flex;height:44px;border-bottom:0.55px solid var(--border-color)}.picker-toolbar-button.sc-ion-picker-ios{-ms-flex:1;flex:1;text-align:end}.picker-toolbar-button.sc-ion-picker-ios:last-child .picker-button.sc-ion-picker-ios{font-weight:600}.picker-toolbar-button.sc-ion-picker-ios:first-child{font-weight:normal;text-align:start}.picker-button.sc-ion-picker-ios,.picker-button.ion-activated.sc-ion-picker-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:1em;padding-inline-start:1em;-webkit-padding-end:1em;padding-inline-end:1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary, #3880ff);font-size:16px}.picker-columns.sc-ion-picker-ios{height:215px;-webkit-perspective:1000px;perspective:1000px}.picker-above-highlight.sc-ion-picker-ios{top:0;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);display:block;position:absolute;width:100%;height:81px;border-bottom:1px solid var(--border-color);background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to bottom, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);z-index:10}@supports (inset-inline-start: 0){.picker-above-highlight.sc-ion-picker-ios{inset-inline-start:0}}@supports not (inset-inline-start: 0){.picker-above-highlight.sc-ion-picker-ios{left:0}[dir=rtl].sc-ion-picker-ios-h .picker-above-highlight.sc-ion-picker-ios,[dir=rtl] .sc-ion-picker-ios-h .picker-above-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}[dir=rtl].sc-ion-picker-ios .picker-above-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.picker-above-highlight.sc-ion-picker-ios:dir(rtl){left:unset;right:unset;right:0}}}.picker-below-highlight.sc-ion-picker-ios{top:115px;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);display:block;position:absolute;width:100%;height:119px;border-top:1px solid var(--border-color);background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to top, var(--background, var(--ion-background-color, #fff)) 30%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);z-index:11}@supports (inset-inline-start: 0){.picker-below-highlight.sc-ion-picker-ios{inset-inline-start:0}}@supports not (inset-inline-start: 0){.picker-below-highlight.sc-ion-picker-ios{left:0}[dir=rtl].sc-ion-picker-ios-h .picker-below-highlight.sc-ion-picker-ios,[dir=rtl] .sc-ion-picker-ios-h .picker-below-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}[dir=rtl].sc-ion-picker-ios .picker-below-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.picker-below-highlight.sc-ion-picker-ios:dir(rtl){left:unset;right:unset;right:0}}}",
        md: ".sc-ion-picker-md-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}@supports (inset-inline-start: 0){.sc-ion-picker-md-h{inset-inline-start:0}}@supports not (inset-inline-start: 0){.sc-ion-picker-md-h{left:0}[dir=rtl].sc-ion-picker-md-h,[dir=rtl] .sc-ion-picker-md-h{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.sc-ion-picker-md-h:dir(rtl){left:unset;right:unset;right:0}}}.overlay-hidden.sc-ion-picker-md-h{display:none}.picker-wrapper.sc-ion-picker-md{border-radius:var(--border-radius);left:0;right:0;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}.picker-toolbar.sc-ion-picker-md{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-md{border:0;font-family:inherit}.picker-button.sc-ion-picker-md:active,.picker-button.sc-ion-picker-md:focus{outline:none}.picker-columns.sc-ion-picker-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom, 0);contain:strict;overflow:hidden}.picker-above-highlight.sc-ion-picker-md,.picker-below-highlight.sc-ion-picker-md{display:none;pointer-events:none}.sc-ion-picker-md-h{--background:var(--ion-background-color, #fff);--border-width:0.55px 0 0;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.26);color:var(--ion-item-color, var(--ion-text-color, #000))}.picker-toolbar.sc-ion-picker-md{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;height:44px}.picker-button.sc-ion-picker-md,.picker-button.ion-activated.sc-ion-picker-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:1.1em;padding-inline-start:1.1em;-webkit-padding-end:1.1em;padding-inline-end:1.1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary, #3880ff);font-size:14px;font-weight:500;text-transform:uppercase;-webkit-box-shadow:none;box-shadow:none}.picker-columns.sc-ion-picker-md{height:216px;-webkit-perspective:1800px;perspective:1800px}.picker-above-highlight.sc-ion-picker-md{top:0;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:81px;border-bottom:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--ion-background-color, #fff)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background:linear-gradient(to bottom, var(--ion-background-color, #fff) 20%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:10}@supports (inset-inline-start: 0){.picker-above-highlight.sc-ion-picker-md{inset-inline-start:0}}@supports not (inset-inline-start: 0){.picker-above-highlight.sc-ion-picker-md{left:0}[dir=rtl].sc-ion-picker-md-h .picker-above-highlight.sc-ion-picker-md,[dir=rtl] .sc-ion-picker-md-h .picker-above-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}[dir=rtl].sc-ion-picker-md .picker-above-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.picker-above-highlight.sc-ion-picker-md:dir(rtl){left:unset;right:unset;right:0}}}.picker-below-highlight.sc-ion-picker-md{top:115px;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:119px;border-top:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, var(--ion-background-color, #fff)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background:linear-gradient(to top, var(--ion-background-color, #fff) 30%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:11}@supports (inset-inline-start: 0){.picker-below-highlight.sc-ion-picker-md{inset-inline-start:0}}@supports not (inset-inline-start: 0){.picker-below-highlight.sc-ion-picker-md{left:0}[dir=rtl].sc-ion-picker-md-h .picker-below-highlight.sc-ion-picker-md,[dir=rtl] .sc-ion-picker-md-h .picker-below-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}[dir=rtl].sc-ion-picker-md .picker-below-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.picker-below-highlight.sc-ion-picker-md:dir(rtl){left:unset;right:unset;right:0}}}",
      };
      const N = class {
          constructor(e) {
            (0, o.r)(this, e),
              (this.ionPickerColChange = (0, o.d)(
                this,
                "ionPickerColChange",
                7,
              )),
              (this.optHeight = 0),
              (this.rotateFactor = 0),
              (this.scaleFactor = 1),
              (this.velocity = 0),
              (this.y = 0),
              (this.noAnimate = !0),
              (this.colDidChange = !1),
              (this.col = void 0);
          }
          colChanged() {
            this.colDidChange = !0;
          }
          connectedCallback() {
            var e = this;
            return (0, P.c)(function* () {
              let i = 0,
                t = 0.81;
              "ios" === (0, E.b)(e) && ((i = -0.46), (t = 1)),
                (e.rotateFactor = i),
                (e.scaleFactor = t),
                (e.gesture = (yield Promise.resolve().then(
                  y.bind(y, 2528),
                )).createGesture({
                  el: e.el,
                  gestureName: "picker-swipe",
                  gesturePriority: 100,
                  threshold: 0,
                  passive: !1,
                  onStart: (a) => e.onStart(a),
                  onMove: (a) => e.onMove(a),
                  onEnd: (a) => e.onEnd(a),
                })),
                e.gesture.enable(),
                (e.tmrId = setTimeout(() => {
                  (e.noAnimate = !1), e.refresh(!0);
                }, 250));
            })();
          }
          componentDidLoad() {
            this.onDomChange();
          }
          componentDidUpdate() {
            this.colDidChange &&
              (this.onDomChange(!0, !1), (this.colDidChange = !1));
          }
          disconnectedCallback() {
            void 0 !== this.rafId && cancelAnimationFrame(this.rafId),
              this.tmrId && clearTimeout(this.tmrId),
              this.gesture && (this.gesture.destroy(), (this.gesture = void 0));
          }
          emitColChange() {
            this.ionPickerColChange.emit(this.col);
          }
          setSelected(e, i) {
            const t = e > -1 ? -e * this.optHeight : 0;
            (this.velocity = 0),
              void 0 !== this.rafId && cancelAnimationFrame(this.rafId),
              this.update(t, i, !0),
              this.emitColChange();
          }
          update(e, i, t) {
            if (!this.optsEl) return;
            let n = 0,
              a = 0;
            const { col: s, rotateFactor: l } = this,
              d = s.selectedIndex,
              c = (s.selectedIndex = this.indexForY(-e)),
              h = 0 === i ? "" : i + "ms",
              p = `scale(${this.scaleFactor})`,
              f = this.optsEl.children;
            for (let g = 0; g < f.length; g++) {
              const m = f[g],
                u = s.options[g],
                x = g * this.optHeight + e;
              let b = "";
              if (0 !== l) {
                const v = x * l;
                Math.abs(v) <= 90
                  ? ((n = 0), (a = 90), (b = `rotateX(${v}deg) `))
                  : (n = -9999);
              } else (a = 0), (n = x);
              const k = c === g;
              (b += `translate3d(0px,${n}px,${a}px) `),
                1 !== this.scaleFactor && !k && (b += p),
                this.noAnimate
                  ? ((u.duration = 0), (m.style.transitionDuration = ""))
                  : i !== u.duration &&
                    ((u.duration = i), (m.style.transitionDuration = h)),
                b !== u.transform && (u.transform = b),
                (m.style.transform = b),
                (u.selected = k),
                k ? m.classList.add(G) : m.classList.remove(G);
            }
            (this.col.prevSelected = d),
              t && (this.y = e),
              this.lastIndex !== c && ((0, F.b)(), (this.lastIndex = c));
          }
          decelerate() {
            if (0 !== this.velocity) {
              (this.velocity *= fe),
                (this.velocity =
                  this.velocity > 0
                    ? Math.max(this.velocity, 1)
                    : Math.min(this.velocity, -1));
              let e = this.y + this.velocity;
              e > this.minY
                ? ((e = this.minY), (this.velocity = 0))
                : e < this.maxY && ((e = this.maxY), (this.velocity = 0)),
                this.update(e, 0, !0),
                Math.round(e) % this.optHeight != 0 ||
                Math.abs(this.velocity) > 1
                  ? (this.rafId = requestAnimationFrame(() =>
                      this.decelerate(),
                    ))
                  : ((this.velocity = 0), this.emitColChange(), (0, F.h)());
            } else if (this.y % this.optHeight != 0) {
              const e = Math.abs(this.y % this.optHeight);
              (this.velocity = e > this.optHeight / 2 ? 1 : -1),
                this.decelerate();
            }
          }
          indexForY(e) {
            return Math.min(
              Math.max(Math.abs(Math.round(e / this.optHeight)), 0),
              this.col.options.length - 1,
            );
          }
          onStart(e) {
            e.event.cancelable && e.event.preventDefault(),
              e.event.stopPropagation(),
              (0, F.a)(),
              void 0 !== this.rafId && cancelAnimationFrame(this.rafId);
            const i = this.col.options;
            let t = i.length - 1,
              n = 0;
            for (let a = 0; a < i.length; a++)
              i[a].disabled || ((t = Math.min(t, a)), (n = Math.max(n, a)));
            (this.minY = -t * this.optHeight),
              (this.maxY = -n * this.optHeight);
          }
          onMove(e) {
            e.event.cancelable && e.event.preventDefault(),
              e.event.stopPropagation();
            let i = this.y + e.deltaY;
            i > this.minY
              ? ((i = Math.pow(i, 0.8)), (this.bounceFrom = i))
              : i < this.maxY
                ? ((i += Math.pow(this.maxY - i, 0.9)), (this.bounceFrom = i))
                : (this.bounceFrom = 0),
              this.update(i, 0, !1);
          }
          onEnd(e) {
            if (this.bounceFrom > 0)
              return this.update(this.minY, 100, !0), void this.emitColChange();
            if (this.bounceFrom < 0)
              return this.update(this.maxY, 100, !0), void this.emitColChange();
            if (
              ((this.velocity = (0, A.l)(-X, 23 * e.velocityY, X)),
              0 === this.velocity && 0 === e.deltaY)
            ) {
              const i = e.event.target.closest(".picker-opt");
              i?.hasAttribute("opt-index") &&
                this.setSelected(parseInt(i.getAttribute("opt-index"), 10), q);
            } else {
              if (((this.y += e.deltaY), Math.abs(e.velocityY) < 0.05)) {
                const i = e.deltaY > 0,
                  t = (Math.abs(this.y) % this.optHeight) / this.optHeight;
                i && t > 0.5
                  ? (this.velocity = -1 * Math.abs(this.velocity))
                  : !i && t <= 0.5 && (this.velocity = Math.abs(this.velocity));
              }
              this.decelerate();
            }
          }
          refresh(e, i) {
            var t;
            let n = this.col.options.length - 1,
              a = 0;
            const s = this.col.options;
            for (let d = 0; d < s.length; d++)
              s[d].disabled || ((n = Math.min(n, d)), (a = Math.max(a, d)));
            if (0 !== this.velocity) return;
            const l = (0, A.l)(
              n,
              null !== (t = this.col.selectedIndex) && void 0 !== t ? t : 0,
              a,
            );
            if (this.col.prevSelected !== l || e) {
              const d = l * this.optHeight * -1,
                c = i ? q : 0;
              (this.velocity = 0), this.update(d, c, !0);
            }
          }
          onDomChange(e, i) {
            const t = this.optsEl;
            t &&
              (this.optHeight = t.firstElementChild
                ? t.firstElementChild.clientHeight
                : 0),
              this.refresh(e, i);
          }
          render() {
            const e = this.col,
              i = (0, E.b)(this);
            return (0, o.h)(
              o.H,
              {
                key: "06e2ae483a3bcf4fe721ad0c48cded6a1efdc6c0",
                class: Object.assign(
                  {
                    [i]: !0,
                    "picker-col": !0,
                    "picker-opts-left": "left" === this.col.align,
                    "picker-opts-right": "right" === this.col.align,
                  },
                  (0, L.g)(e.cssClass),
                ),
                style: { "max-width": this.col.columnWidth },
              },
              e.prefix &&
                (0, o.h)(
                  "div",
                  { class: "picker-prefix", style: { width: e.prefixWidth } },
                  e.prefix,
                ),
              (0, o.h)(
                "div",
                {
                  key: "14bea013788d899edf7155eb3cc10f79fe8e4690",
                  class: "picker-opts",
                  style: { maxWidth: e.optionsWidth },
                  ref: (t) => (this.optsEl = t),
                },
                e.options.map((t, n) =>
                  (0, o.h)(
                    "button",
                    {
                      "aria-label": t.ariaLabel,
                      class: {
                        "picker-opt": !0,
                        "picker-opt-disabled": !!t.disabled,
                      },
                      "opt-index": n,
                    },
                    t.text,
                  ),
                ),
              ),
              e.suffix &&
                (0, o.h)(
                  "div",
                  { class: "picker-suffix", style: { width: e.suffixWidth } },
                  e.suffix,
                ),
            );
          }
          get el() {
            return (0, o.f)(this);
          }
          static get watchers() {
            return { col: ["colChanged"] };
          }
        },
        G = "picker-opt-selected",
        fe = 0.97,
        X = 90,
        q = 150;
      N.style = {
        ios: ".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}@supports (inset-inline-start: 0){.picker-opt{inset-inline-start:0}}@supports not (inset-inline-start: 0){.picker-opt{left:0}:host-context([dir=rtl]) .picker-opt{left:unset;right:unset;right:0}[dir=rtl] .picker-opt{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.picker-opt:dir(rtl){left:unset;right:unset;right:0}}}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;-ms-flex:1;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;-ms-flex:1;flex:1;text-align:start;white-space:nowrap}.picker-col{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.picker-prefix,.picker-suffix,.picker-opts{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:20px;line-height:42px;pointer-events:none}.picker-opt{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-transform-origin:center center;transform-origin:center center;height:46px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:20px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}:host-context([dir=rtl]) .picker-opt{-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}[dir=rtl] .picker-opt{-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}@supports selector(:dir(rtl)){.picker-opt:dir(rtl){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}}",
        md: ".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}@supports (inset-inline-start: 0){.picker-opt{inset-inline-start:0}}@supports not (inset-inline-start: 0){.picker-opt{left:0}:host-context([dir=rtl]) .picker-opt{left:unset;right:unset;right:0}[dir=rtl] .picker-opt{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.picker-opt:dir(rtl){left:unset;right:unset;right:0}}}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;-ms-flex:1;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;-ms-flex:1;flex:1;text-align:start;white-space:nowrap}.picker-col{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.picker-prefix,.picker-suffix,.picker-opts{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:22px;line-height:42px;pointer-events:none}.picker-opt{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;height:43px;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:22px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}.picker-prefix,.picker-suffix,.picker-opt.picker-opt-selected{color:var(--ion-color-primary, #3880ff)}",
      };
    },
  },
]);
