/**
 * Descripción: Convierte un valor ingresado por el usuario en metros, pies , pulgadas o yardas.
 * @method convertirUnidades de la función
 * @param {String}nombre - Id del elemento html
 * @param {number}valor - Valor ingresado por el usuario
 * @return none - Valor que retorna 
*/


function convertirUnidades(nombre, valor){
    let varMetro, varPulgada, varPie, varYarda;
    if(isNaN(valor)){
        alert("El valor ingresado no es un número");

        varMetro = "";
        varPulgada = "";
        varPie = "";
        varYarda = "";

    }   else if(nombre === "metro"){
        varMetro = valor;
        varPulgada = valor * 39.7;
        varPie = valo r* 3.24;
        varYarda = valor * 1.093;

    }   else if(nombre === "pulgada"){
        varPulgada = valor;
        varMetro = valor / 39.7; // hacer todas las conversiones correctas
        varPie = valor * 3.24;
        varYarda = valor * 1.093;

    }   else if(nombre === "pie"){
        varPie = valor;
        varMetro = valor * 0.038;
        varPulgada = valor * 39.7;
        varYarda = valor * 1.093;

    }   else if(nombre === "yarda"){
        varYarda = valor;
        varPulgada = valor * 39.7;
        varPie = valor * 3.24;
        varMetro = valor * 0.91;
    }
    document.getElementById("metro").value = varMetro;
    document.getElementById("pulgada").value = varPulgada;
    document.getElementById("pie").value = varPie;
    document.getElementById("yarda").value = varYarda;

}
