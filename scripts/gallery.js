const GalleryList = document.querySelectorAll(".js-gallery-anim li a");

function sliderAnim(element) {
  element.addEventListener("mouseleave", () => {
    document.querySelector(".js-anim-photos").style.opacity = "0";
    setTimeout(() => {
      document.querySelector(".js-anim-photos").style.transform =
        "translateX(-4000px)";
    }, 100);

    setTimeout(() => {
      document.querySelector(".js-anim-photos").style.opacity = "1";
      document.querySelector(".js-anim-photos").style.transform =
        "translateX(0px)";
      document.querySelector(".js-photos").style.backgroundColor = "none";
    }, 700);
  });
}

GalleryList.forEach((sec) => {
  const action = sec.getAttribute("data-action");

  sec.addEventListener("mouseenter", () => {
    if (action === "action1") {
      document.querySelector(".js-photos").style.backgroundColor = "blue";
      sliderAnim(sec);
    }
    if (action === "action2") {
      document.querySelector(".js-photos").style.backgroundColor = "red";
      sliderAnim(sec);
    }
    if (action === "action3") {
      document.querySelector(".js-photos").style.backgroundColor = "green";
      sliderAnim(sec);
    }

    document.querySelector(".js-photos").style.opacity = "1";
    document.querySelector(".js-anim-photos").style.transform =
      "translateX(3000px)";
  });
});
