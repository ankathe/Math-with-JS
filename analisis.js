console.log(salarios);

// realizar el analiss personal de juanita


function encontrarPersona(personaEnBusqueda){
    return salarios.find(persona => persona.name == personaEnBusqueda);
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