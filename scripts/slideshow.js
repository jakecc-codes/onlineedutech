// ------ Cheilein Campbell IT IA 2026, All rights reserved ------ //
const slideRunTime = 5;
const slides = [ // Array indices act as primary keys for "storeproducts" database
    0,
    1,
    2,
    3,
    4
];

// NOTE: 'S' here is short for Slide
const SCONTAINER = document.getElementById("scontainer");
const SIMG = document.getElementById("simg");
const SNAME = document.getElementById("sname");
const SDESC = document.getElementById("sdesc");
const SPRICE = document.getElementById("sprice");
const SDOTS = document.getElementById("sdots");

if (SCONTAINER && SIMG && SNAME && SDESC && SPRICE) { //Clunky but works...
    let sIndex = -1;
    let sTimerID = null;
    for (let i=0; i<slides.length; i++) { // Dynamically creates dots on page load
        const dot = document.createElement('span');
        dot.classList.add('dot');
        SDOTS?.appendChild(dot);
        dot.addEventListener('click', (ev) => {
            clearTimeout(sTimerID);
            sIndex = i;
            showSlide(sIndex);
        }, {passive:true});
    }

    function showSlide(i = ++sIndex % slides.length) { // Some simple math which loops the index then increments it after the calculation is done
        SCONTAINER.animate([
            {width:'75%'},
            {width:'96%'}
        ], {
            duration: 300,
            easing: 'ease-in-out'
        }).play();
        const s = STOREPRODUCTS[slides[i]]; // storeproducts is only defined because its script is initiallized before this in "../index.html"
        const priceSplit = s.price.toString().split('.'); // Converts number to string array, where [0] is dollars, [1] is cents
        SPRICE.innerHTML = `$${priceSplit[0]}<small>.${priceSplit[1] ?? '00'}<small>`;
        SNAME.textContent = s.name;
        SDESC.textContent = s.description;
        SIMG.animate([
            {opacity:'0.4'}
        ], {
            duration: 400,
            direction: 'reverse',
            easing: 'ease-out'
        }).play(); // Inline animations used here as well... clunky but works...
        SIMG.src = s.src;
        
        sTimerID = setTimeout(showSlide, slideRunTime*1000); // Changes current slide every 2 seconds
        const dots = document.getElementsByClassName('dot');
        const selectedDots = document.getElementsByClassName('dot-select');
        for (let i=0; i<selectedDots.length; i++) {selectedDots[i].classList.remove('dot-select');} // De-select stray selections then select the new
        dots[i].classList.add('dot-select');
    }
    showSlide();
}