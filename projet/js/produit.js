document.addEventListener("DOMContentLoaded", function (event) {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let objectId = urlParams.get('id');
    let type = urlParams.get('type');
    console.log("je cherche" + objectId + 'de type' + type);
    ajaxGet("http://localhost:3000/api/" + type + "/" + objectId, displayObject);

})