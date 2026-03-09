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

    // 2. Latest Post Section
    const latestPostTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".latest-post-section",
            start: "top 80%"
        }
    });

    latestPostTL.from(".post-label", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    })
        .from(".post-title", {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        }, "-=0.6")
        .from(".post-metadata", {
            x: -20,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.7")
        .from(".post-image", {
            scale: 1.1,
            opacity: 0,
            duration: 1.5,
            ease: "power2.out"
        }, "0")
        .from(".post-bottom", {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.5");

    // 3. Floating Action Bar Logic
    const fab = document.querySelector('.floating-action-bar');
    const footer = document.querySelector('.main-footer');
    let lastScrollTop = 0;

    if (fab && footer) {
        window.addEventListener('scroll', () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const footerRect = footer.getBoundingClientRect();
            const isFooterVisible = footerRect.top < window.innerHeight;

            if (isFooterVisible) {
                fab.classList.remove('visible');
            } else {
                if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
                    // Scrolling DOWN
                    fab.classList.add('visible');
                } else {
                    // Scrolling UP
                    fab.classList.remove('visible');
                }
            }
            lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
        });
    }

});
