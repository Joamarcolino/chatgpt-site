
// read more button logic.

document.querySelectorAll(".readmorebtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const more = btn.previousElementSibling; // Assumes the .more span is right before the button
    more.classList.toggle("toggle");
    if(more.classList.contains("toggle")){
      btn.innerHTML = "Show less"
    } else {
      btn.innerHTML = "Show more"
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
    const navbarLists = document.querySelectorAll(".navbar .pages");

    function toggleNavbarBackground() {
      navbarLists.forEach((ul) => {
        if (window.scrollY <= 0) {
          ul.classList.add("hidden-navbar");
        } else {
          ul.classList.remove("hidden-navbar");
        }
      });
    }

    window.addEventListener("scroll", toggleNavbarBackground);
    toggleNavbarBackground(); // Run on page load
  });