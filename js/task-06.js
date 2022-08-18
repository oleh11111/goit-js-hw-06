// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.
const validInputEl = document.getElementById("validation-input");
const validInputElAtr =  validInputEl.getAttribute('data-length');
const style= document.querySelector("style")

console.log(validInputEl);
console.log(validInputElAtr);
console.log(style);


validInputEl.addEventListener("blur", () => {
   
    const validInputEl = validInputEl.value.length === validInputElAtr ? validInputEl = (style.nodeName '#validation-input.valid') : HTMLUnknownElement,mb
})