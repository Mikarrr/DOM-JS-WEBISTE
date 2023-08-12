const face = document.querySelector(".hover_effect div ");
const text = document.querySelector(".hover_effect div p");

face.addEventListener("mouseenter", () => {
  face.style.animationPlayState = "paused";
});

face.addEventListener("mouseleave", () => {
  face.style.animationPlayState = "running";
});
face.addEventListener("click", () => {
  document.querySelector(".hover_effect div").style.width = "100%";
  document.querySelector(".hover_effect div").style.height = "1000px";
  document.querySelector(".hover_effect div").style.borderRadius = "0";
  document.querySelector(".hover_effect div").style.cursor = "default";
  document.querySelector(".hover_effect div").style.animation = "none";
  text.style.opacity = "0";
});
