function ajaxGet(url, callback) {
    const play = new Promise((resolve, reject) => {
        const playing = true;
        let req = new XMLHttpRequest();
        if (playing === true) {
            resolve(req.open("GET", url))
            req.addEventListener("load", function () {
                if (req.status >= 200 && req.status < 400) {
                    callback(req.responseText);
                } else {
                    console.error(req.status + " " + req.statusText + " " + url);
                }
            });
            req.addEventListener("error", function () {
                console.error("Erreur réseau avec l'url" + url);
            });
            req.send(null);
        } else {
            reject()
        }
    })
    play.then(() => {
        console.log("C'est bon!")
    }).catch(() => {
        console.log("Oups j'ai fais une erreur...")
    })
}




