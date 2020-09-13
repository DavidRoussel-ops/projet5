setAllItems()
function setAllItems(){
    let listOfItems = localStorage.getItem("productsInCart");
    listOfItems = JSON.parse(listOfItems);
    let total = 0;
    let mainContainer = document.getElementById("productBasket");

    for (const [key, value] of Object.entries(listOfItems)) {
        let currentId = value._id;
        let newCaddy = document.createElement('div');
        newCaddy.setAttribute('class', 'new-caddy');
        mainContainer.appendChild(newCaddy)

        let removeCaddy = document.createElement('div');
        removeCaddy.setAttribute('class', 'remove-item');
        removeCaddy.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';
        removeCaddy.addEventListener('click', function () {
            let Cart = JSON.parse(localStorage.getItem("productsInCart"))
            for (const [key, value] of Object.entries(Cart)) {
                console.log(key, currentId)
                if (key === currentId) {
                    delete Cart[key]
                    localStorage.setItem("productsInCart", JSON.stringify(Cart))
                    mainContainer.innerHTML = "";
                    setAllItems()
                }
            }
        });
        newCaddy.appendChild(removeCaddy);

        let newCaddyName = document.createElement('div');
        newCaddyName.setAttribute('class', 'caddy-name');
        newCaddyName.textContent = value.name;
        newCaddy.appendChild(newCaddyName);

        let newCaddyPrice = document.createElement('div');
        newCaddyPrice.setAttribute('class', 'caddy-price');
        newCaddyPrice.textContent = value.price / 100 + ",00 €";
        newCaddy.appendChild(newCaddyPrice);

        /*let newCaddyDesc = document.createElement('div');
        newCaddyDesc.setAttribute('class', 'caddy-desc');
        newCaddyDesc.textContent = 'Description : ' + value.description;
        newCaddy.appendChild(newCaddyDesc);*/

        let newCaddyInCart = document.createElement('div');
        newCaddyInCart.setAttribute('class', 'caddy-incart');
        newCaddyInCart.textContent = value.inCart;
        newCaddy.appendChild(newCaddyInCart);

        let newCaddyImg = document.createElement('img');
        newCaddyImg.setAttribute('src', value.imageUrl);
        newCaddy.appendChild(newCaddyImg);

        let subTotal = document.createElement('div');
        subTotal.setAttribute('class', 'sub-total');
        subTotal.innerHTML = parseInt(value.price / 100) * parseInt(value.inCart) + ',00 €';
        newCaddy.appendChild(subTotal);

        /*let totalCaddy = document.createElement('div');
        totalCaddy.innerHTML = total += parseInt(value.price) * parseInt(value.inCart);*/
        document.querySelector('.total span').textContent = total += value.price / 100 * value.inCart;
    }
}



