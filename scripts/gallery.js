const GalleryListKaspar = document.querySelector(".js-Kaspar");

GalleryListKaspar.addEventListener("mouseenter", () => {
  document.querySelector(".js-photos").style.opacity = "1";
  document.querySelector(".js-anim-photos").style.transform =
    "translateX(3000px)";
});
GalleryListKaspar.addEventListener("mouseleave", () => {
  document.querySelector(".js-anim-photos").style.transform = "translateX(0px)";
  setTimeout(() => {
    document.querySelector(".js-photos").style.opacity = "0";
  }, 1000);
});
