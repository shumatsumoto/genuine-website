gsap.registerPlugin(SplitText);

const splitText = new SplitText(".loading .main", {
  type: "chars",
});
const taglineSplit = new SplitText(".loading .tagline", {
  type: "chars, words",
});

const loading = document.querySelector(".loading");
const loadingBg = document.querySelector(".loading .bg");

gsap.set(loading, { auto: 1 });
gsap.set([".loading .main", ".loading .tagline"], { autoAlpha: 0 });

const loadingAnimation = gsap.timeline();

loadingAnimation
  .to([".loading .main", ".loading .tagline"], {
    autoAlpha: 1,
    duration: 0.05,
  })
  .from(splitText.chars, {
    opacity: 0,
    stagger: 0.125,
    ease: "power1.in",
    duration: 0.3,
  })
  .from(
    taglineSplit.chars,
    {
      opacity: 0,
      yPercent: 0,
      stagger: 0.075,
      ease: "power1.in",
      duration: 0.3,
    },
    "-=.15"
  )
  .to(
    splitText.chars,
    {
      opacity: 0,
      stagger: 0.125,
      ease: "power3.in",
      duration: 0.15,
    },
    "+=1"
  )
  .to(
    taglineSplit.chars,
    {
      opacity: 0,
      stagger: 0.06,
      ease: "power3.inOut",
      duration: 0.25,
    },
    "<"
  )
  .to(
    loadingBg,
    {
      autoAlpha: 0,
      yPercent: -100,
      ease: "power3.inOut",
      duration: 0.7,
    },
    "-=.25"
  )
  .to(loading, {
    autoAlpha: 0,
    ease: "power3.inOut",
    duration: 0.1,
    onComplete: () => {
      loading.style.display = "none";
    },
  });
