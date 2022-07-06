const featuresNavLink = document.querySelector(".navigation__link--features");
const companyNavLink = document.querySelector(".navigation__link--company");
const dropdown1 = document.querySelector(".dropdown--1");
const dropdown2 = document.querySelector(".dropdown--2");

function toggleAppear(item) {
  item.classList.toggle("show");
}

featuresNavLink.addEventListener("click", function () {
  toggleAppear(dropdown1);
});

companyNavLink.addEventListener("click", function () {
  toggleAppear(dropdown2);
});
