// Reveal Text Animation
const textElements = document.querySelectorAll('.reveal-text');

textElements.forEach(el => {
    gsap.to(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 85%", // Start when top of element hits 85% of viewport height
            toggleActions: "play none none reverse"
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
    });
});

// Reveal Image Animation (Clip Path / Wipe)
const imageElements = document.querySelectorAll('.reveal-image');

imageElements.forEach(el => {
    gsap.to(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        clipPath: "inset(0 0 0% 0)", // Reveal fully
        opacity: 1,
        duration: 1.5,
        ease: "power4.out"
    });

    // Optional Parallax for image inside container
    const img = el.querySelector('img');
    if (img) {
        gsap.fromTo(img,
            { scale: 1.2 },
            {
                scale: 1,
                scrollTrigger: {
                    trigger: el,
                    start: "top 100%",
                    end: "bottom 0%",
                    scrub: true
                },
                ease: "none"
            }
        );
    }
});

// Horizontal parallax or slight movement for gallery items
gsap.to('.gallery-item.large', {
    y: -50,
    scrollTrigger: {
        trigger: '.gallery-grid',
        start: "top bottom",
        end: "bottom top",
        scrub: 1
    }
});

gsap.to('.gallery-item.small', {
    // y: 50,
    scrollTrigger: {
        trigger: '.gallery-grid',
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5
    }
});
