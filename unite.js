function ajaxGet(url, callback) {
    let req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400){
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'url" + url);
    });
    req.send(null);
}

function displayObject(object) {
    console.log("Affichage de l'objet.")
    object = JSON.parse(object)

    //Création de la div "list-of-teddies"

    //Création de la grande div de object
    let objectDiv = document.createElement('div');
    objectDiv.setAttribute('class', 'col-2 object');
    document.getElementById('container').appendChild(objectDiv);
    // Dans la div object, on ajoute les 3 sous-éléments (div, div, img)

    //Première div pour le nom
    let objectNameDiv = document.createElement('div');
    objectNameDiv.setAttribute('class', 'name');
    objectNameDiv.textContent = object.name;
    objectDiv.appendChild(objectNameDiv);

    //Deuxième élement de type img pour l'image
    let objectPicture = document.createElement('img');
    objectPicture.setAttribute('src', object.imageUrl);
    objectDiv.appendChild(objectPicture);

    //Troisième div pour la description
    let objectDesc = document.createElement('div');
    objectDesc.setAttribute('class', 'descrip');
    objectDesc.textContent = object.description;
    objectDiv.appendChild(objectDesc);

    //Quatrième div pour le prix
    let objectPriceDiv = document.createElement('div');
    objectPriceDiv.setAttribute('class', 'price');
    objectPriceDiv.textContent = object.price + '€';
    objectDiv.appendChild(objectPriceDiv);


    let objectColorDiv = document.createElement('div');
    let objectColorSelect = document.createElement('select');
    let objectColorOpt = document.createElement('option');
    let colorSelect = object.colors;
    for(let i= 0; i < colorSelect.length; i++)
    {
        colorSelect = document.createElement('option');
        colorSelect.innerHTML = object.colors;
    }

    /*let colorOpt = object.colors.pop();
    let opt = new Option(colorOpt, colorOpt);*/
    //objectColorSelect.options[objectColorSelect.options.length] = new Option(object.colors);
    objectColorOpt.appendChild(colorSelect);
    objectColorSelect.appendChild(objectColorOpt);
    objectColorDiv.appendChild(objectColorSelect);
    objectDiv.appendChild(objectColorDiv);
}
    /*window.addEventListener('DOMContentLoaded', function () {
        let form = document.getElementById('objectColorDiv');
        let colors = object.colors;
        let combo = document.createElement('select');
        while (colors.length){
            let couleur = colors.pop();
            let opt = new Option(couleur, couleur);
            combo.options[combo.options.length] = opt;
        }
        form.appendChild(combo);
    });

    objectDiv.appendChild(objectColorDiv);
}

    //Cinquième div pour les couleurs
    /*let objectColorDiv = document.createElement('div');
    //let objectColorInput = document.createElement('input');
    let objectColorSelect = document.createElement('select');
    let objectColorLabel = document.createElement('legend');
    //let objectColorOption = document.createElement('option');
    //objectColorOption.textContent = object.colors.length;
    objectColorLabel.textContent = 'Selection couleur';
    //objectColorLabel.appendChild(objectColorOption);
    objectColorSelect.appendChild(objectColorLabel);
    objectColorInput.appendChild(objectColorSelect);
    objectColorDiv.appendChild(objectColorInput);
    objectDiv.appendChild(objectColorDiv);

    let objectColorArray = [object.color];*/


    /*for (let [i] = 0; i < objectColorOption; i++){

}*/

    /*let objectColorInput = document.createElement('input');
    let objectColorLabel = document.createElement('label');
    let objectColorSelect = document.createElement('select');
    let objectColorOption = document.createElement('option');
    objectColorOption.innerHTML = object.colors;
    objectColorLabel.textContent = 'liste de couleurs'
    //objectColorOption = [object.colors];

    /*let select = document.getElementById('select');
    let option = object.colors;

    options.forEach(function (object, colors) {
        select[colors] = new option;
    });*/
    /*objectColorSelect.appendChild(objectColorOption);
    objectColorLabel.appendChild(objectColorSelect);
    objectColorInput.appendChild(objectColorLabel);
    objectColorDiv.appendChild(objectColorInput);

}*/


