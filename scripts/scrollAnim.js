gsap.registerPlugin(ScrollTrigger);

const MainContentIntro = document.querySelectorAll(".main_content_intro");
const Maintext = document.querySelectorAll(".main_content_intro .main_text");
const MainContentDescription = document.querySelectorAll(
  ".main_content_description"
);
const MainContentGallery = document.querySelectorAll(".main_content_gallery");
const MainContentGalleryPTag = document.querySelectorAll(
  ".main_content_gallery p"
);
const MainContentGalleryGalleryLi =
  document.querySelectorAll(".js-gallery-anim");

Maintext.forEach((section) => {
  gsap.fromTo(
    section.children,
    { y: "+=800", opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 3,
      duration: 3,
      ease: "ease-in",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "90% 90%",
        markers: false,
        scrub: 3,
      },
    }
  );
});

MainContentDescription.forEach((section) => {
  gsap.fromTo(
    section,
    { y: "+=400", opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 3,
      duration: 3,
      ease: "ease-in-out",
      scrollTrigger: {
        trigger: MainContentIntro,
        start: "110% 60%",
        end: "110% 90%",
        markers: false,
        scrub: 3,
      },
    }
  );
});

MainContentGalleryPTag.forEach((section) => {
  gsap.fromTo(
    section,
    { y: "+=100", opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 3,
      duration: 3,
      ease: "ease-in",
      scrollTrigger: {
        trigger: MainContentGallery,
        start: "top 80%",
        end: "30% 90%",
        markers: false,
        scrub: 3,
      },
    }
  );
});

MainContentGalleryGalleryLi.forEach((section) => {
  gsap.fromTo(
    section.children,
    { y: "+=300", opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 3,
      duration: 3,
      ease: "ease-in",
      scrollTrigger: {
        trigger: MainContentGallery,
        start: "top 80%",
        end: "80% 90%",
        markers: false,
        scrub: 3,
      },
    }
  );
});
