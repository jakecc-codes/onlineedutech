const pathProduct = "images/products/";
const slideRunTime = 5;
const slides = [
    {price:45, src:"chinesegame.jpg", name:"Kids Toy", description:"Baby block stacker toy."},
    {price:89.95, src:"twister.jpg", name:"Twisters Set", description:"Interactive game children's game. Including large mat and spinner."},
    {price:69.95, src:"drseuss.jpg", name:"Dr. Seuss's Beginner Book Collection", description:"A Book Collection from the famous author, Dr. Seuss."},
    {price:89.95, src:"backtoschool.jpg", name:"BackToSchool Bundle", description:"Calculator, Notepad, Pencil Case and Plush Toy all in one set."},
    {price:140, src:"tabletcase.jpg", name:"Blue Tablet Case", description:"Blue 15 inch Tablet Case, also comes in other colours."},
];

// S is short for Slide
const SCONTAINER = document.getElementById("scontainer");
const SIMG = document.getElementById("simg");
const SNAME = document.getElementById("sname");
const SDESC = document.getElementById("sdesc");
const SPRICE = document.getElementById("sprice");
const SDOTS = document.getElementById("sdots");

if (SCONTAINER && SIMG && SNAME && SDESC && SPRICE) {
    let sIndex = -1;
    let sTimerID = null;
    for (let i=0; i<slides.length; i++) {
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
            easing: 'ease-in-out' // Animated using a nice smooth curve, rather than a boring linear interpolation
        }).play();
        const s = slides[i];
        const priceSplit = s.price.toString().split('.'); // Converts number to string array, where [0] is dollars, [1] is cents
        SPRICE.innerHTML = `$${priceSplit[0]}<small>.${priceSplit[1] ?? '00'}<small>`;
        SNAME.textContent = s.name;
        SDESC.textContent = s.description;
        SIMG.animate([
            {opacity:'0.4'}
        ], {
            duration: 400,
            direction: 'reverse',
            easing: 'ease-out' // Animated using a nice smooth curve, rather than a boring linear interpolation
        }).play();
        SIMG.src = pathProduct + s.src;
        
        sTimerID = setTimeout(showSlide, slideRunTime*1000); // Changes current slide every 2 seconds
        const dots = document.getElementsByClassName('dot');
        const selectedDots = document.getElementsByClassName('dot-select');
        for (let i=0; i<selectedDots.length; i++) {selectedDots[i].classList.remove('dot-select');}
        dots[i].classList.add('dot-select');
    }
    showSlide();
}