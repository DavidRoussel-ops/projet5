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

    let ListOfCam = document.createElement('div');
    ListOfCam.setAttribute('class', 'list-of-cam row');
    for (let cam of cameras){

        let camDiv = document.createElement('div');
        camDiv.setAttribute('class', 'col-2 cam');
        ListOfCam.appendChild(camDiv);

        let camNameDiv = document.createElement('div');
        camNameDiv.setAttribute('class', 'name');
        camNameDiv.textContent = cam.name;
        camDiv.appendChild(camNameDiv);

        let camPriceDiv = document.createElement('div');
        camPriceDiv.setAttribute('class', 'price');
        camPriceDiv.textContent = cam.price/100 + ",00 €";
        camDiv.appendChild(camPriceDiv);

        let camPicture = document.createElement('img');
        camPicture.setAttribute('src', cam.imageUrl);
        camDiv.appendChild(camPicture);

        let camDesc = document.createElement('div');
        camDesc.setAttribute('class', 'descrip');
        camDesc.textContent = cam.description;
        camDiv.appendChild(camDesc);

        let camLink = document.createElement('a');
        camLink.setAttribute('href', 'produit.html?id=' + cam._id + '&type=cameras');
        camLink.textContent = "cliquer ici";
        camDiv.appendChild(camLink);
    }
    document.getElementById("cameras").appendChild(ListOfCam)
}