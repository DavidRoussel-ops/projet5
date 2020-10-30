const start = new Promise((resolve, reject) => {
    ajaxGet("http://localhost:3000/api/teddies", displayTeddies)
    ajaxGet( "http://localhost:3000/api/cameras", displayCams)
    ajaxGet("http://localhost:3000/api/furniture", displayMeubles)
    const starting = true;
    if (starting === true){
        resolve()
    }else {
        reject()
    }
})

start.then(() => {
    console.log("C'est bon!")
}).catch(() => {
    console.log("Oups j'ai fais une erreur...")
})
