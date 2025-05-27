const pizzaPlace = "Andrew's Pizza";
let numberOfToppings = 2;

console.log(typeof pizzaPlace);
console.log(typeof numberOfToppings);

const template = `"welcome to ${pizzaPlace}," We offer ${numberOfToppings} kinds of pizza."`;
console.log(template);

if (numberOfToppings < 10) {
  console.log("quality, not quantity.");
} else {
  console.log("a whole lot of pizza");
}
