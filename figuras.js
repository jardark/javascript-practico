// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();


// Aquí interactuamos con el HTML
function calPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}


function calPerimetroTriangulo() {
    const input1 = document.getElementById("InputTrianguloLado1");
    const value1 = parseFloat(input1.value);
    
    const input2 = document.getElementById("InputTrianguloLado2");
    const value2 = parseFloat(input2.value);

    const input3 = document.getElementById("InputTrianguloBase3");
    const base3 = parseFloat(input3.value);

  
    const perimetro = perimetroTriangulo(value1, value2, base3); 
    alert(perimetro);
  }
  function calAreaTriangulo() {
    const input3 = document.getElementById("InputTrianguloBase3");
    const base3 = parseFloat(input3.value);

    const input4 = document.getElementById("InputAltura");
    const value4 = parseFloat(input4.value);
  
    const area = areaCuadrado(base3, value4);
    alert(area);
  }




//   function alturaIsosceles(ilado1, ilado2, ilado3) {
//       dd
//   } 



//   function comprobarIsosceles() {
//       const input1 = document.getElementById("InputIsoscelesLado1");
//       const value1 = parseFloat(input1.value);

//       const input2 = document.getElementById("InputIsoscelesLado2");
//       const value2 = parseFloat(input2.value);

//       const input3 = document.getElementById("InputIsoscelesLado3");
//       const value3 = parseFloat(input3.value);

//       if (((value1 === value2) || (value2 == value3) || (value3 == value1)) && ((value1 != value2) || (value2 != value3) || (value3 != value1))) {
//           return true;
//       }
//       else {
//           return false;
//       }

//   }


 