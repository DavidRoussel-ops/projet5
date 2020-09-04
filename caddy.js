/*let products = localStorage.getItem("productsInCart");

displayCart(products);

function displayCart(products) {

    let container = document.getElementById("productBasket");

    products.forEach(function product() {
        let subContenaire = document.createElement("div");
        subContenaire.setAttribute('class', 'one-item');
        let removeItem = document.createElement('div');
        removeItem.innerHTML = "X";
        removeItem.addEventListener('click', function () {
            let items = localStorage.getItem("productsInCart");
            items = JSON.parse(items);
            items.forEach(function (item, index) {
                if (item.id === product.id) {
                    items.splice(index, 1)
                }
            });
            localStorage.setItem("productsInCart", JSON.stringify(items));
            document.location.refresh();
        });
        let nameItem = document.createElement('div');
        nameItem.setAttribute('class', 'name');
        nameItem.innerHTML = "Nom : " + product.name;

        let priceItem = document.createElement('div');
        priceItem.setAttribute('class', 'price');
        priceItem.innerHTML = "Prix : " + product.price;

        subContenaire.appendChild(removeItem);
        subContenaire.appendChild(nameItem);
        subContenaire.appendChild(priceItem);

        container.appendChild(subContenaire);
    })

}*/

/*function ajaxGet(url, callback) {
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

document.addEventListener("DOMContentLoaded", function (event) {

    let objects = localStorage.getItem("productsInCart");
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let objectId = urlParams.get('id');
    let type = urlParams.get('type');
    console.log("je cherche" + objectId + 'de type' + type);
    ajaxGet("http://localhost:3000/api/" + type + "/" + objectId, displayObject(objects));

})

function displayObject(objects) {
    console.log("Affichage de l'objet.")
    objects = JSON.parse(objects)

    //Création de la div "list-of-teddies"

    //Création de la grande div de object
    let objectDiv = document.createElement('div');
    objectDiv.setAttribute('class', 'col-2 object');
    document.getElementById('productBasket').appendChild(objectDiv);
    // Dans la div object, on ajoute les 3 sous-éléments (div, div, img)

    //Première div pour le nom
    let objectNameDiv = document.createElement('div');
    objectNameDiv.setAttribute('class', 'name');
    objectNameDiv.textContent = objects.name;
    objectDiv.appendChild(objectNameDiv);

    //Deuxième élement de type img pour l'image
    let objectPicture = document.createElement('img');
    objectPicture.setAttribute('src', objects.imageUrl);
    objectDiv.appendChild(objectPicture);

    //Troisième div pour la description
    let objectDesc = document.createElement('div');
    objectDesc.setAttribute('class', 'descrip');
    objectDesc.textContent = objects.description;
    objectDiv.appendChild(objectDesc);

    //Quatrième div pour le prix
    let objectPriceDiv = document.createElement('div');
    objectPriceDiv.setAttribute('class', 'price');
    objectPriceDiv.textContent = objects.price + '€';
    objectDiv.appendChild(objectPriceDiv);
}*/


    /*let listOfItems = localStorage.getItem("productsInCart");
    listOfItems = JSON.parse(listOfItems);
    while (listOfItems > 0){
        listOfItems++;
    }
    let nameDiv = document.createElement('div');
    nameDiv.setAttribute('class', 'name-caddy');
    nameDiv.innerHTML = listOfItems.name;
    document.getElementById("productBasket").appendChild(nameDiv);*/



    let caddyItem = localStorage.getItem("productsInCart");

    let itemList = JSON.parse(caddyItem);

    let totalPrice = 0;

    let panier = document.getElementById("productBasket");

        itemList.forEach((item) => {

            let newItem = document.createElement('div');
            newItem.setAttribute('class', 'new-item');

            let newItemImg = document.createElement('img');
            newItemImg.setAttribute('src', item.imageUrl);

            let newItemName = document.createElement('div');
            newItemName.setAttribute('class', 'item-name');
            newItemName.textContent = item.name;

            let newItemPrice = document.createElement('div');
            newItemPrice.setAttribute('class', 'item-price');
            newItemPrice.textContent = item.price;
            totalPrice += item.price;

            newItem.appendChild(newItemImg);
            newItem.appendChild(newItemName);
            newItem.appendChild(newItemPrice);

            panier.appendChild(newItem);
        });

    document.getElementById('total').innerHTML = totalPrice;



