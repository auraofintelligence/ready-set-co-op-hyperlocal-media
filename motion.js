(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) return;

  document.documentElement.classList.add("motion-ready");

  const items = document.querySelectorAll(
    ".section-heading, .format-card, .desk-grid article, .loop-step, .architecture-flow article, .tool-card, .choice-card"
  );

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((item, index) => {
    item.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
    observer.observe(item);
  });
})();
