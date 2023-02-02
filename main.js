function tocaSons (){
    const listaSons = document.querySelectorAll('.som');
    let contador = 0;

    listaSons.forEach(listaSom => {
        listaSons[contador].play();

        contador++;
    });
}

const listaTeclas = document.querySelectorAll('.tecla');
let contador = 0;

while (contador < 9){
    listaTeclas[contador].onclick = tocaSons;

    contador++;
}