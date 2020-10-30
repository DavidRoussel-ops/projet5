document.getElementById('validation').addEventListener("submit", function (e) {
        e.preventDefault();

        let xhr = new XMLHttpRequest();

        let url = "http://localhost:3000/api/teddies/order";

         let products = [];

         let data2 = {
             "contact": {
                 "firstName": document.getElementById('firstName').value,
                 "lastName": document.getElementById('lastName').value,
                 "address": document.getElementById('address').value,
                 "city": document.getElementById('city').value,
                 "email": document.getElementById('email').value
             },
             "products": products
         }


        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                console.log();
                let data = JSON.parse(this.response);
                let orderId = data.orderId;
                localStorage.setItem("orderId", orderId)
            } else if (this.readyState === 4) {
                console.log(this.readyState);
            }
        };

        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data2));

        return false;
});