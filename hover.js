const Div = document.querySelector(".js-effect");

Div.addEventListener("mouseover", function () {
  document.querySelector(".js-effect").style.width = "800px";
  setTimeout(() => {
    document.querySelector(".js-effect").style.width = "500px";
  }, 1000);
});
