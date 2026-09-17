//Dictadura para todas las pantallas
document.querySelectorAll('.window').forEach(function (pantalla) {
    if (!pantalla.classList.contains('main')) {
        pantalla.style.display = 'none';
    }
});

//Navegación entre pantallas
const botones = document.querySelectorAll('button[data-ir]');

botones.forEach(function (boton) {
    boton.addEventListener('click', function () {
        const idDestino = boton.dataset.ir;
        cambiarPantalla(idDestino);
    });
});

function cambiarPantalla(idDestino) {
    const actual = document.querySelector('.window.main');
    const destino = document.getElementById(idDestino);

    actual.classList.remove('main');

    actual.addEventListener('transitionend', function alTerminar() {
        actual.style.display = 'none';
        actual.removeEventListener('transitionend', alTerminar);
    });

    destino.style.display = 'block';

    requestAnimationFrame(function () {
        destino.classList.add('main');
    });

    //Resetear la pantalla 
    if (idDestino === 'pantalla-5') { 
        document.querySelectorAll('.columna-fotos').forEach(function (columna) {
            columna.scrollTop = 0;
        });
    }

    if (idDestino === 'pantalla-6') {
        indiceActual = 0;
        imgCarru.src = imgs[0];
    }
}

//Carrusel de imágenes de la pantalla 6
const imgs = ["images/carru0.png", "images/carru1.png", "images/carru2.png", "images/carru3.png", 
    "images/carru4.png", "images/carru5.png", "images/carru6.png", "images/carru7.png", "images/carru8.png", 
    "images/carru9.png", "images/carru10.png", "images/carru11.png"];
let indiceActual = 0;
const imgCarru = document.getElementById('img-carrusel');

document.querySelector('.botonD').addEventListener('click', function (){
    indiceActual = (indiceActual + 1) % imgs.length;
    imgCarru.src = imgs[indiceActual];
    reproducirPum(this)
});

document.querySelector('.botonA').addEventListener('click', function (){
    indiceActual = (indiceActual - 1 + imgs.length) % imgs.length;
    imgCarru.src = imgs[indiceActual];
    reproducirPum(this)
});

//Efecto de botones de la pantalla 6
function reproducirPum(boton) {
    boton.classList.remove('pum-activo');
    void boton.offsetWidth;
    boton.classList.add('pum-activo');
}