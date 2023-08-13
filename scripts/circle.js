const face = document.querySelector(".hover_effect div ");
const text = document.querySelector(".hover_effect div p");

face.addEventListener("mouseenter", () => {
  face.style.animationPlayState = "paused";
});

face.addEventListener("mouseleave", () => {
  face.style.animationPlayState = "running";
});

face.addEventListener("click", () => {
  const variablesHoverEffect = [
    { property: "width", value: "100%" },
    { property: "height", value: "2000px" },
    { property: "borderRadius", value: "0" },
    { property: "cursor", value: "default" },
    { property: "animation", value: "none" },
  ];
  const variablesMainContent = [
    { property: "position", value: "absolute" },
    { property: "display", value: "flex" },
  ];

  const HoverEffectDiv = document.querySelector(".hover_effect div");
  const MainContentDiv = document.querySelector(".main_content");

  variablesHoverEffect.forEach((variable) => {
    HoverEffectDiv.style[variable.property] = variable.value;
  });

  variablesMainContent.forEach((variable) => {
    MainContentDiv.style[variable.property] = variable.value;
  });

  text.style.opacity = "0";
  setTimeout(() => {
    let projectsHTML = `<div class="main_img"></div> <p class="test">KONTENT</p>  `;
    document.querySelector(".main_content").innerHTML = projectsHTML;
    document.querySelector(".test").style.opacity = "0";
    document.querySelector(".main_img").style.opacity = "0";
    setTimeout(() => {
      document.querySelector(".test").style.opacity = "1";
      document.querySelector(".main_img").style.opacity = "1";
    }, 300);
  }, 1000);
});
