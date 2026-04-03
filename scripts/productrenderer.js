// ------ Cheilein Campbell IT IA 2026, All rights reserved ------ //
const grid = document.getElementById("productgrid");
const products = [`<div style="width:100%"><h2 class="menu-text-colour">Books and Children's Toys</h2></div>`]; // Default value is the first element(s) shown
const purchaseURL = "../pages/contactus.html"

STOREPRODUCTS.forEach((v, i) => {
    // Process of how entries were obtained: A template of the element is stored in entry and values are replaced for each product
    const priceSplit = v.price.toString().split('.'); // Converts number to string array, where [0] is dollars, [1] is cents
    const titleSplit = v.name.slice(0, 14); // Validates whether the title is of a certain length, if it is greater than the length the remainder is cutout
    const entry = `<div class="product-main">
                        <div class="product-card">
                            <a href="${purchaseURL}"><img class="product-card-img" src="../${v.src}" alt="${v.name}"/></a>
                            <div class="product-card-text">
                                <h2 class="default-text-colour">${titleSplit === v.name ? v.name : titleSplit + "..."}</h2>
                                <p class="menu-light-text-colour">$${priceSplit[0]}.${priceSplit[1] ?? '00'}</p>
                                <p class="default-text-colour">${v.description}</p>
                                <a href="${purchaseURL}"><button class="product-buy">Buy</button></a>
                            </div>
                        </div>
                    </div>`; // The formatting is just to make it easier to read but still runs as if it was all inline

    console.log(entry, v);
    products.push(entry);
}); // Products are first processed then displayed to avoid rendering artifacts

if (grid && products.length !== 0) {
    grid.innerHTML = products.join(''); // join('') converts the array into a string, then the innerHTML property converts the text to html code
} else if (grid) {
    grid.innerHTML = `<p class="menu-text-colour">Error: content failed to load</p>`;
}