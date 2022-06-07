import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Date copyright //

let date = new Date();
let year = date.getFullYear();
let copyright = document.querySelector("#date_copyright");
copyright.innerHTML = year;


// GSAP animations //
let title1 = document.querySelector(".title--main");
let title2 = document.querySelector(".title--medium1");
let title3 = document.querySelector(".title--medium2");
let title4 = document.querySelector(".title--colors");
let title5 = document.querySelector(".title--small1");
let title6 = document.querySelector(".title--small2");
let title7 = document.querySelector(".title--small3");
let title8 = document.querySelector(".title--small4");
let title9 = document.querySelector(".title--end");

let texte = document.querySelector(".texte");

let image1 = document.querySelector(".mockup1");
let image2 = document.querySelector(".mockup2");
let image3 = document.querySelector(".mockup3");
let image4 = document.querySelector(".mockup4");
let image5 = document.querySelector(".image--mockup2");
let image6 = document.querySelector(".image--end");
let image7 = document.querySelector(".Getapp");

let links1 = document.querySelector(".links1");
let links2 = document.querySelector(".links2");

if (title1){

    gsap.fromTo(".title--main",
    {opacity: 0, y: 100},
    {opacity: 1, y: 0, duration: 1}
    );

}

if (title2){

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

}

if (title3){

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

}

if (title4){

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

}


if (title5){

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
    
}

if (title6){

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
    
}

if (title7){

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
    
}

if (title8){

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
    
}

if (title9){

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

}

if (texte){

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

}




if (image1){

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

}

if (image2){

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

}

if (image3){

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

}

if (image4){

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

}

if (image5){

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

}

if (image6){

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

}

if (image7){

    gsap.from(".Getapp", {
        opacity: 0,
        scale: 0.8,
        delay: 1.5,
        duration: 1,
        scrollTrigger: {
            trigger: ".title--end",
            start: "top 70%",
            end: "center 30%",
            toggleActions: "play none none none"
        }
    });    

}


if (links1){

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

}

if (links2){

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

}












