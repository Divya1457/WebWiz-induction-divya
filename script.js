/* ==darkmode== */

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
});
/* ==card-flip== */

function flipCard(card) {
  card.classList.toggle("flipped");
}
/* ==FADE ANIMATION== */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".fade-anime").forEach(el => {
  observer.observe(el);
});

/* ==scroll to top of page== */
const scrollbutton = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollbutton.classList.add("show");
  } else {
    scrollbutton.classList.remove("show");
  }
});

scrollbutton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});