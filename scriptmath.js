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

console.groupEnd('triangulo');

/*area de un cuadrado: lado * lado
perimetro de un triangulo: lado + lado + lado
area del triangulo: (base * altura) / 2
perimetro de un circulo: radio al cuadrado * pi(3.1415)*/