const pizzaToppings = ["pepperoni", "sausage", "pineapple", "chicken"];

function greet() {
  const welcome = "Hello welcome to Andrews Pizza we offer";
  let toppingString = "";
  for (let topping of pizzaToppings) {
    toppingString = toppingString + topping + ",";
  }
  console.log(welcome, toppingString);
}

function getPizzaOrder(size, crust, ...toppings) {
  let pizzaOrder = `One, ${size}, ${crust}, pizza with `;
  for (let topping of toppings) {
    pizzaOrder = pizzaOrder + topping + ", ";
  }
  console.log(pizzaOrder, "coming up!");
  return [size, crust, toppings];
}

function preparePizza([size, crust, toppings]) {
  console.log("...Cooking Pizza...");

  const pizza = {
    size: size,
    crust: crust,
    toppings: toppings
  };
  return pizza;
}

function servePizza(pizzaObject) {
  let string = `Order up! Here is your ${pizzaObject.size}, ${pizzaObject.crust}`;
  for (let choiceElement of pizzaObject.toppings) {
    string = string + choiceElement + ", ";
  }
  console.log(string);
  return pizzaObject;
}

greet();
let customerOrder = getPizzaOrder(
  "large",
  "thick crust",
  "pepperoni",
  "chicken",
  "pineapple"
);
let pizzaObject = preparePizza(customerOrder);

servePizza(pizzaObject);
