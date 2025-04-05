const prompt = require("prompt-sync")();

const inventoryObject = {
  Chicken: 2,
  Broccolli: 5,
  Egg: 12,
  Salad: 3,
};

const recipeObject = [
  { ChickenNuggetSalad: { Salad: 2, Chicken: 1 } },
  { recipe2: {} },
  { recipe3: {} },
];

console.log(inventoryObject);
inventoryObject.Broccolli -= 1;
console.log(inventoryObject);
console.log(recipeObject.find((x) => x.ChickenNuggetSalad));

let userInput = prompt("What inventory item do you want to find?: ");
console.log(inventoryObject.userInput);
