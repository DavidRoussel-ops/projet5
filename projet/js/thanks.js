thanksYou()

function thanksYou() {
    let commandeNumber = localStorage.getItem("orderId");
    let newContainer = document.getElementById("thanksId");
    let thanksSpitch = document.createElement('div');
    thanksSpitch.setAttribute('class', 'spitch');
    thanksSpitch.textContent = "Votre numéros de commande est le " + commandeNumber + " .";
    newContainer.appendChild(thanksSpitch);
    let listWish = localStorage.getItem("productsInCart");
    listWish = JSON.parse(listWish);
    let firstContainer = document.getElementById("thanks");
    for (const [key, value] of Object.entries(listWish)) {
        let newWish = document.createElement('div');
        newWish.setAttribute('class', 'new-wish');
        firstContainer.appendChild(newWish);

        let newWishName = document.createElement('div');
        newWishName.setAttribute('class', 'wish-name');
        newWishName.textContent = value.name;
        newWish.appendChild(newWishName);

        let newWishInCart = document.createElement('div');
        newWishInCart.setAttribute('class', 'wish-incart');
        newWishInCart.textContent = value.inCart;
        newWish.appendChild(newWishInCart);

        let newWishImg = document.createElement('img');
        newWishImg.setAttribute('src', value.imageUrl);
        newWish.appendChild(newWishImg);
    }
}