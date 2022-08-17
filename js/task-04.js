const buttonIncr = document.querySelector('button[data-action="increment"]');
const buttonDecr = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector("#value");
console.log(valueEl.textContent);

let counterValue = 0;

buttonIncr.addEventListener("click", () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
buttonDecr.addEventListener("click", () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});


