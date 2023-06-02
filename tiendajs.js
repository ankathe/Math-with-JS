/* formula para porcentajes (P * (100 - D) / 100 */
const precioInicialInput = document.querySelector('.costo-inicial');
const descuentoPorcentaje = document.querySelector('.descuento');
const botonCalculo = document.querySelector('.boton');
const ValorFinal = document.querySelector('.costo-final');
const pResult = document.querySelector('#result')

botonCalculo.addEventListener('click', calcularPrecioFinal);

function calcularPrecioFinal(event){
    event.preventDefault();
    const precioInicial = precioInicialInput.value
    const descuento = descuentoPorcentaje.value

    if(!precioInicial || !descuentoPorcentaje){
        pResult.innerText = "Ingresa los datos que se requieren para calcular el costo final que deseas"
        return;
    }
    if(descuento>100){
        pResult.innerText = "el porcentaje de descuento no corresponde"
        return;
    }
    const resta = 100 - descuento
    ValorFinal.value = (precioInicial * resta) / 100;
    pResult.innerText = "";
};