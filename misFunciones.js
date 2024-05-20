/**
 * Descripción: Convierte un valor ingresado por el usuario en metros, pies , pulgadas o yardas.
 * @method convertirUnidades de la función
 * @param {String}nombre - Id del elemento html
 * @param {number}valor - Valor ingresado por el usuario
 * @return none - Valor que retorna 
*/


let convertirUnidades = (nombre, valor) => {
    let varMetro, varPulgada, varPie, varYarda;

    if(valor.includes(",")){
        valor = valor.replace(",",".");
    }
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
    document.getElementById("metro").value = varMetro.toFixed(2);
    document.getElementById("pulgada").value = varPulgada.toFixed(2);
    document.getElementById("pie").value = varPie.toFixed(2);
    document.getElementById("yarda").value = varYarda.toFixed(2);
}


/**
 * Descripción: Convierte un valor ingresado por el usuario en grados o radiantes
 * @method convertirUnidades de la función
 * @param id {String} - toma un valor del id

*/

function convertirGR(id){
    if(id==="grados"){
        let grad = document.getElementById("grados").value;
        let rad = grad*Math.PI/180;
        document.getElementById("rad").value = rad;
    } else if (id === "rad"){
        let rad = document.getElementById("rad").value;
        let grad = rad*180/Math.PI;
        document.getElementById("grados").value = grad;
    }
}
/**
 * Descripción: Mostrar u ocultar
 * @method mostrarOcultar 
 * @param id {String} - Toma los valores de mostrar
*/
let mostrarOcultar = (valorMo) => { 
    if (valorMo === "val_mostrar"){
        document.getElementById("divMo").style.display = 'block';
    } else if(valorMo === "val_ocultar"){
        document.getElementById("divMo").style.display = 'none';
    }
}

/**
 * Descripción: Permite sumar 2 numeros
 * @method suma 
*/

let suma = () => {
    let num1, num2;
    num1 = Number(document.getElementsByName("sum_num1")[0].value); // se indica el indice porque es un array y buscamos solo el primer objeto
    num2 = Number(document.getElementsByName("sum_num2")[0].value);
    document.getElementsByName("sum_total")[0].innerHTML = num1 + num2;
} 

/**
 * Descripción: Permite restar 2 numeros
 * @method resta
*/
let resta = () => {
    let num1, num2;
    num1 = Number(document.getElementsByName("res_num1")[0].value); 
    num2 = Number(document.getElementsByName("res_num2")[0].value);
    document.getElementsByName("res_total")[0].innerHTML = num1 - num2;
} 
/**
 * Descripción: Permite multiplicar 2 numeros
 * @method multiplicacion 
*/
let multiplicacion = () => {
    let num1, num2;
    num1 = Number(document.getElementsByName("mul_num1")[0].value); 
    num2 = Number(document.getElementsByName("mul_num2")[0].value);
    document.getElementsByName("mul_total")[0].innerHTML = num1 * num2;
} 
/**
 * Descripción: Permite division 2 numeros
 * @method division 
*/
let division = () => {
    let num1, num2;
    num1 = Number(document.getElementsByName("div_num1")[0].value); 
    num2 = Number(document.getElementsByName("div_num2")[0].value);
    document.getElementsByName("div_total")[0].innerHTML = num1 / num2;
} 
/**
 * Descripción: Permite concatenar una distancia y una unidad en la url antes de cargar la nueva pagina
 * @method pasarPagina
*/
let pasarPagina = () => {
    let cant, unid, urlComp;
    cant = document.getElementById("distancia").value;
    unid = document.getElementsByName("unidades")[0].value;
    console.log(cant);
    console.log(unid);
    urlComp = "segundaWeb.html#" + cant + "#" + unid;
    window.open(urlComp);
}
/**
 * Descripción: Permite adquirir los valores de distancia y unidad de la url, y escribirlos en el input
 * @method obtenerValores
*/

let obtenerValores = () => {
    let cantidad, unidad, urlCompleta;
    urlCompleta = window.location.href; // traigo la url actual
    urlCompleta = urlCompleta.split( "#"); // convertir un string en un array
    
    cantidad = urlCompleta[1];
    unidad = urlCompleta[2];

    // document.getElementById("dist").value = cantidad + " " + unidad;
    document.getElementById("dist").value = `${cantidad} ${unidad}`;
}