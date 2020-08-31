let cart = document.getElementById('cart');

if (cart != null){
    cart.addEventListener("click", getproduct);
}

function getproduct() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let objectId = urlParams.get('id');
    let type = urlParams.get('type');
    console.log("je cherche" + objectId + 'de type' + type);
    ajaxGet("http://localhost:3000/api/" + type + "/" + objectId, addCart);
}

function addCart(product) {
    product = JSON.parse(product);
    cartNumbers(product);
    totalCost(product);
}


function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}


// fonction donnant une clés et une valeur au local storage
function cartNumbers(product) {
    console.log('le produit selectionner est', product);
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;

    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[product._id] === undefined) {
            product.inCart = 0;
            cartItems = {
                ...cartItems,
                [product._id]: product
            }
        }
        cartItems[product._id].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product._id]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));
}

function totalCost(product) {
    //console.log('le ^prix du produit est', product.price);
    let cartCost = localStorage.getItem('totalCost');

    console.log(typeof cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price);
    } else {
        localStorage.setItem('totalCost', product.price);
    }
}

let products = localStorage.getItem('itemInCart');

displayCart(products);

function displayCart(products) {

    let container = document.getElementById('cart');

    products.forEach(function (product) {
        let subContainer = document.createElement('one-item');

        let removeItem = document.createElement('div');
        removeItem.setAttribute('class', 'remove-item');
        removeItem.innerHTML = 'X';
        removeItem.addEventListener('click', function () {
            let items = localStorage.getItem('itemInCart');
            items = JSON.parse(items);
            items.forEach(function (item, index) {
                if (item._id === product._id){
                    items.splice(index, 1)
                }
            });
            localStorage.setItem('itemInCart', JSON.stringify(items));
            container.innerHTML = '';
            displayCart(items)
        });

        let nameItem = document.createElement('div');
        nameItem.setAttribute('class', 'name');
        nameItem.innerHTML = "Nom : " + product.name;

        let priceItem = document.createElement('div');
        priceItem.setAttribute('class', 'price');
        priceItem.innerHTML = "Prix : " + product.price;

        subContainer.appendChild(removeItem);
        subContainer.appendChild(nameItem);
        subContainer.appendChild(priceItem);

        container.appendChild(subContainer);
    })
}

onLoadCartNumbers();
