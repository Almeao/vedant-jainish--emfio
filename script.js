// Initialize Lenis
window.lenis = new Lenis({
    autoRaf: true,
});

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Synchronize Lenis and GSAP ScrollTrigger
window.lenis.on('scroll', ScrollTrigger.update);

// Listen for the scroll event
window.lenis.on('scroll', (e) => {
    // console.log(e); // Clean up log for production feel
});

document.addEventListener('DOMContentLoaded', () => {
    // Optional: Add a class to navbar on scroll if sticky behavior is desired
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Optional: For touch devices, handle tap to toggle dropdown
    // This simple logic prevents double-firing on desktop hover
    const dropdowns = document.querySelectorAll('.has-dropdown > a');

    dropdowns.forEach(link => {
        link.addEventListener('click', (e) => {
            // If on mobile or if user prefers click logic
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const parent = link.parentElement;
                parent.classList.toggle('active');
            }
        });
    });

    // Time update function
    function updateLocalTime() {
        const formatTime = (timeZone) => {
            const date = new Date();
            const options = {
                timeZone: timeZone,
                hour12: false, // 24-hour format matching image (21:32)
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            };
            // Get basic time string "HH:MM:SS"
            let timeStr = date.toLocaleTimeString('en-GB', options);
            // Replace colons with spaced colons "HH : MM : SS"
            return timeStr.replace(/:/g, ' : ');
        };

        const sgEl = document.getElementById('time-sg');
        const usEl = document.getElementById('time-us');

        if (sgEl) sgEl.textContent = formatTime('Asia/Singapore');
        if (usEl) usEl.textContent = formatTime('America/New_York');
    }

    // Run immediately and then every second
    updateLocalTime();
    setInterval(updateLocalTime, 1000);

    // Initialize Intl Tel Input
    const phoneInput = document.querySelector("#phone");
    if (phoneInput) {
        window.intlTelInput(phoneInput, {
            initialCountry: "in", // Set default to India
            separateDialCode: true,
            utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
            autoPlaceholder: "off",
        });
    }

    // Populate Country Select Dropdown
    const countrySelect = document.querySelector("#country");
    if (countrySelect) {
        const countries = [
            "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
            "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
            "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)",
            "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
            "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. 'Swaziland')", "Ethiopia",
            "Fiji", "Finland", "France",
            "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
            "Haiti", "Holy See", "Honduras", "Hungary",
            "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
            "Jamaica", "Japan", "Jordan",
            "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
            "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
            "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)",
            "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
            "Oman",
            "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
            "Qatar",
            "Romania", "Russia", "Rwanda",
            "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
            "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
            "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan",
            "Vanuatu", "Venezuela", "Vietnam",
            "Yemen",
            "Zambia", "Zimbabwe"
        ];

        countries.forEach(country => {
            const option = document.createElement("option");
            option.text = country;
            option.value = country;
            countrySelect.add(option);
        });
    }

    // GSAP Animations
    const initAnimations = () => {
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);

            // Contact Header Animation
            gsap.from(".contact-header h1, .contact-header .btn-chat", {
                scrollTrigger: {
                    trigger: ".contact-header",
                    start: "top 80%",
                },
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });

            // Location Cards Animation
            gsap.from(".location-card", {
                scrollTrigger: {
                    trigger: ".locations-grid",
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });

            // Enquiries List Animation
            gsap.from(".enquiry-item", {
                scrollTrigger: {
                    trigger: ".enquiries-list",
                    start: "top 80%",
                },
                x: -20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out"
            });

            // Contact Form Animation
            gsap.from(".contact-form-section", {
                scrollTrigger: {
                    trigger: ".contact-form-section",
                    start: "top 75%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            // Distributors Banner Animation
            gsap.from(".banner-content", {
                scrollTrigger: {
                    trigger: ".distributors-banner",
                    start: "top 70%",
                },
                y: 50,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out"
            });

            // Infinite Ticker Animation (Entrance)
            gsap.from(".infinite-ticker-wrapper", {
                scrollTrigger: {
                    trigger: ".infinite-ticker-wrapper",
                    start: "top 90%",
                },
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            });

            // Footer Top Animation
            gsap.from(".footer-desc-col, .footer-col", {
                scrollTrigger: {
                    trigger: ".footer-top",
                    start: "top 85%",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out"
            });

            // Big Logo & Middle Animation
            gsap.from(".big-footer-logo", {
                scrollTrigger: {
                    trigger: ".footer-middle",
                    start: "top 85%",
                },
                y: 50,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out"
            });

            gsap.from(".footer-contact-row", {
                scrollTrigger: {
                    trigger: ".footer-middle",
                    start: "top 80%",
                },
                y: 30,
                opacity: 0,
                duration: 1,
                delay: 0.2, // Wait for logo slightly
                ease: "power2.out"
            });


            // Footer Bottom Animation
            gsap.from(".footer-bottom", {
                scrollTrigger: {
                    trigger: ".footer-bottom",
                    start: "top 98%",
                },
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            });
        }
    };

    initAnimations();


    // Floating Action Bar Logic
    const fab = document.querySelector('.floating-action-bar');
    const footer = document.querySelector('.main-footer');
    let lastScrollTop = 0;

    if (fab && footer) {
        // Scroll listener for show/hide behavior
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
