document.forms['validation'].addEventListener("submit", function (e) {

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

    /*document.getElementsById('validation').addEventListener("submit", function (e) {

    let erreur;

    let inputs = getElementsByTagName('inputs');
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
    e.preventDefault();
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

    alert('formulaire envoyé');
})*/