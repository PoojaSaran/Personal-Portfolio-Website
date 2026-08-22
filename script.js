document.addEventListener("DOMContentLoaded", () => {

    const heroContent = document.querySelector(".hero-content");

    setTimeout(() => {
        heroContent?.classList.add("animate");
    }, 300);

    // Add reveal class automatically
    const elements = document.querySelectorAll(
        ".card, .certificate-card, section h2"
    );

    elements.forEach((el) => {
        el.classList.add("reveal");
    });




    function revealElements() {
        const reveals = document.querySelectorAll(".reveal");

        reveals.forEach((el) => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const visiblePoint = 120;

            if (elementTop < windowHeight - visiblePoint) {
                el.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealElements);
    revealElements();



    
    const nav = document.querySelector("nav");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            nav?.classList.add("nav-scrolled");
        } else {
            nav?.classList.remove("nav-scrolled");
        }
    });



    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

});
