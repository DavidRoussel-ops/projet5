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

function displayCams(cameras) {
    console.log("Affichage de la liste de caméras.")
    cameras = JSON.parse(cameras)
    // Création de la div list-of-cam
    let ListOfCam = document.createElement('div');
    ListOfCam.setAttribute('class', 'list-of-cam row');
    for (let cam of cameras){
        //Création de la div cam
        let camDiv = document.createElement('div');
        camDiv.setAttribute('class', 'col-2 cam');
        ListOfCam.appendChild(camDiv);
        //Dans la div cam on rajoute les trois element (div, div, img)

        //Première div pour le nom
        let camNameDiv = document.createElement('div');
        camNameDiv.setAttribute('class', 'name');
        camNameDiv.textContent = cam.name;
        camDiv.appendChild(camNameDiv);

        //Deuxième div pour le prix
        let camPriceDiv = document.createElement('div');
        camPriceDiv.setAttribute('class', 'price');
        camPriceDiv.textContent = cam.price;
        camDiv.appendChild(camPriceDiv);

        //Troisième element de type img pour l'image
        let camPicture = document.createElement('img');
        camPicture.setAttribute('src', cam.imageUrl);
        camDiv.appendChild(camPicture);

        //Quatrième div pour la description
        let camDesc = document.createElement('div');
        camDesc.setAttribute('class', 'descrip');
        camDesc.textContent = cam.description;
        camDiv.appendChild(camDesc);
    }
    document.getElementById("cameras").appendChild(ListOfCam)
}