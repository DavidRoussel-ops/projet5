let ted = document.getElementById("ted");
let teddies = document.getElementById("teddies");
let cam = document.getElementById("cam");
let cameras = document.getElementById("cameras");
let meuble = document.getElementById("meuble");
let meubles = document.getElementById("meubles");

ted.addEventListener("click", () => {
    if (getComputedStyle(teddies).display !== "none") {
        teddies.style.display = "none";
    } else {
        teddies.style.display = "block";
    }
});

cam.addEventListener("click", () => {
    if (getComputedStyle(cameras).display !== "none") {
        cameras.style.display = "none";
    } else {
        cameras.style.display = "block";
    }
});

meuble.addEventListener("click", () => {
    if (getComputedStyle(meubles).display !== "none") {
        meubles.style.display = "none";
    } else {
        meubles.style.display = "block";
    }
});