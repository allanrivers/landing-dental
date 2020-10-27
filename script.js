// Burger menu
const burgerMenu = document.getElementById("burger-menu");

const sideBarMenu = (e) => {
  const menu = document.getElementById("nav-ul");

  if (menu.style.display === "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
};

burgerMenu.addEventListener("click", sideBarMenu);

// Scroll animation for pricing
const pricingSection = document.querySelector(".cards");

// Scroll method
window.addEventListener("scroll", () => {
  if (document.scrollingElement.scrollTop > 1300) {
    if (pricingSection.classList.contains("offScroll")) {
      pricingSection.classList.remove("offScroll");
    }
    pricingSection.style.opacity = "1";
    pricingSection.classList.add("scroll");
  } else if (document.scrollingElement.scrollTop < 1300) {
    if (pricingSection.classList.contains("scroll")) {
      pricingSection.classList.remove("scroll");
    }
    pricingSection.classList.add("offScroll");
    pricingSection.style.opacity = "0";
  }
});
