// variables
const form = document.querySelector(".btn");

// event listeners
form.addEventListener("click", calculatePizzas);

function calculatePizzas(e) {
  // UI vars input
  const bear = document.getElementById("bear").value;
  const monkey = document.getElementById("monkey").value;
  const bird = document.getElementById("bird").value;
  const inches = document.getElementById("inches").value;
  // UI vars result
  let result = document.getElementById("result");

  const pizzaArea = (Math.PI * Math.pow(inches / 2, 2)).toFixed(2);

  console.log(`The pizza is ${pizzaArea} in^2`);
  // amount of pizza each appetite category will eat
  // based on amount of a 14" pizza each x appetite person can eat
  console.log(bear, "bear");
  const appetites = {
    bear: (bear / inches) * 14 * 0.5,
    monkey: (monkey / inches) * 14 * 0.5,
    bird: (bird / inches) * 14 * 0.5
  };
  console.log("The appetite totals (in pizza units):");
  console.log(appetites);

  function sumAppetites(obj) {
    return Object.keys(obj).reduce(
      (sum, key) => sum + parseFloat(obj[key] || 0),
      0
    );
  }

  console.log(sumAppetites(appetites).toFixed(1));

  result.value = sumAppetites(appetites).toFixed(2);

  e.preventDefault();
}
