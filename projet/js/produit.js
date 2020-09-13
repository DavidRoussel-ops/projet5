//document.addEventListener("DOMContentLoaded",
    //function (event) {

            /*const queryString = window.location.search;
            const urlParams = new
            URLSearchParams(queryString);
            let objectId = urlParams.get("teddies_id");
            let type = urlParams.get("typeOfObject");
            console.log("Je recherche l'id" + objectId + "de type" + type);
            //ajaxGet("http://localhost:3000/api/teddies" + teddyId)
            //let teddyId = JSON.parse(teddies)

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

        class ted {
            constructor(id, name, colors, price, description, img) {
                this.id = id;
                this.name = name;
                this.colors = [];
                this.price = price;
                this.description = description;
                this.img = img;
            }
        }

        let norbert = new ted("5be9c8541c9d440000665243", "Norbert", ["Tan","Chocolate","Black","White"], 2900, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "http://localhost:3000/images/teddy_1.jpg");
        let arnold = new ted("5beaa8bf1c9d440000a57d94", "Arnold", ["Pale brown","Dark brown","White"], 3900, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "http://localhost:3000/images/teddy_2.jpg");

        document.getElementById('name').innerHTML = norbert.name;
        document.getElementById('picture').innerHTML = norbert.img;
        document.getElementById('description').innerHTML = norbert.description;
        document.getElementById('price').innerHTML = norbert.price;
        document.getElementById('colors').innerHTML = norbert.colors;
        //document.querySelector(norbert).innerText = 'Nom: ${norbert.name} + Prix: ${norbert.price} + Description: ${norbert.description} + Image produit: ${norbert.img};
        //console.log(norbert);
        //document.getElementById("name").innerHTML = ted.name;
        //document.getElementById("picture").innerHTML = ted.img;
        //document.getElementById("price").innerHTML = ted.price;
        //document.getElementById("description").innerHTML = ted.description;
            }
    );*/



document.addEventListener("DOMContentLoaded", function (event) {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let objectId = urlParams.get('id');
    let type = urlParams.get('type');
    console.log("je cherche" + objectId + 'de type' + type);
    ajaxGet("http://localhost:3000/api/" + type + "/" + objectId, displayObject);

})



//Création d'une variable récupérant l'élément possédant la classe "add-cart"
/*let carts = document.querySelectorAll('.add-cart');

//boucle récupérant le nombre de click
for (let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(objectId[i]);
        //totalCost(products[i]);
    })
}

// fonction donnant une clés et une valeur au local storage
function cartNumbers(object) {
    console.log('le produit selectionner est', product);
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
}*/

/*window.addEventListener('DOMContentLoaded', function(){
    let optionSelect = document.getElementById('container');
    let colors = [object.color];
    let combo = document.createElement('select');
    while(colors.length)
    {
        let couleur = colors.pop();
        let opt = new Option(couleur, couleur);
        combo.options[combo.options.length] = opt;
    }
    optionSelect.appendChild(combo);
});*/
