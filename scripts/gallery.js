const galleryItems = document.querySelectorAll(".js-gallery-anim li a");
const animPhotos = document.querySelector(".js-anim-photos");
const photosContainer = document.querySelector(".js-photos");
const gallery = document.querySelectorAll(".js-gallery-anim");

function handleMouseLeave() {
  animPhotos.style.opacity = "0";
  setTimeout(() => {
    animPhotos.style.transform = "translateX(-4000px)";
  }, 100);

  setTimeout(() => {
    animPhotos.style.opacity = "1";
    animPhotos.style.transform = "translateX(0px)";
  }, 700);
}

function handleMouseEnter(action) {
  switch (action) {
    case "action1":
      photosContainer.style.backgroundColor = "blue";
      photosContainer.style.opacity = "1";
      animPhotos.style.transform = "translateX(3000px)";
      break;
    case "action2":
      photosContainer.style.backgroundColor = "red";
      photosContainer.style.opacity = "1";
      animPhotos.style.transform = "translateX(3000px)";
      break;
    case "action3":
      photosContainer.style.backgroundColor = "green";
      photosContainer.style.opacity = "1";
      animPhotos.style.transform = "translateX(3000px)";
      break;
    default:
      handleMouseLeave();
      break;
  }
}

galleryItems.forEach((item) => {
  const action = item.getAttribute("data-action");

  item.addEventListener("mouseenter", () => {
    handleMouseEnter(action);
  });
});
gallery.forEach((item) => {
  item.addEventListener("mouseleave", () => {
    handleMouseLeave();
  });
});
