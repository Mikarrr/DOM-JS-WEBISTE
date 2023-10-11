gsap.registerPlugin(ScrollTrigger);

mainBanner.forEach((section) => {
  gsap.fromTo(
    section.children,
    { x: "+=500", y: "+=500", opacity: 0 },
    {
      x: 0,
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 5,
      ease: "back",
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "center 80%",
        markers: false,
        scrub: 2.5,
      },
    }
  );
});
