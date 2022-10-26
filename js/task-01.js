const categoriesList = document.querySelector('ul#categories');
const elementsOfCategories = categoriesList.children;

console.log('Number of categories:', elementsOfCategories.length);

for (const categorieItem of elementsOfCategories) {
  const h2Elements = categorieItem.getElementsByTagName('h2');
  const liElements = categorieItem.getElementsByTagName('li');

  console.log('Category: ', h2Elements[0].textContent);
  console.log('Elements: ', liElements.length);

}