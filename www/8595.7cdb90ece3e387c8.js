"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [8595],
  {
    8595: (O, s, o) => {
      o.r(s), o.d(s, { mdTransitionAnimation: () => T });
      var t = o(5968),
        c = o(1896);
      const T = (P, e) => {
        var a, l, r;
        const d = "40px",
          u = "back" === e.direction,
          E = e.leavingEl,
          g = (0, c.g)(e.enteringEl),
          f = g.querySelector("ion-toolbar"),
          n = (0, t.c)();
        if (
          (n.addElement(g).fill("both").beforeRemoveClass("ion-page-invisible"),
          u
            ? n
                .duration(
                  (null !== (a = e.duration) && void 0 !== a ? a : 0) || 200,
                )
                .easing("cubic-bezier(0.47,0,0.745,0.715)")
            : n
                .duration(
                  (null !== (l = e.duration) && void 0 !== l ? l : 0) || 280,
                )
                .easing("cubic-bezier(0.36,0.66,0.04,1)")
                .fromTo("transform", `translateY(${d})`, "translateY(0px)")
                .fromTo("opacity", 0.01, 1),
          f)
        ) {
          const i = (0, t.c)();
          i.addElement(f), n.addAnimation(i);
        }
        if (E && u) {
          n.duration(
            (null !== (r = e.duration) && void 0 !== r ? r : 0) || 200,
          ).easing("cubic-bezier(0.47,0,0.745,0.715)");
          const i = (0, t.c)();
          i
            .addElement((0, c.g)(E))
            .onFinish((v) => {
              1 === v &&
                i.elements.length > 0 &&
                i.elements[0].style.setProperty("display", "none");
            })
            .fromTo("transform", "translateY(0px)", `translateY(${d})`)
            .fromTo("opacity", 1, 0),
            n.addAnimation(i);
        }
        return n;
      };
    },
  },
]);
