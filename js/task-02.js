const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulElement = document.getElementById('ingredients');
const liElements = ingredients.map((ingredient) => {
  const liElement = document.createElement('li');
  liElement.textContent = ingredient;
  liElement.className = 'item';

  return liElement;
})




ulElement.append(...liElements);

console.log(liElements)
console.log(ulElement);