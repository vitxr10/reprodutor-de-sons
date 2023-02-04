function tocaSons(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaTeclas.length; i++) {
    const tecla = listaTeclas[i];
    const teclado = tecla.classList[1];
    const idAudio = `#som_${teclado}`;

    tecla.onclick = function () {
        tocaSons(idAudio);
    }

    tecla.onkeydown = function(){
        tecla.classList.add('ativa');
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

}

