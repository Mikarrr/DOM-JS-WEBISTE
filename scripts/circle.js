const face = document.querySelector(".hover_effect .text ");
const text = document.querySelector(".hover_effect .text p");

face.addEventListener("click", () => {
  document.querySelector(".hover_effect .text").style.backgroundImage = "none";

  const variablesHoverEffect = [
    { property: "width", value: "100%" },
    { property: "height", value: "100vh" },
    { property: "borderRadius", value: "0" },
    { property: "cursor", value: "default" },
    { property: "animation", value: "none" },
  ];
  const variablesMainContent = [
    { property: "position", value: "absolute" },
    { property: "display", value: "flex" },
  ];

  const HoverEffectDiv = document.querySelector(".hover_effect .text");
  const MainContentDiv = document.querySelector(".main_content");

  variablesHoverEffect.forEach((variable) => {
    HoverEffectDiv.style[variable.property] = variable.value;
  });

  variablesMainContent.forEach((variable) => {
    MainContentDiv.style[variable.property] = variable.value;
  });

  text.style.opacity = "0";
  setTimeout(() => {
    window.location.href = "../pages/test.html";
  }, 1000);
});
