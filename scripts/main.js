let favoriteSandwich = "grilled chicken";

let leastFavoriteSandwich = {
     sandwichName: "bologna",
     price: 10,
     ingredients: ["bread", "bologna", "mayo"]
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


function buildNewSandwich(sandwichName, price, ingredientsArray) {
    let newSandwichObject = {
        sandwichName, 
        price,
        ingredientsArray
    };
    sandwichMenu.push(newSandwichObject);
    console.log(sandwichMenu) 
}

buildNewSandwich("Taco Sandwich", 5, ["shell", "cheese", "taco meat"])



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



