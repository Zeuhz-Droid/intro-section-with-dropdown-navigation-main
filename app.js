const featuresNavLink = document.querySelector(".navigation__link--features");
const companyNavLink = document.querySelector(".navigation__link--company");
const arrowDown1 = document.querySelector(".navigation__slide-icon--1");
const arrowDown2 = document.querySelector(".navigation__slide-icon--2");
const dropdown1 = document.querySelector(".dropdown--1");
const dropdown2 = document.querySelector(".dropdown--2");

function toggleAppear(item) {
  item.classList.toggle("show");
}

let clicked1 = false;
featuresNavLink.addEventListener("click", function () {
  toggleAppear(dropdown1);
  clicked1 = !clicked1;
  const direction = clicked1 === true ? "up" : "down";
  arrowDown1.src = `images/icon-arrow-${direction}.svg`;
});

let clicked2 = false;
companyNavLink.addEventListener("click", function () {
  toggleAppear(dropdown2);
  clicked2 = !clicked2;
  const direction = clicked2 === true ? "up" : "down";
  arrowDown2.src = `images/icon-arrow-${direction}.svg`;
});
