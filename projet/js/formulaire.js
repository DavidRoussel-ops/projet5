//Fonction qui fait le post.
document.getElementById('validation').addEventListener("submit", function (e) {
    e.preventDefault();

    //Variable d'erreur.
    let erreur;

    //Variable récupérant les inputs du fichier.
    let inputs = document.getElementsByTagName('input');

    //Boucle qui vérifie si les inputs sont bien remplies.
    for (var i = 0; i < inputs.length; i++){
        if (!inputs[i].value){
            erreur = "Veuillez renseigner tous les champs."
        }
    }

    if (erreur){
        document.getElementById('erreur').innerHTML = erreur;
        return false
    }

    let xhr = new XMLHttpRequest();

    let url = "http://localhost:3000/api/teddies/order";

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

    //Fonction qui vérifie la requette XMLHTTP.
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            let data = JSON.parse(this.response);
            let orderId = data.orderId;
            localStorage.setItem("orderId", orderId)
        } else if (this.readyState === 4) {
            console.log(this.readyState);
        }
    };

    //Promesse et post du panier.
    const promPost = new Promise((resolve, reject) => {
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data2));
        const starting = true;
        if (starting === true) {
            resolve()
        } else {
            reject()
        }
    })
    promPost.then(() => {
        window.location.href = "formulaire.html";
    }).catch(() => {
        alert("Une erreur est arriver")
    })

    return false;
});