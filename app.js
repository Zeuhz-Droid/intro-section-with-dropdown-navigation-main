const featuresNavLink = document.querySelector(".navigation__link--features");
const companyNavLink = document.querySelector(".navigation__link--company");
const arrowFeatures = document.querySelector(
  ".navigation__slide-icon--features"
);
const navigationItemFeatures = document.querySelector(".navigation__item");
const navigationItemCompany = document.querySelector(
  ".navigation__item:nth-child(2)"
);
const arrowCompany = document.querySelector(".navigation__slide-icon--company");
const dropdownFeatures = document.querySelector(".dropdown-features");
const dropdownCompany = document.querySelector(".dropdown-company");

function toggleAppear(item) {
  item.classList.toggle("show");
}

function addShow() {
  dropdownFeatures.classList.add("show");
  dropdownCompany.classList.add("show");
}

const mediaQuery = window.matchMedia("(max-width: 37.5em)");
function handleScreenChange(e) {
  if (e.matches) {
    let clicked1 = false;
    let clicked2 = false;

    featuresNavLink.addEventListener("click", function () {
      toggleAppear(dropdownFeatures);
      clicked1 = !clicked1;
      arrowFeatures.src = `images/icon-arrow-${clicked1 ? "up" : "down"}.svg`;
    });

    companyNavLink.addEventListener("click", function () {
      toggleAppear(dropdownCompany);
      clicked2 = !clicked2;
      arrowCompany.src = `images/icon-arrow-${clicked2 ? "up" : "down"}.svg`;
    });
  }
}
mediaQuery.addListener(handleScreenChange);
handleScreenChange(mediaQuery);

const mediaQuery2 = window.matchMedia("(min-width: 37.5em)");
function handleScreenChange2(e) {
  if (e.matches) {
    console.log("It works");

    navigationItemFeatures.addEventListener("mouseenter", function () {
      dropdownFeatures.classList.remove("show");
      arrowFeatures.src = `images/icon-arrow-up.svg`;
    });

    dropdownFeatures.addEventListener("mouseleave", function () {
      setTimeout(() => {
        dropdownFeatures.classList.add("show");
        arrowFeatures.src = `images/icon-arrow-down.svg`;
      }, 200);
    });

    navigationItemCompany.addEventListener("mouseenter", function () {
      dropdownCompany.classList.remove("show");
      arrowCompany.src = `images/icon-arrow-up.svg`;
    });

    dropdownCompany.addEventListener("mouseleave", function () {
      setTimeout(() => {
        dropdownCompany.classList.add("show");
        arrowCompany.src = `images/icon-arrow-down.svg`;
      }, 200);
    });
  }
}
mediaQuery2.addListener(handleScreenChange2);
handleScreenChange2(mediaQuery2);
