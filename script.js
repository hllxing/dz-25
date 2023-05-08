function showCategories() {
    const container = document.querySelector('.categories');

    for(let i = 0; i < data.length; i++) {
        const element = document.createElement('div');
        element.innerHTML = data[i].name;
        element.setAttribute('data-category', i);
        element.addEventListener('click', showProductHandler);
        container.appendChild(element);
    }
}
function showProductHandler(event) {
    const container = document.querySelector('.products');
    container.innerHTML = '';
    const element = event.target;
    const categoryIndex = element.getAttribute('data-category');
    const categoryProducts = data[categoryIndex].products;
    for(let i = 0; i < categoryProducts.length; i++) {
        const element = document.createElement('div');
        element.innerHTML = categoryProducts[i].name;
        element.setAttribute('data-category', categoryIndex);
        element.setAttribute('data-product', i);
        element.addEventListener('click', showDescription);
        container.appendChild(element);
    }
}
function showDescription(event){
    const container = document.querySelector('.description');
    container.innerHTML = '';
    const element = event.target;
    const categoryIndex = element.getAttribute('data-category');
    const productIndex = element.getAttribute('data-product');
    const categoryProducts = data[categoryIndex].products;
    const description = document.createElement('div');
    const price = document.createElement('div');
    description.innerHTML = categoryProducts[productIndex].description;
    price.innerHTML = '$' + categoryProducts[productIndex].price;
    container.appendChild(description);
    container.appendChild(price);
    const button = document.createElement('button');
    button.textContent = 'Сплатити!';
    container.appendChild(button);
    button.onclick = finalInfo;
}
function finalInfo() {
    const categories = document.querySelector(".categories");
    const products = document.querySelector(".products");
    const description = document.querySelector(".description");
    categories.innerHTML = '';
    products.innerHTML = '';
    description.innerHTML = '';
    alert("Дякую за замовлення!")
    showCategories();
}

showCategories();