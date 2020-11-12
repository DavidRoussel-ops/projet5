let cart = document.getElementById('cart');

if (cart != null) {
    cart.addEventListener("click", getproduct);
}

//Fonction permettant de récupérer un élément grace à son id et son type.
function getproduct() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let objectId = urlParams.get('id');
    let type = urlParams.get('type');
    console.log("je cherche" + objectId + 'de type' + type);
    ajaxGet("http://localhost:3000/api/" + type + "/" + objectId, addCart);
}

//Fonction qui sert au callback de l'appel fait dans la fonction getproduct
function addCart(product) {
    product = JSON.parse(product);
    cartNumbers(product);
    totalCost(product);
}

//Fonction affichant le nombre d'article au panier.
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}


//Fonction permettant le rajoute d'arclicles au panier.
function cartNumbers(product) {
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

//Fonction donnant une valeur à la clés.
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

//Fonction qui permet le calcul du total des articles.
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

onLoadCartNumbers();
