"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [5108],
  {
    5108: (u, n, t) => {
      t.r(n), t.d(n, { TabsPageModule: () => g });
      var l = t(2112),
        h = t(1368),
        d = t(4716),
        i = t(1224),
        m = t(5132),
        s = t(4496);
      const f = [
        {
          path: "tabs",
          component: m.o,
          children: [
            {
              path: "tab1",
              loadChildren: () =>
                Promise.all([t.e(1168), t.e(9312), t.e(9468)])
                  .then(t.bind(t, 9468))
                  .then((a) => a.Tab1PageModule),
            },
            {
              path: "tab2",
              loadChildren: () =>
                Promise.all([t.e(1168), t.e(9312), t.e(5504)])
                  .then(t.bind(t, 5504))
                  .then((a) => a.Tab2PageModule),
            },
            { path: "", redirectTo: "/tabs/tab1", pathMatch: "full" },
          ],
        },
        { path: "", redirectTo: "/tabs/tab1", pathMatch: "full" },
      ];
      let c = (() => {
          class a {
            static #t = (this.ɵfac = function (o) {
              return new (o || a)();
            });
            static #a = (this.ɵmod = s.a4G({ type: a }));
            static #s = (this.ɵinj = s.s3X({ imports: [i.qQ.forChild(f)] }));
          }
          return a;
        })(),
        g = (() => {
          class a {
            static #t = (this.ɵfac = function (o) {
              return new (o || a)();
            });
            static #a = (this.ɵmod = s.a4G({ type: a }));
            static #s = (this.ɵinj = s.s3X({ imports: [l.wZ, h.MD, d.y, c] }));
          }
          return a;
        })();
    },
  },
]);
