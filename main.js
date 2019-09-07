
// ---particlesJS---

particlesJS("particles-js", {"particles":{"number":{"value":30,"density":{"enable":true,"value_area":1500}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"images/bg1","width":100,"height":100}},"opacity":{"value":1.1,"random":false,"anim":{"enable":false,"speed":12,"opacity_min":0.1,"sync":false}},"size":{"value":4,"random":false,"anim":{"enable":false,"speed":60,"size_min":0.5,"sync":false}},"line_linked":{"enable":true,"distance":355,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":false});var count_particles, stats, update; 
update = function() { if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array)
requestAnimationFrame(update); };

// ---pre loader---

var preload = document.getElementsByClassName('loader')[0];

preload.classList.add('loader-show');
window.addEventListener('load', function () {
    setTimeout(function () {
        preload.classList.add('loader-hide-anim'); 
        preload.classList.remove('loader-show');
    }, 500);  
});

// ---- texting message ---

const txt =['Serwis komputerowy', 'Aplikacje webowe', 'Technologia CNC'];
const charCusror = document.querySelector('.cursor');
const spanTerxt = document.querySelector('.text');

let number = 0;

let activeLettr = 0;
let activeText = 0;

const addLetter = () =>{
    spanTerxt.textContent += txt[activeText][activeLettr];
    activeLettr++;
    if (activeLettr===txt[activeText].length){
        activeText++;
        if (activeText === txt.length) {
            activeText = 0;
        };
        return setTimeout(() =>{
            activeLettr = 0;
            spanTerxt.textContent ="";
            addLetter();
        },2000);
    }
    setTimeout(addLetter,100);
}

addLetter();


// ---- mobile menu ----
let menu = document.querySelector('.menu');
let mainMenu = document.querySelector(".overlay");
let nav = document.querySelectorAll("li");

menu.addEventListener("click", () =>{
    if ($(window).width() <= 850){
        menu.classList.toggle("active");
        mainMenu.classList.toggle("menu-open");

        nav.forEach(el => {
            el.classList.toggle("none");
        });
    }
});

nav.forEach(el => {
    if ($(window).width() <= 850){
        console.log($(window).width() );        
        el.addEventListener("click", () =>{

            if (nav[nav.length-1].className == "none"){
                nav.forEach(li => {
                    console.log("co jest");
                    // usuwa none jezeli jest
                    li.classList.toggle("none");
                    menu.classList.toggle("active");
                    mainMenu.classList.toggle("menu-open");
                })
            }else{
                console.log("co jest kuwa");
                menu.classList.toggle("active");
                mainMenu.classList.toggle("menu-open");
                nav.forEach(li => {
                    li.classList.toggle("none"); 
                })
            }
        })
    }
});

// menu.addEventListener("click", () =>{
//     menu.classList.toggle("active");
//     mainMenu.classList.toggle("menu-open");
//     setTimeout(function() {
//         nav.forEach(li => {
//             li.classList.toggle("none");
//         });
//     },500);
// });
// nav.forEach(li => {
//     li.addEventListener("click", () =>{
//         menu.classList.toggle("active");
//         setTimeout(function() {
//             nav.forEach(liIn => {
//                 liIn.classList.toggle("none");
//             });
//         },500);
//     }) 
// });