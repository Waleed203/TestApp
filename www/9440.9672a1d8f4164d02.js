"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [9440],
  {
    9440: (I, x, n) => {
      n.r(x), n.d(x, { ion_textarea: () => y });
      var p = n(1528),
        a = n(2992),
        b = n(8507),
        u = n(7620),
        c = n(6384),
        f = n(2032),
        h = n(6132),
        r = n(5256),
        o = n(8523);
      n(4829);
      const y = class {
        constructor(t) {
          (0, a.r)(this, t),
            (this.ionChange = (0, a.d)(this, "ionChange", 7)),
            (this.ionInput = (0, a.d)(this, "ionInput", 7)),
            (this.ionStyle = (0, a.d)(this, "ionStyle", 7)),
            (this.ionBlur = (0, a.d)(this, "ionBlur", 7)),
            (this.ionFocus = (0, a.d)(this, "ionFocus", 7)),
            (this.inputId = "ion-textarea-" + O++),
            (this.didTextareaClearOnEdit = !1),
            (this.inheritedAttributes = {}),
            (this.hasLoggedDeprecationWarning = !1),
            (this.onInput = (e) => {
              const i = e.target;
              i && (this.value = i.value || ""), this.emitInputChange(e);
            }),
            (this.onChange = (e) => {
              this.emitValueChange(e);
            }),
            (this.onFocus = (e) => {
              (this.hasFocus = !0),
                (this.focusedValue = this.value),
                this.focusChange(),
                this.ionFocus.emit(e);
            }),
            (this.onBlur = (e) => {
              (this.hasFocus = !1),
                this.focusChange(),
                this.focusedValue !== this.value && this.emitValueChange(e),
                (this.didTextareaClearOnEdit = !1),
                this.ionBlur.emit(e);
            }),
            (this.onKeyDown = (e) => {
              this.checkClearOnEdit(e);
            }),
            (this.hasFocus = !1),
            (this.color = void 0),
            (this.autocapitalize = "none"),
            (this.autofocus = !1),
            (this.clearOnEdit = !1),
            (this.debounce = void 0),
            (this.disabled = !1),
            (this.fill = void 0),
            (this.inputmode = void 0),
            (this.enterkeyhint = void 0),
            (this.maxlength = void 0),
            (this.minlength = void 0),
            (this.name = this.inputId),
            (this.placeholder = void 0),
            (this.readonly = !1),
            (this.required = !1),
            (this.spellcheck = !1),
            (this.cols = void 0),
            (this.rows = void 0),
            (this.wrap = void 0),
            (this.autoGrow = !1),
            (this.value = ""),
            (this.counter = !1),
            (this.counterFormatter = void 0),
            (this.errorText = void 0),
            (this.helperText = void 0),
            (this.label = void 0),
            (this.labelPlacement = "start"),
            (this.legacy = void 0),
            (this.shape = void 0);
        }
        debounceChanged() {
          const { ionInput: t, debounce: e, originalIonInput: i } = this;
          this.ionInput = void 0 === e ? i ?? t : (0, c.j)(t, e);
        }
        disabledChanged() {
          this.emitStyle();
        }
        valueChanged() {
          const t = this.nativeInput,
            e = this.getValue();
          t && t.value !== e && (t.value = e),
            this.runAutoGrow(),
            this.emitStyle();
        }
        connectedCallback() {
          const { el: t } = this;
          (this.legacyFormController = (0, b.c)(t)),
            (this.slotMutationController = (0, h.c)(
              t,
              ["label", "start", "end"],
              () => (0, a.i)(this),
            )),
            (this.notchController = (0, u.c)(
              t,
              () => this.notchSpacerEl,
              () => this.labelSlot,
            )),
            this.emitStyle(),
            this.debounceChanged(),
            document.dispatchEvent(
              new CustomEvent("ionInputDidLoad", { detail: t }),
            );
        }
        disconnectedCallback() {
          document.dispatchEvent(
            new CustomEvent("ionInputDidUnload", { detail: this.el }),
          ),
            this.slotMutationController &&
              (this.slotMutationController.destroy(),
              (this.slotMutationController = void 0)),
            this.notchController &&
              (this.notchController.destroy(), (this.notchController = void 0));
        }
        componentWillLoad() {
          this.inheritedAttributes = Object.assign(
            Object.assign({}, (0, c.i)(this.el)),
            (0, c.k)(this.el, ["data-form-type", "title", "tabindex"]),
          );
        }
        componentDidLoad() {
          (this.originalIonInput = this.ionInput), this.runAutoGrow();
        }
        componentDidRender() {
          var t;
          null === (t = this.notchController) ||
            void 0 === t ||
            t.calculateNotchWidth();
        }
        setFocus() {
          var t = this;
          return (0, p.c)(function* () {
            t.nativeInput && t.nativeInput.focus();
          })();
        }
        getInputElement() {
          var t = this;
          return (0, p.c)(function* () {
            return (
              t.nativeInput || (yield new Promise((e) => (0, c.c)(t.el, e))),
              Promise.resolve(t.nativeInput)
            );
          })();
        }
        emitStyle() {
          this.legacyFormController.hasLegacyControl() &&
            this.ionStyle.emit({
              interactive: !0,
              textarea: !0,
              input: !0,
              "interactive-disabled": this.disabled,
              "has-placeholder": void 0 !== this.placeholder,
              "has-value": this.hasValue(),
              "has-focus": this.hasFocus,
              legacy: !!this.legacy,
            });
        }
        emitValueChange(t) {
          const { value: e } = this,
            i = null == e ? e : e.toString();
          (this.focusedValue = i), this.ionChange.emit({ value: i, event: t });
        }
        emitInputChange(t) {
          const { value: e } = this;
          this.ionInput.emit({ value: e, event: t });
        }
        runAutoGrow() {
          this.nativeInput &&
            this.autoGrow &&
            (0, a.w)(() => {
              var t;
              this.textareaWrapper &&
                (this.textareaWrapper.dataset.replicatedValue =
                  null !== (t = this.value) && void 0 !== t ? t : "");
            });
        }
        checkClearOnEdit(t) {
          if (!this.clearOnEdit) return;
          const i = ["Tab", "Shift", "Meta", "Alt", "Control"].includes(t.key);
          !this.didTextareaClearOnEdit &&
            this.hasValue() &&
            !i &&
            ((this.value = ""), this.emitInputChange(t)),
            i || (this.didTextareaClearOnEdit = !0);
        }
        focusChange() {
          this.emitStyle();
        }
        hasValue() {
          return "" !== this.getValue();
        }
        getValue() {
          return this.value || "";
        }
        renderLegacyTextarea() {
          this.hasLoggedDeprecationWarning ||
            ((0, f.p)(
              'ion-textarea now requires providing a label with either the "label" property or the "aria-label" attribute. To migrate, remove any usage of "ion-label" and pass the label text to either the "label" property or the "aria-label" attribute.\n\nExample: <ion-textarea label="Comments"></ion-textarea>\nExample with aria-label: <ion-textarea aria-label="Comments"></ion-textarea>\n\nFor textareas that do not render the label immediately next to the input, developers may continue to use "ion-label" but must manually associate the label with the textarea by using "aria-labelledby".\n\nDevelopers can use the "legacy" property to continue using the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.',
              this.el,
            ),
            (this.hasLoggedDeprecationWarning = !0));
          const t = (0, o.b)(this),
            e = this.getValue(),
            i = this.inputId + "-lbl",
            s = (0, c.h)(this.el);
          return (
            s && (s.id = i),
            (0, a.h)(
              a.H,
              {
                "aria-disabled": this.disabled ? "true" : null,
                class: (0, r.c)(this.color, { [t]: !0, "legacy-textarea": !0 }),
              },
              (0, a.h)(
                "div",
                {
                  class: "textarea-legacy-wrapper",
                  ref: (d) => (this.textareaWrapper = d),
                },
                (0, a.h)(
                  "textarea",
                  Object.assign(
                    {
                      class: "native-textarea",
                      "aria-labelledby": s ? s.id : null,
                      ref: (d) => (this.nativeInput = d),
                      autoCapitalize: this.autocapitalize,
                      autoFocus: this.autofocus,
                      enterKeyHint: this.enterkeyhint,
                      inputMode: this.inputmode,
                      disabled: this.disabled,
                      maxLength: this.maxlength,
                      minLength: this.minlength,
                      name: this.name,
                      placeholder: this.placeholder || "",
                      readOnly: this.readonly,
                      required: this.required,
                      spellcheck: this.spellcheck,
                      cols: this.cols,
                      rows: this.rows,
                      wrap: this.wrap,
                      onInput: this.onInput,
                      onChange: this.onChange,
                      onBlur: this.onBlur,
                      onFocus: this.onFocus,
                      onKeyDown: this.onKeyDown,
                    },
                    this.inheritedAttributes,
                  ),
                  e,
                ),
              ),
            )
          );
        }
        renderLabel() {
          const { label: t } = this;
          return (0, a.h)(
            "div",
            {
              class: {
                "label-text-wrapper": !0,
                "label-text-wrapper-hidden": !this.hasLabel,
              },
            },
            void 0 === t
              ? (0, a.h)("slot", { name: "label" })
              : (0, a.h)("div", { class: "label-text" }, t),
          );
        }
        get labelSlot() {
          return this.el.querySelector('[slot="label"]');
        }
        get hasLabel() {
          return void 0 !== this.label || null !== this.labelSlot;
        }
        renderLabelContainer() {
          return "md" === (0, o.b)(this) && "outline" === this.fill
            ? [
                (0, a.h)(
                  "div",
                  { class: "textarea-outline-container" },
                  (0, a.h)("div", { class: "textarea-outline-start" }),
                  (0, a.h)(
                    "div",
                    {
                      class: {
                        "textarea-outline-notch": !0,
                        "textarea-outline-notch-hidden": !this.hasLabel,
                      },
                    },
                    (0, a.h)(
                      "div",
                      {
                        class: "notch-spacer",
                        "aria-hidden": "true",
                        ref: (i) => (this.notchSpacerEl = i),
                      },
                      this.label,
                    ),
                  ),
                  (0, a.h)("div", { class: "textarea-outline-end" }),
                ),
                this.renderLabel(),
              ]
            : this.renderLabel();
        }
        renderHintText() {
          const { helperText: t, errorText: e } = this;
          return [
            (0, a.h)("div", { class: "helper-text" }, t),
            (0, a.h)("div", { class: "error-text" }, e),
          ];
        }
        renderCounter() {
          const {
            counter: t,
            maxlength: e,
            counterFormatter: i,
            value: s,
          } = this;
          if (!0 === t && void 0 !== e)
            return (0, a.h)("div", { class: "counter" }, (0, h.g)(s, e, i));
        }
        renderBottomContent() {
          const {
            counter: t,
            helperText: e,
            errorText: i,
            maxlength: s,
          } = this;
          if (e || i || (!0 === t && void 0 !== s))
            return (0, a.h)(
              "div",
              { class: "textarea-bottom" },
              this.renderHintText(),
              this.renderCounter(),
            );
        }
        renderTextarea() {
          const {
              inputId: t,
              disabled: e,
              fill: i,
              shape: s,
              labelPlacement: d,
              el: k,
              hasFocus: _,
            } = this,
            C = (0, o.b)(this),
            D = this.getValue(),
            T = (0, r.h)("ion-item", this.el),
            L = "md" === C && "outline" !== i && !T,
            z = this.hasValue(),
            M = null !== k.querySelector('[slot="start"], [slot="end"]');
          return (0, a.h)(
            a.H,
            {
              class: (0, r.c)(this.color, {
                [C]: !0,
                "has-value": z,
                "has-focus": _,
                "label-floating":
                  "stacked" === d || ("floating" === d && (z || _ || M)),
                [`textarea-fill-${i}`]: void 0 !== i,
                [`textarea-shape-${s}`]: void 0 !== s,
                [`textarea-label-placement-${d}`]: !0,
                "textarea-disabled": e,
              }),
            },
            (0, a.h)(
              "label",
              { class: "textarea-wrapper", htmlFor: t },
              this.renderLabelContainer(),
              (0, a.h)(
                "div",
                { class: "textarea-wrapper-inner" },
                (0, a.h)(
                  "div",
                  { class: "start-slot-wrapper" },
                  (0, a.h)("slot", { name: "start" }),
                ),
                (0, a.h)(
                  "div",
                  {
                    class: "native-wrapper",
                    ref: (v) => (this.textareaWrapper = v),
                  },
                  (0, a.h)(
                    "textarea",
                    Object.assign(
                      {
                        class: "native-textarea",
                        ref: (v) => (this.nativeInput = v),
                        id: t,
                        disabled: e,
                        autoCapitalize: this.autocapitalize,
                        autoFocus: this.autofocus,
                        enterKeyHint: this.enterkeyhint,
                        inputMode: this.inputmode,
                        minLength: this.minlength,
                        maxLength: this.maxlength,
                        name: this.name,
                        placeholder: this.placeholder || "",
                        readOnly: this.readonly,
                        required: this.required,
                        spellcheck: this.spellcheck,
                        cols: this.cols,
                        rows: this.rows,
                        wrap: this.wrap,
                        onInput: this.onInput,
                        onChange: this.onChange,
                        onBlur: this.onBlur,
                        onFocus: this.onFocus,
                        onKeyDown: this.onKeyDown,
                      },
                      this.inheritedAttributes,
                    ),
                    D,
                  ),
                ),
                (0, a.h)(
                  "div",
                  { class: "end-slot-wrapper" },
                  (0, a.h)("slot", { name: "end" }),
                ),
              ),
              L && (0, a.h)("div", { class: "textarea-highlight" }),
            ),
            this.renderBottomContent(),
          );
        }
        render() {
          const { legacyFormController: t } = this;
          return t.hasLegacyControl()
            ? this.renderLegacyTextarea()
            : this.renderTextarea();
        }
        get el() {
          return (0, a.f)(this);
        }
        static get watchers() {
          return {
            debounce: ["debounceChanged"],
            disabled: ["disabledChanged"],
            value: ["valueChanged"],
          };
        }
      };
      let O = 0;
      y.style = {
        ios: '.sc-ion-textarea-ios-h{--background:initial;--color:initial;--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:0.6;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--border-radius:0;--border-style:solid;--highlight-color-focused:var(--ion-color-primary, #3880ff);--highlight-color-valid:var(--ion-color-success, #2dd36f);--highlight-color-invalid:var(--ion-color-danger, #eb445a);--highlight-color:var(--highlight-color-focused);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}.sc-ion-textarea-ios-h:not(.legacy-textarea){min-height:44px}.textarea-label-placement-floating.sc-ion-textarea-ios-h,.textarea-label-placement-stacked.sc-ion-textarea-ios-h{--padding-top:0px;min-height:56px}[cols].sc-ion-textarea-ios-h:not([auto-grow]){width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.legacy-textarea.sc-ion-textarea-ios-h{-ms-flex:1;flex:1;background:var(--background);white-space:pre-wrap}.legacy-textarea.ion-color.sc-ion-textarea-ios-h{color:var(--ion-color-base)}.sc-ion-textarea-ios-h:not(.legacy-textarea){--padding-bottom:8px}.ion-color.sc-ion-textarea-ios-h{--highlight-color-focused:var(--ion-color-base);background:initial}ion-item.sc-ion-textarea-ios-h,ion-item .sc-ion-textarea-ios-h{-ms-flex-item-align:baseline;align-self:baseline}ion-item.sc-ion-textarea-ios-h:not(.item-label),ion-item:not(.item-label) .sc-ion-textarea-ios-h{--padding-start:0}ion-item[slot=start].sc-ion-textarea-ios-h,ion-item [slot=start].sc-ion-textarea-ios-h,ion-item[slot=end].sc-ion-textarea-ios-h,ion-item [slot=end].sc-ion-textarea-ios-h{width:auto}.native-textarea.sc-ion-textarea-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:block;position:relative;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;white-space:pre-wrap;z-index:1;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.native-textarea.sc-ion-textarea-ios::-webkit-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-moz-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios:-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.legacy-textarea.sc-ion-textarea-ios-h .native-textarea.sc-ion-textarea-ios{white-space:inherit}.legacy-textarea.sc-ion-textarea-ios-h .native-textarea.sc-ion-textarea-ios,.legacy-textarea.sc-ion-textarea-ios-h .textarea-legacy-wrapper.sc-ion-textarea-ios::after{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);border-radius:var(--border-radius)}.native-textarea.sc-ion-textarea-ios{color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;grid-area:1/1/2/2;word-break:break-word}.legacy-textarea.sc-ion-textarea-ios-h .textarea-legacy-wrapper.sc-ion-textarea-ios::after{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;grid-area:1/1/2/2;word-break:break-word}.cloned-input.sc-ion-textarea-ios{top:0;bottom:0;position:absolute;pointer-events:none}@supports (inset-inline-start: 0){.cloned-input.sc-ion-textarea-ios{inset-inline-start:0}}@supports not (inset-inline-start: 0){.cloned-input.sc-ion-textarea-ios{left:0}[dir=rtl].sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios,[dir=rtl] .sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios{left:unset;right:unset;right:0}[dir=rtl].sc-ion-textarea-ios .cloned-input.sc-ion-textarea-ios{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.cloned-input.sc-ion-textarea-ios:dir(rtl){left:unset;right:unset;right:0}}}.cloned-input.sc-ion-textarea-ios:disabled{opacity:1}.legacy-textarea[auto-grow].sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}[auto-grow].sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios{height:100%}[auto-grow].sc-ion-textarea-ios-h .native-textarea.sc-ion-textarea-ios{overflow:hidden}.item-label-floating.item-has-placeholder.sc-ion-textarea-ios-h:not(.item-has-value),.item-label-floating.item-has-placeholder:not(.item-has-value) .sc-ion-textarea-ios-h{opacity:0}.item-label-floating.item-has-placeholder.sc-ion-textarea-ios-h:not(.item-has-value).item-has-focus,.item-label-floating.item-has-placeholder:not(.item-has-value).item-has-focus .sc-ion-textarea-ios-h{-webkit-transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.textarea-wrapper.sc-ion-textarea-ios{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:0px;padding-bottom:0px;border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:start;align-items:flex-start;height:inherit;min-height:inherit;-webkit-transition:background-color 15ms linear;transition:background-color 15ms linear;background:var(--background);line-height:normal}.native-wrapper.sc-ion-textarea-ios{position:relative;width:100%;height:100%}.has-focus.sc-ion-textarea-ios-h textarea.sc-ion-textarea-ios{caret-color:var(--highlight-color)}.native-wrapper.sc-ion-textarea-ios textarea.sc-ion-textarea-ios{-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom)}.native-wrapper.sc-ion-textarea-ios,.textarea-legacy-wrapper.sc-ion-textarea-ios{display:grid;min-width:inherit;max-width:inherit;min-height:inherit;max-height:inherit;grid-auto-rows:100%}.native-wrapper.sc-ion-textarea-ios::after,.textarea-legacy-wrapper.sc-ion-textarea-ios::after{white-space:pre-wrap;content:attr(data-replicated-value) " ";visibility:hidden}.native-wrapper.sc-ion-textarea-ios::after{padding-left:0;padding-right:0;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:var(--border-radius);color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;grid-area:1/1/2/2;word-break:break-word}.textarea-wrapper-inner.sc-ion-textarea-ios{display:-ms-flexbox;display:flex;width:100%;min-height:inherit}.ion-touched.ion-invalid.sc-ion-textarea-ios-h{--highlight-color:var(--highlight-color-invalid)}.ion-valid.sc-ion-textarea-ios-h{--highlight-color:var(--highlight-color-valid)}.textarea-bottom.sc-ion-textarea-ios{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:5px;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;border-top:var(--border-width) var(--border-style) var(--border-color);font-size:0.75rem}.has-focus.ion-valid.sc-ion-textarea-ios-h,.ion-touched.ion-invalid.sc-ion-textarea-ios-h{--border-color:var(--highlight-color)}.textarea-bottom.sc-ion-textarea-ios .error-text.sc-ion-textarea-ios{display:none;color:var(--highlight-color-invalid)}.textarea-bottom.sc-ion-textarea-ios .helper-text.sc-ion-textarea-ios{display:block;color:var(--ion-color-step-550, #737373)}.ion-touched.ion-invalid.sc-ion-textarea-ios-h .textarea-bottom.sc-ion-textarea-ios .error-text.sc-ion-textarea-ios{display:block}.ion-touched.ion-invalid.sc-ion-textarea-ios-h .textarea-bottom.sc-ion-textarea-ios .helper-text.sc-ion-textarea-ios{display:none}.textarea-bottom.sc-ion-textarea-ios .counter.sc-ion-textarea-ios{-webkit-margin-start:auto;margin-inline-start:auto;color:var(--ion-color-step-550, #737373);white-space:nowrap;-webkit-padding-start:16px;padding-inline-start:16px}.label-text-wrapper.sc-ion-textarea-ios{-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);max-width:200px;-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);pointer-events:none}.label-text.sc-ion-textarea-ios,.sc-ion-textarea-ios-s>[slot=label]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden.sc-ion-textarea-ios,.textarea-outline-notch-hidden.sc-ion-textarea-ios{display:none}.textarea-wrapper.sc-ion-textarea-ios textarea.sc-ion-textarea-ios{-webkit-transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.textarea-label-placement-start.sc-ion-textarea-ios-h .textarea-wrapper.sc-ion-textarea-ios{-ms-flex-direction:row;flex-direction:row}.textarea-label-placement-start.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}.textarea-label-placement-end.sc-ion-textarea-ios-h .textarea-wrapper.sc-ion-textarea-ios{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.textarea-label-placement-end.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}.textarea-label-placement-fixed.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}.textarea-label-placement-fixed.sc-ion-textarea-ios-h .label-text.sc-ion-textarea-ios{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.textarea-label-placement-stacked.sc-ion-textarea-ios-h .textarea-wrapper.sc-ion-textarea-ios,.textarea-label-placement-floating.sc-ion-textarea-ios-h .textarea-wrapper.sc-ion-textarea-ios{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:start}.textarea-label-placement-stacked.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios,.textarea-label-placement-floating.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios{-webkit-transform-origin:left top;transform-origin:left top;-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:0px;padding-bottom:0px;max-width:100%;z-index:2}[dir=rtl].sc-ion-textarea-ios-h -no-combinator.textarea-label-placement-stacked.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios,[dir=rtl] .sc-ion-textarea-ios-h -no-combinator.textarea-label-placement-stacked.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios,[dir=rtl].textarea-label-placement-stacked.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios,[dir=rtl] .textarea-label-placement-stacked.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios,[dir=rtl].sc-ion-textarea-ios-h -no-combinator.textarea-label-placement-floating.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios,[dir=rtl] .sc-ion-textarea-ios-h -no-combinator.textarea-label-placement-floating.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios,[dir=rtl].textarea-label-placement-floating.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios,[dir=rtl] .textarea-label-placement-floating.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){.textarea-label-placement-stacked.sc-ion-textarea-ios-h:dir(rtl) .label-text-wrapper.sc-ion-textarea-ios,.textarea-label-placement-floating.sc-ion-textarea-ios-h:dir(rtl) .label-text-wrapper.sc-ion-textarea-ios{-webkit-transform-origin:right top;transform-origin:right top}}.textarea-label-placement-stacked.sc-ion-textarea-ios-h textarea.sc-ion-textarea-ios,.textarea-label-placement-floating.sc-ion-textarea-ios-h textarea.sc-ion-textarea-ios,.textarea-label-placement-stacked[auto-grow].sc-ion-textarea-ios-h .native-wrapper.sc-ion-textarea-ios::after,.textarea-label-placement-floating[auto-grow].sc-ion-textarea-ios-h .native-wrapper.sc-ion-textarea-ios::after{-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-end:0px;margin-inline-end:0px;margin-top:8px;margin-bottom:0px}.sc-ion-textarea-ios-h.textarea-label-placement-stacked.sc-ion-textarea-ios-s>[slot=start],.sc-ion-textarea-ios-h.textarea-label-placement-stacked .sc-ion-textarea-ios-s>[slot=start],.sc-ion-textarea-ios-h.textarea-label-placement-stacked.sc-ion-textarea-ios-s>[slot=end],.sc-ion-textarea-ios-h.textarea-label-placement-stacked .sc-ion-textarea-ios-s>[slot=end],.sc-ion-textarea-ios-h.textarea-label-placement-floating.sc-ion-textarea-ios-s>[slot=start],.sc-ion-textarea-ios-h.textarea-label-placement-floating .sc-ion-textarea-ios-s>[slot=start],.sc-ion-textarea-ios-h.textarea-label-placement-floating.sc-ion-textarea-ios-s>[slot=end],.sc-ion-textarea-ios-h.textarea-label-placement-floating .sc-ion-textarea-ios-s>[slot=end]{margin-top:8px}.textarea-label-placement-floating.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios{-webkit-transform:translateY(100%) scale(1);transform:translateY(100%) scale(1)}.textarea-label-placement-floating.sc-ion-textarea-ios-h textarea.sc-ion-textarea-ios{opacity:0}.has-focus.textarea-label-placement-floating.sc-ion-textarea-ios-h textarea.sc-ion-textarea-ios,.has-value.textarea-label-placement-floating.sc-ion-textarea-ios-h textarea.sc-ion-textarea-ios{opacity:1}.label-floating.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75);max-width:calc(100% / 0.75)}.start-slot-wrapper.sc-ion-textarea-ios,.end-slot-wrapper.sc-ion-textarea-ios{padding-left:0;padding-right:0;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-item-align:start;align-self:start}.sc-ion-textarea-ios-s>[slot=start],.sc-ion-textarea-ios-s>[slot=end]{margin-top:0}.sc-ion-textarea-ios-s>[slot=start]{-webkit-margin-end:16px;margin-inline-end:16px;-webkit-margin-start:0;margin-inline-start:0}.sc-ion-textarea-ios-s>[slot=end]{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}.sc-ion-textarea-ios-h{--border-width:0.55px;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));--padding-top:10px;--padding-end:0px;--padding-bottom:8px;--padding-start:0px;font-size:inherit}.legacy-textarea.sc-ion-textarea-ios-h{--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:0}.item-label-stacked.sc-ion-textarea-ios-h,.item-label-stacked .sc-ion-textarea-ios-h,.item-label-floating.sc-ion-textarea-ios-h,.item-label-floating .sc-ion-textarea-ios-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0px}.legacy-textarea.sc-ion-textarea-ios-h .native-textarea[disabled].sc-ion-textarea-ios,.textarea-disabled.sc-ion-textarea-ios-h{opacity:0.3}.sc-ion-textarea-ios-s>ion-button[slot=start].button-has-icon-only,.sc-ion-textarea-ios-s>ion-button[slot=end].button-has-icon-only{--border-radius:50%;--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;aspect-ratio:1}',
        md: '.sc-ion-textarea-md-h{--background:initial;--color:initial;--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:0.6;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--border-radius:0;--border-style:solid;--highlight-color-focused:var(--ion-color-primary, #3880ff);--highlight-color-valid:var(--ion-color-success, #2dd36f);--highlight-color-invalid:var(--ion-color-danger, #eb445a);--highlight-color:var(--highlight-color-focused);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}.sc-ion-textarea-md-h:not(.legacy-textarea){min-height:44px}.textarea-label-placement-floating.sc-ion-textarea-md-h,.textarea-label-placement-stacked.sc-ion-textarea-md-h{--padding-top:0px;min-height:56px}[cols].sc-ion-textarea-md-h:not([auto-grow]){width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.legacy-textarea.sc-ion-textarea-md-h{-ms-flex:1;flex:1;background:var(--background);white-space:pre-wrap}.legacy-textarea.ion-color.sc-ion-textarea-md-h{color:var(--ion-color-base)}.sc-ion-textarea-md-h:not(.legacy-textarea){--padding-bottom:8px}.ion-color.sc-ion-textarea-md-h{--highlight-color-focused:var(--ion-color-base);background:initial}ion-item.sc-ion-textarea-md-h,ion-item .sc-ion-textarea-md-h{-ms-flex-item-align:baseline;align-self:baseline}ion-item.sc-ion-textarea-md-h:not(.item-label),ion-item:not(.item-label) .sc-ion-textarea-md-h{--padding-start:0}ion-item[slot=start].sc-ion-textarea-md-h,ion-item [slot=start].sc-ion-textarea-md-h,ion-item[slot=end].sc-ion-textarea-md-h,ion-item [slot=end].sc-ion-textarea-md-h{width:auto}.native-textarea.sc-ion-textarea-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:block;position:relative;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;white-space:pre-wrap;z-index:1;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.native-textarea.sc-ion-textarea-md::-webkit-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::-moz-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md:-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.legacy-textarea.sc-ion-textarea-md-h .native-textarea.sc-ion-textarea-md{white-space:inherit}.legacy-textarea.sc-ion-textarea-md-h .native-textarea.sc-ion-textarea-md,.legacy-textarea.sc-ion-textarea-md-h .textarea-legacy-wrapper.sc-ion-textarea-md::after{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);border-radius:var(--border-radius)}.native-textarea.sc-ion-textarea-md{color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;grid-area:1/1/2/2;word-break:break-word}.legacy-textarea.sc-ion-textarea-md-h .textarea-legacy-wrapper.sc-ion-textarea-md::after{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;grid-area:1/1/2/2;word-break:break-word}.cloned-input.sc-ion-textarea-md{top:0;bottom:0;position:absolute;pointer-events:none}@supports (inset-inline-start: 0){.cloned-input.sc-ion-textarea-md{inset-inline-start:0}}@supports not (inset-inline-start: 0){.cloned-input.sc-ion-textarea-md{left:0}[dir=rtl].sc-ion-textarea-md-h .cloned-input.sc-ion-textarea-md,[dir=rtl] .sc-ion-textarea-md-h .cloned-input.sc-ion-textarea-md{left:unset;right:unset;right:0}[dir=rtl].sc-ion-textarea-md .cloned-input.sc-ion-textarea-md{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.cloned-input.sc-ion-textarea-md:dir(rtl){left:unset;right:unset;right:0}}}.cloned-input.sc-ion-textarea-md:disabled{opacity:1}.legacy-textarea[auto-grow].sc-ion-textarea-md-h .cloned-input.sc-ion-textarea-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}[auto-grow].sc-ion-textarea-md-h .cloned-input.sc-ion-textarea-md{height:100%}[auto-grow].sc-ion-textarea-md-h .native-textarea.sc-ion-textarea-md{overflow:hidden}.item-label-floating.item-has-placeholder.sc-ion-textarea-md-h:not(.item-has-value),.item-label-floating.item-has-placeholder:not(.item-has-value) .sc-ion-textarea-md-h{opacity:0}.item-label-floating.item-has-placeholder.sc-ion-textarea-md-h:not(.item-has-value).item-has-focus,.item-label-floating.item-has-placeholder:not(.item-has-value).item-has-focus .sc-ion-textarea-md-h{-webkit-transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.textarea-wrapper.sc-ion-textarea-md{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:0px;padding-bottom:0px;border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:start;align-items:flex-start;height:inherit;min-height:inherit;-webkit-transition:background-color 15ms linear;transition:background-color 15ms linear;background:var(--background);line-height:normal}.native-wrapper.sc-ion-textarea-md{position:relative;width:100%;height:100%}.has-focus.sc-ion-textarea-md-h textarea.sc-ion-textarea-md{caret-color:var(--highlight-color)}.native-wrapper.sc-ion-textarea-md textarea.sc-ion-textarea-md{-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom)}.native-wrapper.sc-ion-textarea-md,.textarea-legacy-wrapper.sc-ion-textarea-md{display:grid;min-width:inherit;max-width:inherit;min-height:inherit;max-height:inherit;grid-auto-rows:100%}.native-wrapper.sc-ion-textarea-md::after,.textarea-legacy-wrapper.sc-ion-textarea-md::after{white-space:pre-wrap;content:attr(data-replicated-value) " ";visibility:hidden}.native-wrapper.sc-ion-textarea-md::after{padding-left:0;padding-right:0;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:var(--border-radius);color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;grid-area:1/1/2/2;word-break:break-word}.textarea-wrapper-inner.sc-ion-textarea-md{display:-ms-flexbox;display:flex;width:100%;min-height:inherit}.ion-touched.ion-invalid.sc-ion-textarea-md-h{--highlight-color:var(--highlight-color-invalid)}.ion-valid.sc-ion-textarea-md-h{--highlight-color:var(--highlight-color-valid)}.textarea-bottom.sc-ion-textarea-md{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:5px;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;border-top:var(--border-width) var(--border-style) var(--border-color);font-size:0.75rem}.has-focus.ion-valid.sc-ion-textarea-md-h,.ion-touched.ion-invalid.sc-ion-textarea-md-h{--border-color:var(--highlight-color)}.textarea-bottom.sc-ion-textarea-md .error-text.sc-ion-textarea-md{display:none;color:var(--highlight-color-invalid)}.textarea-bottom.sc-ion-textarea-md .helper-text.sc-ion-textarea-md{display:block;color:var(--ion-color-step-550, #737373)}.ion-touched.ion-invalid.sc-ion-textarea-md-h .textarea-bottom.sc-ion-textarea-md .error-text.sc-ion-textarea-md{display:block}.ion-touched.ion-invalid.sc-ion-textarea-md-h .textarea-bottom.sc-ion-textarea-md .helper-text.sc-ion-textarea-md{display:none}.textarea-bottom.sc-ion-textarea-md .counter.sc-ion-textarea-md{-webkit-margin-start:auto;margin-inline-start:auto;color:var(--ion-color-step-550, #737373);white-space:nowrap;-webkit-padding-start:16px;padding-inline-start:16px}.label-text-wrapper.sc-ion-textarea-md{-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);max-width:200px;-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);pointer-events:none}.label-text.sc-ion-textarea-md,.sc-ion-textarea-md-s>[slot=label]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden.sc-ion-textarea-md,.textarea-outline-notch-hidden.sc-ion-textarea-md{display:none}.textarea-wrapper.sc-ion-textarea-md textarea.sc-ion-textarea-md{-webkit-transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.textarea-label-placement-start.sc-ion-textarea-md-h .textarea-wrapper.sc-ion-textarea-md{-ms-flex-direction:row;flex-direction:row}.textarea-label-placement-start.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}.textarea-label-placement-end.sc-ion-textarea-md-h .textarea-wrapper.sc-ion-textarea-md{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.textarea-label-placement-end.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}.textarea-label-placement-fixed.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}.textarea-label-placement-fixed.sc-ion-textarea-md-h .label-text.sc-ion-textarea-md{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.textarea-label-placement-stacked.sc-ion-textarea-md-h .textarea-wrapper.sc-ion-textarea-md,.textarea-label-placement-floating.sc-ion-textarea-md-h .textarea-wrapper.sc-ion-textarea-md{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:start}.textarea-label-placement-stacked.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,.textarea-label-placement-floating.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{-webkit-transform-origin:left top;transform-origin:left top;-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:0px;padding-bottom:0px;max-width:100%;z-index:2}[dir=rtl].sc-ion-textarea-md-h -no-combinator.textarea-label-placement-stacked.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl] .sc-ion-textarea-md-h -no-combinator.textarea-label-placement-stacked.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl].textarea-label-placement-stacked.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl] .textarea-label-placement-stacked.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl].sc-ion-textarea-md-h -no-combinator.textarea-label-placement-floating.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl] .sc-ion-textarea-md-h -no-combinator.textarea-label-placement-floating.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl].textarea-label-placement-floating.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl] .textarea-label-placement-floating.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){.textarea-label-placement-stacked.sc-ion-textarea-md-h:dir(rtl) .label-text-wrapper.sc-ion-textarea-md,.textarea-label-placement-floating.sc-ion-textarea-md-h:dir(rtl) .label-text-wrapper.sc-ion-textarea-md{-webkit-transform-origin:right top;transform-origin:right top}}.textarea-label-placement-stacked.sc-ion-textarea-md-h textarea.sc-ion-textarea-md,.textarea-label-placement-floating.sc-ion-textarea-md-h textarea.sc-ion-textarea-md,.textarea-label-placement-stacked[auto-grow].sc-ion-textarea-md-h .native-wrapper.sc-ion-textarea-md::after,.textarea-label-placement-floating[auto-grow].sc-ion-textarea-md-h .native-wrapper.sc-ion-textarea-md::after{-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-end:0px;margin-inline-end:0px;margin-top:8px;margin-bottom:0px}.sc-ion-textarea-md-h.textarea-label-placement-stacked.sc-ion-textarea-md-s>[slot=start],.sc-ion-textarea-md-h.textarea-label-placement-stacked .sc-ion-textarea-md-s>[slot=start],.sc-ion-textarea-md-h.textarea-label-placement-stacked.sc-ion-textarea-md-s>[slot=end],.sc-ion-textarea-md-h.textarea-label-placement-stacked .sc-ion-textarea-md-s>[slot=end],.sc-ion-textarea-md-h.textarea-label-placement-floating.sc-ion-textarea-md-s>[slot=start],.sc-ion-textarea-md-h.textarea-label-placement-floating .sc-ion-textarea-md-s>[slot=start],.sc-ion-textarea-md-h.textarea-label-placement-floating.sc-ion-textarea-md-s>[slot=end],.sc-ion-textarea-md-h.textarea-label-placement-floating .sc-ion-textarea-md-s>[slot=end]{margin-top:8px}.textarea-label-placement-floating.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{-webkit-transform:translateY(100%) scale(1);transform:translateY(100%) scale(1)}.textarea-label-placement-floating.sc-ion-textarea-md-h textarea.sc-ion-textarea-md{opacity:0}.has-focus.textarea-label-placement-floating.sc-ion-textarea-md-h textarea.sc-ion-textarea-md,.has-value.textarea-label-placement-floating.sc-ion-textarea-md-h textarea.sc-ion-textarea-md{opacity:1}.label-floating.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75);max-width:calc(100% / 0.75)}.start-slot-wrapper.sc-ion-textarea-md,.end-slot-wrapper.sc-ion-textarea-md{padding-left:0;padding-right:0;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-item-align:start;align-self:start}.sc-ion-textarea-md-s>[slot=start],.sc-ion-textarea-md-s>[slot=end]{margin-top:0}.sc-ion-textarea-md-s>[slot=start]{-webkit-margin-end:16px;margin-inline-end:16px;-webkit-margin-start:0;margin-inline-start:0}.sc-ion-textarea-md-s>[slot=end]{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}.textarea-fill-solid.sc-ion-textarea-md-h{--background:var(--ion-color-step-50, #f2f2f2);--border-color:var(--ion-color-step-500, gray);--border-radius:4px;--padding-start:16px;--padding-end:16px;min-height:56px}.textarea-fill-solid.sc-ion-textarea-md-h .textarea-wrapper.sc-ion-textarea-md{border-bottom:var(--border-width) var(--border-style) var(--border-color)}.has-focus.textarea-fill-solid.ion-valid.sc-ion-textarea-md-h,.textarea-fill-solid.ion-touched.ion-invalid.sc-ion-textarea-md-h{--border-color:var(--highlight-color)}.textarea-fill-solid.sc-ion-textarea-md-h .textarea-bottom.sc-ion-textarea-md{border-top:none}@media (any-hover: hover){.textarea-fill-solid.sc-ion-textarea-md-h:hover{--background:var(--ion-color-step-100, #e6e6e6);--border-color:var(--ion-color-step-750, #404040)}}.textarea-fill-solid.has-focus.sc-ion-textarea-md-h{--background:var(--ion-color-step-150, #d9d9d9);--border-color:var(--ion-color-step-750, #404040)}.textarea-fill-solid.sc-ion-textarea-md-h .textarea-wrapper.sc-ion-textarea-md{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0px;border-bottom-left-radius:0px}[dir=rtl].sc-ion-textarea-md-h -no-combinator.textarea-fill-solid.sc-ion-textarea-md-h .textarea-wrapper.sc-ion-textarea-md,[dir=rtl] .sc-ion-textarea-md-h -no-combinator.textarea-fill-solid.sc-ion-textarea-md-h .textarea-wrapper.sc-ion-textarea-md,[dir=rtl].textarea-fill-solid.sc-ion-textarea-md-h .textarea-wrapper.sc-ion-textarea-md,[dir=rtl] .textarea-fill-solid.sc-ion-textarea-md-h .textarea-wrapper.sc-ion-textarea-md{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0px;border-bottom-left-radius:0px}@supports selector(:dir(rtl)){.textarea-fill-solid.sc-ion-textarea-md-h:dir(rtl) .textarea-wrapper.sc-ion-textarea-md{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0px;border-bottom-left-radius:0px}}.label-floating.textarea-fill-solid.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{max-width:calc(100% / 0.75)}.textarea-fill-outline.sc-ion-textarea-md-h{--border-color:var(--ion-color-step-300, #b3b3b3);--border-radius:4px;--padding-start:16px;--padding-end:16px;min-height:56px}.textarea-fill-outline.textarea-shape-round.sc-ion-textarea-md-h{--border-radius:28px;--padding-start:32px;--padding-end:32px}.has-focus.textarea-fill-outline.ion-valid.sc-ion-textarea-md-h,.textarea-fill-outline.ion-touched.ion-invalid.sc-ion-textarea-md-h{--border-color:var(--highlight-color)}@media (any-hover: hover){.textarea-fill-outline.sc-ion-textarea-md-h:hover{--border-color:var(--ion-color-step-750, #404040)}}.textarea-fill-outline.has-focus.sc-ion-textarea-md-h{--border-width:2px;--border-color:var(--highlight-color)}.textarea-fill-outline.sc-ion-textarea-md-h .textarea-bottom.sc-ion-textarea-md{border-top:none}.textarea-fill-outline.sc-ion-textarea-md-h .textarea-wrapper.sc-ion-textarea-md{border-bottom:none}.textarea-fill-outline.textarea-label-placement-stacked.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,.textarea-fill-outline.textarea-label-placement-floating.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{-webkit-transform-origin:left top;transform-origin:left top;position:absolute;max-width:calc(100% - var(--padding-start) - var(--padding-end))}[dir=rtl].sc-ion-textarea-md-h -no-combinator.textarea-fill-outline.textarea-label-placement-stacked.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl] .sc-ion-textarea-md-h -no-combinator.textarea-fill-outline.textarea-label-placement-stacked.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl].textarea-fill-outline.textarea-label-placement-stacked.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl] .textarea-fill-outline.textarea-label-placement-stacked.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl].sc-ion-textarea-md-h -no-combinator.textarea-fill-outline.textarea-label-placement-floating.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl] .sc-ion-textarea-md-h -no-combinator.textarea-fill-outline.textarea-label-placement-floating.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl].textarea-fill-outline.textarea-label-placement-floating.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl] .textarea-fill-outline.textarea-label-placement-floating.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){.textarea-fill-outline.textarea-label-placement-stacked.sc-ion-textarea-md-h:dir(rtl) .label-text-wrapper.sc-ion-textarea-md,.textarea-fill-outline.textarea-label-placement-floating.sc-ion-textarea-md-h:dir(rtl) .label-text-wrapper.sc-ion-textarea-md{-webkit-transform-origin:right top;transform-origin:right top}}.textarea-fill-outline.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{position:relative}.label-floating.textarea-fill-outline.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{-webkit-transform:translateY(-32%) scale(0.75);transform:translateY(-32%) scale(0.75);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;max-width:calc(\n    (100% - var(--padding-start) - var(--padding-end) - 8px) / 0.75\n  )}.textarea-fill-outline.textarea-label-placement-stacked.sc-ion-textarea-md-h textarea.sc-ion-textarea-md,.textarea-fill-outline.textarea-label-placement-floating.sc-ion-textarea-md-h textarea.sc-ion-textarea-md,.textarea-fill-outline.textarea-label-placement-stacked[auto-grow].sc-ion-textarea-md-h .native-wrapper.sc-ion-textarea-md::after,.textarea-fill-outline.textarea-label-placement-floating[auto-grow].sc-ion-textarea-md-h .native-wrapper.sc-ion-textarea-md::after{-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-end:0px;margin-inline-end:0px;margin-top:12px;margin-bottom:0px}.sc-ion-textarea-md-h.textarea-fill-outline.textarea-label-placement-stacked.sc-ion-textarea-md-s>[slot=start],.sc-ion-textarea-md-h.textarea-fill-outline.textarea-label-placement-stacked .sc-ion-textarea-md-s>[slot=start],.sc-ion-textarea-md-h.textarea-fill-outline.textarea-label-placement-stacked.sc-ion-textarea-md-s>[slot=end],.sc-ion-textarea-md-h.textarea-fill-outline.textarea-label-placement-stacked .sc-ion-textarea-md-s>[slot=end],.sc-ion-textarea-md-h.textarea-fill-outline.textarea-label-placement-floating.sc-ion-textarea-md-s>[slot=start],.sc-ion-textarea-md-h.textarea-fill-outline.textarea-label-placement-floating .sc-ion-textarea-md-s>[slot=start],.sc-ion-textarea-md-h.textarea-fill-outline.textarea-label-placement-floating.sc-ion-textarea-md-s>[slot=end],.sc-ion-textarea-md-h.textarea-fill-outline.textarea-label-placement-floating .sc-ion-textarea-md-s>[slot=end]{margin-top:12px}.textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-container.sc-ion-textarea-md{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;width:100%;height:100%}.textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-start.sc-ion-textarea-md,.textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-end.sc-ion-textarea-md{pointer-events:none}.textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-start.sc-ion-textarea-md,.textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-notch.sc-ion-textarea-md,.textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-end.sc-ion-textarea-md{border-top:var(--border-width) var(--border-style) var(--border-color);border-bottom:var(--border-width) var(--border-style) var(--border-color)}.textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-notch.sc-ion-textarea-md{max-width:calc(100% - var(--padding-start) - var(--padding-end))}.textarea-fill-outline.sc-ion-textarea-md-h .notch-spacer.sc-ion-textarea-md{-webkit-padding-end:8px;padding-inline-end:8px;font-size:calc(1em * 0.75);opacity:0;pointer-events:none;-webkit-box-sizing:content-box;box-sizing:content-box}.textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-start.sc-ion-textarea-md{border-top-left-radius:var(--border-radius);border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:var(--border-radius);-webkit-border-start:var(--border-width) var(--border-style) var(--border-color);border-inline-start:var(--border-width) var(--border-style) var(--border-color);width:calc(var(--padding-start) - 4px)}[dir=rtl].sc-ion-textarea-md-h -no-combinator.textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-start.sc-ion-textarea-md,[dir=rtl] .sc-ion-textarea-md-h -no-combinator.textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-start.sc-ion-textarea-md,[dir=rtl].textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-start.sc-ion-textarea-md,[dir=rtl] .textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-start.sc-ion-textarea-md{border-top-left-radius:0px;border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-bottom-left-radius:0px}@supports selector(:dir(rtl)){.textarea-fill-outline.sc-ion-textarea-md-h:dir(rtl) .textarea-outline-start.sc-ion-textarea-md{border-top-left-radius:0px;border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-bottom-left-radius:0px}}.textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-end.sc-ion-textarea-md{-webkit-border-end:var(--border-width) var(--border-style) var(--border-color);border-inline-end:var(--border-width) var(--border-style) var(--border-color);border-top-left-radius:0px;border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-bottom-left-radius:0px;-ms-flex-positive:1;flex-grow:1}[dir=rtl].sc-ion-textarea-md-h -no-combinator.textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-end.sc-ion-textarea-md,[dir=rtl] .sc-ion-textarea-md-h -no-combinator.textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-end.sc-ion-textarea-md,[dir=rtl].textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-end.sc-ion-textarea-md,[dir=rtl] .textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-end.sc-ion-textarea-md{border-top-left-radius:var(--border-radius);border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:var(--border-radius)}@supports selector(:dir(rtl)){.textarea-fill-outline.sc-ion-textarea-md-h:dir(rtl) .textarea-outline-end.sc-ion-textarea-md{border-top-left-radius:var(--border-radius);border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:var(--border-radius)}}.label-floating.textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-notch.sc-ion-textarea-md{border-top:none}.sc-ion-textarea-md-h{--border-width:1px;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));--padding-top:18px;--padding-end:0px;--padding-bottom:8px;--padding-start:0px;font-size:inherit}.legacy-textarea.sc-ion-textarea-md-h{--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:8px;margin-left:0;margin-right:0;margin-top:8px;margin-bottom:0}.item-label-stacked.sc-ion-textarea-md-h,.item-label-stacked .sc-ion-textarea-md-h,.item-label-floating.sc-ion-textarea-md-h,.item-label-floating .sc-ion-textarea-md-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0}.textarea-bottom.sc-ion-textarea-md .counter.sc-ion-textarea-md{letter-spacing:0.0333333333em}.textarea-label-placement-floating.has-focus.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,.textarea-label-placement-stacked.has-focus.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{color:var(--highlight-color)}.has-focus.textarea-label-placement-floating.ion-valid.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,.textarea-label-placement-floating.ion-touched.ion-invalid.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,.has-focus.textarea-label-placement-stacked.ion-valid.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,.textarea-label-placement-stacked.ion-touched.ion-invalid.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{color:var(--highlight-color)}.legacy-textarea.sc-ion-textarea-md-h .native-textarea[disabled].sc-ion-textarea-md,.textarea-disabled.sc-ion-textarea-md-h{opacity:0.38}.textarea-highlight.sc-ion-textarea-md{bottom:-1px;position:absolute;width:100%;height:2px;-webkit-transform:scale(0);transform:scale(0);-webkit-transition:-webkit-transform 200ms;transition:-webkit-transform 200ms;transition:transform 200ms;transition:transform 200ms, -webkit-transform 200ms;background:var(--highlight-color)}@supports (inset-inline-start: 0){.textarea-highlight.sc-ion-textarea-md{inset-inline-start:0}}@supports not (inset-inline-start: 0){.textarea-highlight.sc-ion-textarea-md{left:0}[dir=rtl].sc-ion-textarea-md-h .textarea-highlight.sc-ion-textarea-md,[dir=rtl] .sc-ion-textarea-md-h .textarea-highlight.sc-ion-textarea-md{left:unset;right:unset;right:0}[dir=rtl].sc-ion-textarea-md .textarea-highlight.sc-ion-textarea-md{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.textarea-highlight.sc-ion-textarea-md:dir(rtl){left:unset;right:unset;right:0}}}.has-focus.sc-ion-textarea-md-h .textarea-highlight.sc-ion-textarea-md{-webkit-transform:scale(1);transform:scale(1)}.in-item.sc-ion-textarea-md-h .textarea-highlight.sc-ion-textarea-md{bottom:0}@supports (inset-inline-start: 0){.in-item.sc-ion-textarea-md-h .textarea-highlight.sc-ion-textarea-md{inset-inline-start:0}}@supports not (inset-inline-start: 0){.in-item.sc-ion-textarea-md-h .textarea-highlight.sc-ion-textarea-md{left:0}[dir=rtl].sc-ion-textarea-md-h -no-combinator.in-item.sc-ion-textarea-md-h .textarea-highlight.sc-ion-textarea-md,[dir=rtl] .sc-ion-textarea-md-h -no-combinator.in-item.sc-ion-textarea-md-h .textarea-highlight.sc-ion-textarea-md,[dir=rtl].in-item.sc-ion-textarea-md-h .textarea-highlight.sc-ion-textarea-md,[dir=rtl] .in-item.sc-ion-textarea-md-h .textarea-highlight.sc-ion-textarea-md{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.in-item.sc-ion-textarea-md-h:dir(rtl) .textarea-highlight.sc-ion-textarea-md{left:unset;right:unset;right:0}}}.textarea-shape-round.sc-ion-textarea-md-h{--border-radius:16px}.sc-ion-textarea-md-s>ion-button[slot=start].button-has-icon-only,.sc-ion-textarea-md-s>ion-button[slot=end].button-has-icon-only{--border-radius:50%;--padding-start:8px;--padding-end:8px;--padding-top:8px;--padding-bottom:8px;aspect-ratio:1;min-height:40px}',
      };
    },
    5256: (I, x, n) => {
      n.d(x, { c: () => b, g: () => c, h: () => a, o: () => h });
      var p = n(1528);
      const a = (r, o) => null !== o.closest(r),
        b = (r, o) =>
          "string" == typeof r && r.length > 0
            ? Object.assign({ "ion-color": !0, [`ion-color-${r}`]: !0 }, o)
            : o,
        c = (r) => {
          const o = {};
          return (
            ((r) =>
              void 0 !== r
                ? (Array.isArray(r) ? r : r.split(" "))
                    .filter((l) => null != l)
                    .map((l) => l.trim())
                    .filter((l) => "" !== l)
                : [])(r).forEach((l) => (o[l] = !0)),
            o
          );
        },
        f = /^[a-z][a-z0-9+\-.]*:/,
        h = (function () {
          var r = (0, p.c)(function* (o, l, w, m) {
            if (null != o && "#" !== o[0] && !f.test(o)) {
              const g = document.querySelector("ion-router");
              if (g) return l?.preventDefault(), g.push(o, w, m);
            }
            return !1;
          });
          return function (l, w, m, g) {
            return r.apply(this, arguments);
          };
        })();
    },
  },
]);
