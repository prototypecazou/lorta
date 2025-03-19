gsap.registerPlugin(ScrollTrigger);

let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling vers le bas → Cacher le header
        gsap.to(header, { y: -100,opacity:0, duration: 0.5, ease: "power2.out" });
    } else {
        // Scrolling vers le haut → Réafficher le header
        gsap.to(header, { y: 0,opacity:1, duration: 0.5, ease: "power2.out" });
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

gsap.to(".word-title-first-section", {
    y: 0,
    duration: 1.8,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".first-section", // L'élément déclencheur
        start: "top 70%", // Déclenchement quand l'élément est à 80% de la fenêtre
        end: "top 30%", // Optionnel : fin de l'effet
        toggleActions: "play none none none", // Une seule fois
    }
});

gsap.to(".visual-image-first-section", {
    scaleX: 0,
    duration: 1.8,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".first-section", // L'élément déclencheur
        start: "top 70%", // Déclenchement quand l'élément est à 80% de la fenêtre
        end: "top 30%", // Optionnel : fin de l'effet
        toggleActions: "play none none none", // Une seule fois
    }
});

gsap.to(".first-text-content-right >div:first-child > h3", {
    y: 0,
    duration: 1.8,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".first-section", // L'élément déclencheur
        start: "top 70%", // Déclenchement quand l'élément est à 80% de la fenêtre
        end: "top 30%", // Optionnel : fin de l'effet
        toggleActions: "play none none none", // Une seule fois
    }
});


function splitLines(element,nameOfClass) {
    const words = element.innerHTML.split(" ");
    element.innerHTML = words.map(word => `
        <span class="content-word-paragraphe"><span class=${nameOfClass}>${word}</span></span>`).join(" ");
}

const paragraph = document.querySelector(".paragraphe-first-section");
splitLines(paragraph,'word-paragraphe-first-section');

const paragraph2 = document.querySelector(".paragraphe-second-section");
splitLines(paragraph2,'word-paragraphe-second-section');

gsap.to(".word-paragraphe-first-section", {
    y: 0,
    duration: 1.8,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".first-section", // L'élément déclencheur
        start: "top 70%", // Déclenchement quand l'élément est à 80% de la fenêtre
        end: "top 30%", // Optionnel : fin de l'effet
        toggleActions: "play none none none", // Une seule fois
    }
});


gsap.to(".word-aside-first-section > span", {
    y: 0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".first-section", // L'élément déclencheur
        start: "top 15%", // Déclenchement quand l'élément est à 80% de la fenêtre
        end: "top 0", // Optionnel : fin de l'effet
        toggleActions: "play none none none", // Une seule fois
    }
});

gsap.to(".line", {
    scaleX: 1,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".first-section", // L'élément déclencheur
        start: "top 15%", // Déclenchement quand l'élément est à 80% de la fenêtre
        end: "top 0", // Optionnel : fin de l'effet
        toggleActions: "play none none none", // Une seule fois
    }
});

gsap.utils.toArray(".img-gallery").forEach(img => {
    gsap.to(img,

        {
            scale: 0,  // Arrivée : image normale et visible
            scrollTrigger: {
                trigger: img, // Déclenchement par l’image
                start: "top -5%", // Débute quand l’image entre dans la fenêtre
                end: "top -50%", // Se termine quand l’image arrive en haut
                scrub: true, // L’animation suit le scroll
            }
        }
    );
});

gsap.to(".visual-image-second-section", {
    scaleX: 0,
    duration: 1.8,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".second-section", // L'élément déclencheur
        start: "top 70%", // Déclenchement quand l'élément est à 80% de la fenêtre
        end: "top 30%", // Optionnel : fin de l'effet
        toggleActions: "play none none none", // Une seule fois
    }
});

gsap.to(".word-aside-second-section-1 > span,.word-aside-second-section-2 > span,.word-title-second-section", {
    y: 0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".second-section", // L'élément déclencheur
        start: "top 30%", // Déclenchement quand l'élément est à 80% de la fenêtre
        end: "top 0", // Optionnel : fin de l'effet
        toggleActions: "play none none none", // Une seule fois
    }
});

gsap.to(".visual-littleImage-second-section", {
    scaleX: 0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".second-section", // L'élément déclencheur
        start: "top 70%", // Déclenchement quand l'élément est à 80% de la fenêtre
        end: "top 30%",
        toggleActions: "play none none none", // Une seule fois
    }
});

gsap.to(".second-text-section > a", {
    opacity: 1,
    duration: 1.8,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".second-section", // L'élément déclencheur
        start: "top 30%", // Déclenchement quand l'élément est à 80% de la fenêtre
        end: "top 0", // Optionnel : fin de l'effet
        toggleActions: "play none none none", // Une seule fois
    }
});

gsap.to(".word-paragraphe-second-section", {
    y: 0,
    duration: 1.8,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".second-section", // L'élément déclencheur
        start: "top 30%", // Déclenchement quand l'élément est à 80% de la fenêtre
        end: "top 0", // Optionnel : fin de l'effet
        toggleActions: "play none none none", // Une seule fois
    }
});
