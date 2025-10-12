document.addEventListener("DOMContentLoaded", () => {
  const filterLinks = document.querySelectorAll(".filter-link");
  const gridItems = document.querySelectorAll(".grid-item");

  filterLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      filterLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      const filter = link.getAttribute("data-filter");

      gridItems.forEach(item => {
        const category = item.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
});
