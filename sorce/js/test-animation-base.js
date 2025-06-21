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

featureBoxes = gsap.utils.toArray(".feature .container .box-wrapper .box");

featureBoxes.forEach((target) => {
  const thumb = target.querySelector(".top .thumb");
  const textElements = target.querySelectorAll(".top .text .en, .top .text h3");
  const textLi = target.querySelectorAll(".top .text ul li");
  const geometory = target.querySelector(".top .text .geometory");
  const sentence = target.querySelector(".bottom .sentence");

  const featureBoxAnimation = gsap.timeline({
    defaults: {
      autoAlpha: 0,
      filter: "blur(30px)",
      x: -100,
      y: 100,
      duration: 0.75,
    },
    scrollTrigger: {
      trigger: target,
      start: "top 45%",
    },
  });

  featureBoxAnimation
    .from(thumb, {
      duration: 1.0,
    })
    .from(textElements, {}, "<=0.25")
    .from(textLi, { x: 100, stagger: 0.1 }, "-=0.5")
    .from(geometory, { x: 100 }, "<")
    .from(sentence, { x: 100 }, "<");
});

// .meritアニメーション
const meritTitleAnimation = gsap.timeline({
  defaults: {
    autoAlpha: 0,
    filter: "blur(30px)",
    scale: 2,
    duration: 1.15,
  },
  scrollTrigger: {
    trigger: ".merit .title",
    start: "top 50%",
    // markers: true,
  },
});

meritTitleAnimation
  .from(".merit .container .title h3", {})
  .from(".merit .container .title h2", {});

const meritBoxes = gsap.utils.toArray(".merit .container .box-wrapper .box");

meritBoxes.forEach((target) => {
  const thumbElements = target.querySelectorAll(".thumb-wrapper .thumb");
  const textElements = target.querySelectorAll(
    ".text .back, .text .inset .semi-title .number, .text .inset .semi-title h3, .text .inset .sentence"
  );

  const meritBoxAnimation = gsap.timeline({
    defaults: {
      autoAlpha: 0,
      filter: "blur(30px)",
      x: -100,
      y: 100,
      duration: 0.75,
    },
    scrollTrigger: {
      trigger: target,
      start: "top 45%",
      markers: true,
    },
  });

  meritBoxAnimation
    .from(thumbElements, {
      x: (i) => (i % 2 === 0 ? -100 : 100),
      stagger: 0.1,
      duration: 1.0,
    })
    .from(
      textElements,
      {
        stagger: 0.1,
      },
      "<=0.25"
    );
});

// .flowアニメーション
const flowTitleAnimation = gsap.timeline({
  defaults: {
    autoAlpha: 0,
    filter: "blur(30px)",
    scale: 2,
    duration: 1.15,
  },
  scrollTrigger: {
    trigger: ".flow .title",
    start: "top 55%",
  },
});

flowTitleAnimation
  .from(".flow .container .title h3", {})
  .from(".flow .container .title h2", {}, "<");

gsap.from(".flow .container .box-wrapper .box", {
  autoAlpha: 0,
  y: 100,
  filter: "blur(30px)",
  stagger: 0.3,
  duration: 0.7,
  scrollTrigger: {
    trigger: ".flow .container .box-wrapper",
    start: "top 60%",
  },
});

// .ctaアニメーション
const ctaElements = gsap.utils.toArray(".cta");

ctaElements.forEach((target) => {
  const inner = target.querySelector(".cta .container .inner");
  const h2 = target.querySelector(".cta .container h2");
  const sentence = target.querySelector(
    ".cta .container .inner .block .sentence"
  );
  const blockLi = target.querySelectorAll(
    ".cta .container .inner .block ul li"
  );
  const blockForm = target.querySelectorAll(
    ".cta .container .inner .block .form"
  );

  const ctaAnimation = gsap.timeline({
    defaults: {
      autoAlpha: 0,
      filter: "blur(30px)",
      y: 100,
      duration: 0.75,
    },
    scrollTrigger: {
      trigger: target,
      start: "top 50%",
    },
  });

  ctaAnimation
    .from(inner, { filter: "blur(60px)", duration: 1.5 })
    .from(h2, { x: -100, duration: 1.0 }, "-=.5")
    .from(sentence, { x: -100 }, "<=.25")
    .from(blockLi, { x: 100, stagger: 0.1 }, "-=.5")
    .from(blockForm, { x: 100 }, "<");
});

// .footerアニメーション
const footer = document.querySelector(".footer");
const footerLogoPlane = document.querySelector(".footer .logo .plane");
const footerLogoWhite = document.querySelector(".footer .logo .white");
const footerLinks = document.querySelectorAll(
  ".container .top nav ul li a, .container .privacy p a, .container .copyright small"
);

gsap.set(footer, {
  backgroundImage:
    "linear-gradient(90deg, rgba(210, 210, 210, 1) 0%, rgba(210, 210, 210, 1) 100%)",
});
gsap.set(footerLinks, {
  color: "#111",
});
gsap.set(footerLogoWhite, { autoAlpha: 0 });

const footerAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: footer,
    start: "top 45%",
  },
});

footerAnimation
  .to(footer, {
    backgroundImage:
      "linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)",
    duration: 1.25,
  })
  .to(
    footerLogoPlane,
    {
      autoAlpha: 0,
    },
    "<"
  )
  .to(
    footerLogoWhite,
    {
      autoAlpha: 1,
    },
    "<"
  )
  .to(
    footerLinks,
    {
      color: "#fff",
      stagger: 0.15,
    },
    "<=.5"
  );
