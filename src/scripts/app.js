import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Date copyright //

let date = new Date();
let year = date.getFullYear();
let copyright = document.querySelector("#date_copyright");
copyright.innerHTML = year;


// GSAP animations //
gsap.fromTo(".title--main",
    {opacity: 0, y: 100},
    {opacity: 1, y: 0, duration: 1}
);

gsap.from(".title--medium1", {
    x: -150,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".title--medium1",
        start: "center 90%",
        end: "center 40%",
        scrub: true
    }
});

gsap.from(".title--medium2", {
    y: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".title--medium2",
        start: "center 70%",
        end: "center 30%",
        scrub: true
    }
});


gsap.from(".texte", {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".texte",
        start: "center 90%",
        end: "center 40%",
        scrub: true
    }
});


gsap.from(".section--guitare", {
    x: 150,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".section--guitare",
        
    }
});
  

gsap.from(".title--colors", {
    x: -150,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".title--colors",
        start: "center 90%",
        end: "center 40%",
        scrub: true
    }
});

gsap.from(".title--small1", {
    y: -200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".title--small1",
        start: "center 90%",
        end: "center 40%",
        scrub: true
    }
});

gsap.from(".title--small2", {
    y: -200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".title--small2",
        start: "center 90%",
        end: "center 40%",
        scrub: true
    }
});

gsap.from(".title--small3", {
    y: -200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".title--small3",
        start: "center 90%",
        end: "center 40%",
        scrub: true
    }
});

gsap.from(".title--small4", {
    y: -200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".title--small4",
        start: "center 90%",
        end: "center 40%",
        scrub: true
    }
});

gsap.from(".mockup1", {
    x: -90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".mockup1",
        start: "top 70%",
        end: "center 60%",
        scrub: true
    }
});

gsap.from(".mockup2", {
    x: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".mockup2",
        start: "top 70%",
        end: "center 60%",
        scrub: true
    }
});

gsap.from(".mockup3", {
    x: -90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".mockup3",
        start: "top 70%",
        end: "center 60%",
        scrub: true
    }
});

gsap.from(".mockup4", {
    x: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".mockup4",
        start: "top 70%",
        end: "center 60%",
        scrub: true
    }
});

gsap.from(".links1", {
    y: 100,
    scale: 0.8,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".links1",
        start: "top 80%",
        end: "center 60%",
        scrub: true
    }
});

gsap.from(".links2", {
    y: 100,
    scale: 0.8,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".links2",
        start: "top 80%",
        end: "center 60%",
        scrub: true
    }
});

gsap.from(".image--mockup2", {
    scale: 0.8,
    rotate: -15,
    duration: 1,
    scrollTrigger: {
        trigger: ".image--mockup2",
        start: "top 70%",
        end: "center 40%",
        scrub: true
    }
});

gsap.from(".image--end", {
    x: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".title--end",
        start: "top 70%",
        end: "center 30%",
        toggleActions: "play none none none"
    }
});

gsap.from(".title--end", {
    x: -100,
    opacity: 0,
    delay: 1,
    duration: 1,
    scrollTrigger: {
        trigger: ".title--end",
        start: "top 70%",
        end: "center 30%",
        toggleActions: "play none none none"
    }
});

gsap.from(".Getapp", {
    opacity: 0,
    scale: 0.8,
    delay: 2,
    duration: 1,
    scrollTrigger: {
        trigger: ".title--end",
        start: "top 70%",
        end: "center 30%",
        toggleActions: "play none none none"
    }
});