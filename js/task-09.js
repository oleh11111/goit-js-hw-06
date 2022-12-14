// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector("button");
const bodyEl = document.querySelector("body");
const spanEl = document.querySelector("span");



 buttonEl.addEventListener("click", () => {
  const color = getRandomHexColor();
  
  spanEl.textContent = color;
  bodyEl.style.backgroundColor = color;
});
