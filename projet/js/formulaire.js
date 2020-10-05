 document.getElementById('validation').addEventListener("submit", function (e) {
        e.preventDefault();

        let xhr = new XMLHttpRequest();

        let url = "http://localhost:3000/api/teddies/order";

        /*let urlCam = "http://localhost:3000/api/cameras/order";

        let urlFurn = "http://localhost:3000/api/furniture/order";*/

     /*let listOfItems = localStorage.getItem("productsInCart");
     listOfItems = JSON.parse(listOfItems);

     for (const [key, value] of Object.entries(listOfItems)) {
         products.push(value._id);
     }*/

         let products = [];

         let data2 = {
             "contact": {
                 "firstName": document.getElementById('firstName').value,
                 "lastName": document.getElementById('lastName').value,
                 "address": document.getElementById('address').value,
                 "city": document.getElementById('city').value,
                 "email": document.getElementById('email').value
             },
             "products": products
         }


        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log(this.response);
            } else if (this.readyState === 4) {
                console.log(this.readyState);
            }
        };

        xhr.open('POST', url, true);
        /*xhr.open('POST', urlCam, true);
        xhr.open('POST', urlFurn, true);*/
        //xhr.responseType = "json";
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data2));
        /*xhr.send(JSON.stringify(data3));
        xhr.send(JSON.stringify(data4));*/

        return false;

    });

/*function thankYou() {

    localStorage.getItem('totalCost');
    let thankDiv = document.createElement('div');
    thankDiv.setAttribute('class', 'thank-div');
    document.getElementById('thanks').appendChild(thankDiv);

    let priceThank = document.createElement('p');
    priceThank.setAttribute('class', 'first-thank');
    priceThank.textContent = 'Le total de votre commande est de ' + totalCost();
    thankDiv.appendChild(priceThank);
}

thankYou();*/
/*document.getElementById('validation').addEventListener('submit', function () {

    let xhr2 = new XMLHttpRequest();

    let url = "http://localhost:3000/api/teddies/order";

    let urlCam = "http://localhost:3000/api/cameras/order";

    let urlFurn = "http://localhost:3000/api/furniture/order";

    let product = [];

    let listOfItems = localStorage.getItem('productsInCart');
    listOfItems = JSON.parse(listOfItems);

    for (const [key, value] of Object.entries(listOfItems)){
        product.push(value._id);
    }

    let data3 = {
        "contact": {
            "firstName": document.getElementById('firstName').value,
            "lastName": document.getElementById('lastName').value,
            "address": document.getElementById('address').value,
            "city": document.getElementById('city').value,
            "email": document.getElementById('email').value
        },
        "products": product
    }

    xhr2.open('POST', url, true);
    xhr2.open('POST', urlCam, true);
    xhr2.open('POST', urlFurn, true);
    xhr2.setRequestHeader('Content-Type', 'application/json');
    xhr2.send(JSON.stringify(data3));
    return false;
})*/

    /*let productsCamera = [];

    let productsMeuble = [];*/



    /*for (const [key, value] of Object.entries(listOfItems)) {
        if (value.type === "teddy") {
            products.push(value._id);
        } else if (value.type === "camera") {
            products.push(value._id);
        } else if (value.type === "meuble") {
            products.push(value._id);
        }
    }*/

    /*for (const [key, value] of Object.entries(listOfItems)) {
        if (url === true) {
            products.push(value._id);
        } else if (urlCam === true){
            products.push(value._id);
        } else if (urlFurn === true){
            products.push(value._id);
        }
    }*/


    /*let data3 = {
        "contact": {
            "firstName": document.getElementById('firstName').value,
            "lastName": document.getElementById('lastName').value,
            "address": document.getElementById('address').value,
            "city": document.getElementById('city').value,
            "email": document.getElementById('email').value
        },
        "productss": productsCamera
    }

    let data4 = {
        "contact": {
            "firstName": document.getElementById('firstName').value,
            "lastName": document.getElementById('lastName').value,
            "address": document.getElementById('address').value,
            "city": document.getElementById('city').value,
            "email": document.getElementById('email').value
        },
        "productss": productsMeuble
    }*/


/*document.getElementById('validation').addEventListener("submit", function (e) {

    let erreur;

    let inputs = document.getElementsByTagName('inputs');
    for (let i = 0; i < inputs.length; i++) {
        console.log(inputs[i]);
        if (!inputs[i].value) {
            erreur = 'Veuillez renseigner tous les champs';
        }
    }

    if (erreur) {
        e.preventDefault();
        document.getElementById('erreur').textContent = erreur;
        return false;
    } else {
        alert('formulaire envoyé !');
    }
})
    let name = document.getElementById('name');
    let subName = document.getElementById('sub-name');
    let address = document.getElementById('address');
    let city = document.getElementById('city');
    let mail = document.getElementById('email');

    if (!name.value) {
        erreur = 'Veuillez renseigner un prénom';
    }
    if (!subName.value) {
        erreur = 'Veuillez renseigner un nom';
    }
    if (!address.value) {
        erreur = 'Veuillez renseigner une adresse';
    }
    if (!city.value) {
        erreur = 'Veuillez renseigner une ville';
    }
    if (!mail.value) {
        erreur = 'Veuillez renseigner une adresse mail';
    }

    alert('formulaire envoyé');*/

//document.forms['validation'].addEventListener("submit", function (e) {
/*window.addEventListener("load", function () {
    function sendData() {
        let xhr = new XMLHttpRequest();
        let fd = new FormData(form);

        let contact = {
            name: data['name'].value,
            subName: data['sub-name'].value,
            address: data['address'].value,
            city: data['city'].value,
            mail: data['email'].value
        }

        xhr.addEventListener('load', function (event) {
            alert(event.target.responseText);
        });

        xhr.addEventListener('error', function (event) {
            alert('Oups!');
        });

        xhr.open('POST', 'http://localhost:3000/api');

        xhr.send(fd);
    }

    let form = document.getElementById("validation");

    form.addEventListener("submit", function (event) {
        event.preventDefault()
    });

    sendData();
});*/





    /*xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200){
            console.log(this.response);
        } else if (this.readyState === 4){
            //e.preventDefault();
            alert("Une erreur est survenue...");
        }
    };

    xhr.open('POST', 'http://localhost:3000/api/', true);
    xhr.responseType = "json";
    //xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    xhr.send(contact);
    console.log(xhr);

    return false;

});*/

/*let demo = document.getElementById("demo");
let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    console.log(this);
    if (this.readyState === 4 && this.status === 200){
        demo.innerHTML = this.response;
    }
};

xhr.open('GET', "projet/panier.html/caddy.js", true);
xhr.send();*/



/*document.forms['validation'].addEventListener("submit", function (e) {

    let erreur;

    let inputs = this;

    // Traitement cas par cas (input unique)
    if (inputs['email'].value !== "emaildebase@gmail.com"){
        console.log(inputs['email'].value);
        erreur = "Adresse email incorrecte";
    }

    // Traitement générique
    for (let i = 0; i < inputs.length; i++) {
        console.log(inputs[i]);
        if (!inputs[i].value) {
            erreur = 'Veuillez renseigner tous les champs';
        }
    }

    if (erreur) {
        e.preventDefault();
        document.getElementById('erreur').textContent = erreur;
        return false;
    } else {
        alert('formulaire envoyé !');
    }
})

document.forms['validation'].addEventListener("submit", function (e) {



    let xhr = new XMLHttpRequest();
    let fd = new FormData(data);

    let contact = {
        name: data['name'].value,
        subName: data['sub-name'].value,
        address: data['address'].value,
        city: data['city'].value,
        mail: data['email'].value
    }

    xhr.addEventListener('load', function (event) {
        alert(event.target);
    });

    xhr.addEventListener('error', function (event) {
        alert('Oups!');
    });



    xhr.responseType = "json";

    xhr.send(contact);})*/