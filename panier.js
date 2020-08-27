//Création d'une variable récupérant l'élément possédant la classe "add-cart"
let carts = document.querySelectorAll('.add-cart');

let products = [
    {"colors":["Tan","Chocolate","Black","White"],"_id":"5be9c8541c9d440000665243","name":"Norbert","price":2900,"imageUrl":"http://localhost:3000/images/teddy_1.jpg","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","inCart":0},
    {"colors":["Pale brown","Dark brown","White"],"_id":"5beaa8bf1c9d440000a57d94","name":"Arnold","price":3900,"imageUrl":"http://localhost:3000/images/teddy_2.jpg","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","inCart":0},
    {"colors":["Brown"],"_id":"5beaaa8f1c9d440000a57d95","name":"Lenny and Carl","price":5900,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","imageUrl":"http://localhost:3000/images/teddy_3.jpg","inCart":0},
    {"colors":["Brown","Blue","Pink"],"_id":"5beaabe91c9d440000a57d96","name":"Gustav","price":4500,"imageUrl":"http://localhost:3000/images/teddy_4.jpg","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","inCart":0},
    {"colors":["Beige","Tan","Chocolate"],"_id":"5beaacd41c9d440000a57d97","name":"Garfunkel","price":5500,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","imageUrl":"http://localhost:3000/images/teddy_5.jpg","inCart":0},
    {"lenses":["35mm 1.4","50mm 1.6"],"_id":"5be1ed3f1c9d44000030b061","name":"Zurss 50S","price":49900,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","imageUrl":"http://localhost:3000/images/vcam_1.jpg","inCart":0},
    {"lenses":["50mm 1.8","60mm 2.8","24-60mm 2.8/4.5"],"_id":"5be1ef211c9d44000030b062","name":"Hirsch 400DTS","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","price":309900,"imageUrl":"http://localhost:3000/images/vcam_2.jpg","inCart":0},
    {"lenses":["25mm 4.5"],"_id":"5be9bc241c9d440000a730e7","name":"Franck JS 105","price":209900,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","imageUrl":"http://localhost:3000/images/vcam_3.jpg","inCart":0},
    {"lenses":["50mm 1.7","35mm 1.4"],"_id":"5be9c4471c9d440000a730e8","name":"Kuros TTS","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","price":159900,"imageUrl":"http://localhost:3000/images/vcam_4.jpg","inCart":0},
    {"lenses":["50mm 1.4","35mm 1.8","28-200mm 2.8/4.5"],"_id":"5be9c4c71c9d440000a730e9","name":"Katatone","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","price":59900,"imageUrl":"http://localhost:3000/images/vcam_5.jpg","inCart":0},
    {"varnish":["Dark Oak","Light Oak","Mahogany"],"_id":"5be9cc611c9d440000c1421e","name":"Cross Table","price":59900,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","imageUrl":"http://localhost:3000/images/oak_1.jpg","inCart":0},
    {"varnish":["Dark Oak","Light Oak"],"_id":"5beaadda1c9d440000a57d98","name":"Coffee Table","price":89900,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","imageUrl":"http://localhost:3000/images/oak_2.jpg","inCart":0},
    {"varnish":["Dark Oak","Teak","Mahogany"],"_id":"5beaae361c9d440000a57d99","name":"Dining Table (extendable)","price":109900,"imageUrl":"http://localhost:3000/images/oak_3.jpg","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","inCart":0},
    {"varnish":["Light Oak","Teak"],"_id":"5beaaf2e1c9d440000a57d9a","name":"Bench","price":39900,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","imageUrl":"http://localhost:3000/images/oak_4.jpg","inCart":0},
    {"varnish":["Dark Oak","Mahogany"],"_id":"5beab2061c9d440000a57d9b","name":"Vintage Chair","price":79900,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","imageUrl":"http://localhost:3000/images/oak_5.jpg","inCart":0}
    ];

//boucle récupérant le nombre de click
for (let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}


// fonction donnant une clés et une valeur au local storage
function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if (productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;

    }
    setItems(product);

}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    console.log('mon item carte est', cartItems);
    product.inCart = 1;
    cartItems = {
        [product._id]: product
    }

    localStorage.setItem('productsInCart', JSON.stringify
    (cartItems));
}

onLoadCartNumbers();