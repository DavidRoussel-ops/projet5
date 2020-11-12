//Fonction qui permet de récupérer l'Id et le type de l'article selectionné.
document.addEventListener("DOMContentLoaded", function (event) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let objectId = urlParams.get('id');
    let type = urlParams.get('type');
    console.log("je cherche" + objectId + 'de type' + type);
    ajaxGet("http://localhost:3000/api/" + type + "/" + objectId, displayObject);
})