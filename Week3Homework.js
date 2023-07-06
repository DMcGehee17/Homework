const pizzaToppings = ["pepperoni,", "sausage,", "jalapenos,", "pineapple."]


function greetCustomer(){
let greeting = "Welcome to Pizza Palace! Our toppings are "

for (let topping of pizzaToppings) {
  greeting += `${topping} `
 }

 console.log(greeting);
}

function getPizzaOrder(size, crust, ...toppings) {
let order = `One ${size} ${crust} crust pizza with `
for (let value of toppings) {
order += `${value}`
}
console.log(order);
const array = [size, crust, toppings]
return array;
}

function preparePizza(array){


  console.log("Cooking pizza. Order almost ready. Order up! ")

  let myObject = {

      size: array[0],
      crust: array[1],
      toppings: array[2],
  };

  return myObject;
}

function servePizza(pizzaObject){

  let orderReady = `Order Up! Here's your ${pizzaObject["size"]} ${pizzaObject["crust"]} crust pizza with `

  for (let topping of pizzaObject["toppings"]){
    orderReady += `${topping}`
    console.log(orderReady);
  }
  return pizzaObject;


}



greetCustomer();
let customerOrder = getPizzaOrder("large", "thick", "pepporoni, jalapenos, and pineapple. ");
servePizza(preparePizza(customerOrder));





