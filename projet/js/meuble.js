//Fonction permettant de récupérrer la liste des meubles.
function displayMeubles(furniture) {
    furniture = JSON.parse(furniture)

    //Variable créant une div ayant pour class 'List-of-furniture'.
    let ListOfFurniture = document.createElement('div')
    ListOfFurniture.setAttribute('class', 'List-of-furniture row');

    //Boucle répétant l'action à mener pour chaque article.
    for (let meuble of furniture) {

        //Variable créant une div contenant l'ensemble des éléments.
        let meubleDiv = document.createElement('div');
        meubleDiv.setAttribute('class', 'col-lg-2 col-md-6 col-xs-12 meuble');
        ListOfFurniture.appendChild(meubleDiv);

        //Variable contenant le nom des articles.
        let meubleNameDiv = document.createElement('div');
        meubleNameDiv.setAttribute('class', 'name');
        meubleNameDiv.textContent = meuble.name;
        meubleDiv.appendChild(meubleNameDiv);

        //Variable contenant le prix des articles.
        let meublePriceDiv = document.createElement('div');
        meublePriceDiv.setAttribute('class', 'price');
        meublePriceDiv.textContent = meuble.price / 100 + ",00 €";
        meubleDiv.appendChild(meublePriceDiv);

        //Variable contenant l'image des articles.
        let meublePicture = document.createElement('img');
        meublePicture.setAttribute('src', meuble.imageUrl);
        meubleDiv.appendChild(meublePicture);

        //Variable contenant la description des articles.
        let meubleDesc = document.createElement('div');
        meubleDesc.setAttribute('class', 'description');
        meubleDesc.textContent = meuble.description;
        meubleDiv.appendChild(meubleDesc);

        //Variable contenant le lien amenant à la page produit par son id.
        let meubleLink = document.createElement('a');
        meubleLink.setAttribute('href', 'produit.html?id=' + meuble._id + '&type=furniture');
        meubleLink.textContent = 'cliquer ici';
        meubleDiv.appendChild(meubleLink);
    }
    document.getElementById('meubles').appendChild(ListOfFurniture);
}