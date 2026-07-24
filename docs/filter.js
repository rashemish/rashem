const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".project-card");

filters.forEach(filter => {

    filter.addEventListener("click", function(e) {

        e.preventDefault();

        filters.forEach(item => item.classList.remove("active"));
        this.classList.add("active");

        const category = this.dataset.filter;

        cards.forEach(card => {

            if (category === "all" || card.classList.contains(category)) {

                card.style.display = "block";

                requestAnimationFrame(() => {
                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";
                });

            } else {

                card.style.opacity = "0";
                card.style.transform = "translateY(15px)";

                setTimeout(() => {
                    card.style.display = "none";
                }, 250);

            }

        });

    });

});