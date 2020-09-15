document.forms['validation'].addEventListener("submit", function (e) {
    e.preventDefault();

    let data = new FormData(this);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200){
            console.log(this.response);
        } else if (this.readyState === 4){
            alert("Une erreur est survenue...");
            console.log(this.readyState);
        }
    };

    xhr.open('POST', "http://localhost:3000/api/controllers/teddy/order", true);
    xhr.responseType = "json";
    //xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    xhr.send(data);

    return false;

});








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