"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [728],
  {
    728: (u, s, t) => {
      t.r(s), t.d(s, { Network: () => l, NetworkWeb: () => i });
      var c = t(1528),
        r = t(6400);
      function a() {
        const o =
          window.navigator.connection ||
          window.navigator.mozConnection ||
          window.navigator.webkitConnection;
        let n = "unknown";
        const e = o ? o.type || o.effectiveType : null;
        if (e && "string" == typeof e)
          switch (e) {
            case "bluetooth":
            case "cellular":
            case "slow-2g":
            case "2g":
            case "3g":
              n = "cellular";
              break;
            case "none":
              n = "none";
              break;
            case "ethernet":
            case "wifi":
            case "wimax":
            case "4g":
              n = "wifi";
              break;
            case "other":
            case "unknown":
              n = "unknown";
          }
        return n;
      }
      class i extends r.w8 {
        constructor() {
          super(),
            (this.handleOnline = () => {
              const e = { connected: !0, connectionType: a() };
              this.notifyListeners("networkStatusChange", e);
            }),
            (this.handleOffline = () => {
              this.notifyListeners("networkStatusChange", {
                connected: !1,
                connectionType: "none",
              });
            }),
            typeof window < "u" &&
              (window.addEventListener("online", this.handleOnline),
              window.addEventListener("offline", this.handleOffline));
        }
        getStatus() {
          var n = this;
          return (0, c.c)(function* () {
            if (!window.navigator)
              throw n.unavailable(
                "Browser does not support the Network Information API",
              );
            const e = window.navigator.onLine,
              w = a();
            return { connected: e, connectionType: e ? w : "none" };
          })();
        }
      }
      const l = new i();
    },
  },
]);
