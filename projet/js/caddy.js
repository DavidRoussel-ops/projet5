setAllItems()
//Fonction affichant les articles et le total dans le panier avant confirmation.
function setAllItems() {
    document.querySelector('.total span').textContent = 0;

    //Variable qui regard l'élément 'productsInCart' du localstorage.
    let listOfItems = localStorage.getItem("productsInCart");
    listOfItems = JSON.parse(listOfItems);

    //Variable du total.
    let total = 0;

    //Variable qui regard l'élément html contenant l'id 'productBasket'.
    let mainContainer = document.getElementById("productBasket");

    //Boucle sur les objets de listOfItems.
    for (const [key, value] of Object.entries(listOfItems)) {

        //Variable qui contient id des valeurs stocker.
        let currentId = value._id;

        //Variable créant une div ayant pour class 'new-caddy'.
        let newCaddy = document.createElement('div');
        newCaddy.setAttribute('class', 'new-caddy');
        mainContainer.appendChild(newCaddy)

        //Variable créant une div ayant pour class 'remove-item' et contenant un icone de poubelle.
        let removeCaddy = document.createElement('div');
        removeCaddy.setAttribute('class', 'remove-item');
        removeCaddy.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';

        //Fonction qui permet de retirer un article du panier.
        removeCaddy.addEventListener('click', function () {
            let Cart = JSON.parse(localStorage.getItem("productsInCart"))

            //Boucle qui permet de retirer un article grace à son id et retirer le prix du total.
            for (const [key, value] of Object.entries(Cart)) {

                //Instruction si la clé et égal à l'id.
                if (key === currentId) {
                    delete Cart[key]
                    localStorage.setItem("productsInCart", JSON.stringify(Cart))
                    let total = localStorage.getItem("totalCost");
                    let numbClick = localStorage.getItem("cartNumbers");
                    console.log(value);
                    numbClick = numbClick - value.inCart;
                    document.querySelector('.cart span').textContent = numbClick;
                    localStorage.setItem('cartNumbers', numbClick);
                    total = total - value.price * value.inCart;
                    localStorage.setItem('totalCost', total);
                    mainContainer.innerHTML = "";
                    setAllItems()
                }
            }
        });
        newCaddy.appendChild(removeCaddy);

        //Variable contenant le nom de l'article.
        let newCaddyName = document.createElement('div');
        newCaddyName.setAttribute('class', 'caddy-name');
        newCaddyName.textContent = value.name;
        newCaddy.appendChild(newCaddyName);

        //Variable contenant le prix de l'article.
        let newCaddyPrice = document.createElement('div');
        newCaddyPrice.setAttribute('class', 'caddy-price');
        newCaddyPrice.textContent = value.price / 100 + ",00 €";
        newCaddy.appendChild(newCaddyPrice);

        //Variable contenant la quantité d'article selectionné.
        let newCaddyInCart = document.createElement('div');
        newCaddyInCart.setAttribute('class', 'caddy-incart');
        newCaddyInCart.textContent = value.inCart;
        newCaddy.appendChild(newCaddyInCart);

        //Variable contenant l'image de l'article.
        let newCaddyImg = document.createElement('img');
        newCaddyImg.setAttribute('src', value.imageUrl);
        newCaddy.appendChild(newCaddyImg);

        //Variable contenant le prix de l'article en calculant le prix par la quantité.
        let subTotal = document.createElement('div');
        subTotal.setAttribute('class', 'sub-total');
        subTotal.innerHTML = parseInt(value.price / 100) * parseInt(value.inCart) + ',00 €';
        newCaddy.appendChild(subTotal);

        document.querySelector('.total span').textContent = total += value.price / 100 * value.inCart;
    }
}



