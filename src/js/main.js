(function () {
  gsap.config({
    nullTargetWarn: false,
  });

  gsap.registerPlugin(ScrollTrigger);

  let timeline1 = gsap.timeline(),
    mySplitText1 = new SplitText(".section-1 .heroSection-details-title", {
      type: "lines",
      linesClass: "lineChildren",
    }),
    mySplitParent1 = new SplitText(".section-1 .heroSection-details-title", {
      type: "lines",
      linesClass: "lineParent",
    }),
    mySplitText2 = new SplitText(".section-2 .heroSection-details-title", {
      type: "lines",
      linesClass: "lineChildren",
    }),
    mySplitParent2 = new SplitText(".section-2 .heroSection-details-title", {
      type: "lines",
      linesClass: "lineParent",
    }),
    lines1 = mySplitText1.lines;
  lines2 = mySplitText2.lines;

  timeline1
    .from(".bg-green", 1, {
      y: "100%",
      ease: Power3.easeOut,
      autoAlpha: 0,
    })
    .from(".section-1 .heroSection-top-title", 1, {
      y: -200,
      ease: Power3.easeOut,
      autoAlpha: 0,
      delay: 0.5,
    })
    .from(".section-1 .heroSection-article figure", 1, {
      x: -200,
      autoAlpha: 0,
      ease: Power3.easeOut,
    })
    .from(lines1, {
      duration: 1,
      opacity: 0.8,
      y: 100,
      stagger: 0.1,
      ease: "power2",
    });

  timeline1.staggerFrom(
    [".section-1 .heroSection-details p", ".section-1 .heroSection-details a"],
    1,
    {
      y: 40,
      autoAlpha: 0,
      ease: Power3.easeOut,
    },
    0.15
  );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".section-1 .divider",
        start: "top bottom",
        end: "top top",
        scrub: 1,
      },
    })
    .from(".divider-1", 1, {
      ease: Power3.easeInOut,
      scaleX: 0,
      transformOrigin: "left center",
    })
    .from(
      ".sliderSection-1 .sliderSection-heading",
      1,
      {
        y: 25,
        ease: Expo.easeInOut,
        autoAlpha: 0,
      },
      0
    )
    .from(
      ".sliderSection-1 .sliderSection-wrapper",
      1,
      {
        y: 100,
        autoAlpha: 0,
        ease: Linear.easeNone,
        delay: 0.5,
      },
      "-=1.5"
    );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".section-2 .heroSection-top",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
      },
    })
    .from(".section-2 .heroSection-top-title", 1, {
      y: -100,
      ease: Expo.easeInOut,
      autoAlpha: 0,
    })
    .from(".section-2 .heroSection-article figure", 1, {
      x: 200,
      autoAlpha: 0,
      ease: Expo.easeInOut,
    })
    .from(
      ".section-2 .heroSection-details h2",
      1,
      {
        y: 40,
        autoAlpha: 0,
        ease: Power3.easeOut,
        delay: 0.5,
      },
      1
    )
    .from(
      ".section-2 .heroSection-details p",
      1,
      {
        y: 40,
        autoAlpha: 0,
        ease: Power3.easeOut,
        delay: 0.8,
      },
      1
    )
    .from(
      ".section-2 .heroSection-details a",
      1,
      {
        y: 40,
        autoAlpha: 0,
        ease: Power3.easeOut,
        delay: 1,
      },
      1
    );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".divider-2",
        start: "top bottom",
        end: "top top",
        scrub: 1,
      },
    })
    .from(".divider-2", 1, {
      ease: Power3.easeInOut,
      scaleX: 0,
      transformOrigin: "left center",
    })
    .from(
      ".sliderSection-2 .sliderSection-heading",
      1,
      {
        y: 25,
        ease: Expo.easeInOut,
        autoAlpha: 0,
      },
      0
    )
    .from(
      ".sliderSection-2 .sliderSection-wrapper",
      1,
      {
        y: 100,
        autoAlpha: 0,
        ease: Linear.easeNone,
        delay: 0.5,
      },
      "-=1.5"
    );
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".divider-3",
        start: "top bottom",
        end: "top top",
        scrub: 1,
      },
    })
    .from(".divider-3", 1, {
      ease: Power3.easeInOut,
      scaleX: 0,
      transformOrigin: "left center",
    })
    .from(
      ".sliderSection-3 .sliderSection-heading",
      1,
      {
        y: 25,
        ease: Expo.easeInOut,
        autoAlpha: 0,
      },
      0
    )
    .from(
      ".sliderSection-3 .sliderSection-wrapper",
      1,
      {
        y: 100,
        autoAlpha: 0,
        ease: Linear.easeNone,
        delay: 0.5,
      },
      "-=1.5"
    );
})();
