/* ============DARK MODE============= */

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
});
/* ============CARD FLIP============ */

function flipCard(card) {
  card.classList.toggle("flipped");
}
/* ============FADE ANIMATION============ */
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

/* ============SCROLL TO THE TOP============ */
const scrollBtn = document.getElementById("scroll-Top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

