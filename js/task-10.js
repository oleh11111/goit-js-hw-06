// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

//     Розміри найпершого <div> - 30px на 30px.
//     Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
//     Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function createBoxes(amount) {
  let array = [];
  let sizeBox = 30;
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = sizeBox + 'px';
    box.style.height = sizeBox + 'px';
    box.style.backgroundColor = getRandomHexColor();
    array.push(box);
    sizeBox += 10;
  }
  return array;
}

const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");
const divEl = document.getElementById("boxes");

createButton.addEventListener("click", () => {
  const value = parseInt(input.value);
  console.log(value);
  divEl.append(...createBoxes(value));
});
destroyButton.addEventListener("click", () => {
  divEl.innerHTML = "";
});
