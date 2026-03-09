// Collection Detail Animations
document.addEventListener('DOMContentLoaded', () => {
    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // 1. Entry Animation Sequence
    const entryTl = gsap.timeline();

    // Set initial states
    gsap.set(".navbar", { y: -100, opacity: 0 });
    gsap.set(".lifestyle-hero img", { scale: 1.2, opacity: 0 });
    gsap.set(".collection-detail-title", { y: 30, opacity: 0 });
    gsap.set(".specs-meta-grid .spec-item", { y: 20, opacity: 0 });
    gsap.set(".specs-gallery-grid .gallery-item", { y: 30, opacity: 0 });

    entryTl
        .to(".navbar", { y: 0, opacity: 1, duration: 1, ease: "power3.out" })
        .to(".lifestyle-hero img", { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }, "-=0.5")
        .to(".collection-detail-title", { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=1")
        .to(".specs-meta-grid .spec-item", { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" }, "-=0.5")
        .to(".specs-gallery-grid .gallery-item", { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" }, "-=0.5");

    // 2. Scroll Animations for Gallery
    gsap.from(".specs-left-preview img", {
        scrollTrigger: {
            trigger: ".specs-section",
            start: "top 80%",
        },
        scale: 1.1,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out"
    });


});
