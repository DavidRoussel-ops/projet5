document.addEventListener("DOMContentLoaded", function (event) {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let objectId = urlParams.get('id');
    let type = urlParams.get('type');
    console.log("je cherche" + objectId + 'de type' + type);
    const prom = new Promise((resolve, reject) => {
        ajaxGet("http://localhost:3000/api/" + type + "/" + objectId, displayObject);
        const starting = true;
        if (starting === true){
            resolve()
        }else {
            reject()
        }
    })
    prom.then(() => {
        console.log("C'est bon!")
    }).catch(() => {
        console.log("Oups j'ai fais une erreur")
    })
})