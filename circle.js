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
  document.querySelector(".main_content").style.position = "absolute";

  text.style.opacity = "0";
  setTimeout(() => {
    let projectsHTML = `<p class="test">KONTENT</p>`;
    document.querySelector(".aaa").innerHTML = projectsHTML;
    document.querySelector(".test").style.opacity = "0";
    setTimeout(() => {
      document.querySelector(".test").style.opacity = "1";
    }, 300);
  }, 1000);
});
