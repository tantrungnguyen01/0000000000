import { API_URL, GET_DATA } from "./eport.js";


function buildProductsElements() {
    const productList = document.querySelector('.products-lit');
    productList.innerHTML = '';
    product.forEach((product) => {
        // build product element
    //     const productElement = buildProductElement(product);
    //     productList.appendChild(productElement);
    // })
}


// function buildProductElement(product) {
//     const productElementTemplate = document.querySelector('#productTemplate');
//     const productElementFragment = productElementTemplate.content.cloneNode(true);
//     const productElement = productElementFragment.querySelector('.products__list--product');

//     // const productName = productElement.querySelector('.name');
//     // productName.innerText = product.productName;

//     const productImage = productElement.querySelector('.product-image');
//     productImage.src = product.image;


//     // const productPrice = productElement.querySelector('.price');
//     // productPrice.innerText = product.price;

//     // const productATCBtn = productElement.querySelector('.product__image--cart');

//     // productATCBtn.addEventListener('click', function () {
//     //     addToCart(product)
//     // })

//     return productElement
// }


function buildFitterItem(category) {
    const filterItemTemplate = document.querySelector('#filtertemplate');
    const filterItemFragment = filterItemTemplate.content.cloneNode(true);
    const filterItemElement = filterItemFragment.querySelector('.catery');

    const filterItemTitle = filterItemElement.querySelector('span');
    filterItemTitle.innerText = category.name;

    const filterItemCheckBtn = filterItemElement.querySelector('.check-btn');

    filterItemElement.addEventListener('click', async function () {
        const categoriesElement = document.querySelectorAll('.catery');
        categoriesElement.forEach(function (categoryElement) {
            categoryElement.classList.remove('active');
        })

        filterItemElement.classList.add('active');
        let apiUrl = `${API_URL}/products`

        if (catery.id) {
            apiUrl = `${API_URL}/products?catery=${catery.id}`
        }

        const products = await GET_DATA(apiUrl);

        buildProductsElements(products);
    })

    return filterItemElement
}




async function init() {
    // call api get category
    const filterItemWrapper = document.querySelector('.caterogis');
    const allItemsCategory = {
        id: null,
        name: 'Unisex'
    }
    const categories = await GET_DATA(`${API_URL}/categories`);
    categories.unshift(allItemsCategory);
    categories.forEach(categry => {
        const fitlerElement = buildFitterItem(categry);
        filterItemWrapper.appendChild(fitlerElement);
    });

    // get products
    // const product = await GET_DATA(`${API_URL}/products`);
    // buildProductsElements(product)

}

init();