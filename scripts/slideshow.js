const pathProduct = "images/products/";
const slideRunTime = 5;
const slides = [
    {price:20, src:"chinesegame.jpg", name:"Kids Toy", description:"Baby block stacker toy."},
    {price:24.99, src:"twister.jpg", name:"Twisters Set", description:"Interactive game children's game. Including large mat and spinner."},
    {price:30, src:"drseuss.jpg", name:"Dr. Seuss's Beginner Book Collection", description:"A Book Collection from the famous author, Dr. Seuss."},
    {price:49.99, src:"backtoschool.jpg", name:"BackToSchool Bundle", description:"Calculator, Notepad, Pencil Case and Plush Toy all in one set."},
];

// S is short for Slide
const SCONTAINER = document.getElementById("scontainer");
const SIMG = document.getElementById("simg");
const SNAME = document.getElementById("sname");
const SDESC = document.getElementById("sdesc");
const SPRICE = document.getElementById("sprice");

if (SCONTAINER && SIMG && SNAME && SDESC && SPRICE) {
    let sIndex = -1;
    function showSlide() {
        SCONTAINER.animate([
            {width:'75%'},
            {width:'96%'}
        ], {
            duration: 300,
            easing: 'ease-in-out' // Animated using a nice smooth curve, rather than a boring linear interpolation
        }).play();
        sIndex = ++sIndex % slides.length; // Some simple math which loops the index then increments it after the calculation is done
        const s = slides[sIndex];
        const priceSplit = s.price.toString().split('.'); // Converts number to string array, where [0] is dollars, [1] is cents
        SPRICE.innerHTML = `$${priceSplit[0]}<small>.${priceSplit[1] ?? '00'}<small>`;
        SNAME.textContent = s.name;
        SDESC.textContent = s.description;
        SIMG.animate([
            {opacity:'0', height:'200px'},
            {opacity:'1', height:'405px'}
        ], {
            duration: 250,
            easing: 'ease-out' // Animated using a nice smooth curve, rather than a boring linear interpolation
        }).play();
        SIMG.src = pathProduct + s.src;

        setTimeout(showSlide, slideRunTime*1000); // Changes current slide every 2 seconds
    }
    showSlide();
}