let previousColor = null;

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
    const newColor = " rgb(238, 238, 238)";
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

    setTimeout(() => {
      // Ustawia logo kolor biały

      currentColor = newColor;
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
      currentColor = previousColor;

      // Czyści previousColor, aby można było ponownie zmienić kolor za pierwszym razem
      previousColor = null;
    }, 1000); // Po upływie 1 sekundy (czas trwania przejścia)
  }
});
