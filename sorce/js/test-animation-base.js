// GSAPとSplitTextのプラグインを登録
gsap.registerPlugin(SplitText, ScrollTrigger);

// 共通のSplitText処理
function splitAndAnimate(selector, staggerDelay) {
  const split = new SplitText(selector, {
    type: "words, chars, lines",
  });
  const chars = split.chars;
  gsap.set(chars, { autoAlpha: 0, scale: 0, y: 30, rotationX: 10 });
  return gsap.to(chars, {
    autoAlpha: 1,
    scale: 1,
    y: 0,
    stagger: staggerDelay,
    TransformOrigin: "0% 50%",
    ease: "power2.out",
  });
}

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
  })
  .to(".header .first-view .text ul li", {
    autoAlpha: 1,
    y: 0,
    stagger: 0.06,
  })
  .from(".header .first-view .text .sentence", {
    autoAlpha: 0,
    y: 100,
  })
  .from(
    ".header .first-view .splide",
    {
      autoAlpha: 0,
      y: 200,
      x: 200,
    },
    "<"
  );

// .whatアニメーション

const whatAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".what",
    start: "top 60%",
  },
});

whatAnimation
  .from(".what .bg-image", { autoAlpha: 0, duration: 1.0 })
  .from(
    ".what .bg-color",
    { autoAlpha: 0, yPercent: 100, TransformOrigin: "center bottom" },
    "<=1"
  )
  .from(
    ".what .back p",
    {
      autoAlpha: 0,
      y: -100,
    },
    "<=0.1"
  )
  .from(
    ".what .container .mark-wrapper ul li",
    {
      autoAlpha: 0,
      y: 100,
      stagger: 0.2,
    },
    "<"
  )
  .add(splitAndAnimate(".what .container .text h2", 0.04), "<")
  .add(splitAndAnimate(".what .container .text .sentence", 0.01), "<=0.15");

// .worksアニメーション

const worksAnimation = gsap.timeline({
  ScrollTrigger: {
    trigger: ".works",
    start: "top 60%",
  },
});

worksAnimation
  .from(".works .bg", {
    autoAlpha: 0,
    filter: "blur(30px)",
    x: 100,
    y: 100,
  })
  .from(
    ".works .title h3",
    {
      autoAlpha: 0,
      y: -50,
    },
    "<=1.5"
  )
  .from(
    ".works .title h2",
    {
      autoAlpha: 0,
      y: 50,
    },
    "<=1.1"
  )
  .from(
    ".works .splide",
    {
      autoAlpha: 0,
      y: 100,
      duration: 1.5,
    },
    "<=1"
  );

// .featureアニメーション

const featureTitleAnimation = gsap.timeline({
  defaults: {
    autoAlpha: 0,
    filter: "blur(30px)",
    x: -100,
    y: 100,
    duration: 0.75,
  },
  scrollTrigger: {
    trigger: ".feature",
    start: "top 45%",
  },
});

featureTitleAnimation
  .from(".feature .container .title .text h3", {
    duration: 1.0,
  })
  .from(".feature .container .title .text h2", {}, "<=0.25")
  .from(".feature .container .title .thumb", { x: 100 }, "<=0.5");
