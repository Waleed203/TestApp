"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [4272],
  {
    4272: (F, _, r) => {
      r.r(_),
        r.d(_, {
          ion_select: () => j,
          ion_select_option: () => D,
          ion_select_popover: () => A,
        });
      var x = r(1528),
        s = r(2992),
        I = r(8507),
        P = r(7620),
        w = r(5984),
        f = r(6384),
        O = r(2032),
        a = r(3816),
        p = r(7716),
        c = r(5256),
        C = r(7128),
        y = r(4812),
        g = r(8523);
      r(4829), r(2784);
      const j = class {
          constructor(e) {
            (0, s.r)(this, e),
              (this.ionChange = (0, s.d)(this, "ionChange", 7)),
              (this.ionCancel = (0, s.d)(this, "ionCancel", 7)),
              (this.ionDismiss = (0, s.d)(this, "ionDismiss", 7)),
              (this.ionFocus = (0, s.d)(this, "ionFocus", 7)),
              (this.ionBlur = (0, s.d)(this, "ionBlur", 7)),
              (this.ionStyle = (0, s.d)(this, "ionStyle", 7)),
              (this.inputId = "ion-sel-" + $++),
              (this.inheritedAttributes = {}),
              (this.hasLoggedDeprecationWarning = !1),
              (this.onClick = (t) => {
                const l = t.target,
                  i = l.closest('[slot="start"], [slot="end"]');
                l === this.el || null === i
                  ? (this.setFocus(), this.open(t))
                  : t.preventDefault();
              }),
              (this.onFocus = () => {
                this.ionFocus.emit();
              }),
              (this.onBlur = () => {
                this.ionBlur.emit();
              }),
              (this.isExpanded = !1),
              (this.cancelText = "Cancel"),
              (this.color = void 0),
              (this.compareWith = void 0),
              (this.disabled = !1),
              (this.fill = void 0),
              (this.interface = "alert"),
              (this.interfaceOptions = {}),
              (this.justify = "space-between"),
              (this.label = void 0),
              (this.labelPlacement = "start"),
              (this.legacy = void 0),
              (this.multiple = !1),
              (this.name = this.inputId),
              (this.okText = "OK"),
              (this.placeholder = void 0),
              (this.selectedText = void 0),
              (this.toggleIcon = void 0),
              (this.expandedIcon = void 0),
              (this.shape = void 0),
              (this.value = void 0);
          }
          styleChanged() {
            this.emitStyle();
          }
          setValue(e) {
            (this.value = e), this.ionChange.emit({ value: e });
          }
          componentWillLoad() {
            this.inheritedAttributes = (0, f.k)(this.el, ["aria-label"]);
          }
          connectedCallback() {
            var e = this;
            return (0, x.c)(function* () {
              const { el: t } = e;
              (e.legacyFormController = (0, I.c)(t)),
                (e.notchController = (0, P.c)(
                  t,
                  () => e.notchSpacerEl,
                  () => e.labelSlot,
                )),
                e.updateOverlayOptions(),
                e.emitStyle(),
                (e.mutationO = (0, C.w)(
                  e.el,
                  "ion-select-option",
                  (0, x.c)(function* () {
                    e.updateOverlayOptions(), (0, s.i)(e);
                  }),
                ));
            })();
          }
          disconnectedCallback() {
            this.mutationO &&
              (this.mutationO.disconnect(), (this.mutationO = void 0)),
              this.notchController &&
                (this.notchController.destroy(),
                (this.notchController = void 0));
          }
          open(e) {
            var t = this;
            return (0, x.c)(function* () {
              if (t.disabled || t.isExpanded) return;
              t.isExpanded = !0;
              const l = (t.overlay = yield t.createOverlay(e));
              if (
                (l.onDidDismiss().then(() => {
                  (t.overlay = void 0),
                    (t.isExpanded = !1),
                    t.ionDismiss.emit(),
                    t.setFocus();
                }),
                yield l.present(),
                "popover" === t.interface)
              ) {
                const i = t.childOpts.map((o) => o.value).indexOf(t.value);
                if (i > -1) {
                  const o = l.querySelector(
                    `.select-interface-option:nth-child(${i + 1})`,
                  );
                  if (o) {
                    (0, f.f)(o);
                    const n = o.querySelector("ion-radio, ion-checkbox");
                    n && n.focus();
                  }
                } else {
                  const o = l.querySelector(
                    "ion-radio:not(.radio-disabled), ion-checkbox:not(.checkbox-disabled)",
                  );
                  o && ((0, f.f)(o.closest("ion-item")), o.focus());
                }
              }
              return l;
            })();
          }
          createOverlay(e) {
            let t = this.interface;
            return (
              "action-sheet" === t &&
                this.multiple &&
                (console.warn(
                  `Select interface cannot be "${t}" with a multi-value select. Using the "alert" interface instead.`,
                ),
                (t = "alert")),
              "popover" === t &&
                !e &&
                (console.warn(
                  `Select interface cannot be a "${t}" without passing an event. Using the "alert" interface instead.`,
                ),
                (t = "alert")),
              "action-sheet" === t
                ? this.openActionSheet()
                : "popover" === t
                  ? this.openPopover(e)
                  : this.openAlert()
            );
          }
          updateOverlayOptions() {
            const e = this.overlay;
            if (!e) return;
            const t = this.childOpts,
              l = this.value;
            switch (this.interface) {
              case "action-sheet":
                e.buttons = this.createActionSheetButtons(t, l);
                break;
              case "popover":
                const i = e.querySelector("ion-select-popover");
                i && (i.options = this.createPopoverOptions(t, l));
                break;
              case "alert":
                e.inputs = this.createAlertInputs(
                  t,
                  this.multiple ? "checkbox" : "radio",
                  l,
                );
            }
          }
          createActionSheetButtons(e, t) {
            const l = e.map((i) => {
              const o = E(i),
                n = Array.from(i.classList)
                  .filter((d) => "hydrated" !== d)
                  .join(" "),
                h = `${L} ${n}`;
              return {
                role: (0, w.i)(t, o, this.compareWith) ? "selected" : "",
                text: i.textContent,
                cssClass: h,
                handler: () => {
                  this.setValue(o);
                },
              };
            });
            return (
              l.push({
                text: this.cancelText,
                role: "cancel",
                handler: () => {
                  this.ionCancel.emit();
                },
              }),
              l
            );
          }
          createAlertInputs(e, t, l) {
            return e.map((o) => {
              const n = E(o),
                h = Array.from(o.classList)
                  .filter((u) => "hydrated" !== u)
                  .join(" ");
              return {
                type: t,
                cssClass: `${L} ${h}`,
                label: o.textContent || "",
                value: n,
                checked: (0, w.i)(l, n, this.compareWith),
                disabled: o.disabled,
              };
            });
          }
          createPopoverOptions(e, t) {
            return e.map((i) => {
              const o = E(i),
                n = Array.from(i.classList)
                  .filter((d) => "hydrated" !== d)
                  .join(" ");
              return {
                text: i.textContent || "",
                cssClass: `${L} ${n}`,
                value: o,
                checked: (0, w.i)(t, o, this.compareWith),
                disabled: i.disabled,
                handler: (d) => {
                  this.setValue(d), this.multiple || this.close();
                },
              };
            });
          }
          openPopover(e) {
            var t = this;
            return (0, x.c)(function* () {
              const { fill: l, labelPlacement: i } = t,
                o = t.interfaceOptions,
                n = (0, g.b)(t),
                h = "md" !== n,
                d = t.multiple,
                u = t.value;
              let b = e,
                v = "auto";
              if (t.legacyFormController.hasLegacyControl()) {
                const m = t.el.closest("ion-item");
                m &&
                  (m.classList.contains("item-label-floating") ||
                    m.classList.contains("item-label-stacked")) &&
                  ((b = Object.assign(Object.assign({}, e), {
                    detail: { ionShadowTarget: m },
                  })),
                  (v = "cover"));
              } else
                "floating" === i ||
                "stacked" === i ||
                ("md" === n && void 0 !== l)
                  ? (v = "cover")
                  : (b = Object.assign(Object.assign({}, e), {
                      detail: { ionShadowTarget: t.nativeWrapperEl },
                    }));
              const k = Object.assign(
                Object.assign(
                  {
                    mode: n,
                    event: b,
                    alignment: "center",
                    size: v,
                    showBackdrop: h,
                  },
                  o,
                ),
                {
                  component: "ion-select-popover",
                  cssClass: ["select-popover", o.cssClass],
                  componentProps: {
                    header: o.header,
                    subHeader: o.subHeader,
                    message: o.message,
                    multiple: d,
                    value: u,
                    options: t.createPopoverOptions(t.childOpts, u),
                  },
                },
              );
              return a.c.create(k);
            })();
          }
          openActionSheet() {
            var e = this;
            return (0, x.c)(function* () {
              const t = (0, g.b)(e),
                l = e.interfaceOptions,
                i = Object.assign(Object.assign({ mode: t }, l), {
                  buttons: e.createActionSheetButtons(e.childOpts, e.value),
                  cssClass: ["select-action-sheet", l.cssClass],
                });
              return a.b.create(i);
            })();
          }
          openAlert() {
            var e = this;
            return (0, x.c)(function* () {
              let t, l;
              e.legacyFormController.hasLegacyControl()
                ? ((t = e.getLabel()), (l = t ? t.textContent : null))
                : (l = e.labelText);
              const i = e.interfaceOptions,
                o = e.multiple ? "checkbox" : "radio",
                n = (0, g.b)(e),
                h = Object.assign(Object.assign({ mode: n }, i), {
                  header: i.header ? i.header : l,
                  inputs: e.createAlertInputs(e.childOpts, o, e.value),
                  buttons: [
                    {
                      text: e.cancelText,
                      role: "cancel",
                      handler: () => {
                        e.ionCancel.emit();
                      },
                    },
                    {
                      text: e.okText,
                      handler: (d) => {
                        e.setValue(d);
                      },
                    },
                  ],
                  cssClass: [
                    "select-alert",
                    i.cssClass,
                    e.multiple
                      ? "multiple-select-alert"
                      : "single-select-alert",
                  ],
                });
              return a.a.create(h);
            })();
          }
          close() {
            return this.overlay ? this.overlay.dismiss() : Promise.resolve(!1);
          }
          getLabel() {
            return (0, f.h)(this.el);
          }
          hasValue() {
            return "" !== this.getText();
          }
          get childOpts() {
            return Array.from(this.el.querySelectorAll("ion-select-option"));
          }
          get labelText() {
            const { label: e } = this;
            if (void 0 !== e) return e;
            const { labelSlot: t } = this;
            return null !== t ? t.textContent : void 0;
          }
          getText() {
            const e = this.selectedText;
            return null != e && "" !== e
              ? e
              : R(this.childOpts, this.value, this.compareWith);
          }
          setFocus() {
            this.focusEl && this.focusEl.focus();
          }
          emitStyle() {
            const { disabled: e } = this,
              t = { "interactive-disabled": e };
            this.legacyFormController.hasLegacyControl() &&
              ((t.interactive = !0),
              (t.select = !0),
              (t["select-disabled"] = e),
              (t["has-placeholder"] = void 0 !== this.placeholder),
              (t["has-value"] = this.hasValue()),
              (t["has-focus"] = this.isExpanded),
              (t.legacy = !!this.legacy)),
              this.ionStyle.emit(t);
          }
          renderLabel() {
            const { label: e } = this;
            return (0, s.h)(
              "div",
              {
                class: {
                  "label-text-wrapper": !0,
                  "label-text-wrapper-hidden": !this.hasLabel,
                },
                part: "label",
              },
              void 0 === e
                ? (0, s.h)("slot", { name: "label" })
                : (0, s.h)("div", { class: "label-text" }, e),
            );
          }
          componentDidRender() {
            var e;
            null === (e = this.notchController) ||
              void 0 === e ||
              e.calculateNotchWidth();
          }
          get labelSlot() {
            return this.el.querySelector('[slot="label"]');
          }
          get hasLabel() {
            return void 0 !== this.label || null !== this.labelSlot;
          }
          renderLabelContainer() {
            return "md" === (0, g.b)(this) && "outline" === this.fill
              ? [
                  (0, s.h)(
                    "div",
                    { class: "select-outline-container" },
                    (0, s.h)("div", { class: "select-outline-start" }),
                    (0, s.h)(
                      "div",
                      {
                        class: {
                          "select-outline-notch": !0,
                          "select-outline-notch-hidden": !this.hasLabel,
                        },
                      },
                      (0, s.h)(
                        "div",
                        {
                          class: "notch-spacer",
                          "aria-hidden": "true",
                          ref: (l) => (this.notchSpacerEl = l),
                        },
                        this.label,
                      ),
                    ),
                    (0, s.h)("div", { class: "select-outline-end" }),
                  ),
                  this.renderLabel(),
                ]
              : this.renderLabel();
          }
          renderSelect() {
            const {
                disabled: e,
                el: t,
                isExpanded: l,
                expandedIcon: i,
                labelPlacement: o,
                justify: n,
                placeholder: h,
                fill: d,
                shape: u,
                name: b,
                value: v,
              } = this,
              k = (0, g.b)(this),
              m = "floating" === o || "stacked" === o,
              S = !m,
              G = (0, p.i)(t) ? "rtl" : "ltr",
              M = (0, c.h)("ion-item", this.el),
              N = "md" === k && "outline" !== d && !M,
              B = this.hasValue(),
              J = null !== t.querySelector('[slot="start"], [slot="end"]');
            (0, f.d)(!0, t, b, z(v), e);
            const Q = "stacked" === o || ("floating" === o && (B || l || J));
            return (0, s.h)(
              s.H,
              {
                onClick: this.onClick,
                class: (0, c.c)(this.color, {
                  [k]: !0,
                  "in-item": M,
                  "in-item-color": (0, c.h)("ion-item.ion-color", t),
                  "select-disabled": e,
                  "select-expanded": l,
                  "has-expanded-icon": void 0 !== i,
                  "has-value": B,
                  "label-floating": Q,
                  "has-placeholder": void 0 !== h,
                  "ion-focusable": !0,
                  [`select-${G}`]: !0,
                  [`select-fill-${d}`]: void 0 !== d,
                  [`select-justify-${n}`]: S,
                  [`select-shape-${u}`]: void 0 !== u,
                  [`select-label-placement-${o}`]: !0,
                }),
              },
              (0, s.h)(
                "label",
                { class: "select-wrapper", id: "select-label" },
                this.renderLabelContainer(),
                (0, s.h)(
                  "div",
                  { class: "select-wrapper-inner" },
                  (0, s.h)("slot", { name: "start" }),
                  (0, s.h)(
                    "div",
                    {
                      class: "native-wrapper",
                      ref: (X) => (this.nativeWrapperEl = X),
                      part: "container",
                    },
                    this.renderSelectText(),
                    this.renderListbox(),
                  ),
                  (0, s.h)("slot", { name: "end" }),
                  !m && this.renderSelectIcon(),
                ),
                m && this.renderSelectIcon(),
                N && (0, s.h)("div", { class: "select-highlight" }),
              ),
            );
          }
          renderLegacySelect() {
            this.hasLoggedDeprecationWarning ||
              ((0, O.p)(
                'ion-select now requires providing a label with either the "label" property or the "aria-label" attribute. To migrate, remove any usage of "ion-label" and pass the label text to either the "label" property or the "aria-label" attribute.\n\nExample: <ion-select label="Favorite Color">...</ion-select>\nExample with aria-label: <ion-select aria-label="Favorite Color">...</ion-select>\n\nDevelopers can use the "legacy" property to continue using the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.',
                this.el,
              ),
              this.legacy &&
                (0, O.p)(
                  'ion-select is being used with the "legacy" property enabled which will forcibly enable the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.\n    Developers can dismiss this warning by removing their usage of the "legacy" property and using the new select syntax.',
                  this.el,
                ),
              (this.hasLoggedDeprecationWarning = !0));
            const {
                disabled: e,
                el: t,
                inputId: l,
                isExpanded: i,
                expandedIcon: o,
                name: n,
                placeholder: h,
                value: d,
              } = this,
              u = (0, g.b)(this),
              { labelText: b, labelId: v } = (0, f.e)(t, l);
            (0, f.d)(!0, t, n, z(d), e);
            let m = this.getText();
            "" === m && void 0 !== h && (m = h);
            const S = void 0 !== b ? ("" !== m ? `${m}, ${b}` : b) : m;
            return (0, s.h)(
              s.H,
              {
                onClick: this.onClick,
                role: "button",
                "aria-haspopup": "listbox",
                "aria-disabled": e ? "true" : null,
                "aria-label": S,
                class: {
                  [u]: !0,
                  "in-item": (0, c.h)("ion-item", t),
                  "in-item-color": (0, c.h)("ion-item.ion-color", t),
                  "select-disabled": e,
                  "select-expanded": i,
                  "has-expanded-icon": void 0 !== o,
                  "legacy-select": !0,
                },
              },
              this.renderSelectText(),
              this.renderSelectIcon(),
              (0, s.h)("label", { id: v }, S),
              this.renderListbox(),
            );
          }
          renderSelectText() {
            const { placeholder: e } = this;
            let l = !1,
              i = this.getText();
            return (
              "" === i && void 0 !== e && ((i = e), (l = !0)),
              (0, s.h)(
                "div",
                {
                  "aria-hidden": "true",
                  class: { "select-text": !0, "select-placeholder": l },
                  part: l ? "placeholder" : "text",
                },
                i,
              )
            );
          }
          renderSelectIcon() {
            const e = (0, g.b)(this),
              { isExpanded: t, toggleIcon: l, expandedIcon: i } = this;
            let o;
            return (
              (o = t && void 0 !== i ? i : l ?? ("ios" === e ? y.w : y.q)),
              (0, s.h)("ion-icon", {
                class: "select-icon",
                part: "icon",
                "aria-hidden": "true",
                icon: o,
              })
            );
          }
          get ariaLabel() {
            var e, t;
            const {
                placeholder: l,
                el: i,
                inputId: o,
                inheritedAttributes: n,
              } = this,
              h = this.getText(),
              { labelText: d } = (0, f.e)(i, o),
              u =
                null !==
                  (t =
                    null !== (e = this.labelText) && void 0 !== e
                      ? e
                      : n["aria-label"]) && void 0 !== t
                  ? t
                  : d;
            let b = h;
            return (
              "" === b && void 0 !== l && (b = l),
              void 0 !== u && (b = "" === b ? u : `${u}, ${b}`),
              b
            );
          }
          renderListbox() {
            const { disabled: e, inputId: t, isExpanded: l } = this;
            return (0, s.h)("button", {
              disabled: e,
              id: t,
              "aria-label": this.ariaLabel,
              "aria-haspopup": "dialog",
              "aria-expanded": `${l}`,
              onFocus: this.onFocus,
              onBlur: this.onBlur,
              ref: (i) => (this.focusEl = i),
            });
          }
          render() {
            const { legacyFormController: e } = this;
            return e.hasLegacyControl()
              ? this.renderLegacySelect()
              : this.renderSelect();
          }
          get el() {
            return (0, s.f)(this);
          }
          static get watchers() {
            return {
              disabled: ["styleChanged"],
              isExpanded: ["styleChanged"],
              placeholder: ["styleChanged"],
              value: ["styleChanged"],
            };
          }
        },
        E = (e) => {
          const t = e.value;
          return void 0 === t ? e.textContent || "" : t;
        },
        z = (e) => {
          if (null != e) return Array.isArray(e) ? e.join(",") : e.toString();
        },
        R = (e, t, l) =>
          void 0 === t
            ? ""
            : Array.isArray(t)
              ? t
                  .map((i) => T(e, i, l))
                  .filter((i) => null !== i)
                  .join(", ")
              : T(e, t, l) || "",
        T = (e, t, l) => {
          const i = e.find((o) => (0, w.c)(t, E(o), l));
          return i ? i.textContent : null;
        };
      let $ = 0;
      const L = "select-interface-option";
      j.style = {
        ios: ":host{--padding-top:0px;--padding-end:0px;--padding-bottom:0px;--padding-start:0px;--placeholder-color:currentColor;--placeholder-opacity:0.6;--background:transparent;--border-style:solid;--highlight-color-focused:var(--ion-color-primary, #3880ff);--highlight-color-valid:var(--ion-color-success, #2dd36f);--highlight-color-invalid:var(--ion-color-danger, #eb445a);--highlight-color:var(--highlight-color-focused);display:block;position:relative;font-family:var(--ion-font-family, inherit);white-space:nowrap;cursor:pointer;z-index:2}:host(:not(.legacy-select)){width:100%;min-height:44px}:host(.select-label-placement-floating),:host(.select-label-placement-stacked){min-height:56px}:host(.ion-color){--highlight-color-focused:var(--ion-color-base)}:host(.legacy-select){-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;overflow:hidden}:host(.in-item:not(.legacy-select)){-ms-flex:1 1 0px;flex:1 1 0}:host(.in-item.legacy-select){position:static;max-width:45%}:host(.select-disabled){pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}:host([slot=start]:not(.legacy-select)),:host([slot=end]:not(.legacy-select)){width:auto}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}:host(.legacy-select) label{top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}@supports (inset-inline-start: 0){:host(.legacy-select) label{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.legacy-select) label{left:0}:host-context([dir=rtl]):host(.legacy-select) label,:host-context([dir=rtl]).legacy-select label{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(.legacy-select:dir(rtl)) label{left:unset;right:unset;right:0}}}:host(.legacy-select) label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0;position:relative;-ms-flex-negative:0;flex-shrink:0}:host(.in-item-color) .select-icon{color:inherit}:host(.select-label-placement-stacked) .select-icon,:host(.select-label-placement-floating) .select-icon{position:absolute;height:100%}:host(.select-ltr.select-label-placement-stacked) .select-icon,:host(.select-ltr.select-label-placement-floating) .select-icon{right:var(--padding-end, 0)}:host(.select-rtl.select-label-placement-stacked) .select-icon,:host(.select-rtl.select-label-placement-floating) .select-icon{left:var(--padding-start, 0)}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:inherit;overflow:hidden}.select-wrapper{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;-webkit-transition:background-color 15ms linear;transition:background-color 15ms linear;background:var(--background);line-height:normal;cursor:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.select-wrapper .select-placeholder{-webkit-transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.select-wrapper-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;overflow:hidden}:host(.select-label-placement-stacked) .select-wrapper-inner,:host(.select-label-placement-floating) .select-wrapper-inner{-ms-flex-positive:1;flex-grow:1}:host(.ion-touched.ion-invalid){--highlight-color:var(--highlight-color-invalid)}:host(.ion-valid){--highlight-color:var(--highlight-color-valid)}.label-text-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;max-width:200px;-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);pointer-events:none}.label-text,::slotted([slot=label]){text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden,.select-outline-notch-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);overflow:hidden}:host(.select-justify-space-between) .select-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.select-justify-start) .select-wrapper{-ms-flex-pack:start;justify-content:start}:host(.select-justify-end) .select-wrapper{-ms-flex-pack:end;justify-content:end}:host(.select-label-placement-start) .select-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.select-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.select-label-placement-end) .select-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.select-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.select-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.select-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.select-label-placement-stacked) .select-wrapper,:host(.select-label-placement-floating) .select-wrapper{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:start}:host(.select-label-placement-stacked) .label-text-wrapper,:host(.select-label-placement-floating) .label-text-wrapper{max-width:100%}:host(.select-ltr.select-label-placement-stacked) .label-text-wrapper,:host(.select-ltr.select-label-placement-floating) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host(.select-rtl.select-label-placement-stacked) .label-text-wrapper,:host(.select-rtl.select-label-placement-floating) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}:host(.select-label-placement-stacked) .native-wrapper,:host(.select-label-placement-floating) .native-wrapper{margin-left:0;margin-right:0;margin-top:1px;margin-bottom:0;-ms-flex-positive:1;flex-grow:1;width:100%}:host(.select-label-placement-floating) .label-text-wrapper{-webkit-transform:translateY(100%) scale(1);transform:translateY(100%) scale(1)}:host(.select-label-placement-floating:not(.label-floating)) .native-wrapper .select-placeholder{opacity:0}:host(.select-expanded.select-label-placement-floating) .native-wrapper .select-placeholder,:host(.ion-focused.select-label-placement-floating) .native-wrapper .select-placeholder,:host(.has-value.select-label-placement-floating) .native-wrapper .select-placeholder{opacity:1}:host(.label-floating) .label-text-wrapper{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75);max-width:calc(100% / 0.75)}::slotted([slot=start]),::slotted([slot=end]){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){-webkit-margin-end:16px;margin-inline-end:16px;-webkit-margin-start:0;margin-inline-start:0}::slotted([slot=end]){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.legacy-select){--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:16px}.select-icon{width:1.125rem;height:1.125rem;color:var(--ion-color-step-650, #595959)}:host(.select-label-placement-stacked) .select-wrapper-inner,:host(.select-label-placement-floating) .select-wrapper-inner{width:calc(100% - 1.125rem - 4px)}:host(.select-disabled){opacity:0.3}::slotted(ion-button[slot=start].button-has-icon-only),::slotted(ion-button[slot=end].button-has-icon-only){--border-radius:50%;--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;aspect-ratio:1}",
        md: ":host{--padding-top:0px;--padding-end:0px;--padding-bottom:0px;--padding-start:0px;--placeholder-color:currentColor;--placeholder-opacity:0.6;--background:transparent;--border-style:solid;--highlight-color-focused:var(--ion-color-primary, #3880ff);--highlight-color-valid:var(--ion-color-success, #2dd36f);--highlight-color-invalid:var(--ion-color-danger, #eb445a);--highlight-color:var(--highlight-color-focused);display:block;position:relative;font-family:var(--ion-font-family, inherit);white-space:nowrap;cursor:pointer;z-index:2}:host(:not(.legacy-select)){width:100%;min-height:44px}:host(.select-label-placement-floating),:host(.select-label-placement-stacked){min-height:56px}:host(.ion-color){--highlight-color-focused:var(--ion-color-base)}:host(.legacy-select){-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;overflow:hidden}:host(.in-item:not(.legacy-select)){-ms-flex:1 1 0px;flex:1 1 0}:host(.in-item.legacy-select){position:static;max-width:45%}:host(.select-disabled){pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}:host([slot=start]:not(.legacy-select)),:host([slot=end]:not(.legacy-select)){width:auto}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}:host(.legacy-select) label{top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}@supports (inset-inline-start: 0){:host(.legacy-select) label{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.legacy-select) label{left:0}:host-context([dir=rtl]):host(.legacy-select) label,:host-context([dir=rtl]).legacy-select label{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(.legacy-select:dir(rtl)) label{left:unset;right:unset;right:0}}}:host(.legacy-select) label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0;position:relative;-ms-flex-negative:0;flex-shrink:0}:host(.in-item-color) .select-icon{color:inherit}:host(.select-label-placement-stacked) .select-icon,:host(.select-label-placement-floating) .select-icon{position:absolute;height:100%}:host(.select-ltr.select-label-placement-stacked) .select-icon,:host(.select-ltr.select-label-placement-floating) .select-icon{right:var(--padding-end, 0)}:host(.select-rtl.select-label-placement-stacked) .select-icon,:host(.select-rtl.select-label-placement-floating) .select-icon{left:var(--padding-start, 0)}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:inherit;overflow:hidden}.select-wrapper{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;-webkit-transition:background-color 15ms linear;transition:background-color 15ms linear;background:var(--background);line-height:normal;cursor:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.select-wrapper .select-placeholder{-webkit-transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.select-wrapper-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;overflow:hidden}:host(.select-label-placement-stacked) .select-wrapper-inner,:host(.select-label-placement-floating) .select-wrapper-inner{-ms-flex-positive:1;flex-grow:1}:host(.ion-touched.ion-invalid){--highlight-color:var(--highlight-color-invalid)}:host(.ion-valid){--highlight-color:var(--highlight-color-valid)}.label-text-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;max-width:200px;-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);pointer-events:none}.label-text,::slotted([slot=label]){text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden,.select-outline-notch-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);overflow:hidden}:host(.select-justify-space-between) .select-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.select-justify-start) .select-wrapper{-ms-flex-pack:start;justify-content:start}:host(.select-justify-end) .select-wrapper{-ms-flex-pack:end;justify-content:end}:host(.select-label-placement-start) .select-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.select-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.select-label-placement-end) .select-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.select-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.select-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.select-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.select-label-placement-stacked) .select-wrapper,:host(.select-label-placement-floating) .select-wrapper{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:start}:host(.select-label-placement-stacked) .label-text-wrapper,:host(.select-label-placement-floating) .label-text-wrapper{max-width:100%}:host(.select-ltr.select-label-placement-stacked) .label-text-wrapper,:host(.select-ltr.select-label-placement-floating) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host(.select-rtl.select-label-placement-stacked) .label-text-wrapper,:host(.select-rtl.select-label-placement-floating) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}:host(.select-label-placement-stacked) .native-wrapper,:host(.select-label-placement-floating) .native-wrapper{margin-left:0;margin-right:0;margin-top:1px;margin-bottom:0;-ms-flex-positive:1;flex-grow:1;width:100%}:host(.select-label-placement-floating) .label-text-wrapper{-webkit-transform:translateY(100%) scale(1);transform:translateY(100%) scale(1)}:host(.select-label-placement-floating:not(.label-floating)) .native-wrapper .select-placeholder{opacity:0}:host(.select-expanded.select-label-placement-floating) .native-wrapper .select-placeholder,:host(.ion-focused.select-label-placement-floating) .native-wrapper .select-placeholder,:host(.has-value.select-label-placement-floating) .native-wrapper .select-placeholder{opacity:1}:host(.label-floating) .label-text-wrapper{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75);max-width:calc(100% / 0.75)}::slotted([slot=start]),::slotted([slot=end]){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){-webkit-margin-end:16px;margin-inline-end:16px;-webkit-margin-start:0;margin-inline-start:0}::slotted([slot=end]){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.select-fill-solid){--background:var(--ion-color-step-50, #f2f2f2);--border-color:var(--ion-color-step-500, gray);--border-radius:4px;--padding-start:16px;--padding-end:16px;min-height:56px}:host(.select-fill-solid) .select-wrapper{border-bottom:var(--border-width) var(--border-style) var(--border-color)}:host(.has-focus.select-fill-solid.ion-valid),:host(.select-fill-solid.ion-touched.ion-invalid){--border-color:var(--highlight-color)}:host(.select-fill-solid) .select-bottom{border-top:none}@media (any-hover: hover){:host(.select-fill-solid:hover){--background:var(--ion-color-step-100, #e6e6e6);--border-color:var(--ion-color-step-750, #404040)}}:host(.select-fill-solid.select-expanded),:host(.select-fill-solid.ion-focused){--background:var(--ion-color-step-150, #d9d9d9);--border-color:var(--ion-color-step-750, #404040)}:host(.select-fill-solid) .select-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0px;border-bottom-left-radius:0px}:host-context([dir=rtl]):host(.select-fill-solid) .select-wrapper,:host-context([dir=rtl]).select-fill-solid .select-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0px;border-bottom-left-radius:0px}@supports selector(:dir(rtl)){:host(.select-fill-solid:dir(rtl)) .select-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0px;border-bottom-left-radius:0px}}:host(.label-floating.select-fill-solid) .label-text-wrapper{max-width:calc(100% / 0.75)}:host(.select-fill-outline){--border-color:var(--ion-color-step-300, #b3b3b3);--border-radius:4px;--padding-start:16px;--padding-end:16px;min-height:56px}:host(.select-fill-outline.select-shape-round){--border-radius:28px;--padding-start:32px;--padding-end:32px}:host(.has-focus.select-fill-outline.ion-valid),:host(.select-fill-outline.ion-touched.ion-invalid){--border-color:var(--highlight-color)}@media (any-hover: hover){:host(.select-fill-outline:hover){--border-color:var(--ion-color-step-750, #404040)}}:host(.select-fill-outline.select-expanded),:host(.select-fill-outline.ion-focused){--border-width:2px;--border-color:var(--highlight-color)}:host(.select-fill-outline) .select-bottom{border-top:none}:host(.select-fill-outline) .select-wrapper{border-bottom:none}:host(.select-ltr.select-fill-outline.select-label-placement-stacked) .label-text-wrapper,:host(.select-ltr.select-fill-outline.select-label-placement-floating) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host(.select-rtl.select-fill-outline.select-label-placement-stacked) .label-text-wrapper,:host(.select-rtl.select-fill-outline.select-label-placement-floating) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}:host(.select-fill-outline.select-label-placement-stacked) .label-text-wrapper,:host(.select-fill-outline.select-label-placement-floating) .label-text-wrapper{position:absolute;max-width:calc(100% - var(--padding-start) - var(--padding-end))}:host(.select-fill-outline) .label-text-wrapper{position:relative;z-index:1}:host(.label-floating.select-fill-outline) .label-text-wrapper{-webkit-transform:translateY(-32%) scale(0.75);transform:translateY(-32%) scale(0.75);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;max-width:calc((100% - var(--padding-start) - var(--padding-end) - 8px) / 0.75)}:host(.select-fill-outline.select-label-placement-stacked) select,:host(.select-fill-outline.select-label-placement-floating) select{margin-left:0;margin-right:0;margin-top:6px;margin-bottom:6px}:host(.select-fill-outline) .select-outline-container{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;width:100%;height:100%}:host(.select-fill-outline) .select-outline-start,:host(.select-fill-outline) .select-outline-end{pointer-events:none}:host(.select-fill-outline) .select-outline-start,:host(.select-fill-outline) .select-outline-notch,:host(.select-fill-outline) .select-outline-end{border-top:var(--border-width) var(--border-style) var(--border-color);border-bottom:var(--border-width) var(--border-style) var(--border-color);-webkit-box-sizing:border-box;box-sizing:border-box}:host(.select-fill-outline) .select-outline-notch{max-width:calc(100% - var(--padding-start) - var(--padding-end))}:host(.select-fill-outline) .notch-spacer{-webkit-padding-end:8px;padding-inline-end:8px;font-size:calc(1em * 0.75);opacity:0;pointer-events:none}:host(.select-fill-outline) .select-outline-start{-webkit-border-start:var(--border-width) var(--border-style) var(--border-color);border-inline-start:var(--border-width) var(--border-style) var(--border-color)}:host(.select-ltr.select-fill-outline) .select-outline-start{border-radius:var(--border-radius) 0px 0px var(--border-radius)}:host(.select-rtl.select-fill-outline) .select-outline-start{border-radius:0px var(--border-radius) var(--border-radius) 0px}:host(.select-fill-outline) .select-outline-start{width:calc(var(--padding-start) - 4px)}:host(.select-fill-outline) .select-outline-end{-webkit-border-end:var(--border-width) var(--border-style) var(--border-color);border-inline-end:var(--border-width) var(--border-style) var(--border-color)}:host(.select-ltr.select-fill-outline) .select-outline-end{border-radius:0px var(--border-radius) var(--border-radius) 0px}:host(.select-rtl.select-fill-outline) .select-outline-end{border-radius:var(--border-radius) 0px 0px var(--border-radius)}:host(.select-fill-outline) .select-outline-end{-ms-flex-positive:1;flex-grow:1}:host(.label-floating.select-fill-outline) .select-outline-notch{border-top:none}:host{--border-width:1px;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))))}:host(.legacy-select){--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:16px}.select-icon{width:0.8125rem;-webkit-transition:-webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);color:var(--ion-color-step-500, gray)}:host(.select-label-placement-floating.select-expanded) .label-text-wrapper,:host(.select-label-placement-floating.ion-focused) .label-text-wrapper,:host(.select-label-placement-stacked.select-expanded) .label-text-wrapper,:host(.select-label-placement-stacked.ion-focused) .label-text-wrapper{color:var(--highlight-color)}:host(.has-focus.select-label-placement-floating.ion-valid) .label-text-wrapper,:host(.select-label-placement-floating.ion-touched.ion-invalid) .label-text-wrapper,:host(.has-focus.select-label-placement-stacked.ion-valid) .label-text-wrapper,:host(.select-label-placement-stacked.ion-touched.ion-invalid) .label-text-wrapper{color:var(--highlight-color)}.select-highlight{bottom:-1px;position:absolute;width:100%;height:2px;-webkit-transform:scale(0);transform:scale(0);-webkit-transition:-webkit-transform 200ms;transition:-webkit-transform 200ms;transition:transform 200ms;transition:transform 200ms, -webkit-transform 200ms;background:var(--highlight-color)}@supports (inset-inline-start: 0){.select-highlight{inset-inline-start:0}}@supports not (inset-inline-start: 0){.select-highlight{left:0}:host-context([dir=rtl]) .select-highlight{left:unset;right:unset;right:0}[dir=rtl] .select-highlight{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.select-highlight:dir(rtl){left:unset;right:unset;right:0}}}:host(.select-expanded) .select-highlight,:host(.ion-focused) .select-highlight{-webkit-transform:scale(1);transform:scale(1)}:host(.in-item) .select-highlight{bottom:0}@supports (inset-inline-start: 0){:host(.in-item) .select-highlight{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.in-item) .select-highlight{left:0}:host-context([dir=rtl]):host(.in-item) .select-highlight,:host-context([dir=rtl]).in-item .select-highlight{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(.in-item:dir(rtl)) .select-highlight{left:unset;right:unset;right:0}}}:host(.select-expanded:not(.legacy-select):not(.has-expanded-icon)) .select-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.select-expanded) .select-wrapper .select-icon,:host(.has-focus.ion-valid) .select-wrapper .select-icon,:host(.ion-touched.ion-invalid) .select-wrapper .select-icon,:host(.ion-focused) .select-wrapper .select-icon{color:var(--highlight-color)}:host-context(.item-label-stacked) .select-icon,:host-context(.item-label-floating:not(.item-fill-outline)) .select-icon,:host-context(.item-label-floating.item-fill-outline){-webkit-transform:translate3d(0,  -9px,  0);transform:translate3d(0,  -9px,  0)}:host-context(.item-has-focus):host(:not(.has-expanded-icon)) .select-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host-context(.item-has-focus.item-label-stacked):host(:not(.has-expanded-icon)) .select-icon,:host-context(.item-has-focus.item-label-floating:not(.item-fill-outline)):host(:not(.has-expanded-icon)) .select-icon{-webkit-transform:translate3d(0,  -9px,  0) rotate(180deg);transform:translate3d(0,  -9px,  0) rotate(180deg)}:host(.select-shape-round){--border-radius:16px}:host(.select-label-placement-stacked) .select-wrapper-inner,:host(.select-label-placement-floating) .select-wrapper-inner{width:calc(100% - 0.8125rem - 4px)}:host(.select-disabled){opacity:0.38}::slotted(ion-button[slot=start].button-has-icon-only),::slotted(ion-button[slot=end].button-has-icon-only){--border-radius:50%;--padding-start:8px;--padding-end:8px;--padding-top:8px;--padding-bottom:8px;aspect-ratio:1;min-height:40px}",
      };
      const D = class {
        constructor(e) {
          (0, s.r)(this, e),
            (this.inputId = "ion-selopt-" + V++),
            (this.disabled = !1),
            (this.value = void 0);
        }
        render() {
          return (0, s.h)(s.H, {
            key: "fe62f2d62ede6866e20969a2e7ae25453648fcef",
            role: "option",
            id: this.inputId,
            class: (0, g.b)(this),
          });
        }
        get el() {
          return (0, s.f)(this);
        }
      };
      let V = 0;
      D.style = ":host{display:none}";
      const A = class {
        constructor(e) {
          (0, s.r)(this, e),
            (this.header = void 0),
            (this.subHeader = void 0),
            (this.message = void 0),
            (this.multiple = void 0),
            (this.options = []);
        }
        findOptionFromEvent(e) {
          const { options: t } = this;
          return t.find((l) => l.value === e.target.value);
        }
        callOptionHandler(e) {
          const t = this.findOptionFromEvent(e),
            l = this.getValues(e);
          t?.handler && (0, a.s)(t.handler, l);
        }
        dismissParentPopover() {
          const e = this.el.closest("ion-popover");
          e && e.dismiss();
        }
        setChecked(e) {
          const { multiple: t } = this,
            l = this.findOptionFromEvent(e);
          t && l && (l.checked = e.detail.checked);
        }
        getValues(e) {
          const { multiple: t, options: l } = this;
          if (t) return l.filter((o) => o.checked).map((o) => o.value);
          const i = this.findOptionFromEvent(e);
          return i ? i.value : void 0;
        }
        renderOptions(e) {
          const { multiple: t } = this;
          return !0 === t
            ? this.renderCheckboxOptions(e)
            : this.renderRadioOptions(e);
        }
        renderCheckboxOptions(e) {
          return e.map((t) =>
            (0, s.h)(
              "ion-item",
              {
                class: Object.assign(
                  { "item-checkbox-checked": t.checked },
                  (0, c.g)(t.cssClass),
                ),
              },
              (0, s.h)(
                "ion-checkbox",
                {
                  value: t.value,
                  disabled: t.disabled,
                  checked: t.checked,
                  justify: "start",
                  labelPlacement: "end",
                  onIonChange: (l) => {
                    this.setChecked(l),
                      this.callOptionHandler(l),
                      (0, s.i)(this);
                  },
                },
                t.text,
              ),
            ),
          );
        }
        renderRadioOptions(e) {
          const t = e.filter((l) => l.checked).map((l) => l.value)[0];
          return (0, s.h)(
            "ion-radio-group",
            { value: t, onIonChange: (l) => this.callOptionHandler(l) },
            e.map((l) =>
              (0, s.h)(
                "ion-item",
                {
                  class: Object.assign(
                    { "item-radio-checked": l.value === t },
                    (0, c.g)(l.cssClass),
                  ),
                },
                (0, s.h)(
                  "ion-radio",
                  {
                    value: l.value,
                    disabled: l.disabled,
                    onClick: () => this.dismissParentPopover(),
                    onKeyUp: (i) => {
                      " " === i.key && this.dismissParentPopover();
                    },
                  },
                  l.text,
                ),
              ),
            ),
          );
        }
        render() {
          const { header: e, message: t, options: l, subHeader: i } = this,
            o = void 0 !== i || void 0 !== t;
          return (0, s.h)(
            s.H,
            {
              key: "9d3995131364d4f1d282e0a1fc34e778e94c9f98",
              class: (0, g.b)(this),
            },
            (0, s.h)(
              "ion-list",
              { key: "14244dcd6375eb61d65f3a9450d42a5d7b2d6541" },
              void 0 !== e && (0, s.h)("ion-list-header", null, e),
              o &&
                (0, s.h)(
                  "ion-item",
                  null,
                  (0, s.h)(
                    "ion-label",
                    { class: "ion-text-wrap" },
                    void 0 !== i && (0, s.h)("h3", null, i),
                    void 0 !== t && (0, s.h)("p", null, t),
                  ),
                ),
              this.renderOptions(l),
            ),
          );
        }
        get el() {
          return (0, s.f)(this);
        }
      };
      A.style = {
        ios: ".sc-ion-select-popover-ios-h ion-list.sc-ion-select-popover-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list-header.sc-ion-select-popover-ios,ion-label.sc-ion-select-popover-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-select-popover-ios-h{overflow-y:auto}",
        md: ".sc-ion-select-popover-md-h ion-list.sc-ion-select-popover-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list-header.sc-ion-select-popover-md,ion-label.sc-ion-select-popover-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-select-popover-md-h{overflow-y:auto}ion-list.sc-ion-select-popover-md ion-radio.sc-ion-select-popover-md::part(container){opacity:0}ion-item.sc-ion-select-popover-md{--inner-border-width:0}.item-radio-checked.sc-ion-select-popover-md{--background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08);--background-focused:var(--ion-color-primary, #3880ff);--background-focused-opacity:0.2;--background-hover:var(--ion-color-primary, #3880ff);--background-hover-opacity:0.12}.item-checkbox-checked.sc-ion-select-popover-md{--background-activated:var(--ion-item-color, var(--ion-text-color, #000));--background-focused:var(--ion-item-color, var(--ion-text-color, #000));--background-hover:var(--ion-item-color, var(--ion-text-color, #000));--color:var(--ion-color-primary, #3880ff)}",
      };
    },
    5256: (F, _, r) => {
      r.d(_, { c: () => I, g: () => w, h: () => s, o: () => O });
      var x = r(1528);
      const s = (a, p) => null !== p.closest(a),
        I = (a, p) =>
          "string" == typeof a && a.length > 0
            ? Object.assign({ "ion-color": !0, [`ion-color-${a}`]: !0 }, p)
            : p,
        w = (a) => {
          const p = {};
          return (
            ((a) =>
              void 0 !== a
                ? (Array.isArray(a) ? a : a.split(" "))
                    .filter((c) => null != c)
                    .map((c) => c.trim())
                    .filter((c) => "" !== c)
                : [])(a).forEach((c) => (p[c] = !0)),
            p
          );
        },
        f = /^[a-z][a-z0-9+\-.]*:/,
        O = (function () {
          var a = (0, x.c)(function* (p, c, C, y) {
            if (null != p && "#" !== p[0] && !f.test(p)) {
              const g = document.querySelector("ion-router");
              if (g) return c?.preventDefault(), g.push(p, C, y);
            }
            return !1;
          });
          return function (c, C, y, g) {
            return a.apply(this, arguments);
          };
        })();
    },
  },
]);
