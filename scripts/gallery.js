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
      photosContainer.style.backgroundImage = "url('../photos/main_img.jpg')";
      setTimeout(() => {
        photosContainer.style.opacity = "1";
        animPhotos.style.transform = "translateX(3000px)";
      }, 100);
      break;
    case "action2":
      photosContainer.style.backgroundImage = "url('../photos/sec_img.jpg')";
      setTimeout(() => {
        photosContainer.style.opacity = "1";
        animPhotos.style.transform = "translateX(3000px)";
      }, 100);
      break;
    case "action3":
      photosContainer.style.backgroundImage = "url('../photos/th_img.jpg')";
      setTimeout(() => {
        photosContainer.style.opacity = "1";
        animPhotos.style.transform = "translateX(3000px)";
      }, 100);
      break;
    case "action4":
      photosContainer.style.backgroundImage = "url('../photos/main_img.jpg')";
      setTimeout(() => {
        photosContainer.style.opacity = "1";
        animPhotos.style.transform = "translateX(3000px)";
      }, 100);
      break;
    case "action5":
      photosContainer.style.backgroundImage = "url('../photos/sec_img.jpg')";
      setTimeout(() => {
        photosContainer.style.opacity = "1";
        animPhotos.style.transform = "translateX(3000px)";
      }, 100);
      break;
    case "action6":
      photosContainer.style.backgroundImage = "url('../photos/th_img.jpg')";
      setTimeout(() => {
        photosContainer.style.opacity = "1";
        animPhotos.style.transform = "translateX(3000px)";
      }, 100);
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

    galleryItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.style.opacity = "0.4";
      }
    });
  });
});
gallery.forEach((item) => {
  item.addEventListener("mouseleave", () => {
    handleMouseLeave();
  });
});

galleryItems.forEach((item) => {
  item.addEventListener("mouseleave", () => {
    galleryItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.style.opacity = "1";
      }
    });
  });
});
