let imgLarge = document.querySelector('.grande');
console.log(imgLarge);

let first = document.querySelector('.first');
console.log(first);

let sec = document.querySelector('.second');
console.log(sec);

let third = document.querySelector('.third');
console.log(third);


function changeToFirst(){
    imgLarge.style.backgroundImage = "url(img/img1.jpg)";
}

function changeToSecond(){
    imgLarge.style.backgroundImage = "url(img/img2.jpg)";
}

function changeToThird(){
    imgLarge.style.backgroundImage = "url(img/img3.jpg)";
}

first.addEventListener('click', changeToFirst);
sec.addEventListener('click', changeToSecond);
third.addEventListener('click', changeToThird);


// Pour changer l'image s'il s'agit d'une image :
// imageLarge.src = (img/img1.jpg);

// Pour changer l'url de l'image s'il s'aagit d'un background image :
// imageLarge.style.backgroundImage =url(../img/img1.jpg);

let btn = document.querySelector('.btn');
// console.log(btn);
let ajout = document.querySelector('.ajout');
// console.log(ajout);
let i=0;

function growNumber(){
    i++
    if(i == 1) {
        ajout.innerHTML = `<br>Vous avez ${i} produit dans votre panier`;
        ajout.style.fontSize="13px";
    } else{
        ajout.innerHTML = `<br>Vous avez ${i} produits dans votre panier`;
        ajout.style.fontSize="13px";
    }
}

btn.addEventListener('click', growNumber);


