var suma = function(){
    var valorx = document.getElementById('valor1').value;
    var valory = document.getElementById('valor2').value;

    // Convertir a números y asegurarnos de que sean válidos
    if (isNaN(valorx) || isNaN(valory) || valorx === "" || valory === "") {
        document.getElementById('resultado').innerHTML = "Por favor, ingresa dos números válidos.";
    } else {
        document.getElementById('resultado').innerHTML = "El resultado de la suma es: " + (parseInt(valorx) + parseInt(valory));
    }
}

var restar = function(){
    var valorx = document.getElementById('valor1').value;
    var valory = document.getElementById('valor2').value;

    // Convertir a números y asegurarnos de que sean válidos
    if (isNaN(valorx) || isNaN(valory) || valorx === "" || valory === "") {
        document.getElementById('resultado').innerHTML = "Por favor, ingresa dos números válidos.";
    } else {
        document.getElementById('resultado').innerHTML = "El resultado de la resta es: " + (parseInt(valorx) - parseInt(valory));
    }
}

var multiplicacion = function(){
    var valorx = document.getElementById('valor1').value;
    var valory = document.getElementById('valor2').value;

    // Convertir a números y asegurarnos de que sean válidos
    if (isNaN(valorx) || isNaN(valory) || valorx === "" || valory === "") {
        document.getElementById('resultado').innerHTML = "Por favor, ingresa dos números válidos.";
    } else {
        document.getElementById('resultado').innerHTML = "El resultado de la multiplicación es: " + (parseInt(valorx) * parseInt(valory));
    }
}

var division = function(){
    var valorx = document.getElementById('valor1').value;
    var valory = document.getElementById('valor2').value;

    // Validar que los valores sean números y que no se intente dividir entre cero
    if (isNaN(valorx) || isNaN(valory) || valorx === "" || valory === "") {
        document.getElementById('resultado').innerHTML = "Por favor, ingresa dos números válidos.";
    } else if (parseInt(valory) === 0) {
        document.getElementById('resultado').innerHTML = "No se puede dividir entre cero.";
    } else {
        document.getElementById('resultado').innerHTML = "El resultado de la división es: " + (parseInt(valorx) / parseInt(valory));
    }
}
