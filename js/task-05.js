// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
const inputEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");

// inputEl.addEventListener("input", () => {
//   console.log(inputEl.value);

//   outputEl.textContent = inputEl.value;
//   if (inputEl.value === "") {
//     outputEl.textContent = "Anonymous";
//   }
// });

// inputEl.addEventListener("input", () => {
//   console.log(inputEl.value);

//   if (inputEl.value === "") {
//     outputEl.textContent = "Anonymous";
//   } else {
//     outputEl.textContent = inputEl.value;
//   }
// });
inputEl.addEventListener("input", () => {
  console.log(inputEl.value);
  outputEl.textContent =  inputEl.value === "" ? "Anonymous" : inputEl.value;
 
});
