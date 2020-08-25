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

    //let select = document.getElementById('option');

    //option.appendChild(select);

    let objectSlt = document.createElement('select')
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let type = urlParams.get('type');
    if (type === 'teddies') {
        object.colors.forEach(function (color) {
            let objectOpt = document.createElement('option');
            objectOpt.textContent = color;
            objectSlt.appendChild(objectOpt);
        })
    }else if (type === 'cameras'){
        object.lenses.forEach(function (lentille) {
            let objectOpt =document.createElement('option');
            objectOpt.textContent = lentille;
            objectSlt.appendChild(objectOpt);
        })
    }else if (type === 'furniture'){
        object.varnish.forEach(function (vernis) {
            let objectOpt = document.createElement('option');
            objectOpt.textContent = vernis;
            objectSlt.appendChild(objectOpt);
        })
    }
    objectDiv.appendChild(objectSlt);

    let objectStorage = document.createElement('button');
    objectStorage.textContent = 'ajouter au panier';
    objectStorage.setAttribute('a', '#');
    objectDiv.appendChild(objectStorage);

    /*let objectElementDiv, objectSelect;
    objectElementDiv = document.createElement('div');
    objectSelect = document.createElement('select');
    objectSelect.setAttribute('id', 'option');*/
    /*const objectOpt = document.createElement('option');
    objectOpt.innerHTML = object.colors;
    const lensesOpt = document.createElement('option');
    lensesOpt.innerHTML = object.lenses;
    const varnishOpt = document.createElement('option');
    varnishOpt.innerHTML = object.varnish;*/
    /*for (let i= 0; i < colorOpt; i++)
    {
        //colorOpt.innerHTML = object.colors[i], object.lenses[i], object.varnish[i];
        colorOpt = new Option(object.colors, object.lenses, object.varnish);
        //lensesOpt.textContent = object.lenses[i];
        //varnishOpt.textContent = object.varnish[i];
    }*/

    /*let colorOpt = object.colors.pop();
    let opt = new Option(colorOpt, colorOpt);*/
    //objectColorSelect.options[objectColorSelect.options.length] = new Option(object.colors);
    //objectColorOpt.appendChild(colorSelect);*
    /*objectSelect.appendChild(varnishOpt);
    objectSelect.appendChild(lensesOpt);
    objectSelect.appendChild(objectOpt);*/
    /*objectElementDiv.appendChild(objectSelect);
    objectDiv.appendChild(objectElementDiv);*/
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
    objectDiv.appendChild(objectColorDiv);*/

    //let objectColorArray = [object.color];


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


