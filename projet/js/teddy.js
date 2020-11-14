//Fonction permettant de récupérrer la liste des Teddy.
function displayTeddies(teddies) {
    teddies = JSON.parse(teddies)

    //Variable créant une div ayant pour class 'list-of-teddies'.
    let ListOfTeddies = document.createElement('div')
    ListOfTeddies.setAttribute('class', 'list-of-teddies row');

    //Boucle répétant l'action à mener pour chaque article.
    for (let teddy of teddies) {

        //Variable créant une div contenant l'ensemble des éléments.
        let teddyDiv = document.createElement('div');
        teddyDiv.setAttribute('class', 'col-lg-2 col-md-6 col-xs-12 teddy');
        ListOfTeddies.appendChild(teddyDiv);

        //Variable contenant le nom des articles.
        let teddyNameDiv = document.createElement('div');
        teddyNameDiv.setAttribute('class', 'name');
        teddyNameDiv.textContent = teddy.name;
        teddyDiv.appendChild(teddyNameDiv);

        //Variable contenant le prix des articles.
        let teddyPriceDiv = document.createElement('div');
        teddyPriceDiv.setAttribute('class', 'price');
        teddyPriceDiv.textContent = teddy.price / 100 + ",00 €";
        teddyDiv.appendChild(teddyPriceDiv);

        //Variable contenant l'image des articles.
        let teddyPicture = document.createElement('img');
        teddyPicture.setAttribute('src', teddy.imageUrl);
        teddyDiv.appendChild(teddyPicture);

        //Variable contenant la description des articles.
        let teddyDesc = document.createElement('div');
        teddyDesc.setAttribute('class', 'descrip');
        teddyDesc.textContent = teddy.description;
        teddyDiv.appendChild(teddyDesc);

        //Variable contenant le lien amenant à la page produit par son id.
        let teddyLink = document.createElement('a');
        teddyLink.setAttribute('href', 'produit.html?id=' + teddy._id + '&type=teddies');
        teddyLink.textContent = "Voir article";
        teddyDiv.appendChild(teddyLink);
    }
    document.getElementById("teddies").appendChild(ListOfTeddies);
}