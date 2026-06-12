const sections = document.querySelectorAll("main section[id]");
const currentSection = document.getElementById("current-section");
const navLinks = document.querySelectorAll(".nav-links a");

function updateActiveSection() {
    let current = "home";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {
            current = section.id;
        }
    });

    if (currentSection) {
        currentSection.textContent = current.toUpperCase();
    }

    navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
}

const revealElements = document.querySelectorAll(
    ".card, .project-card, .timeline-card, .experience-card, .section-card, .resume-box, .contact-box, .portrait-panel, .hero-copy"
);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.14,
        rootMargin: "0px 0px -40px 0px",
    }
);

revealElements.forEach((element) => revealObserver.observe(element));

window.addEventListener("scroll", updateActiveSection, { passive: true });
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
    updateActiveSection();
});

function downloadResume() {
    const link = document.createElement("a");
    link.href = "assets/Samiksha_Resume.pdf";
    link.download = "Samiksha_Resume.pdf";
    link.style.display = "none";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
