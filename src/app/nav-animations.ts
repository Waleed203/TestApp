import { Animation, AnimationController } from "@ionic/angular";

export const enterAnimation = (baseEl: HTMLElement, opts?: any): Animation => {
  const DURATION = 250;

  console.log("baseEl: ", baseEl);
  console.log("opts: ", opts);

  const animationCtrl = new AnimationController();

  if (opts.direction === "forward") {
    const rootAnimation = animationCtrl
      .create()
      .addElement(opts.enteringEl)
      .duration(DURATION)
      .easing("ease-in")
      .fromTo("transform", "translate(300px)", "translateX(0px)")
      .fromTo("opacity", 0, 1);

    const leavingAnimation = animationCtrl
      .create()
      .addElement(opts.leavingEl)
      .duration(DURATION)
      .easing("ease-in")

      .fromTo("opacity", 1, 0);

    return animationCtrl
      .create()
      .addAnimation([leavingAnimation, rootAnimation]);
  } else {
    const leavingAnimation = animationCtrl
      .create()
      .addElement(opts.leavingEl)
      .duration(DURATION)
      .easing("ease-in")
      .fromTo("transform", "translate(0px)", "translateX(300px)")
      .fromTo("opacity", 1, 0);

    const rootAnimation = animationCtrl
      .create()
      .addElement(opts.enteringEl)
      .duration(DURATION)
      .easing("ease-in")
      .fromTo("opacity", 0, 1);

    return animationCtrl
      .create()
      .addAnimation([leavingAnimation, rootAnimation]);
  }
};
