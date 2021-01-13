let favoriteSandwich = "grilled chicken";

let leastFavoriteSandwich = {
     sandwichName: "bologna",
     price: 10,
     ingredients: ["bread", "bologna", "mayo", "cheese"]
 };

// console.log(leastFavoriteSandwich.ingredients[0]);

let sandwichMenu = [
    {
        sandwichName: "grilled chicken",
        price: 8,
        ingredients: ["bread", "grilled chicken", "pickles", "butter"]
    },
    {
        sandwichName: "blt",
        price: 4,
        ingredients: ["toasted bread", "bacon", "lettuce", "tomato"]
    },
    leastFavoriteSandwich,
 ];

//  for(let i = 0; i < sandwichMenu.length; i++){
//     console.log("this is i", i)
//     console.log(sandwichMenu[i].sandwichName)
//     console.log(sandwichMenu[i].ingredients)
//     for(let j = 0; j < sandwichMenu[i].length; j++){
//         console.log(sandwichMenu[i].ingredients[j])
//     }
//  }

 // console.log(sandwichMenu[0])

 // 1. Write a for loop to print each ingredient for just a Rueben to the console
 // 2. Extra challenge: If you get done early and feel inspired, try writing a loop within a loop to print each ingredient for every sandwich to the console
 

 // Loop through the ingredients for leastFavoriteSandwich
//  for(let i = 0; i < sandwichMenu[3].ingredients.length; i++){
//     console.log(sandwichMenu[3].ingredients[i])
//  }

 // Loop through all the sandwiches
//  for(let i = 0; i < sandwichMenu.length; i++){
//      if(sandwichMenu[i].sandwichName === favoriteSandwich){
//         console.log("Chef's Choice", sandwichMenu[i].sandwichName)
//      } else {
//         console.log(sandwichMenu.sandwichName)
//      }

//     }

// for(let i = 0; i < sandwichMenu.length; i++){
//         if(sandwichMenu[i].price < 10){
//             console.log(`SALE ${sandwichMenu[i].sandwichName}`)
//         } else {
//             console.log(sandwichMenu[i].sandwichName)
//         }
// } 


// Wrtie a function that takes in the name of my franchise owner and returns an array of menu items with that person's name added onto the beginning

function createFranchiseMenu(franchiseOwnerName){
    let franchiseMenuArray = [];
    console.log("This franchise belongs to:", franchiseOwnerName)

    // Loop over the menu array
    for(let i = 0; i < sandwichMenu.length; i++) {
        // Modify every sandwich name to include the franchise owner's name
        let currentSandwich = sandwichMenu[i]
        let currentSandwichName = currentSandwich.sandwichName
        let newSandwich = {
            sandwichName: `${franchiseOwnerName}'s ${currentSandwichName}`
        }
        // Push it into the new franchise menu
        franchiseMenuArray.push(newSandwich)
        }
        console.log(franchiseMenuArray)
        return franchiseMenuArray;
    }

// Call the function
createFranchiseMenu("John")



// 1. Write a function that loops over every item in the menu array and builds a sentence about the name and price of each sandwich. Example: "The tomato sandwich is 6.99."

function sandwichSentence(){
    for (let i = 0; i < sandwichMenu.length; i++) {
        console.log(`The ${sandwichMenu[i].sandwichName} is ${sandwichMenu[i].price}`);
    }

}

sandwichSentence();


// 2. Write a function that accepts a string of sandwich name, a number of price, and an array of ingredients. The function should build an object that represents a sandwich and add it to the array.


// function buildNewSandwich(sandwichName, price, ingredientsArray) {
//     let newSandwichObject = {
//         sandwichName, 
//         price,
//         ingredientsArray
//     };
//     sandwichMenu.push(newSandwichObject);
//     console.log(sandwichMenu) 
// }

// buildNewSandwich("Taco Sandwich", 5, ["shell", "cheese", "taco meat"])



// 3. Write a function that reduces every sandwich's price by 25% and returns a new array of discount sandwiches.
function priceReduction() {
    // Creates an empty array to push new sandwich info into
    let discountSandwichArray = [];

    // Loop through every sandwich's price and reduce it by 25%
    for(let k = 0; k < sandwichMenu.length; k++) {
        let sandwichName = sandwichMenu[k].sandwichName;
        let originalPrice = sandwichMenu[k].price;
        let salePrice = (originalPrice / 1.25);
        let discountSandwichObject = {
            sandwichName: sandwichMenu[k].sandwichName,
            price: sandwichMenu[k].price,
            discountPrice: salePrice,
            ingredients: sandwichMenu[k].ingredients
        };
        // 
        discountSandwichArray.push(discountSandwichObject)
        console.log(`${sandwichName} is on sale for ${salePrice}`)
    }

        return discountSandwichArray;
}

let cheapSandwichArray = priceReduction();

console.log(cheapSandwichArray)



// 4. Write a "Dairy Free" function that loops through your array of sandwiches and returns a new array of sandwiches that do NOT include cheese in their ingredient list. (Make sure you have at least one sandwich with cheese so you can test if this function works.)

function dairyFree() {
    // Empty arrays to push cheese or non-cheese sandwiches into
    let noCheeseArray = [];
    let cheeseArray = [];
    // Loop to iterate through each sandwich in the menu
    for(let m = 0; m < sandwichMenu.length; m++) {
        // Conditional to see which sandwiches include cheese
        if(sandwichMenu[m].ingredients.includes("cheese")){
            // Pushes sandwiches to cheeseArray IF they include cheese
            cheeseArray.push(sandwichMenu[m])
        } else {
            // Pushes sandwiches to noCheeseArray IF they do not include cheese
            noCheeseArray.push(sandwichMenu[m])
        }
    }
    
    return noCheeseArray;
}

// Stores the function dairFree() in a variable: cheeseFilter
let cheeseFilter = dairyFree();

console.log(cheeseFilter)






// Matt's DairyFree Function

// let dairyFree = () => {
//     let dairyFreeArray = [];

    
//         for(let x = 0; x < sandwichMenu.length; x++){
//             if(sandwichMenu[x].ingredients.includes("cheese")){
//                 console.log(`${sandwichMenu[x].sandwichName} contains dairy`)
//             } else {
//             dairyFreeArray.push(sandwichMenu[x])
//         }
//     }

//     return dairyFreeArray
// }

// let someVariable = dairyFree()

// console.log(someVariable)



// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

function chickenMonkey () {

    for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
        // If the current number is a multiple of 5 AND 7 console ChickenMonkey
        if (currentNumber % 5 === 0 && currentNumber %7 ===0) {
            console.log("ChickenMonkey") 
        // If the current number is a multiple of 5 ONLY console Chicken
        } else if (currentNumber % 5 === 0) {
            console.log("Chicken")
        // If the current number is a multiple of 7 ONLY console Monkey
        } else if (currentNumber % 7 === 0) {
            console.log("Monkey")
        // If the current number is not a multiple of 5 OR 7 console the number
        } else {
            console.log(currentNumber)
        } 
    }
    }
    // Variable to hold chickenMonkey() function
    let chickenMonkeyCounter = chickenMonkey();
    console.log(chickenMonkeyCounter)




// A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to sign up because the grand prize is $20,000. To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.

// Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.


let bandNumber = 1

const takeNumber = function (bandName) {
    let bandOrder = `${bandNumber}. ${bandName}`;
    bandNumber++;
    return bandOrder;
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console


const turtles = takeNumber("Turtles")
console.log(turtles)





// Cookout
const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An array that is grouping the objects together.
let foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
let cookedFood = [];

function grill (currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};

function grillFunction(food) {
    for (let g= 0; g < food.length; g++) {
        grill(food[g]);
    }
}

grillFunction(foods);
console.log(foods)

