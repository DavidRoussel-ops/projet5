
    let listOfItems = localStorage.getItem("productsInCart");
    listOfItems = JSON.parse(listOfItems);
    let total = 0;
    console.log(listOfItems);
    for (const [key,value] of Object.entries(listOfItems)){
        let idToRemove = value._id;
        console.log("Avant la suppression de l'id", idToRemove);
        console.log(key, idToRemove);
        if (key === idToRemove){
            console.log("Trouvé");
            delete listOfItems [key];
        }
        /*let key = "productsInCart";
        let value = JSON.stringify([value]);
        localStorage.setItem(key, value);
        let newValue = localStorage.getItem("productsInCart");*/
        console.log(value.name);
        let newCaddy = document.createElement('div');
        newCaddy.setAttribute('class', 'new-caddy');
        document.getElementById("productBasket").appendChild(newCaddy);

        let removeCaddy = document.createElement('div');
        removeCaddy.setAttribute('class', 'remove-item');
        removeCaddy.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';
        removeCaddy.addEventListener('click', function () {
        let items = localStorage.getItem('productsInCart');
        items = JSON.parse(items);
        function item(item, index) {
            if (item._id === value._id) {
                items.splice(index, 1)
            }
        }
        localStorage.setItem("productsInCart", JSON.stringify(items));
        newCaddy.innerHTML = '';
        /*let caddyItem = localStorage.getItem("productsInCart");
        caddyItem = JSON.parse(caddyItem);
        function removeItem(removeItem, index) {
            if (removeItem._id === value._id){
                caddyItem.removeItem(index, -1);
            }
        }
        localStorage.setItem("productsInCart", JSON.stringify(caddyItem));
        newCaddy.innerHTML = '';*/
        });
        newCaddy.appendChild(removeCaddy);

        let newCaddyName = document.createElement('div');
        newCaddyName.setAttribute('class', 'caddy-name');
        newCaddyName.textContent = value.name;
        newCaddy.appendChild(newCaddyName);

        let newCaddyPrice = document.createElement('div');
        newCaddyPrice.setAttribute('class', 'caddy-price');
        newCaddyPrice.textContent = value.price/100 + ",00 €";
        newCaddy.appendChild(newCaddyPrice);

        /*let newCaddyDesc = document.createElement('div');
        newCaddyDesc.setAttribute('class', 'caddy-desc');
        newCaddyDesc.textContent = 'Description : ' + value.description;
        newCaddy.appendChild(newCaddyDesc);*/

        let newCaddyInCart = document.createElement('div');
        newCaddyInCart.setAttribute('class', 'caddy-incart');
        newCaddyInCart.textContent = value.inCart;
        newCaddy.appendChild(newCaddyInCart);

        let newCaddyImg = document.createElement('img');
        newCaddyImg.setAttribute('src', value.imageUrl);
        newCaddy.appendChild(newCaddyImg);

        let subTotal = document.createElement('div');
        subTotal.setAttribute('class', 'sub-total');
        subTotal.innerHTML = parseInt(value.price/100) * parseInt(value.inCart) + ',00 €';
        newCaddy.appendChild(subTotal);

        /*let totalCaddy = document.createElement('div');
        totalCaddy.innerHTML = total += parseInt(value.price) * parseInt(value.inCart);*/
        document.querySelector('.total span').textContent = total += value.price/100 * value.inCart;
    }
    console.log(total);

    /*function removeItem(){
        let item = localStorage.getItem("productsInCart");
        const [key,value] = Object.entries(listOfItems);
        let arr = [key,value];
        for (let i = 0; i < localStorage.length; i++){
            if (localStorage.key(i).indexOf("value") > -1){
                arr.push(localStorage.key(i));
            }
        }
        for (let i = 0; i < arr.length; i++){
            localStorage.removeItem(arr[i]);
        }
    }*/

    /*let panier = localStorage.getItem("productsInCart");
    panier = JSON.parse(panier);

    let caddyDiv = document.createElement('div');
    caddyDiv.setAttribute('class', 'master-div');

    let caddyDivName = document.createElement('div');
    caddyDivName.setAttribute('class', )*/



//panier = JSON.parse(panier);
//for (let i = 0; i < panier; i++) {}
/*let panier = localStorage.getItem("productsInCart");

displayCart(panier);
function displayCart(panier) {
    let panierItem = JSON.parse(panier);
    console.log(typeof panierItem);
    /*if (panierItem [panier.name] === undefined){
        panierItem = {
            ...panierItem,
            [panier.name]: panier
        }
    }
    localStorage.getItem("productsInCart");
    let caddyDivMaster = document.createElement('div');
    caddyDivMaster.setAttribute('class', 'master-div');

    let panierName = document.createElement('div');
    panierName.setAttribute('class', 'name');
    panierName.innerHTML = panierItem.name;
    caddyDivMaster.appendChild(panierName);
    document.getElementById("productBasket").appendChild(caddyDivMaster);
}*/




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


    /*
    let nameDiv = document.createElement('div');
    nameDiv.setAttribute('class', 'name-caddy');
    nameDiv.innerHTML = listOfItems.name;
    document.getElementById("productBasket").appendChild(nameDiv);*/

/*function getproduct() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let objectId = urlParams.get('id');
    let type = urlParams.get('type');
    console.log("je cherche" + objectId + 'de type' + type);
    ajaxGet(localStorage.getItem("productsInCart"), addCart);
}

function addCart(product) {
    product = JSON.parse(product);
    displayCart(product);
}

function displayCart(product) {

    let container = document.getElementById("productBasket");

    product.forEach(function product() {
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

}

getproduct();*/

    /*let totalPrice = 0;

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

    document.getElementById('total').innerHTML = totalPrice;*/



