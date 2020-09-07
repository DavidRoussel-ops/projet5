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

function displayTeddies(teddies){
    console.log("Affichage de la liste de teddies.")
    teddies = JSON.parse(teddies)
    //Création de la div "list-of-teddies"
    let ListOfTeddies = document.createElement('div')
    ListOfTeddies.setAttribute('class', 'list-of-teddies row');
    for (let teddy of teddies){
        //Création de la grande div de teddy
        let teddyDiv = document.createElement('div');
        teddyDiv.setAttribute('class', 'col-2 teddy');
        ListOfTeddies.appendChild(teddyDiv);
        // Dans la div teddy, on ajoute les 3 sous-éléments (div, div, img)

        //Première div pour le nom
        let teddyNameDiv = document.createElement('div');
        teddyNameDiv.setAttribute('class', 'name');
        teddyNameDiv.textContent = teddy.name;
        teddyDiv.appendChild(teddyNameDiv);

        //Deuxième div pour le prix
        let teddyPriceDiv = document.createElement('div');
        teddyPriceDiv.setAttribute('class', 'price');
        teddyPriceDiv.textContent = teddy.price;
        teddyDiv.appendChild(teddyPriceDiv);

        //Troisième élement de type img pour l'image
        let teddyPicture = document.createElement('img');
        teddyPicture.setAttribute('src', teddy.imageUrl);
        teddyDiv.appendChild(teddyPicture);

        //Quatrième div pour la description
        let teddyDesc = document.createElement('div');
        teddyDesc.setAttribute('class', 'descrip');
        teddyDesc.textContent = teddy.description;
        teddyDiv.appendChild(teddyDesc);

        //Cinquième élément pour le lien
        let teddyLink = document.createElement('a');
        teddyLink.setAttribute('href', 'produit.html?id=' + teddy._id + '&type=teddies');
        teddyLink.textContent = "Voir article";
        teddyDiv.appendChild(teddyLink);
    }
    document.getElementById("teddies").appendChild(ListOfTeddies);
}