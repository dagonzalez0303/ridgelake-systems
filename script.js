document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            navbar.style.boxShadow = "0 8px 24px rgba(15, 23, 42, 0.08)";
        } else {
            navbar.style.boxShadow = "none";
        }
    });

    const revealItems = document.querySelectorAll(
        ".service-card, .section-heading, .about-grid, .contact-content"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15,
        }
    );

    revealItems.forEach((item) => {
        item.classList.add("reveal");
        observer.observe(item);
    });
});
