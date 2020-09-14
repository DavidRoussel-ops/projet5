function ajaxGet(url, callback) {
    let req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400){
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'url" + url);
    });
    req.send(null);
}

function displayObject(object) {
    console.log("Affichage de l'objet.")
    object = JSON.parse(object)

    let objectDiv = document.createElement('div');
    objectDiv.setAttribute('class', 'col-2 object');
    document.getElementById('container').appendChild(objectDiv);

    let objectNameDiv = document.createElement('div');
    objectNameDiv.setAttribute('class', 'name');
    objectNameDiv.textContent = object.name;
    document.getElementById('name').appendChild(objectNameDiv);

    let objectPicture = document.createElement('img');
    objectPicture.setAttribute('src', object.imageUrl);
    document.getElementById('picture').appendChild(objectPicture);

    let objectDesc = document.createElement('div');
    objectDesc.setAttribute('class', 'descrip');
    objectDesc.textContent = object.description;
    document.getElementById('description').appendChild(objectDesc);

    let objectPriceDiv = document.createElement('div');
    objectPriceDiv.setAttribute('class', 'price');
    objectPriceDiv.textContent = object.price / 100 + ',00 €';
    document.getElementById('price').appendChild(objectPriceDiv);

    let objectSlt = document.createElement('select')
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let type = urlParams.get('type');
    if (type === 'teddies') {
        object.colors.forEach(function (color) {
            let objectOpt = document.createElement('option');
            objectOpt.textContent = color;
            objectSlt.appendChild(objectOpt);
        })
    } else if (type === 'cameras') {
        object.lenses.forEach(function (lentille) {
            let objectOpt = document.createElement('option');
            objectOpt.textContent = lentille;
            objectSlt.appendChild(objectOpt);
        })
    } else if (type === 'furniture') {
        object.varnish.forEach(function (vernis) {
            let objectOpt = document.createElement('option');
            objectOpt.textContent = vernis;
            objectSlt.appendChild(objectOpt);
        })
    }
    document.getElementById('choice').appendChild(objectSlt);

    let objectCart = document.createElement('a');
    objectCart.setAttribute('class', 'add-cart');
    objectCart.setAttribute('href', '#');
    objectCart.innerHTML = '<ion-icon name="cart-outline"></ion-icon>';
    document.getElementById('cart').appendChild(objectCart);
}


