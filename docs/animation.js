/* hero animation */

window.addEventListener("DOMContentLoaded", () => {
    const heroElements = [
        {
            element: document.querySelector(".navbar"),
            delay: 0
        },
        {
            element: document.querySelector(".name-text"),
            delay: 250
        },
        {
            element: document.querySelector(".intro-text"),
            delay: 500
        }
    ];

    heroElements.forEach(item => {

        if (!item.element) return;

        setTimeout(() => {
            item.element.classList.add("show");
        }, item.delay);

    });

});

/* lily pond animation */

const welcome = document.querySelector("#welcome");
const rippleContainer = document.querySelector(".ripple-container");

const floatingObjects = document.querySelectorAll(
    ".left-pad img, .group-content"
);

const RIPPLE_DISTANCE = 90;

let lastX = 0;
let lastY = 0;

welcome.addEventListener("pointermove", (e) => {

    const rect = welcome.getBoundingClientRect();

    const localX = e.clientX - rect.left;
    const localY = e.clientY - rect.top;

    const dx = localX - lastX;
    const dy = localY - lastY;

    if (Math.hypot(dx, dy) < RIPPLE_DISTANCE) return;

    lastX = localX;
    lastY = localY;

    createRipple(localX, localY);
    nudgeObjects(e.clientX, e.clientY);

});

function createRipple(x, y) {

    const ripple = document.createElement("div");
    ripple.classList.add("ripple");

    for (let i = 0; i < 2; i++) {

        const ring = document.createElement("div");
        ring.classList.add("ripple-ring");

        const size = 20 + Math.random() * 8;

        ring.style.left = `${x}px`;
        ring.style.top = `${y}px`;

        ring.style.width = `${size}px`;
        ring.style.height = `${size}px`;

        ring.style.opacity = 0.45 + Math.random() * 0.2;
        ring.style.rotate = `${Math.random() * 360}deg`;

        ring.style.animationDelay = `${i * 0.28}s`;

        ripple.appendChild(ring);

    }

    rippleContainer.appendChild(ripple);

    setTimeout(() => {

        ripple.remove();

    }, 2200);

}

function nudgeObjects(cursorX, cursorY) {

    const MAX_DISTANCE = 260;

    floatingObjects.forEach(object => {

        const rect = object.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dx = centerX - cursorX;
        const dy = centerY - cursorY;

        const distance = Math.hypot(dx, dy);

        if (distance > MAX_DISTANCE) return;

        const force = (MAX_DISTANCE - distance) / MAX_DISTANCE;

        const moveX = dx * force * 0.10;
        const moveY = dy * force * 0.10;

        object.getAnimations().forEach(animation => animation.cancel());

        object.animate(
            [
                {
                    transform: "translate(0px, 0px)"
                },
                {
                    transform: `translate(${moveX}px, ${moveY}px)`
                },
                {
                    transform: "translate(0px, 0px)"
                }
            ],
            {
                duration: 900,
                easing: "cubic-bezier(.22,.61,.36,1)",
                fill: "none"
            }
        );

    });

}

/* navbar animation */

const nav = document.querySelector(".navbar");

let lastScroll = 0;

window.addEventListener("scroll", () => {

    const currentScroll = window.scrollY;

    // Always show at the top of the page
    if (currentScroll <= 50) {
        nav.classList.remove("hide");
        lastScroll = currentScroll;
        return;
    }

    // Hide while scrolling down
    if (currentScroll > lastScroll) {
        nav.classList.add("hide");
    }

    // Show while scrolling up
    else {
        nav.classList.remove("hide");
    }

    lastScroll = currentScroll;

});

// Show navbar whenever the mouse is near the top of the screen
document.addEventListener("mousemove", (e) => {

    if (e.clientY <= 60) {
        nav.classList.remove("hide");
    }

});

/* scroll animation */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
},{
    threshold:0.2
});
document.querySelectorAll(".reveal").forEach(element => {
    observer.observe(element);
});