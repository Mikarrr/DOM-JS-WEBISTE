const Div = document.querySelector(".js-effect");

Div.addEventListener("mouseover", function () {
  document.querySelector(".js-effect").style.width = "100px";
  setTimeout(() => {
    document.querySelector(".js-effect").style.width = "50px";
  }, 1000);
});
