// Scroll ile kartların yumuşakça gelmesi
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15,
    }
);

document.querySelectorAll(".reveal, .product-card, .testimonial-card").forEach((el) => {
    observer.observe(el);
});
