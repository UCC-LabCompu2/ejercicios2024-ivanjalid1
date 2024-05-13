/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

function convertirUnidades(nombre, valor){
    if(isNaN(valor)){
        alert("El valor ingresado no es un número");

        document.getElementById("metro").value = "";
        document.getElementById("pulgada").value = "";
        document.getElementById("pie").value = "";
        document.getElementById("yarda").value = "";

    }   else if(nombre === "metro"){

        document.getElementById("pulgada").value = valor*39.7;
        document.getElementById("pie").value = valor*3.24;
        document.getElementById("yarda").value = valor*1.093;

    }   else if(nombre === "pulgada"){

        document.getElementById("metro").value = valor/39.7; // hacer todas las conversiones correctas
        document.getElementById("pie").value = valor*3.24;
        document.getElementById("yarda").value = valor*1.093;

    }   else if(nombre === "pie"){
        
        document.getElementById("pulgada").value = valor*39.7;
        document.getElementById("pie").value = valor*3.24;
        document.getElementById("yarda").value = valor*1.093;

    }   else if(nombre === "yarda"){

        document.getElementById("pulgada").value = valor*39.7;
        document.getElementById("pie").value = valor*3.24;
        document.getElementById("yarda").value = valor*1.093;
    }

}