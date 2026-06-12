const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

function updateActiveLink() {
    let current = sections[0]?.id || "home";

    sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 220) {
            current = section.id;
        }
    });

    navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
}

const revealElements = document.querySelectorAll(
    ".hero-copy, .metrics-strip article, .section-title, .section-body, .comparison-panel, .trust-section > h2, .skill-band article, .experience-panel, .project-card, .logo-row span, .final-cta > div, .footer-cta > *, .site-footer"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12,
        rootMargin: "0px 0px -48px 0px",
    }
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
});

window.addEventListener("scroll", updateActiveLink, { passive: true });
window.addEventListener("load", updateActiveLink);

function downloadResume() {
    const link = document.createElement("a");
    link.href = "assets/Samiksha_Resume.pdf";
    link.download = "Samiksha_Resume.pdf";
    link.style.display = "none";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
