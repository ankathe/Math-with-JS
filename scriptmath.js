/*Perimetros y diametros
perimetro de un cuadrado: lado * 4 */

console.group('cuadrado')


const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
});

function calcularCuadrado(lado){
    return {
        perimetro: lado * 4,
        area: lado * lado,
    }
}
console.groupEnd('cuadrado');

/*area de un cuadrado: lado * lado
perimetro de un triangulo: lado + lado + lado
area del triangulo: (base * altura) / 2 */

console.group('triangulo');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTriangulo3 = 4;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura){
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    }
}

console.log({
ladoTriangulo1,
ladoTriangulo2,
ladoTrianguloBase,
perimetroTriangulo,
alturaTriangulo,
});

function calcularAlturaTriangulo(lado1, base) {
    if (lado1 == base) {
      console.warn('Este no es un triángulo isosceles');
    } else {
      // h = raizcuadrada(lado1**2 - (b**2)/4)
      return Math.sqrt( (lado1 ** 2) - ( (base ** 2) ) / 4 );
    }
  }

console.groupEnd('triangulo');

/*perimetro de un circulo: radio al cuadrado * pi(3.1415)*/

console.group('circle');

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;
const circunferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI;

console.log({
    radioCirculo,
    diametroCirculo,
    circunferencia,
    areaCirculo, 
});


function calcularCirculo (radio){
    const diametro = radio * 2;

    return {
        circunferencia: diametro * Math.PI,
        diametro: radio * 2,
        area: (radio **2) * Math.PI,
    };
}

console.groupEnd('circle');

/* realizar el calculo de la formula de altura en js, con la formula pitagorica */

console.group('alturaTrianguloEscaleno');

/* h= (2/a) math.sqrt(S(S-a)(S-b)(S-c)), teniendo en cuenta que S= (lado1 + lado2 
+ lado 3) /2 */

function alturaTrianguloEscaleno(lado1,lado2, lado3){
    if (lado1 === lado2 && lado1 === lado3 && lado2 === lado3){
        console.log('segun las medidas no es un triangulo escaleno');

    }else{ 
        const semiPerimetro = (lado1 +lado2+lado3) / 2;
        return (2/lado1) * (Math.sqrt(semiPerimetro*((semiPerimetro-lado1)*(semiPerimetro-lado2)*(semiPerimetro-lado3))));
    }
};

console.groupEnd('alturaTrianguloEscaleno');