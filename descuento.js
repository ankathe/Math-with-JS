const precioInicialInput = document.querySelector('.costo-inicial');
const cuponPorcentajeInput = document.querySelector('.cupon-ingresado');
const botonCalculo = document.querySelector('.boton');
const pResult = document.querySelector('#result')
// const coupons= {
//     diaMadres: 50,
//     valentin: 20,
//     christmas: 30,
//     blackFriday: 55,
// };

botonCalculo.addEventListener('click', calcularPrecioFinal);

const coupons=[{coupon:'diaMadres', discount: 50,} ,{coupon:'valentin', discount: 20,},{coupon:'blackFriday', discount: 55,}];

function calcularPrecioFinal(event){
    event.preventDefault();
    const precioInicial = precioInicialInput.value;
    
    if(!precioInicial || !cuponPorcentajeInput.value){
        pResult.innerText = "Ingresa los datos que se requieren para calcular el costo final que deseas"
        return;
    }

    const couponPorcentaje = coupons.find(couponElement => couponElement.coupon === cuponPorcentajeInput.value);

    if(couponPorcentaje){
        discount = couponPorcentaje.discount;

    }else{
        pResult.innerText = "el cupon que ingresaste es invalido, vuelve a ingresar el nombre del cupon (tener presente mayusculas y minusculas)"
        return;
    }
    
    const resta = (100 - discount)
    const newPrice = (precioInicial * resta) / 100;
    pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
};


   // const cuponPorcentaje = coupons[cuponPorcentajeInput.value];
    // console.log(cuponPorcentaje);
    // const precioInicial = precioInicialInput.value
   
    // console.log('prueba');

    // if(!precioInicial || !cuponPorcentajeInput.value){
    //     pResult.innerText = "Ingresa los datos que se requieren para calcular el costo final que deseas"
    //     return;
    // }
    // if(!cuponPorcentaje){
    //     pResult.innerText = "el cupon que ingresaste es invalido, vuelve a ingresar el nombre del cupon (tener presente mayusculas y minusculas)"
    //     return;
    // }