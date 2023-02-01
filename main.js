function tocaSons(){
    const listaSons = document.querySelectorAll('#som');

    for (i=0;i<9;i++){
        listaSons[i].play();
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (i=0;i<9;i++){
    listaDeTeclas[i].onclick = tocaSons;
}
