console.log(salarios);

// realizar el analiss personal de juanita

function encontrarPersona(personaEnBusqueda){
    return salarios.find(function(persona){
     return persona.name === personaEnBusqueda
    })
};

function medianaPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    const salarios = trabajos.map(function(elemento){
        return elemento.salario;
    });

    const medianaSalarios = Estadistica.calcularMediana(salarios);
    console.log(medianaSalarios);
    return medianaSalarios;
}

function proyeccionPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;
  
    let porcentajesCrecimiento = [];
    
    for (let i = 1; i < trabajos.length; i++) {
      const salarioActual = trabajos[i].salario;
      const salarioPasado = trabajos[i - 1].salario;
      const crecimiento = salarioActual - salarioPasado;
      const porcentajeCrecimiento = crecimiento / salarioPasado;
      porcentajesCrecimiento.push(porcentajeCrecimiento)
    }
  
    const medianaPorcentajesCrecimiento = Estadistica.calcularMediana(porcentajesCrecimiento);
  
    // console.log({porcentajesCrecimiento, medianaPorcentajesCrecimiento});
  
    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
    const nuevoSalario = ultimoSalario + aumento;
  
    return nuevoSalario;
  }

/* Analisis empresarial
un objeto que por dentro tenga distintas empresas donde dentro tendran otro obejto con los
years 2018, 2019, 2020 y dentro tendra un array con los salarios de cada year
industrias mokepon:{
    2018: [salario, salarios, salario]
    2019: [salario, salarios, salario]},
*/

// POSIBLE INICIO DE SOLUCION
// function empresas(arraySalarios){
// let Empresa = {}

// for(let i=0; i < arraySalarios.length; i++){
//     for(let j=0; j < arraySalarios[i].trabajos.length; j++){
//         console.log('i: ', i, 'j: ', j, 'salarios:' , salarios[i].trabajos[j])
//     }
// }
const empresas = {};

for (persona of salarios) {
  for (trabajo of persona.trabajos) {
    if (!empresas[trabajo.empresa]) {
      empresas[trabajo.empresa] = {};
    }

    if (!empresas[trabajo.empresa][trabajo.year]) {
      empresas[trabajo.empresa][trabajo.year] = [];
    }

    empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
  }
}

console.log({empresas});

function medianaEmpresaYear(nombre, year) {
  if (!empresas[nombre]) {
    console.warn('La empresa no existe');
  } else if (!empresas[nombre][year]) {
    console.warn('La empresa no dio salarios ese año');
  } else {
    return PlatziMath.calcularMediana(empresas[nombre][year]);
  }
}
