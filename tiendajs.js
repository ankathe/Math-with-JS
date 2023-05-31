/* formula para porcentajes (P * (100 - D) / 100 */

const precioInicialInput = document.querySelector('.costo-inicial');
const descuentoPorcentaje = document.querySelector('.descuento');
const botonCalculo = document.querySelector('.boton');
const ValorFinal = document.querySelector('.costo-final');


botonCalculo.addEventListener('click', calcularPrecioFinal);

function calcularPrecioFinal(event){
    event.preventDefault();
    const precioInicial = precioInicialInput.value
    const descuento = descuentoPorcentaje.value
    const resta = 100 - descuento

    ValorFinal.value = (precioInicial * resta) / 100;
};

