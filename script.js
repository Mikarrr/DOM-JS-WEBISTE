let previousColor = null;
let logoBlack = `<img src="logo.png" alt="" />`;
let logoWhite = `<img src="logoW.png" alt="" />`;
// Ustawia logo kolor czarny domyślnie
document.querySelector(".js-logo").innerHTML = logoBlack;

let currentColor = getComputedStyle(document.documentElement).getPropertyValue(
  "--color, --background-color"
);

const themeButton = document.querySelector(".theme_button");

themeButton.addEventListener("click", function () {
  // Sprawdza, czy to pierwsze kliknięcie (czy previousColor jest puste)
  if (previousColor === null) {
    // Przechowuje obecny kolor jako poprzedni
    previousColor = currentColor;

    // Generuje nowy kolor (możesz użyć dowolnego mechanizmu generowania koloru)
    const newColor = "white";
    const newBackgorundColor = "grey";

    // Ustawia nowy kolor jako aktualny
    document.documentElement.style.setProperty("--color", newColor);
    document.documentElement.style.setProperty(
      "--background-color",
      newBackgorundColor
    );
    // Ustawia logo kolor biały
    document.querySelector(".js-logo").innerHTML = logoWhite;
    currentColor = newColor;
  } else {
    // Jeżeli previousColor nie jest puste, przywraca poprzedni kolor
    document.documentElement.style.setProperty("--color", previousColor);
    document.documentElement.style.setProperty(
      "--background-color",
      previousColor
    );
    // Ustawia logo kolor czarny
    document.querySelector(".js-logo").innerHTML = logoBlack;
    currentColor = previousColor;

    // Czyści previousColor, aby można było ponownie zmienić kolor za pierwszym razem
    previousColor = null;
  }
});
