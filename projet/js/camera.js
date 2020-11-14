//Fonction permettant de récupérrer la liste des appareils photos.
function displayCams(cameras) {
    cameras = JSON.parse(cameras)

    //Variable créant une div ayant pour class 'list-of-cam'.
    let ListOfCam = document.createElement('div');
    ListOfCam.setAttribute('class', 'list-of-cam row');

    //Boucle répétant l'action à mener pour chaque article.
    for (let cam of cameras) {

        //Variable créant une div contenant l'ensemble des éléments.
        let camDiv = document.createElement('div');
        camDiv.setAttribute('class', 'col-lg-2 col-md-6 col-xs-12 cam');
        ListOfCam.appendChild(camDiv);

        //Variable contenant le nom des articles.
        let camNameDiv = document.createElement('div');
        camNameDiv.setAttribute('class', 'name');
        camNameDiv.textContent = cam.name;
        camDiv.appendChild(camNameDiv);

        //Variable contenant le prix des articles.
        let camPriceDiv = document.createElement('div');
        camPriceDiv.setAttribute('class', 'price');
        camPriceDiv.textContent = cam.price / 100 + ",00 €";
        camDiv.appendChild(camPriceDiv);

        //Variable contenant l'image des articles.
        let camPicture = document.createElement('img');
        camPicture.setAttribute('src', cam.imageUrl);
        camDiv.appendChild(camPicture);

        //Variable contenant la description des articles.
        let camDesc = document.createElement('div');
        camDesc.setAttribute('class', 'descrip');
        camDesc.textContent = cam.description;
        camDiv.appendChild(camDesc);

        //Variable contenant le lien amenant à la page produit par son id.
        let camLink = document.createElement('a');
        camLink.setAttribute('href', 'produit.html?id=' + cam._id + '&type=cameras');
        camLink.textContent = "cliquer ici";
        camDiv.appendChild(camLink);
    }
    document.getElementById("cameras").appendChild(ListOfCam)
}