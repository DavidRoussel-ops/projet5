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

function displayMeubles(meubles) {
    console.log("affichage de la liste des meubles en chène.")
    meubles = JSON.parse(meubles)
    // Création de la div "list-of-furniture"
    let ListOfFurniture = document.createElement('div')
    ListOfFurniture.setAttribute('class', 'List-of-furniture row');
    for (let meuble of meubles){
        //Création de la grande div "meuble"
        let meubleDiv = document.createElement('div');
        meubleDiv.setAttribute('class', 'col-2 meuble');
        ListOfFurniture.appendChild(meubleDiv);
        //Dans la  div meuble, on ajout les 3 éléments (div, div, img)

        //Première div pour le nom
        let meubleNameDiv = document.createElement('div');
        meubleNameDiv.setAttribute('class', 'name');
        meubleNameDiv.textContent = meuble.name;
        meubleDiv.appendChild(meubleNameDiv);

        //Deuxième div pour le prix
        let meublePriceDiv = document.createElement('div');
        meublePriceDiv.setAttribute('class', 'price');
        meublePriceDiv.textContent = meuble.price;
        meubleDiv.appendChild(meublePriceDiv);

        //Troisième élément de type img pour l'image
        let meublePicture = document.createElement('img');
        meublePicture.setAttribute('src', meuble.imageUrl);
        meubleDiv.appendChild(meublePicture);
    }
    document.getElementById('meubles').appendChild(ListOfFurniture);
}