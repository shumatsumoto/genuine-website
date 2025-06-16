// GSAPとSplitTextのプラグインを登録
gsap.registerPlugin(SplitText, ScrollTrigger);

const headerH2 = new SplitText(".header .first-view .text h2 .catch", {
  type: "words,chars,lines",
});
const headerH1 = new SplitText(".header .first-view .text h1 .catch", {
  type: "words,chars,lines",
});

gsap.set([headerH2.words, headerH1.chars], {
  autoAlpha: 0,
  y: 100,
  rotationX: 5,
});
gsap.set(".header .first-view .text ul li", { autoAlpha: 0, y: 100 });

const headerAnimation = gsap.timeline();

headerAnimation
  .from(".header nav .logo", {
    autoAlpha: 0,
    x: -100,
    filter: "blur(30px)",
  })
  .from(
    ".header nav ul li",
    {
      autoAlpha: 0,
      y: 60,
      stagger: 0.1,
    },
    "<"
  )
  .to(headerH2.words, {
    autoAlpha: 1,
    y: 0,
    rotationX: 0,
    stagger: 0.05,
    ease: "power2.out",
  })
  .to(headerH1.chars, {
    autoAlpha: 1,
    y: 0,
    rotationX: 0,
    stagger: 0.025,
    ease: "power2.out",
  });
