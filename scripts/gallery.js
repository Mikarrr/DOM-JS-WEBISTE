const GalleryListKaspar = document.querySelector(".js-Kaspar");

GalleryListKaspar.addEventListener("mouseenter", () => {
  document.querySelector(".js-photos").style.opacity = "1";
});
GalleryListKaspar.addEventListener("mouseleave", () => {
  document.querySelector(".js-photos").style.opacity = "0";
});
