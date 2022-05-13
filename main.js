function tocaSom(idElemntoAudio){
    document.querySelector(idElemntoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
/*
let contador = 0;

while (contador < listaDeTeclas.length){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`
    
    //console.log(idAudio);

    listaDeTeclas[contador].onclick = function(){
        tocaSom(idAudio);
    }
    contador ++;
}*/

for (let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`
    
    //console.log(idAudio);

    listaDeTeclas[contador].onclick = function(){
        tocaSom(idAudio);
    }
}
