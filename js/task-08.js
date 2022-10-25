// Напиши скрипт управління формою логіна.    Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

// const formEl = document.querySelector (".login-form");
// let inputEl =formEl.getElementsByTagName ("input");
// console.log(formEl);
// console.log([inputEl]);

// formEl.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();
// }


// inputEl.forEach(element => {

// ((input = input) => {
// if ([input] === "") {
//   alert("залишилися незаповнені поля для вводу! заповніть їх будь-ласка");
// }
// else{
//   const formElements = event.currentTarget.elements;

//   const email = formElements.email.value;
//   const password = formElements.password.value;

//   const formData = {
//     email,
//     password,
//   };};
// });
//   const formData = new FormData(event.currentTarget);
  
//   formData.forEach((name, value) => {
//     console.log(name);
//     console.log(value);
//   });
// }


const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { password, email,}
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("будь-ласка заповніть всі поля введення!");
  }

  
  event.currentTarget.reset();

}