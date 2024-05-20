/**
 * Descripción: Convierte un valor ingresado por el usuario en metros, pies , pulgadas o yardas.
 * @method convertirUnidades de la función
 * @param {String}nombre - Id del elemento html
 * @param {number}valor - Valor ingresado por el usuario
 * @return none - Valor que retorna 
*/


convertirUnidades = (nombre, valor) => {
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
        varPie = valor * 3.24;
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


function convertirGR(id){
    if(id==="grados"){
        let grad = document.getElementById("grados").value;
        let rad = grad*Math.PI/180;
    } else if (id === "rad"){
        let rad = document.getElementById("rad").value;
        let grad = rad*180/Math.PI;
        document.getElementById("grados").value = grad;
    }
}

let mostrarOcultar = (valorMo) => { 
    if (valorMo === "val_mostrar"){
        document.getElementById("divMo").style.display = 'block';
    } else if(valorMo === "val_ocultar"){
        document.getElementById("divMo").style.display = 'none';
    }
}

let suma = () => {
    let num1, num2;
    num1 = Number(document.getElementsByName("sum_num1")[0].value); // se indica el indice porque es un array y buscamos solo el primer objeto
    num2 = Number(document.getElementsByName("sum_num2")[0].value);
    document.getElementsByName("sum_total")[0].value = num1 + num2;
} 

// hacer resta, mult, division