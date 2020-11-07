const start = new Promise((resolve, reject) => {
    ajaxGet("http://localhost:3000/api/teddies", displayTeddies)
    const starting = true;
    if (starting === true) {
        resolve()
        } else {
            reject()
        }
    })
    start.then(() => {
        console.log("C'est bon!")

    }).catch(() => {
        console.log("Oups j'ai fais une erreur...")
    })

    const newProm = new Promise((resolve, reject) => {
        ajaxGet("http://localhost:3000/api/cameras", displayCams)
        const starting = true;
        if (starting === true) {
            resolve()
        } else {
            reject()
        }
    })

    newProm.then(() => {
        console.log("C'est bon!")
    }).catch(() => {
        console.log("Oups j'ai fais une erreur...")
    })

    const newProm2 = new Promise((resolve, reject) => {
        ajaxGet("http://localhost:3000/api/furniture", displayMeubles)
        const starting = true;
        if (starting === true) {
            resolve()
        } else {
            reject()
        }
    })

    newProm2.then(() => {
        console.log("C'est bon!")
    }).catch(() => {
        console.log("Oups j'ai fais une erreur...")
    })




