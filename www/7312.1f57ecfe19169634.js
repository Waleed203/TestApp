"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [7312],
  {
    7312: (h, s, t) => {
      t.r(s), t.d(s, { startStatusTap: () => c });
      var a = t(1528),
        o = t(2992),
        _ = t(2816),
        r = t(6384);
      const c = () => {
        const n = window;
        n.addEventListener("statusTap", () => {
          (0, o.e)(() => {
            const d = document.elementFromPoint(
              n.innerWidth / 2,
              n.innerHeight / 2,
            );
            if (!d) return;
            const e = (0, _.f)(d);
            e &&
              new Promise((E) => (0, r.c)(e, E)).then(() => {
                (0, o.w)(
                  (0, a.c)(function* () {
                    e.style.setProperty("--overflow", "hidden"),
                      yield (0, _.s)(e, 300),
                      e.style.removeProperty("--overflow");
                  }),
                );
              });
          });
        });
      };
    },
  },
]);
