//mover la página al principio cuando se recarga
window.scroll({top:0, behavior: 'auto'});

//pantalla de carga
const pantalla = document.getElementById("pantalla");
document.body.style.overflow = "hidden";

setTimeout(() => {
    document.body.style.overflow = "auto";
    pantalla.classList.add('cargado');
    cb();
    
}, 4500);

function cb (){
    setTimeout(() => {
        document.body.removeChild(pantalla);
    },1000);
}

//aparición de elementos con el scroll
window.addEventListener('scroll', function(){
    let animacion1 = document.getElementsByClassName('animado')[0];
    let animacion2 = document.getElementsByClassName('animado')[1];
    let animacion3 = document.getElementsByClassName('animado')[2];

    let posicionA1 = animacion1.getBoundingClientRect().top;
    let posicionA2 = animacion2.getBoundingClientRect().top;
    let posicionA3 = animacion3.getBoundingClientRect().top;

    let pantalla = window.innerHeight-70;

    if(posicionA1 < pantalla){
        animacion1.classList.remove('invisible');
        animacion1.classList.add('visible');
    }
    if(posicionA2 < pantalla){
        animacion2.classList.remove('invisible');
        animacion2.classList.add('visible');
    }
    if(posicionA3 < pantalla){
        animacion3.classList.remove('invisible');
        animacion3.classList.add('visible');
    }
})


//mapa
let map = L.map('map').setView([37.66923060483675, -4.724688826786647], 15);

let marker = L.marker([37.66630276383413, -4.724409889184718]).addTo(map);
marker.bindPopup("<b>Instituto</b><br>IES Francisco De Los Ríos.").openPopup();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);