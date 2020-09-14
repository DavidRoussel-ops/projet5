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

function displayMeubles(furniture) {
    console.log("affichage de la liste des meubles en chène.")
    furniture = JSON.parse(furniture)

    let ListOfFurniture = document.createElement('div')
    ListOfFurniture.setAttribute('class', 'List-of-furniture row');
    for (let meuble of furniture){

        let meubleDiv = document.createElement('div');
        meubleDiv.setAttribute('class', 'col-2 meuble');
        ListOfFurniture.appendChild(meubleDiv);

        let meubleNameDiv = document.createElement('div');
        meubleNameDiv.setAttribute('class', 'name');
        meubleNameDiv.textContent = meuble.name;
        meubleDiv.appendChild(meubleNameDiv);

        let meublePriceDiv = document.createElement('div');
        meublePriceDiv.setAttribute('class', 'price');
        meublePriceDiv.textContent = meuble.price/100 + ",00 €";
        meubleDiv.appendChild(meublePriceDiv);

        let meublePicture = document.createElement('img');
        meublePicture.setAttribute('src', meuble.imageUrl);
        meubleDiv.appendChild(meublePicture);

        let meubleDesc = document.createElement('div');
        meubleDesc.setAttribute('class', 'description');
        meubleDesc.textContent = meuble.description;
        meubleDiv.appendChild(meubleDesc);

        let meubleLink = document.createElement('a');
        meubleLink.setAttribute('href', 'produit.html?id=' + meuble._id + '&type=furniture');
        meubleLink.textContent = 'cliquer ici';
        meubleDiv.appendChild(meubleLink);
    }
    document.getElementById('meubles').appendChild(ListOfFurniture);
}