
// read more button logic.

document.querySelectorAll(".readmorebtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const more = btn.previousElementSibling; // Assumes the .more span is right before the button
    more.classList.toggle("toggle");
    if (more.classList.contains("toggle")) {
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
  toggleNavbarBackground();
});

// mostra e não mostra os elementos quando clica no menu mobile

function Showsidepages() {
  const sidepages = document.querySelector('.sidepages')
  const hidepages = document.querySelector('.pages')
  hidepages.style.display = 'none'
  sidepages.style.display = 'flex'
}
function Hidesidepages() {
  const sidepages = document.querySelector('.sidepages')
  const showpages = document.querySelector('.pages')
  showpages.style.display = 'flex'
  sidepages.style.display = 'none'
}

//tira e mostra palavras chaves dos blocos de textos quando clicados no botão.
document.querySelectorAll('.text-blockarea').forEach(section => {
  const enableBtn = section.querySelector('.keywordsbtnenabler');
  const disableBtn = section.querySelector('.keywordsbtndisabler');

  enableBtn.addEventListener('click', () => {
    section.querySelectorAll('strong').forEach(el => el.style.color = 'gold');
    section.querySelectorAll('b').forEach(el => el.style.color = 'lime');
    enableBtn.style.display = 'none';
    disableBtn.style.display = 'flex';
  });

  disableBtn.addEventListener('click', () => {
    section.querySelectorAll('strong').forEach(el => el.style.color = 'white');
    section.querySelectorAll('b').forEach(el => el.style.color = 'white');
    disableBtn.style.display = 'none';
    enableBtn.style.display = 'flex';
  });
  
});