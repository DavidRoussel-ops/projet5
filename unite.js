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

    //Création de la div "list-of-teddies"

        //Création de la grande div de object
        let objectDiv = document.createElement('div');
        objectDiv.setAttribute('class', 'col-2 object');
        document.getElementById('container').appendChild(objectDiv);
        // Dans la div object, on ajoute les 3 sous-éléments (div, div, img)

        //Première div pour le nom
        let objectNameDiv = document.createElement('div');
        objectNameDiv.setAttribute('class', 'name');
        objectNameDiv.textContent = object.name;
        objectDiv.appendChild(objectNameDiv);

        //Deuxième div pour le prix
        let objectPriceDiv = document.createElement('div');
        objectPriceDiv.setAttribute('class', 'price');
        objectPriceDiv.textContent = object.price;
        objectDiv.appendChild(objectPriceDiv);

        //Troisième élement de type img pour l'image
        let objectPicture = document.createElement('img');
        objectPicture.setAttribute('src', object.imageUrl);
        objectDiv.appendChild(objectPicture);

        //Quatrième div pour la description
        let objectDesc = document.createElement('div');
        objectDesc.setAttribute('class', 'descrip');
        objectDesc.textContent = object.description;
        objectDiv.appendChild(objectDesc);

        //Cinquième élément pour le lien
        let objectLink = document.createElement('a');
        objectLink.setAttribute('href', 'produit.html');
        objectLink.textContent = "cliquer ici";
        objectDiv.appendChild(objectLink);

}
