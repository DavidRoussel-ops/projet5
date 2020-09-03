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

let objectLinea = localStorage.getItem("productsInCart");
objectLinea = JSON.parse(objectLinea);
alert(objectLinea.name);

/*let myBascket = document.getElementById('cart');

if (myBascket != null){
    myBascket.addEventListener("click", bascket);
}

function bascket() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let objectId = urlParams.get('id');
    let type = urlParams.get('type');
    console.log("je cherche" + objectId + 'de type' + type);
    ajaxGet("http://localhost:3000/api/" + type + "/" + objectId, displayCart);
}*/
/*
let products = localStorage.getItem('productsInCart');

displayCart(products);

function displayCart(products) {

    let container = document.createElement('div');
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let productId = urlParams.get('id');
    if (productId === products) {
        products.forEach(function (product) {
            let subContainer = document.createElement('one-item');
            let removeItem = document.createElement('div');
            removeItem.setAttribute('class', 'remove-item');
            removeItem.innerHTML = 'X';
            removeItem.addEventListener('click', function () {
                let items = localStorage.getItem('productsInCart');
                items = JSON.parse(items);
                items.forEach(function (item, index) {
                    if (item._id === product._id) {
                        items.splice(index, 1)
                    }
                });
                localStorage.setItem('productsInCart', JSON.stringify(items));
                container.innerHTML = '';
                displayCart(items)
            });

            let nameItem = document.createElement('div');
            nameItem.setAttribute('class', 'name');
            nameItem.innerHTML = "Nom : " + product.name;
            document.getElementById('product-title').appendChild(nameItem);

            let priceItem = document.createElement('div');
            priceItem.setAttribute('class', 'price');
            priceItem.innerHTML = "Prix : " + product.price;
            document.getElementById('product-price').appendChild(priceItem);

            subContainer.appendChild(removeItem);
            subContainer.appendChild(nameItem);
            subContainer.appendChild(priceItem);
            container.appendChild(subContainer);
            document.getElementById('productBasket').appendChild(container);
        })
    }
}*/
/*
function lignePanier(code, qte, prix) {
    let product = JSON.parse(product);
    this.codeArticle = localStorage.getItem('productsInCart', product.name);
    this.qteArticle = qte;
    this.prixArticle = prix;
    this.ajouterQte = function (qte) {

        this.qteArticle += qte;
    }
    this.getPrixLigne = function () {

        let resultat = this.prixArticle * this.qteArticle;
        return resultat;
    }
    this.getCode = function () {

        return this.codeArticle;
    }
}

function panier() {
    this.liste = [];
    this.ajouterArticle = function (code, qte, prix) {

        let index = this.getArticle(code);
        if (index === -1) this.liste.push(new lignePanier(code, qte, prix));
        else this.liste[index].ajouterQte(qte);
    }
    this.getPrixPanier = function () {
        let total = 0;
        for (let i = 0; i < this.liste.length; i++)
            total += this.liste[i].getPrixLigne();
        return total;
    }
    this.getArticle = function (code) {
        for (let i = 0; i < this.liste.length; i++)
            if (code === this.liste[i].getCode()) return i;
            return -1;
    }
    this.supprimerArticle = function (code) {
        let index = this.getArticle(code);
        if (index > -1) this.liste.splice(index, 1);
    }
}

function ajouter()
{
    let code = parseInt(document.getElementById("id").value);
    let qte = parseInt(document.getElementById("qte").value);
    let prix = parseInt(document.getElementById("prix").value);
    let monPanier = new panier();
    monPanier.ajouterArticle(code, qte, prix);
    let tableau = document.getElementById("tableau");
    let longueurTab = parseInt(document.getElementById("nbreLignes").innerHTML);
    if (longueurTab > 0)
    {
        for(let i = longueurTab ; i > 0  ; i--)
        {
            monPanier.ajouterArticle(parseInt(tableau.rows[i].cells[0].innerHTML), parseInt(tableau.rows[i].cells[1].innerHTML), parseInt(tableau.rows[i].cells[2].innerHTML));
            tableau.deleteRow(i);
        }
    }
    let longueur = monPanier.liste.length;
    for(let i = 0 ; i < longueur ; i++)
    {
        let ligne = monPanier.liste[i];
        let ligneTableau = tableau.insertRow(-1);
        let colonne1 = ligneTableau.insertCell(0);
        colonne1.innerHTML += ligne.getCode();
        let colonne2 = ligneTableau.insertCell(1);
        colonne2.innerHTML += ligne.qteArticle;
        let colonne3 = ligneTableau.insertCell(2);
        colonne3.innerHTML += ligne.prixArticle;
        let colonne4 = ligneTableau.insertCell(3);
        colonne4.innerHTML += ligne.getPrixLigne();
        let colonne5 = ligneTableau.insertCell(4);
        colonne5.innerHTML += "<button class=\"btn btn-primary\" type=\"submit\" onclick=\"supprimer(this.parentNode.parentNode.cells[0].innerHTML)\"><span class=\"glyphicon glyphicon-remove\"></span> Retirer</button>";
    }
    document.getElementById("prixTotal").innerHTML = monPanier.getPrixPanier();
    document.getElementById("nbreLignes").innerHTML = longueur;
}

function supprimer(code)
{
    let monPanier = new panier();
    let tableau = document.getElementById("tableau");
    let longueurTab = parseInt(document.getElementById("nbreLignes").innerHTML);
    if (longueurTab > 0)
    {
        for(let i = longueurTab ; i > 0  ; i--)
        {
            monPanier.ajouterArticle(parseInt(tableau.rows[i].cells[0].innerHTML), parseInt(tableau.rows[i].cells[1].innerHTML), parseInt(tableau.rows[i].cells[2].innerHTML));
            tableau.deleteRow(i);
        }
    }
    monPanier.supprimerArticle(code);
    let longueur = monPanier.liste.length;
    for(let i = 0 ; i < longueur ; i++)
    {
        let ligne = monPanier.liste[i];
        let ligneTableau = tableau.insertRow(-1);
        let colonne1 = ligneTableau.insertCell(0);
        colonne1.innerHTML += ligne.getCode();
        let colonne2 = ligneTableau.insertCell(1);
        colonne2.innerHTML += ligne.qteArticle;
        let colonne3 = ligneTableau.insertCell(2);
        colonne3.innerHTML += ligne.prixArticle;
        let colonne4 = ligneTableau.insertCell(3);
        colonne4.innerHTML += ligne.getPrixLigne();
        let colonne5 = ligneTableau.insertCell(4);
        colonne5.innerHTML += "<button class=\"btn btn-primary\" type=\"submit\" onclick=\"supprimer(this.parentNode.parentNode.cells[0].innerHTML)\"><span class=\"glyphicon glyphicon-remove\"></span> Retirer</button>";
    }
    document.getElementById("prixTotal").innerHTML = monPanier.getPrixPanier();
    document.getElementById("nbreLignes").innerHTML = longueur;
}*/

onLoadCartNumbers();
