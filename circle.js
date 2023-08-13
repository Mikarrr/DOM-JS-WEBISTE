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
    { property: "height", value: "1000px" },
    { property: "borderRadius", value: "0" },
    { property: "cursor", value: "default" },
    { property: "animation", value: "none" },
  ];

  const divElement = document.querySelector(".hover_effect div");

  variablesHoverEffect.forEach((variable) => {
    divElement.style[variable.property] = variable.value;
  });

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
