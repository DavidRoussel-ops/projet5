thanksYou()
//Fonction affichant un message de remerciement avec le total de la commande et l'orderId de la commande.
function thanksYou() {

    //Variable contenant le total.
    let total = 0;

    //Variable qui récupère le numéros de commande.
    let commandeNumber = localStorage.getItem("orderId");

    //Variable qui regarde l'élément qui possède un id 'thanksId'.
    let newContainer = document.getElementById("thanksId");

    //Variable contenant un message est affiche le numéros de la commande.
    let thanksSpitch = document.createElement('div');
    thanksSpitch.setAttribute('class', 'spitch');
    thanksSpitch.textContent = "Votre numéros de commande est le " + commandeNumber + " .";
    newContainer.appendChild(thanksSpitch);

    //Variable qui récupère les éléments dans 'productInCart'.
    let listWish = localStorage.getItem("productsInCart");
    listWish = JSON.parse(listWish);

    //Variable qui regarde l'élément qui possède un id 'thanks'.
    let firstContainer = document.getElementById("thanks");

    //Boucle qui crée une div contenant le nom, la quantité et l'image des produits commandé.
    for (const [key, value] of Object.entries(listWish)) {

        //Variable créant une div ayant pour class 'nex-wish'
        let newWish = document.createElement('div');
        newWish.setAttribute('class', 'new-wish');
        firstContainer.appendChild(newWish);

        //Variable contenant le nom de l'article vendu.
        let newWishName = document.createElement('div');
        newWishName.setAttribute('class', 'wish-name');
        newWishName.textContent = value.name;
        newWish.appendChild(newWishName);

        //Variable contenant la quantité d'article vendu.
        let newWishInCart = document.createElement('div');
        newWishInCart.setAttribute('class', 'wish-incart');
        newWishInCart.textContent = value.inCart;
        newWish.appendChild(newWishInCart);

        //Variable contenant l'image de l'article vendu.
        let newWishImg = document.createElement('img');
        newWishImg.setAttribute('src', value.imageUrl);
        newWish.appendChild(newWishImg);

        document.querySelector('.total span').textContent = total += value.price / 100 * value.inCart;
    }
    //Variable contenant un bouton retour.
    let getBack = document.createElement('button');
    getBack.setAttribute('class', 'retour');
    getBack.textContent = "Retour";
    firstContainer.appendChild(getBack);

    //Fonction ramenant à l'index et vide le localstorage.
    getBack.addEventListener('click', function () {
        window.location.href = "index.html";
        localStorage.clear();
    })
}