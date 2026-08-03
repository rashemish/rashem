document.addEventListener("DOMContentLoaded", () => {
    const filters = document.querySelectorAll(".filter");
    const cards = document.querySelectorAll(".project-card");

    const viewer = document.querySelector("#project-viewer");
    const viewerImage = document.querySelector("#project-image");
    const closeButton = document.querySelector("#close-project");

    console.log("toggle.js loaded");
    console.log("Cards found:", cards.length);
    console.log("Viewer:", viewer);

    filters.forEach(filter => {

        filter.addEventListener("click", function(e) {

            e.preventDefault();

            filters.forEach(item => item.classList.remove("active"));
            this.classList.add("active");

            const category = this.dataset.filter;

            cards.forEach(card => {

                const show =
                    category === "all" ||
                    card.classList.contains(category);

                if (show) {

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

    cards.forEach(card => {

        card.addEventListener("click", () => {

            console.log("Clicked:", card.dataset.image);

            viewerImage.src = card.dataset.image;

            viewer.classList.add("open");

            document.body.style.overflow = "hidden";

        });

    });

    function closeViewer() {

        viewer.classList.remove("open");
        document.body.style.overflow = "auto";

    }

    closeButton.addEventListener("click", closeViewer);

    viewer.addEventListener("click", e => {

        if (e.target === viewer) {
            closeViewer();
        }

    });

    document.addEventListener("keydown", e => {

        if (e.key === "Escape") {
            closeViewer();
        }

    });

});