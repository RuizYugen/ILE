﻿$(document).ready(function () {
    IEL.Servicios.wsQuiz.getAllPreguntas(cargarPrimera);

});
var listaObtenida;
var numeroPregunta = 0;
var usuario = "Jose1";
function cargarPrimera(resultado) {
    //debugger;
    listaObtenida = JSON.parse(resultado);
    listaObtenida = mezclar(listaObtenida);
    var primera = listaObtenida[numeroPregunta];
    document.getElementById("textopregunta").innerHTML = primera.pregunta;
    document.getElementById("answerA").innerHTML = primera.RespuestaCorrecta;
    document.getElementById("answerB").innerHTML = primera.RespuestaIncorrecta1;
    document.getElementById("answerC").innerHTML = primera.RespuestaIncorrecta2;
    document.getElementById("answerD").innerHTML = primera.RespuestaIncorrecta3;

    document.getElementById("color1").style.backgroundColor = "#6666CC";
    document.getElementById("color2").style.backgroundColor = "#9999FF";
    document.getElementById("color3").style.backgroundColor = "#9999FF";
    document.getElementById("color4").style.backgroundColor = "#9999FF";
    document.getElementById("color5").style.backgroundColor = "#9999FF";
    document.getElementById("color6").style.backgroundColor = "#9999FF";
    document.getElementById("color7").style.backgroundColor = "#9999FF";
    document.getElementById("color8").style.backgroundColor = "#9999FF";
    document.getElementById("color9").style.backgroundColor = "#9999FF";
    document.getElementById("color10").style.backgroundColor = "#9999FF";
    numeroPregunta = numeroPregunta + 1;
    //alert(resultado);
}

function cambiar() {
    if (numeroPregunta>9) {
        numeroPregunta=0;
    }    
    var letras = [ 'A', 'B', 'C', 'D' ];
    letras = mezclar(letras);
    var pregunta = listaObtenida[numeroPregunta];
    document.getElementById("textopregunta").innerHTML = pregunta.pregunta;
    document.getElementById("answer"+letras[0]).innerHTML = pregunta.RespuestaCorrecta;
    document.getElementById("answer"+letras[1]).innerHTML = pregunta.RespuestaIncorrecta1;
    document.getElementById("answer" +letras[2]).innerHTML = pregunta.RespuestaIncorrecta2;
    document.getElementById("answer" +letras[3] ).innerHTML = pregunta.RespuestaIncorrecta3;

    document.getElementById("color" + (numeroPregunta + 1).toString()).style.backgroundColor = "#6666CC";
    numeroPregunta = numeroPregunta + 1;

    document.getElementById("answerA").disabled = false;
    document.getElementById("answerB").disabled = false;
    document.getElementById("answerC").disabled = false;
    document.getElementById("answerD").disabled = false;
}

function respuestaUsuario(boton) {
    var actual = listaObtenida[numeroPregunta-1];
    var id=actual.idPregunta;
    var correcto;    
    if (boton.innerHTML.toString().localeCompare(actual.RespuestaCorrecta)==0) {
        correcto="Correcto";
    }else{
        correcto="Incorrecto";
    }
    //alert(correcto);
    //alert(actual.RespuestaCorrecta);
    IEL.Servicios.wsQuiz.insertPregunta(usuario,id,correcto,deshabilitar);
}

function deshabilitar() {
    document.getElementById("answerA").disabled = true;
    document.getElementById("answerB").disabled = true;
    document.getElementById("answerC").disabled = true;
    document.getElementById("answerD").disabled = true;
}

function mezclar(arreglo) {
    var currentIndex = arreglo.length, temporaryValue, randomIndex;

    while (0!==currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = arreglo[currentIndex];
        arreglo[currentIndex] = arreglo[randomIndex];
        arreglo[randomIndex] = temporaryValue;
    }
    return arreglo;
}