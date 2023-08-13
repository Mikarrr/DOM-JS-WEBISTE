let previousColor = null;
let logoBlack = `<img src="../photos/logo.png" alt="" />`;
let logoWhite = `<img src="../photos/logoW.png" alt="" />`;
// Ustawia logo kolor czarny domyślnie
document.querySelector(".js-logo").innerHTML = logoBlack;

let currentColor = getComputedStyle(document.documentElement).getPropertyValue(
  "--color, --background-color, --secoundary-color"
);

const themeButton = document.querySelector(".theme_button");

themeButton.addEventListener("click", function () {
  // Sprawdza, czy to pierwsze kliknięcie (czy previousColor jest puste)
  if (previousColor === null) {
    // Przechowuje obecny kolor jako poprzedni
    previousColor = currentColor;

    // Generuje nowy kolor
    const newColor = "white";
    const newColorTxt = "black";
    const newBackgorundColor = "black";

    // Ustawia nowy kolor jako aktualny
    document.documentElement.style.setProperty("--color", newColor);
    document.documentElement.style.setProperty(
      "--secoundary-color",
      newColorTxt
    );
    document.documentElement.style.setProperty(
      "--background-color",
      newBackgorundColor
    );

    // Ustawia logo na pełną przejrzystość (widoczność)
    document.querySelector(".navbar img").style.opacity = "0"; // Ukryj logo

    setTimeout(() => {
      // Ustawia logo kolor biały
      document.querySelector(".js-logo").innerHTML = logoWhite;
      currentColor = newColor;
      document.querySelector(".navbar img").style.opacity = "1"; // Pokaż logo
    }, 1000); // Po upływie 1 sekundy (czas trwania przejścia)
  } else {
    // Jeżeli previousColor nie jest puste, przywraca poprzedni kolor
    document.documentElement.style.setProperty("--color", previousColor);
    document.documentElement.style.setProperty(
      "--secoundary-color",
      previousColor
    );
    document.documentElement.style.setProperty(
      "--background-color",
      previousColor
    );
    // Ustawia logo na pełną przejrzystość (widoczność)
    document.querySelector(".navbar img").style.opacity = "0"; // Ukryj logo
    setTimeout(() => {
      // Ustawia logo kolor czarny
      document.querySelector(".js-logo").innerHTML = logoBlack;
      currentColor = previousColor;

      // Czyści previousColor, aby można było ponownie zmienić kolor za pierwszym razem
      previousColor = null;
      document.querySelector(".navbar img").style.opacity = "1"; // Pokaż logo
    }, 1000); // Po upływie 1 sekundy (czas trwania przejścia)
  }
});
