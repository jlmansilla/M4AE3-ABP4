function problem1() {
    const n = document.getElementById("n").value;
    const result = document.getElementById("result");
    const array = [];
    array.push(1);
    for (let i = 1; i < n; i++) {
        array.push(array[i-1] * 2);
    }
    result.innerHTML = array;
}

function problem2() {
    const array = document.getElementById("array").value;
    const result2 = document.getElementById("result2");
    const arrayNumbers = array.split(",");
    if (arrayNumbers.length !== 10) {
        result2.innerHTML = "El arreglo debe tener 10 números";
        return;
    }
    console.log(arrayNumbers);
    for (let i = 0; i < arrayNumbers.length; i++) {
        if (isNaN(arrayNumbers[i])) {
            result2.innerHTML = "El arreglo debe contener solo números";
            return;
        }
        arrayNumbers[i] = parseInt(arrayNumbers[i]);
    }
    console.log(arrayNumbers);
    const max = Math.max(...arrayNumbers);
    console.log(max);
    result2.innerHTML = max;
}

function problem3() {
    const day = document.getElementById("day").value;
    const result3 = document.getElementById("result3");
    const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    if (day < 1 || day > 7) {
        result3.innerHTML = "El número debe estar entre 1 y 7";
        return;
    }
    result3.innerHTML = days[day - 1];
}
const numerosAleatorios = Array.from({length: 100}, () => Math.floor(Math.random() * 200) + 1);
function problem4() {
    const result4 = document.getElementById("result4");
    const number = document.getElementById("buscar").value;
    const numberParsed = parseInt(number);
    console.log(numberParsed);    
    console.log(numerosAleatorios);
    const encontrado = numerosAleatorios.includes(numberParsed);
    if (encontrado) {   
        result4.innerHTML = "El número " + number + " se encuentra en el arreglo";
    } else {
        result4.innerHTML = "El número " + number + " no se encuentra en el arreglo";
    }
}

function problem5() {
    const ordenar = document.getElementById("ordenar").value;
    const result5 = document.getElementById("result5");
    const arrayNumbers = ordenar.split(",");
    for (let i = 0; i < arrayNumbers.length; i++) {
        if (isNaN(arrayNumbers[i])) {
            result5.innerHTML = "El arreglo debe contener solo números";
            return;
        }
        arrayNumbers[i] = parseInt(arrayNumbers[i]);
    }
    console.log(arrayNumbers);
    arrayNumbers.sort((a, b) => a - b);
    console.log(arrayNumbers);
    result5.innerHTML = arrayNumbers;
}
