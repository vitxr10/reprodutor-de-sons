function tocaSons (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaTeclas = document.querySelectorAll('.tecla');
let contador = 0;

while (contador < listaTeclas.length){

    const tecla = listaTeclas[contador];
    const teclado = tecla.classList[1];
    const idAudio = `#som_${teclado}`;

    tecla.onclick = function (){
        tocaSons(idAudio);
    }

    contador++;
}