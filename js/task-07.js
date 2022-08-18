// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту
const inputEl = document.getElementById("font-size-control");
const spanTextEl = document.getElementById("text");
// console.log(spanTextEl.textContent);
// console.log(inputEl);

inputEl.addEventListener("input", () => {
spanTextEl.textContent.fontsize = inputEl.value;
  
})