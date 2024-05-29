/*

Part 1: Basic Arrays - Product Inventory
Challenge:
You are tasked with creating a Product Inventory system. Implement functions and logic to manage object manipulation effectively.
1. Define a type alias named Product to represent a product with the following properties:
• name (string): The name of the product.
• price (number): The price of the product.
• inventory (object): An object containing inventory details including:
• stock (number): The number of products available.
• colorOptions (string[ ]): An array listing available colors.
2. Create an array named products containing at least three product objects. Each product object should include a name, price, and inventory details.
3. Implement a function named changeColor that takes a product object and a new color as input. This function should update the color property of the product and adjust the price based on the new color (implement your own logic, e.g., increase by 10% for red, decrease by 5% for blue).
4. Display each product's name, price, stock, and available colors. Iterate through the products array and print each product's details.

*/

type Product = {
    name : string;
    price : number;
    inventory : {
        stock : number;
        colorOptions : string[];
    }
};

const products : Product[] = [
    {
        name : "Speaker",
        price : 700,
        inventory : {
            stock : 50,
            colorOptions : ["blue", "purple", "black"]
        }
    },
    {
        name : "Headphones",
        price : 400,
        inventory : {
            stock : 100,
            colorOptions : ["gray", "yellow", "red"]
        }
    },
    {
        name : "Earpods",
        price : 1500,
        inventory : {
            stock : 200,
            colorOptions : ["white", "orange", "black"]
        }
    }
];

function changeColor(product : Product, newColor : string) {
    newColor.toLocaleLowerCase();
    let product_copy : Product = {...product};
    let i : number = 0;
    for (let n = 0; n < product_copy.inventory.colorOptions.length; n++) {
        let color : string = product_copy.inventory.colorOptions[n].slice();
        if (color == newColor) {
            if (newColor == "red") {
                product_copy.price *= 1.10;
            }
            else if (newColor == "white") {
                product_copy.price *= 1.10;
            }
            else if (newColor == "yellow") {
                product_copy.price *= 1.05;
            }
            else if (newColor == "orange") {
                product_copy.price *= 1.05;
            }
            else if (newColor == "blue") {
                product_copy.price *= 0.95;
            }
            else if (newColor == "purple") {
                product_copy.price *= 0.95;
            }
            else if (newColor == "black") {
                product_copy.price *= 0.95;
            }
            else if (newColor == "gray") {
                product_copy.price *= 0.90;
            }

            i += 1;
        }
        else {
            continue;
        }
    }

    if (i > 0) {
        console.log(`Color of ${product_copy.name} changed to ${newColor}, new price: ${product_copy.price}`);
    }
    else {
        console.log(`${newColor} is not available for ${product_copy.name}`);
    }
    
    
};

console.log(products);

changeColor(products[0], "red");
changeColor(products[1], "gray");
changeColor(products[2], "white");

function displayProducts(products : Product[]) {
    for (let m = 0; m < products.length; m++) {
    console.log(`name: "${products[m].name}"`);
    console.log(`price: ${products[m].price}`);
    console.log(`inventory:`);
    console.log(`\t stock: ${products[m].inventory.stock}`);
    console.log(`\t colorOptions: "${products[m].inventory.colorOptions}" \n`);
    }
}

displayProducts(products);
