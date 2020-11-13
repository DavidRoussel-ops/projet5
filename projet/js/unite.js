//Fonction affichant l'article de la page produit.
function displayObject(object) {
    object = JSON.parse(object)

    //Variable créant une div.
    let objectDiv = document.createElement('div');
    objectDiv.setAttribute('class', 'col-2 object');
    document.getElementById('container').appendChild(objectDiv);

    //Variable créant une div contenant le nom de l'article.
    let objectNameDiv = document.createElement('div');
    objectNameDiv.setAttribute('class', 'name');
    objectNameDiv.textContent = object.name;
    document.getElementById('name').appendChild(objectNameDiv);

    //Variable contenant la description de l'article.
    let objectDesc = document.createElement('div');
    objectDesc.setAttribute('class', 'descrip');
    objectDesc.textContent = object.description;
    document.getElementById('description').appendChild(objectDesc);

    //Variable contenant le prix de l'article.
    let objectPriceDiv = document.createElement('div');
    objectPriceDiv.setAttribute('class', 'price');
    objectPriceDiv.textContent = object.price / 100 + ',00 €';
    document.getElementById('price').appendChild(objectPriceDiv);

    //Variable contenant l'image de l'article.
    let objectPicture = document.createElement('img');
    objectPicture.setAttribute('src', object.imageUrl);
    document.getElementById('picture').appendChild(objectPicture);

    //Variable contenant un select.
    let objectSlt = document.createElement('select')
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    //Variable qui récupère le type de l'article
    let type = urlParams.get('type');
    if (type === 'teddies') {
        //Fonction donnant la selection de couleur des Teddy.
        object.colors.forEach(function (color) {
            let objectOpt = document.createElement('option');
            objectOpt.textContent = color;
            objectSlt.appendChild(objectOpt);
        })
    } else if (type === 'cameras') {
        //Fonction donnant la selection des lentilles des appareils photos.
        object.lenses.forEach(function (lentille) {
            let objectOpt = document.createElement('option');
            objectOpt.textContent = lentille;
            objectSlt.appendChild(objectOpt);
        })
    } else if (type === 'furniture') {
        //Fonction donnant la selection de vernie des meubles.
        object.varnish.forEach(function (vernis) {
            let objectOpt = document.createElement('option');
            objectOpt.textContent = vernis;
            objectSlt.appendChild(objectOpt);
        })
    }
    document.getElementById('choice').appendChild(objectSlt);

    //Variable contenant un icon de caddy.
    let objectCart = document.createElement('a');
    objectCart.setAttribute('class', 'add-cart');
    objectCart.setAttribute('href', '#');
    objectCart.innerHTML = '<ion-icon name="cart-outline"></ion-icon>';
    document.getElementById('cart').appendChild(objectCart);
}


