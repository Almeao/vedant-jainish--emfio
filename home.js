// Initialize Lenis for smooth slow scrolling with easing
const lenis = new Lenis({
  smooth: true,
  lerp: 0.02, // smaller value for slower, smoother scroll (default is 0.1)
  duration: 1.2, // in seconds, slow it down further for a "perfect" controlled scroll
  wheelMultiplier: 0.7, // reduce mousewheel speed, play with value for desired "slowness"
  easing: (t) => 1 - Math.pow(1 - t, 3) // Add cubic easing (easeOutCubic)
});

// handle frame updates
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf);

// (Optional) Sync Lenis with GSAP's ScrollTrigger if used
if (window.gsap && window.ScrollTrigger) {
  lenis.on('scroll', ScrollTrigger.update)
}



gsap.to("[data-speed]", {
  y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window),
  ease: "none",
  scrollTrigger: {
    start: 0,
    end: "max",
    invalidateOnRefresh: true,
    scrub: 0,
  }
});


















// Function to animate .header_top height and border based on scroll position
// function animateHeaderOnScroll() {
//   const headerTop = document.querySelector('.header_top');
//   if (!headerTop) return;
//   const currentScrollY = window.scrollY;

//   if (currentScrollY > 10) {
//     // Scroll Y > 2: height 5vh and border bottom
//     gsap.to(headerTop, {
//       height: "5vh",
//       borderBottom: "0.5px solid #00000065",
//       duration: 1,
//       ease: window.CustomEase ? CustomEase.create("custom", "M0,0 C1,0.012 0,1 1,1 ") : "power2.out",


//       overwrite: "auto"
//     });
//   } else {
//     // Scroll Y <= 2: height 10vh and remove border bottom
//     gsap.to(headerTop, {
//       height: "10vh",
//       borderBottom: "none",
//       duration: 1,
//       // Fix: Ensure CustomEase is loaded and registered with GSAP, and the name matches.
//       // If CustomEase is unavailable, fallback to a standard GSAP ease for now.
//       // To use a custom ease, ensure to include: 
//       // <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/CustomEase.min.js"></script>
//       ease: window.CustomEase ? CustomEase.create("custom", "M0,0 C1,0.012 0,1 1,1 ") : "power2.out",
//       overwrite: "auto"
//     });
//   }
// }

// // Attach function to the 'scroll' event of the window
// window.addEventListener('scroll', animateHeaderOnScroll);

// // Also, set on page load to ensure correct state
// animateHeaderOnScroll();



// // Make sure .bottam is set to y:100% initially (hidden off screen)
// gsap.set(".bottam", {
//   y: "100%",
// });








//   // Animate header and bottam bar: hide on scroll down, show on scroll up.
//   // If .footer_div is being scrolled into view, hide both header and .bottam no matter the scroll direction.
//   (function () {
//     const header = document.querySelector('header');
//     const bottam = document.querySelector('.bottam');
//     const footerDiv = document.querySelector('.footer_div');
//     if (!header || !bottam) return;

//     let lastScrollY = window.scrollY;
//     let ticking = false;

//     function isFooterInView() {
//       if (!footerDiv) return false;
//       const rect = footerDiv.getBoundingClientRect();
//       // Return true if any part of .footer_div is visible in viewport
//       return rect.top < window.innerHeight && rect.bottom > 0;
//     }

//     function onScroll() {
//       const currentScrollY = window.scrollY;

//       // Always check .footer_div visibility first
//       if (isFooterInView()) {
      
//         gsap.to(bottam, {
//           y: "100%",
//           duration: 0.7,
//           ease: "power4.out",
//           overwrite: "auto"
//         });
//       } else if (currentScrollY > lastScrollY && currentScrollY > 200) {
//         // Scrolling down, hide header and .bottam
//         gsap.to(header, {
//           y: "-100%",
//           duration: 1,
//           ease: "power4.out",
//           overwrite: "auto"
//         });
//         gsap.to(bottam, {
//           y: "0%",
//           duration: 1,
//           ease: "power4.out",
//           overwrite: "auto"
//         });
//       } else {
//         // Scrolling up, show header and .bottam
//         gsap.to(header, {
//           y: "0%",
//           duration: 1.5,
//           ease: "power4.out",
//           overwrite: "auto"
//         });
//         gsap.to(bottam, {
//           y: "100%",
//           duration: 1.5,
//           ease: "power4.out",
//           overwrite: "auto"
//         });
//       }

//       lastScrollY = currentScrollY;
//       ticking = false;
//     }

//     window.addEventListener("scroll", function () {
//       if (!ticking) {
//         requestAnimationFrame(onScroll);
//         ticking = true;
//       }
//     });
//   })();


  
  
  
  
//   const btn1 = document.querySelector('.header_top_option_1');
//   const curtain1 = document.querySelector('.headder_container1_cover');
//   const headerTop1 = document.querySelector('.header_top');
//   const main1 = document.querySelector('main');
  
//   if (btn1 && curtain1 && headerTop1 && main1) {
//     gsap.set(curtain1, { height: 0, clearProps: "opacity" });
//     headerTop1.style.borderBottom = "none";
//     main1.style.filter = "none";
  
//     let isOverBtn1 = false;
//     let isOverCurtain1 = false;
  
//     function showCurtain1() {
//       gsap.to(curtain1, {
//         height: "75vh",
//         opacity: 1,
//         scrub: 5,
//         stagger: 5,
//         duration: 0.7,
//         ease: window.CustomEase ? CustomEase.create("custom", "M0,0 C3.81,0.012 -2.808,0.987 1,0.987 ") : "power2.out",

//         overwrite: "auto"
//       });
//       headerTop1.style.borderBottom = "0.5px solid #00000065";
//       gsap.to(main1, {
//         filter: "blur(15px)",
//         duration: 0.4,
//         ease: "power2.out",
//         overwrite: "auto"
//       });
//     }
  
//     function hideCurtain1() {
//       gsap.to(curtain1, {
//         height: 0,
//         opacity: 0,
//         scrub: 5,
//         stagger: 5,
//         duration: 0.5,
//         ease: "expoScale(1,2,power2.inOut)",
//         overwrite: "auto"
//       });
//       headerTop1.style.borderBottom = "none";
//       gsap.to(main1, {
//         filter: "none",
//         duration: 0.3,
//         ease: "power2.in",
//         overwrite: "auto"
//       });
//     }
  
//     btn1.addEventListener('mouseenter', () => {
//       isOverBtn1 = true;
//       showCurtain1();
//     });
  
//     btn1.addEventListener('mouseleave', () => {
//       isOverBtn1 = false;
//       // Only hide if not over .headder_container1_cover
//       setTimeout(() => {
//         if (!isOverBtn1 && !isOverCurtain1) hideCurtain1();
//       }, 500);
//     });
  
//     curtain1.addEventListener('mouseenter', () => {
//       isOverCurtain1 = true;
//       showCurtain1();
//     });
  
//     curtain1.addEventListener('mouseleave', () => {
//       isOverCurtain1 = false;
//       // Only hide if not over .header_top_option_1
//       setTimeout(() => {
//         if (!isOverBtn1 && !isOverCurtain1) hideCurtain1();
//       }, 10);
//     });
//   }
  










  
//   // Animation for .headder_container2_cover (second curtain)
//   const btn2 = document.querySelector(".header_top_option_2");
//   const curtain2 = document.querySelector('.headder_container2_cover');
//   // const headerTop2 = document.querySelector('.header_top');
//   // const main2 = document.querySelector('main');
  
//   if (btn2 && curtain2 && main1) {
//     gsap.set(curtain2, { height: 0, clearProps: "opacity" });
//     headerTop1.style.borderBottom = "none";
//     main1.style.filter = "none";
  
//     let isOverBtn2 = false;
//     let isOverCurtain2 = false;
  
//     function showCurtain2() {
//       gsap.to(curtain2, {
//         height: "60vh",
//         opacity: 1,
//         scrub: 5,
//         stagger: 5,
//         duration: 0.4,
//         ease: window.CustomEase ? CustomEase.create("custom", "M0,0 C3.81,0.012 -2.808,0.987 1,0.987 ") : "power2.out",
//         overwrite: "auto"
//       });
//       headerTop1.style.borderBottom = "0.5px solid #00000065";
//       gsap.to(main1, {
//         filter: "blur(15px)",
//         duration: 0.4,
//         ease: "power2.out",
//         overwrite: "auto"
//       });
//     }
  
//     function hideCurtain2() {
//       gsap.to(curtain2, {
//         height: 0,
//         opacity: 0,
//         scrub: 5,
//         stagger: 5,
//         duration: 0.4,
//         ease: "expoScale(1,2,power2.inOut)",
//         overwrite: "auto"
//       });
//       headerTop1.style.borderBottom = "none";
//       gsap.to(main1, {
//         filter: "none",
//         duration: 0.3,
//         ease: "power2.in",
//         overwrite: "auto"
//       });
//     }
  
//     btn2.addEventListener('mouseenter', () => {
//       isOverBtn2 = true;
//       showCurtain2();
//     });
  
//     btn2.addEventListener('mouseleave', () => {
//       isOverBtn2 = false;
//       setTimeout(() => {
//         if (!isOverCurtain2 && !isOverBtn2) {
//           hideCurtain2();
//         }
//       }, 500);
//     });
  
//     curtain2.addEventListener('mouseenter', () => {
//       isOverCurtain2 = true;
//       showCurtain2();
//     });
  
//     curtain2.addEventListener('mouseleave', () => {
//       isOverCurtain2 = false;
//       setTimeout(() => {
//         if (!isOverBtn2 && !isOverCurtain2) {
//           hideCurtain2();
//         }
//       }, 10);
//     });
  
//   }
  

//   document.querySelectorAll('.header_container_2_part1').forEach(function(el) {
//     el.addEventListener('click', function() {
//       window.location.href = "our_story.html";
//     });
//   });



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























  document.addEventListener("DOMContentLoaded", () => {
            
    const textToDisplay = "STUDIO";
    const fillerChars = "STUDIO";
    const iterations = 0; 

    function buildWordStructure(elementId, text) {
        const container = document.getElementById(elementId);
        const chars = text.split('');
        
        chars.forEach(char => {
            const mask = document.createElement('div');
            mask.className = 'char-mask';
            
            const strip = document.createElement('div');
            strip.className = 'char-strip';
            
            // 1. STARTING LETTER
            const startSpan = document.createElement('span');
            startSpan.textContent = char === " " ? "\u00A0" : char;
            startSpan.style.color = "#000"; // Ensuring black text color
            strip.appendChild(startSpan);

            // 2. FILLER LETTERS
            for (let i = 0; i < iterations; i++) {
                const span = document.createElement('span');
                span.textContent = char === " " ? "\u00A0" : fillerChars[Math.floor(Math.random() * fillerChars.length)];
                span.style.color = "#000"; // Ensuring black text color
                strip.appendChild(span);
            }

            // 3. FINAL LETTER
            const finalSpan = document.createElement('span');
            finalSpan.textContent = char === " " ? "\u00A0" : char;
            finalSpan.style.color = "#000"; // Ensuring black text color
            strip.appendChild(finalSpan);

            mask.appendChild(strip);
            container.appendChild(mask);
        });
    }

    buildWordStructure('word-1', textToDisplay);

    const totalInStrip = iterations + 2; 
    // This is the final position (showing the very last letter)
    const finalMovePercent = -(100 * (totalInStrip - 1)) / totalInStrip;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".part3_right_detail_top",
        start: "top 90%",
        // Note: 'once' is not a valid ScrollTrigger option; removed for syntax correctness
        // Optional: toggleActions: "play none none reverse"
      }
    });

    // STEP 1: Slide the first letters UP into view from the bottom
    tl.to("#word-1 .char-strip", {
        yPercent: 0, // Moves from CSS translateY(100%) to 0 (showing 1st letter)
        y: 0, 
        duration: 1,
        ease: "power3.out",
        stagger: 0.03
    },"part3_right_detail_top")
    // STEP 2: Scramble scroll to the final letters
    .to("#word-1 .char-strip", {
        yPercent: finalMovePercent,
        duration: 1,
        ease: "power4.inOut",
        stagger: {
            each: 0.03,
            from: "start"
        }
    }, "part3_right_detail_top")
    // On completion, move the #word-1 div right by 5% (translateX)
    .to("#word-1", {
        xPercent: 10,
        duration: 0.5,
        ease: "power2.out"
    });
});



  // Convert each word in .part3_right_detail_bottam p to a span and animate them from bottom

  document.addEventListener("DOMContentLoaded", function() {
    // Utility: Split words, wrap in span, and add initial style for animation
    function wrapWordsWithSpans(selector) {
      const ps = document.querySelectorAll(selector);
      ps.forEach(p => {
        // Only replace once
        if (p.dataset.wordsWrapped) return;
        const html = p.textContent
          .split(/\s+/)
          .map(word => {
            // keep original spaces via &nbsp; if needed
            if (word.trim() === " ") return " ";
            // Escape HTML in word
            const safeWord = word.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            return `<span class="word-animate" style="display:inline-block; opacity:0; transform:translateY(2em)">${safeWord}&nbsp;</span>`;
          })
          .join("");
        p.innerHTML = html;
        p.dataset.wordsWrapped = "true";
      });
    }

    wrapWordsWithSpans('.part3_right_detail_bottam p');

    // Animate words: fade in & slide up (GSAP)
    if (typeof gsap !== "undefined") {
      document.querySelectorAll('.part3_right_detail_bottam p').forEach(p => {
        const wordSpans = p.querySelectorAll('.word-animate');
        if (wordSpans.length > 0) {
          gsap.to(wordSpans, {
            opacity: 1,
            y: 0,
            duration: 0.25,         // much shorter/smoother (was 0.5)
            stagger: 0.015,         // much quicker word staggering (was 0.03)
            ease: "power2.out",     // smoother and faster ease for snappy motion
            scrollTrigger: {
              trigger: p,
              start: "top 95%",     // fire a bit earlier for immediate effect
              toggleActions: "play none none none"
            }
          });
        }
      });
    }
  });






  document.addEventListener("DOMContentLoaded", function() {
    // Utility: Split words, wrap in span, and add initial style for animation
    function wrapWordsWithSpans(selector) {
      const ps = document.querySelectorAll(selector);
      ps.forEach(p => {
        // Only replace once
        if (p.dataset.wordsWrapped) return;
        const html = p.textContent
          .split(/\s+/)
          .map(word => {
            if (word.trim() === "") return " ";
            const safeWord = word.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            return `<span class="word-animate" style="display:inline-block; opacity:0; transform:translateY(2em)">${safeWord}&nbsp;</span>`;
          })
          .join("");
        p.innerHTML = html;
        p.dataset.wordsWrapped = "true";
      });
    }

    wrapWordsWithSpans('.part3_bottam_detail p');

    // Animate words: fade in & slide up (GSAP)
    if (typeof gsap !== "undefined") {
      document.querySelectorAll('.part3_bottam_detail p').forEach(p => {
        const wordSpans = p.querySelectorAll('.word-animate');
        if (wordSpans.length > 0) {
          gsap.to(wordSpans, {
            opacity: 1,
            y: 0,
            duration: 0.25,         // much shorter/smoother (was 0.5)
            stagger: 0.015,         // much quicker word staggering (was 0.03)
            ease: "power2.out",     // smoother and faster ease for snappy motion
            scrollTrigger: {
              trigger: p,
              start: "top 95%",     // fire a bit earlier for immediate effect
              toggleActions: "play none none none"
            }
          });
        }
      });
    }
  });















// ---------------  part3-image scroll animation ------------------



  // Updated: GSAP ScrollTrigger to pin the parent and move the inner image smoothly based on scroll

  document.addEventListener("DOMContentLoaded", function () {
    // Do not add animation in <=480px viewport (media query behavior)
    if (window.innerWidth <= 480) return;

    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
    if (gsap && gsap.registerPlugin) {
      gsap.registerPlugin(ScrollTrigger);
    }

    const imgAnimParent = document.querySelector('.part3_img_animation_inner');
    const imgAnimInner = document.querySelector('.part3_img_animation_inner');

    if (imgAnimParent && imgAnimInner) {
      const parentHeight = imgAnimParent.offsetHeight;
      const innerHeight = imgAnimInner.offsetHeight;
      // distance inner should move: parentHeight - innerHeight (should be negative or zero)
      // We want the image to move UP as parent is being scrolled into view

      // Only animate if the inner is taller than parent
      // We'll pin the parent, and animate inner Y
      gsap.to(imgAnimInner, {
        y: () => {
          const moveY = innerHeight - imgAnimParent.offsetHeight;
          return moveY > 0 ? -moveY : 0;
        },
        ease: "none",
        scrollTrigger: {
          trigger: imgAnimParent,
          start: "top 10%",
          end: () => `+=${imgAnimParent.offsetHeight}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });
    }
  });








// ---------------part4--------------


document.addEventListener("DOMContentLoaded", function() {
  // Utility: Split words, wrap in span, and add initial style for animation
  function wrapWordsWithSpans(selector) {
    const ps = document.querySelectorAll(selector);
    ps.forEach(p => {
      // Only replace once
      if (p.dataset.wordsWrapped) return;
      const html = p.textContent
        .split(/\s+/)
        .map(word => {
          if (word.trim() === "") return " ";
          const safeWord = word.replace(/</g, "&lt;").replace(/>/g, "&gt;");
          return `<span class="word-animate" style="display:inline-block; opacity:0; transform:translateY(2em)">${safeWord}&nbsp;</span>`;
        })
        .join("");
      p.innerHTML = html;
      p.dataset.wordsWrapped = "true";
    });
  }

  // Apply to .part4_left p elements (as per instruction)
  wrapWordsWithSpans('.part4_left p');

  // Animate words: fade in & slide up (GSAP)
  if (typeof gsap !== "undefined") {
    document.querySelectorAll('.part4_left p').forEach(p => {
      const wordSpans = p.querySelectorAll('.word-animate');
      if (wordSpans.length > 0) {
        gsap.to(wordSpans, {
          opacity: 1,
          y: 0,
          duration: 0.25,
          stagger: 0.015,
          ease: "power2.out",
          scrollTrigger: {
            trigger: p,
            start: "top 95%",
            toggleActions: "play none none none"
          }
        });
      }
    });
  }
});





document.addEventListener("DOMContentLoaded", function() {
  // Utility: Split words, wrap in span, and add initial style for animation
  function wrapWordsWithSpans(selector) {
    const ps = document.querySelectorAll(selector);
    ps.forEach(p => {
      // Only replace once
      if (p.dataset.wordsWrapped) return;
      const html = p.textContent
        .split(/\s+/)
        .map(word => {
          if (word.trim() === "") return " ";
          const safeWord = word.replace(/</g, "&lt;").replace(/>/g, "&gt;");
          return `<span class="word-animate" style="display:inline-block; opacity:0; transform:translateY(2em)">${safeWord}&nbsp;</span>`;
        })
        .join("");
      p.innerHTML = html;
      p.dataset.wordsWrapped = "true";
    });
  }

  // Apply to .part4_right p elements (as per instruction)
  wrapWordsWithSpans('.part4_right p');

  // Animate words: fade in & slide up (GSAP)
  if (typeof gsap !== "undefined") {
    document.querySelectorAll('.part4_right p').forEach(p => {
      const wordSpans = p.querySelectorAll('.word-animate');
      if (wordSpans.length > 0) {
        gsap.to(wordSpans, {
          opacity: 1,
          y: 0,
          duration: 0.25,
          stagger: 0.015,
          ease: "power2.out",
          scrollTrigger: {
            trigger: p,
            start: "top 95%",
            toggleActions: "play none none none"
          }
        });
      }
    });
  }
});



//----------part6 ------------

// Animate both .part6 paddings and .part7 image scale together in lockstep: 
// They increase at the same time, stop at the same time, decrease at the same time, sharing scroll and progress


document.addEventListener("DOMContentLoaded", function() {
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    const elemOpen = document.querySelector('.part6_data_counce_open');
    const elemClose = document.querySelector('.part6_data_counce_close');
    const imgElem = document.querySelector('.part7_img img');

    if (elemOpen && elemClose && imgElem) {
      // Always set paddings and scale to 0%/0.5 at start
      gsap.set(elemOpen, { paddingRight: '0%' });
      gsap.set(elemClose, { paddingLeft: '0%' });
      gsap.set(imgElem, { scale: 0.5 });

      // Smoothly interpolate all animated properties (smoothness 10x)
      let lastPadVal = 0, lastScaleVal = 0.5;
      let animating = false;

      // Helper for lerp toward target value at high smoothness.
      function animateToTarget(targetPad, targetScale) {
        if (animating) return;
        animating = true;

        function update() {
          // 0.25 for very fast "ease", increase for even slower catch-up
          const smooth = 0.06; // 10x smoother than default (default would be ~0.5+)
          lastPadVal += (targetPad - lastPadVal) * smooth;
          lastScaleVal += (targetScale - lastScaleVal) * smooth;

          elemOpen.style.paddingRight = lastPadVal + "%";
          elemClose.style.paddingLeft = lastPadVal + "%";
          imgElem.style.transform = `scale(${lastScaleVal})`;

          // If not close enough to target, continue in next frame
          if (Math.abs(lastPadVal - targetPad) > 0.01 || Math.abs(lastScaleVal - targetScale) > 0.001) {
            requestAnimationFrame(update);
          } else {
            // Snap to final
            lastPadVal = targetPad;
            lastScaleVal = targetScale;
            elemOpen.style.paddingRight = lastPadVal + "%";
            elemClose.style.paddingLeft = lastPadVal + "%";
            imgElem.style.transform = `scale(${lastScaleVal})`;
            animating = false;
          }
        }
        requestAnimationFrame(update);
      }

      // Create a single ScrollTrigger to drive both the paddings and the scale in perfect sync
      ScrollTrigger.create({
        trigger: elemOpen,
        start: "top 100%",
        end: "top -70%",
        scrub: true,
        // markers: true,
        onUpdate: self => {
          /*
            Both paddings and scale will:
              - 0.0 -> 0.5 : increase (padding 0%->40%, scale 0.5->1.0)
              - 0.5 -> 1.0: decrease (padding 40%->0%, scale 1.0->0.5)
            Both use the same progress and cut over at 0.5.
          */
          let prog = self.progress; // 0 to 1
          const maxPad = 40; // percent
          let padVal, scaleVal;
          if (prog <= 0.5) {
            // Increase
            padVal = (prog / 0.5) * maxPad;
            scaleVal = 0.5 + (prog / 0.5) * 0.5;
          } else {
            // Decrease
            padVal = ((1.0 - prog) / 0.5) * maxPad;
            scaleVal = 1.0 - ((prog - 0.5) / 0.5) * 0.5;
          }
          padVal = Math.max(0, Math.min(maxPad, padVal));
          scaleVal = Math.max(0.5, Math.min(1.0, scaleVal));
          elemOpen.style.paddingRight = padVal + "%";
          elemClose.style.paddingLeft = padVal + "%";
          imgElem.style.transform = `scale(${scaleVal})`;
        }
      });
    }
  }
});






document.addEventListener("DOMContentLoaded", function() {
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    const elemOpen = document.querySelector('.part8_data_counce_open');
    const elemClose = document.querySelector('.part8_data_counce_close');
    const imgElem = document.querySelector('.part9_img img');

    if (elemOpen && elemClose && imgElem) {
      // Always set paddings and scale to 0%/0.5 at start
      gsap.set(elemOpen, { paddingRight: '0%' });
      gsap.set(elemClose, { paddingLeft: '0%' });
      gsap.set(imgElem, { scale: 0.5 });

      // Smoothly interpolate all animated properties (smoothness 10x)
      let lastPadVal = 0, lastScaleVal = 0.5;
      let animating = false;

      // Helper for lerp toward target value at high smoothness.
      function animateToTarget(targetPad, targetScale) {
        if (animating) return;
        animating = true;

        function update() {
          // 0.25 for very fast "ease", increase for even slower catch-up
          const smooth = 0.06; // 10x smoother than default (default would be ~0.5+)
          lastPadVal += (targetPad - lastPadVal) * smooth;
          lastScaleVal += (targetScale - lastScaleVal) * smooth;

          elemOpen.style.paddingRight = lastPadVal + "%";
          elemClose.style.paddingLeft = lastPadVal + "%";
          imgElem.style.transform = `scale(${lastScaleVal})`;

          // If not close enough to target, continue in next frame
          if (Math.abs(lastPadVal - targetPad) > 0.01 || Math.abs(lastScaleVal - targetScale) > 0.001) {
            requestAnimationFrame(update);
          } else {
            // Snap to final
            lastPadVal = targetPad;
            lastScaleVal = targetScale;
            elemOpen.style.paddingRight = lastPadVal + "%";
            elemClose.style.paddingLeft = lastPadVal + "%";
            imgElem.style.transform = `scale(${lastScaleVal})`;
            animating = false;
          }
        }
        requestAnimationFrame(update);
      }

      // Create a single ScrollTrigger to drive both the paddings and the scale in perfect sync
      ScrollTrigger.create({
        trigger: elemOpen,
        start: "top 100%",
        end: "top -70%",
        scrub: true,
        // markers: true,
        onUpdate: self => {
          /*
            Both paddings and scale will:
              - 0.0 -> 0.5 : increase (padding 0%->40%, scale 0.5->1.0)
              - 0.5 -> 1.0: decrease (padding 40%->0%, scale 1.0->0.5)
            Both use the same progress and cut over at 0.5.
          */
          let prog = self.progress; // 0 to 1
          const maxPad = 23; // percent
          let padVal, scaleVal;
          if (prog <= 0.5) {
            // Increase
            padVal = (prog / 0.5) * maxPad;
            scaleVal = 0.5 + (prog / 0.5) * 0.5;
          } else {
            // Decrease
            padVal = ((1.0 - prog) / 0.5) * maxPad;
            scaleVal = 1.0 - ((prog - 0.5) / 0.5) * 0.5;
          }
          padVal = Math.max(0, Math.min(maxPad, padVal));
          scaleVal = Math.max(0.5, Math.min(1.0, scaleVal));
          elemOpen.style.paddingRight = padVal + "%";
          elemClose.style.paddingLeft = padVal + "%";
          imgElem.style.transform = `scale(${scaleVal})`;
        }
      });
    }
  }
});


document.addEventListener("DOMContentLoaded", function() {
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    const elemOpen = document.querySelector('.part10_data_counce_open');
    const elemClose = document.querySelector('.part10_data_counce_close');
    const imgElem = document.querySelector('.part11_img img');

    if (elemOpen && elemClose && imgElem) {
      // Always set paddings and scale to 0%/0.5 at start
      gsap.set(elemOpen, { paddingRight: '0%' });
      gsap.set(elemClose, { paddingLeft: '0%' });
      gsap.set(imgElem, { scale: 0.5 });

      // Smoothly interpolate all animated properties (smoothness 10x)
      let lastPadVal = 0, lastScaleVal = 0.5;
      let animating = false;

      // Helper for lerp toward target value at high smoothness.
      function animateToTarget(targetPad, targetScale) {
        if (animating) return;
        animating = true;

        function update() {
          // 0.25 for very fast "ease", increase for even slower catch-up
          const smooth = 0.06; // 10x smoother than default (default would be ~0.5+)
          lastPadVal += (targetPad - lastPadVal) * smooth;
          lastScaleVal += (targetScale - lastScaleVal) * smooth;

          elemOpen.style.paddingRight = lastPadVal + "%";
          elemClose.style.paddingLeft = lastPadVal + "%";
          imgElem.style.transform = `scale(${lastScaleVal})`;

          // If not close enough to target, continue in next frame
          if (Math.abs(lastPadVal - targetPad) > 0.01 || Math.abs(lastScaleVal - targetScale) > 0.001) {
            requestAnimationFrame(update);
          } else {
            // Snap to final
            lastPadVal = targetPad;
            lastScaleVal = targetScale;
            elemOpen.style.paddingRight = lastPadVal + "%";
            elemClose.style.paddingLeft = lastPadVal + "%";
            imgElem.style.transform = `scale(${lastScaleVal})`;
            animating = false;
          }
        }
        requestAnimationFrame(update);
      }

      // Create a single ScrollTrigger to drive both the paddings and the scale in perfect sync
      ScrollTrigger.create({
        trigger: elemOpen,
        start: "top 100%",
        end: "top -70%",
        scrub: true,
        // markers: true,
        onUpdate: self => {
          /*
            Both paddings and scale will:
              - 0.0 -> 0.5 : increase (padding 0%->40%, scale 0.5->1.0)
              - 0.5 -> 1.0: decrease (padding 40%->0%, scale 1.0->0.5)
            Both use the same progress and cut over at 0.5.
          */
          let prog = self.progress; // 0 to 1
          const maxPad = 24; // percent
          let padVal, scaleVal;
          if (prog <= 0.5) {
            // Increase
            padVal = (prog / 0.5) * maxPad;
            scaleVal = 0.5 + (prog / 0.5) * 0.5;
          } else {
            // Decrease
            padVal = ((1.0 - prog) / 0.5) * maxPad;
            scaleVal = 1.0 - ((prog - 0.5) / 0.5) * 0.5;
          }
          padVal = Math.max(0, Math.min(maxPad, padVal));
          scaleVal = Math.max(0.5, Math.min(1.0, scaleVal));
          elemOpen.style.paddingRight = padVal + "%";
          elemClose.style.paddingLeft = padVal + "%";
          imgElem.style.transform = `scale(${scaleVal})`;
        }
      });
    }
  }
});





gsap.from(".part7_detail p", {
  marginTop: "5%",
  duration: 100,
  scrollTrigger: {
    trigger: ".part7_detail",
    start: "top 80%",
    end: "top 65%",
    scrub: true,
    onLeave: () => {
      // When the scroll leaves the trigger (animation completes),
      // fire the next animation.
      gsap.to(".part7_detail p", {
        marginTop: "-5%",
        duration: 1
      });
    }
  }
});
gsap.from(".part9_detail p", {
  marginTop: "5%",
  duration: 100,
  scrollTrigger: {
    trigger: ".part9_detail",
    start: "top 80%",
    end: "top 65%",
    scrub: true,
    onLeave: () => {
      // When the scroll leaves the trigger (animation completes),
      // fire the next animation.
      gsap.to(".part9_detail p", {
        marginTop: "-5%",
        duration: 1
      });
    }
  }
});
gsap.from(".part11_detail p", {
  marginTop: "5%",
  duration: 100,
  scrollTrigger: {
    trigger: ".part11_detail",
    start: "top 80%",
    end: "top 65%",
    scrub: true,
    onLeave: () => {
      // When the scroll leaves the trigger (animation completes),
      // fire the next animation.
      gsap.to(".part11_detail p", {
        marginTop: "-5%",
        duration: 1
      });
    }
  }
});




// Ensure the sticky div starts centered in the middle of the viewport and sticks as you scroll.
// First, set initial styles in JS to center the sticky div.
gsap.set(".part12_sticky", {
  position: "sticky",
  top: "50%",
  left: "50%",
  xPercent: -50,
  yPercent: -50,
  transform: "translate(-50%, -50%)",
});

// Animate the scale on scroll as before
gsap.fromTo(
  ".part12_sticky",
  { scale: 1.2 },
  {
    scale: 0.7,
    duration: 10,
    scrollTrigger: {
      trigger: ".part12",
      start: "top 70%",
      end: "top 20%",
      scrub: true,
      // markers: true,
    }
  }
);





// Smooth and perfect fade-in for the grid images background with easing
gsap.fromTo(
  ".part12_background_image_grid_1",
  { opacity: 0 },
  {
    opacity: 1,
    duration: 5,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: ".part12",
      start: "top 70%",
      end: "top top",
      scrub: true,
      // markers: true,
    }
  }
);














function setupFastDivScrollAndMouseAnimation(selector, scrollSpeed, moveXDiv = 0, moveYDiv = 0) {
  const fastDiv = document.querySelector(selector);
  if (!fastDiv) return;

  let current = 0;
  let target = 0;
  let mouseX = 0;
  let mouseY = 0;

  const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

  // Scroll & Mouse Animation (combine both in a single transform)
  function animate() {
    current += (target - current) * 0.08;

    // Apply both scroll and mouse offset in transform
    fastDiv.style.transform = `translate3d(${mouseX}px, ${-current + mouseY}px, 0)`;
    requestAnimationFrame(animate);
  }
  animate();

  lenis.on('scroll', () => {
    const rect = fastDiv.getBoundingClientRect();
    const vh = window.innerHeight;

    const progress = clamp(
      (vh - rect.top) / (vh + rect.height),
      0,
      1
    );

    const speed = vh * scrollSpeed;
    target = progress * speed;
  });

  // Mousemove Animation (update mouseX/mouseY variables)
  document.body.addEventListener("mousemove", function (e) {
    const targetX = (e.clientX - window.innerWidth / 2) / moveXDiv;
    const targetY = (e.clientY - window.innerHeight / 2) / moveYDiv;

    // Animate mouseX and mouseY for smoothness
    gsap.to({mx: mouseX, my: mouseY}, {
      mx: targetX,
      my: targetY,
      duration: 0.3,
      ease: "power1.out",
      onUpdate: function () {
        mouseX = this.targets()[0].mx;
        mouseY = this.targets()[0].my;
      }
    });
  });

  document.body.addEventListener("mouseleave", function () {
    gsap.to({mx: mouseX, my: mouseY}, {
      mx: 0,
      my: 0,
      duration: 0.5,
      ease: "power1.out",
      onUpdate: function () {
        mouseX = this.targets()[0].mx;
        mouseY = this.targets()[0].my;
      }
    });
  });
}

// Example usage for the 1th grid image:
setupFastDivScrollAndMouseAnimation('.part12_grid_image_1', 0.3, 20, 20);
setupFastDivScrollAndMouseAnimation(".part12_grid_image_2", 0.1, 70, 70);
setupFastDivScrollAndMouseAnimation(".part12_grid_image_3", 0.6, 15, 15);
setupFastDivScrollAndMouseAnimation(".part12_grid_image_4", 0.1, 70, 70);
setupFastDivScrollAndMouseAnimation(".part12_grid_image_5", 0.3, 20, 20);
setupFastDivScrollAndMouseAnimation(".part12_grid_image_6", 0.1, 70, 70);
setupFastDivScrollAndMouseAnimation(".part12_grid_image_7", 0.3, 20, 20);
setupFastDivScrollAndMouseAnimation(".part12_grid_image_8", 0.3, 20, 20);
setupFastDivScrollAndMouseAnimation(".part12_grid_image_9", 0.6, 15, 15);
setupFastDivScrollAndMouseAnimation(".part12_grid_image_10", 0.1, 70, 70);
setupFastDivScrollAndMouseAnimation(".part12_grid_image_11", 0.6, 15, 15);
setupFastDivScrollAndMouseAnimation(".part12_grid_image_12", 0.1, 70, 70);
setupFastDivScrollAndMouseAnimation(".part12_grid_image_13", 0.3, 20, 20);
setupFastDivScrollAndMouseAnimation(".part12_grid_image_14", 0.1, 70, 70);
setupFastDivScrollAndMouseAnimation(".part12_grid_image_15", 0.1, 70, 70);
setupFastDivScrollAndMouseAnimation(".part12_grid_image_16", 0.3, 20, 20);
setupFastDivScrollAndMouseAnimation(".part12_grid_image_17", 0.6, 15, 15);
setupFastDivScrollAndMouseAnimation(".part12_grid_image_18", 0.1, 70, 70);
setupFastDivScrollAndMouseAnimation(".part12_grid_image_19", 0.6, 15, 15);




// Use GSAP and ScrollTrigger for smooth, delayed clip-path + opacity animation
(function() {
  const bgDiv = document.querySelector(".part12_background_image_main_div");
  const sticky = document.querySelector(".part12_sticky");
  if (!bgDiv || !sticky || !window.gsap || !window.ScrollTrigger) return;

  // Initial styles
  bgDiv.style.clipPath = "polygon(39.87% 28.5%, 58.5% 28.5%, 58.5% 66.8%, 39.87% 66.8%)";
  sticky.style.opacity = "1";

  // GSAP plugin registration (defensive for legacy)
  if (gsap && gsap.registerPlugin) {
    gsap.registerPlugin(ScrollTrigger);
  }

  function setupAnimations() {
    // Animate sticky fade out when 40% of bgDiv enters from bottom
    gsap.to(sticky, {
      opacity: 0,
      
      ease: "power2.inOut",
      duration: 1,
      scrollTrigger: {
        trigger: bgDiv,
        start: "top+=60% bottom",
        end: "top+=150px bottom",
        scrub: 4,
        // markers: true,
      }
    });

    // Clip-path animation: bgDiv should behave sticky and cover scroll until finished, then scroll out
    const origPoly = [
      [39.87, 28.5],
      [58.5, 28.5],
      [58.5, 66.8],
      [39.87, 66.8]
    ];
    const endPoly = [
      [0, 0],
      [100, 0],
      [100, 100],
      [0, 100]
    ];

    // We'll use pinning to keep the div sticky while clip-path animates
    // Animate background clip-path as well as both left and right grid images' translateX with scroll
    const leftImages = document.querySelectorAll('.part12_grid_image_left');
    const rightImages = document.querySelectorAll('.part12_grid_image_right');

    const part12Wrapper = document.querySelector('.part12_wrapper');
    if (part12Wrapper) {
      part12Wrapper.style.opacity = "0";
      part12Wrapper.style.transition = "opacity 0.6s cubic-bezier(0.77, 0, 0.175, 1)";
    }
    gsap.to(bgDiv, {
      clipPath: `polygon(${endPoly.map(pt => `${pt[0]}% ${pt[1]}%`).join(', ')})`,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: bgDiv,
        start: "top+=90% bottom",
        end: "+=150%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        // markers: true,
        onUpdate: self => {
          const progress = self.progress;
          // Animate clip-path
          const currentPoly = origPoly.map((pt, idx) => [
            pt[0] + (endPoly[idx][0] - pt[0]) * progress,
            pt[1] + (endPoly[idx][1] - pt[1]) * progress
          ]);
          bgDiv.style.clipPath = `polygon(${currentPoly.map(pt => `${pt[0]}% ${pt[1]}%`).join(', ')})`;

          // Smoothly animate .part12_wrapper opacity to 1 at end, 0 otherwise
          if (part12Wrapper) {
            if (progress === 1) {
              part12Wrapper.style.opacity = "1";
            } else {
              part12Wrapper.style.opacity = "0";
            }
          }
        }
      }
    });


    // Animate left grid images translateX from 0 to -50%
    gsap.to(leftImages, {
      left: "-100%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: bgDiv,
        start: "top+=50% bottom",
        end: "+=150%",
        scrub: true,
        // markers: true,
      }
    });

    // Animate right grid images translateX from 0 to +50%
    gsap.to(rightImages, {
      left: "100%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: bgDiv,
        start: "top+=50% bottom",
        end: "+=150%",
        scrub: true,
        // markers: true,
      }
    });
  }

  // Delay setup until page layout is likely stable
  setTimeout(setupAnimations, 350);

  // Also on resize
  window.addEventListener("resize", function() {
    ScrollTrigger.getAll().forEach(t => t.kill());
    setupAnimations();
  });
})();







// Enhanced .part12__wrapper_upper_1,2,3 interaction per margin-right requirement (margin on parent .part12__wrapper_upper)

// (function() {
//   document.addEventListener("DOMContentLoaded", function () {
//     const upperDiv = document.querySelector('.part12__wrapper_upper');
//     const upperBtns = [
//       document.querySelector('.part12__wrapper_upper_1'),
//       document.querySelector('.part12__wrapper_upper_2'),
//       document.querySelector('.part12__wrapper_upper_3')
//     ];
//     const lowerInner = document.querySelector('.part12__wrapper_lower_inner');
//     const lowerInnerPara = lowerInner ? lowerInner.querySelector('p') : null;

//     if (!upperDiv || !upperBtns.every(Boolean) || !lowerInnerPara) return;

//     // Helper: Set "active" class and margin-right on .part12__wrapper_upper
//     function setActiveAndParentMargin(activeIdx) {
//       upperBtns.forEach((btn, idx) => {
//         btn.classList.toggle("active", idx === activeIdx);
//         gsap.to(btn, {
//           opacity: idx === activeIdx ? 1 : 0.5,
//           zIndex: idx === activeIdx ? 3 : 1,
//           duration: 0.3,
//           ease: "power2.inOut"
//         });
//       });
//       // Animate marginRight on parent .part12__wrapper_upper
//       // idx 0 ("1") → marginRight: 0%
//       // idx 1 ("2") → marginRight: 40%
//       // idx 2 ("3") → marginRight: 80%
//       let mr = "0%";
//       if (activeIdx === 1) mr = "60%";
//       if (activeIdx === 2) mr = "120%";
//       gsap.to(upperDiv, {
//         marginRight: mr,
//         duration: 0.5,
//         ease: "power2.inOut"
//       });
//     }

//     function showPara() {
//       gsap.to(lowerInnerPara, {
//         autoAlpha: 1,
//         y: 0,
//         duration: 0.5,
//         ease: "power2.out",
//         pointerEvents: "auto"
//       });
//     }
//     function hidePara() {
//       gsap.to(lowerInnerPara, {
//         autoAlpha: 0,
//         y: 30,
//         duration: 0.4,
//         ease: "power2.in",
//         pointerEvents: "none"
//       });
//     }

//     // Set initial state
//     gsap.set(lowerInnerPara, {autoAlpha: 0, y: 30, pointerEvents: "none"});
//     setActiveAndParentMargin(0); // Active is first

//     setTimeout(showPara, 200);

//     // Button click: set active and adjust parent margin
//     upperBtns.forEach((btn, idx) => {
//       btn.style.cursor = "pointer";
//       btn.addEventListener('click', function() {
//         setActiveAndParentMargin(idx);
//         showPara();
//       });
//     });

//     // Paragraph click: toggle show/hide
//     lowerInnerPara.style.cursor = "pointer";
//     lowerInnerPara.addEventListener('click', function () {
//       if (gsap.getProperty(lowerInnerPara, "autoAlpha") > 0.5) {
//         hidePara();
//       } else {
//         showPara();
//       }
//     });

//     // On resize: reset parent margin for the current active
//     window.addEventListener('resize', () => {
//       let activeIdx = upperBtns.findIndex(btn => btn.classList.contains("active"));
//       if (activeIdx < 0) activeIdx = 0;
//       setActiveAndParentMargin(activeIdx);
//     });
//   });
// })();

(function() {
  document.addEventListener("DOMContentLoaded", function () {
    const upperDiv = document.querySelector('.part12__wrapper_upper');
    const upperBtns = [
      document.querySelector('.part12__wrapper_upper_1'),
      document.querySelector('.part12__wrapper_upper_2'),
      document.querySelector('.part12__wrapper_upper_3')
    ];
    const lowerInner = document.querySelector('.part12__wrapper_lower_inner');

    // We use arrays-of-strings for each para (each item = line, <br><br> wherever break was in prior markup)
    const lowerParas = [
      [
        "Our design aesthetic is established through a",
        "consistent process and a detailed concept brief,",
        "which considers client needs, site context, and",
        "the future occupiers. We combine and test these",
        "elements to create a singular design vision",
        "concealing many influencing layers. This singular",
        "vision, like a piece of artwork, is unique and",
        "individual. We believe the principles of design",
        "quality should always be present no matter the",
        "project brief or building scale."
      ],
      [
        "Telha Clarke welcomes innovation through",
        "research and technology to contribute new",
        "ideas and challenging theories. We see",
        "technology as a tool, we engage with it and it is",
        "integral to our work, however we believe human",
        "touch must drive creativity. We heavily invest",
        "time in research through leading industry",
        "seminars, University tutoring and participation in",
        "international study tours."
      ],
      [
        "We believe enhanced user experience and",
        "well-being should be at the forefront of design.",
        "We constantly consider the impact of design on",
        "the end user to ensure our designs promote",
        "positive human interaction and encourage",
        "healthier, enriched experiences."
      ]
    ];

    if (!upperDiv || !upperBtns.every(Boolean) || !lowerInner) return;

    function setActiveAndParentMargin(activeIdx) {
      upperBtns.forEach((btn, idx) => {
        btn.classList.toggle("active", idx === activeIdx);
        gsap.to(btn, {
          opacity: idx === activeIdx ? 1 : 0.5,
          zIndex: idx === activeIdx ? 3 : 1,
          duration: 0.3,
          ease: "power2.inOut"
        });
      });
      let mr = "20%";
      if (activeIdx === 1) mr = "-20%";
      if (activeIdx === 2) mr = "-50%";
      gsap.to(upperDiv, {
        x: mr,
        duration: 0.5,
        ease: "power2.inOut"
      });
    }

    // Splits a line of text into a span for each word
    function createWordSpans(line) {
      // keep white space between words
      return line.split(' ').map(word => `<span class="reveal-word" style="display:inline-block; opacity:0; transform:translateY(10%);">${word}</span>`).join(' ');
    }

    // Generate the paragraph HTML with word wrapping
    function buildParaHTML(paraArr) {
      return `<p class="part12__wrapper_lower_inner_p">` + 
        paraArr.map(line => createWordSpans(line)).join('<br><br>') +
      '</p>';
    }

    // Animate in each .reveal-word in order, up from 10% and opacity 0
    function revealWords(newP, onDone, fast = false) {
      const words = Array.from(newP.querySelectorAll('.reveal-word'));
      let timeline = gsap.timeline({
        onComplete: onDone
      });
      // If fast == false, use slower stagger and duration for more pronounced effect for "first" reveal
      // Subsequent/para reveals are "fast" (used for click-to-show)
      const duration = fast ? 0.22 : 0.32;
      const stagger = fast ? 0.038 : 0.052;

      // Further increase animation speed: make durations and staggers even lower
      words.forEach((span, i) => {
        timeline.fromTo(
          span,
          {opacity:0, y:"20px"},
          {
            opacity:1, 
            y:"0px", 
            duration: fast ? 0.07 : 0.10, // very fast duration for both fast/normal
            ease: "power2.out",
            delay: i === 0 ? 0.004 : 0
          },
          i * (fast ? 0.012 : 0.016) // even faster stagger
        );
      });
      timeline.set(newP, {pointerEvents:"auto"});
    }

    function hideParaWords(oldP, onHidden) {
      if (!oldP) {onHidden && onHidden(); return;}
      const words = Array.from(oldP.querySelectorAll('.reveal-word'));
      let timeline = gsap.timeline({
        onComplete: onHidden
      });
      words.slice().reverse().forEach((span, i) => {
        timeline.to(
          span,
          {
            opacity: 0, 
            y: "20px",
            duration: 0.015, // extremely fast hide
            ease: "power2.in"
          },
          i * 0.006 // even faster stagger for hide
        );
      });
      timeline.set(oldP, {pointerEvents:"none"});
    }

    function addParaPointerToggle(newP) {
      newP.style.cursor = "pointer";
      newP.addEventListener("click", function handler() {
        // If hidden, reveal, else hide
        const words = Array.from(newP.querySelectorAll('.reveal-word'));
        if (words.some(span => gsap.getProperty(span, "opacity") < 0.5)) {
          // Use fast= true for click-to-reveal after initial reveal
          revealWords(newP, undefined, true);
        } else {
          hideParaWords(newP);
        }
      });
    }

    function updatePara(activeIdx) {
      const oldP = lowerInner.querySelector('p');

      function placeAndRevealNewP() {
        lowerInner.innerHTML = buildParaHTML(lowerParas[activeIdx]);
        const newP = lowerInner.querySelector('p');
        gsap.set(newP, {pointerEvents: "none"});
        addParaPointerToggle(newP);
        // Use fast=false for fresh paragraph change for more pronounced effect
        revealWords(newP, undefined, false);
      }

      if (oldP) {
        hideParaWords(oldP, placeAndRevealNewP);
      } else {
        placeAndRevealNewP();
      }
    }

    setActiveAndParentMargin(0);
    updatePara(0);

    upperBtns.forEach((btn, idx) => {
      btn.style.cursor = "pointer";
      btn.addEventListener('click', function() {
        if (!btn.classList.contains("active")) {
          setActiveAndParentMargin(idx);
          updatePara(idx);
        }
      });
    });

    window.addEventListener('resize', () => {
      let activeIdx = upperBtns.findIndex(btn => btn.classList.contains("active"));
      if (activeIdx < 0) activeIdx = 0;
      setActiveAndParentMargin(activeIdx);
    });
  });
})();






























function setupPart13ImageHover() {
  const part13Ps = [
    ".part13_left_upper_p_1",
    ".part13_left_upper_p_2",
    ".part13_left_upper_p_3",
    ".part13_left_upper_p_4",
    ".part13_left_upper_p_5",
    ".part13_left_upper_p_6",
    ".part13_left_upper_p_7"
  ];
  const images = [
    "Soho-2-1200x1800 (1).jpg",         // for _p_1
    "Parlington-7-1-1200x1800.jpg",     // for _p_2
    "Ormond-21-2-1200x1799.jpg",        // for _p_3
    "Jonite_Image_Craftmanship.webp",   // for _p_4
    "Hepburn-20-1200x800.jpg",          // for _p_5
    "Loller-22-1200x1799.jpg",          // for _p_6
    "SB-Tower-Render_4.jpg"             // for _p_7
  ];

  const part13Right = document.querySelector('.part13_right');
  let currentSelectedIdx = 0;  // default selected is option 1 (_p_1)
  let isHovering = false;
  let lastHoverIdx = null;
  let leaveTimeout = null;

  function showImage(idx) {
    // Do nothing if it's already showing that image
    if (part13Right && lastHoverIdx !== idx) {
      part13Right.innerHTML = "";
      const img = document.createElement("img");
      img.src = images[idx];
      img.alt = "";
      img.style.opacity = "0";
      img.style.transition = "opacity 0.4s";
      part13Right.appendChild(img);
      setTimeout(() => {
        img.style.opacity = "1";
      }, 10);
      lastHoverIdx = idx;
    }
  }

  // Show the current selected, unless overridden by hover
  showImage(currentSelectedIdx);

  part13Ps.forEach((selector, idx) => {
    const p = document.querySelector(selector);
    if (p && part13Right) {
      p.addEventListener("mouseenter", function() {
        isHovering = true;
        if (leaveTimeout) {
          clearTimeout(leaveTimeout);
          leaveTimeout = null;
        }
        showImage(idx);
      });

      p.addEventListener("mouseleave", function() {
        isHovering = false;
        // Small timeout: if not hovering any other p after this, revert to last "selected"
        leaveTimeout = setTimeout(() => {
          // Only revert if not hovering any .part13_left_upper_p_*
          if (!isHovering) {
            showImage(currentSelectedIdx);
          }
        }, 20);
      });

      // Make clicking a <p> select it ("bydfult" is first, but clicking sets new default)
      p.addEventListener("click", function() {
        currentSelectedIdx = idx;
        showImage(currentSelectedIdx);
      });
    }
  });
}

setupPart13ImageHover();