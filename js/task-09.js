// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonEl = document.querySelector("button");
let spanEl = document.querySelector("span");
console.log(buttonEl);
console.log(spanEl);

buttonEl.addEventListener("click", () => {

  getRandomHexColor.textContent = spanEl.textContent;
});
