const  isCategoriesList = document.querySelector('ul');
const elemOnCategories = isCategoriesList.children;
console.log('categories:', elemOnCategories.length);
const categoriesTitles = [...elemOnCategories].map(elem => elem.firstElementChild);
const onCategorieList = [...elemOnCategories].map(elem => elem.querySelector('ul'))
console.dir(categoriesTitles);
console.log([...onCategorieList].map(item => [...item]));
// const 