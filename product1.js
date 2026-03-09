// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
gsap.ticker.add((time) => {
    lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP
gsap.ticker.lagSmoothing(0);

// Shared Layout Logic
document.addEventListener('DOMContentLoaded', () => {
    // 1. Hero Animation (Part 1)
    gsap.from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.5
    });

    gsap.from(".btn-explore-collections", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.8
    });

    // 2. Overview Animation (Part 2)
    const overviewTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".part2",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    overviewTl.from(".overview-label", {
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    })
        .from(".overview-headline", {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        }, "-=0.4")
        .from(".overview-secondary p", {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        }, "-=0.6");

    // 3. Specifications Animation (Part 3)
    gsap.from(".spec-col", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".part3",
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });

    // 4. Swiper Slider Initialization & Reveal
    const swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        speed: 1000, // Slow smooth slide
        slidesPerView: "auto",
        spaceBetween: 0, // Handled by padding in CSS for better control
        centeredSlides: false,
        freeMode: true,
        grabCursor: true,
    });

    gsap.from(".product-gallery", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".product-gallery",
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });

    // 5. Collections Animation (Part 5)
    gsap.from(".part5_sub_1", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".part5",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".part5_sub_2_card_all", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".part5_sub_2",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });


    // Navbar scroll behavior
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Local Time update
    function updateLocalTime() {
        const formatTime = (timeZone) => {
            const date = new Date();
            const options = {
                timeZone: timeZone,
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            };
            let timeStr = date.toLocaleTimeString('en-GB', options);
            return timeStr.replace(/:/g, ' : ');
        };

        const sgEl = document.getElementById('time-sg');
        const usEl = document.getElementById('time-us');

        if (sgEl) sgEl.textContent = formatTime('Asia/Singapore');
        if (usEl) usEl.textContent = formatTime('America/New_York');
    }

    updateLocalTime();
    setInterval(updateLocalTime, 1000);

    // Floating Action Bar logic
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
                    fab.classList.add('visible');
                } else {
                    fab.classList.remove('visible');
                }
            }
            lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
        });
    }

    // Mobile dropdown toggle
    const dropdowns = document.querySelectorAll('.has-dropdown > a');
    dropdowns.forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const parent = link.parentElement;
                parent.classList.toggle('active');
            }
        });
    });
});
