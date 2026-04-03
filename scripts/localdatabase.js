/* ------ Cheilein Campbell IT IA 2026, All rights reserved ------
* 
* This is just a header file for the different products (can be replaced for a database in future)
* This file is essentially a mini database stored directly in the source code, hence why
* it is called "local" database.
* It was created to help link the scripts shared amongst the "home" and "products" webpages.
*
*
* 3NF
* STOREPRODUCTS(_productID_, name, description, price, src)
*
* where; productID = STOREPRODUCTS[i]
*        productID = Primary Key
*/

const pathProduct = "images/products/";
const STOREPRODUCTS = [
    {price:45, src:`${pathProduct}chinesegame.jpg`, name:"Kids Toy", description:"Baby block stacker toy."},
    {price:89.95, src:`${pathProduct}twister.jpg`, name:"Twisters Set", description:"Interactive game children's game. Including large mat and spinner."},
    {price:69.95, src:`${pathProduct}drseuss.jpg`, name:"Dr. Seuss's Beginner Book Collection", description:"A Book Collection from the famous author, Dr. Seuss."},
    {price:89.95, src:`${pathProduct}backtoschool.jpg`, name:"BackToSchool Bundle", description:"Calculator, Notepad, Pencil Case and Plush Toy all in one set."},
    {price:140, src:`${pathProduct}hotdots.jpg`, name:"Hot Dots", description:"Teach your child to read and write using this interactive pen."},
    {price:140, src:`${pathProduct}tabletcase.jpg`, name:"Tablet Case", description:"Blue 15 inch Tablet Case, also comes in other colours."},
    {price:100, src:`${pathProduct}uno.jpg`, name:"Uno Card Pack", description:"Fun, competative card game UNO suitable for all ages."},
    {price:89.85, src:`${pathProduct}pianofish.jpg`, name:"Musical Fish", description:"Toy piano suitable for kids ages 3-6."},
];