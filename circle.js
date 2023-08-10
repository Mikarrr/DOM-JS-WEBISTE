const face = document.querySelector(".hover_effect div ");
const text = document.querySelector(".hover_effect div p");

face.addEventListener("mouseenter", () => {
  face.style.animationPlayState = "paused";
});

face.addEventListener("mouseleave", () => {
  face.style.animationPlayState = "running";
});
clicked = false;
face.addEventListener("click", () => {
  if (clicked == false) {
    document.querySelector(".hover_effect div").style.width = "100%";
    document.querySelector(".hover_effect div").style.height = "1000px";
    document.querySelector(".hover_effect div").style.borderRadius = "0";
    text.style.opacity = "0";
    setTimeout(() => {
      text.innerHTML = "CLICK ME TO EXIT :)";
      text.style.opacity = "1";
    }, 500);
    clicked = true;
  } else {
    document.querySelector(".hover_effect div").style.width = "400px";
    document.querySelector(".hover_effect div").style.height = "400px";
    document.querySelector(".hover_effect div").style.borderRadius = "50%";
    text.style.opacity = "0";
    setTimeout(() => {
      text.innerHTML = "CLICK ME :)";
      text.style.opacity = "1";
    }, 500);
    clicked = false;
  }
});
face.addEventListener("dblclick", () => {});
