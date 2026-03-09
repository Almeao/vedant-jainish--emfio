

document.addEventListener('DOMContentLoaded', () => {
    // 1. Hero Section
    gsap.from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2
    });
    gsap.from(".hero-divider", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1,
        ease: "power2.out",
        delay: 0.5
    });

    // 2. Overview Section
    gsap.from(".overview-content", {
        scrollTrigger: {
            trigger: ".overview-section",
            start: "top 80%"
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });
    gsap.from(".overview-image", {
        scrollTrigger: {
            trigger: ".overview-section",
            start: "top 80%"
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.2
    });

    // 3. Recognition Section
    gsap.from(".recognition-header", {
        scrollTrigger: {
            trigger: ".recognition-section",
            start: "top 85%"
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });
    gsap.from(".recognition-divider", {
        scrollTrigger: {
            trigger: ".recognition-section",
            start: "top 85%"
        },
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1,
        ease: "power2.out",
        delay: 0.2
    });
    gsap.from(".recognition-item", {
        scrollTrigger: {
            trigger: ".recognition-list",
            start: "top 85%"
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2, // Stagger each item by 0.2s
        ease: "power2.out"
    });

    // 4. Results Section
    gsap.from(".results-header", {
        scrollTrigger: {
            trigger: ".results-section",
            start: "top 80%"
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });
    gsap.from(".results-divider", {
        scrollTrigger: {
            trigger: ".results-section",
            start: "top 80%"
        },
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1,
        ease: "power2.out",
        delay: 0.2
    });
    gsap.from(".result-card", {
        scrollTrigger: {
            trigger: ".results-grid",
            start: "top 85%"
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
    });

    // 5. Principles Section
    gsap.from(".principles-header", {
        scrollTrigger: {
            trigger: ".principles-section",
            start: "top 80%"
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });
    gsap.from(".principles-divider", {
        scrollTrigger: {
            trigger: ".principles-section",
            start: "top 80%"
        },
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1,
        ease: "power2.out",
        delay: 0.2
    });

    // Animate each principle row as it comes into view
    const principleRows = document.querySelectorAll('.principle-row');
    principleRows.forEach((row) => {
        gsap.from(row, {
            scrollTrigger: {
                trigger: row,
                start: "top 85%"
            },
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
    });

});
