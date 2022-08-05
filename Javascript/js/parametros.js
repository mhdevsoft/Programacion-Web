  //los parametros se pasan en el parentesis dependiendo la funcion
  //parametros por default es en caso de que no exista valor del argumento
  function sumar(numero1 = 0, numero2 = 0) {
    //cuerpo de una funcion
    console.log(numero1 + numero2);
    }
    
    //se manda a llamar una funcion
    sumar(10,10) ;//argumentos o valores reales
    sumar(12,10);
    sumar(1,1);

    //parametros por default es en caso de que no exista valor del argumento
    
    //expresion de la funcion
    //se denomina mas como una variable
    const sumar2 = function()
    {
        console.log(3+3);
    }
    
    sumar2();


    function empleado(nombre ,horas,paga) {
    let sueldo = horas * paga
    let semana = paga * 7
    console.log(`El empleado: ${nombre} gano ${sueldo} por ${horas} y ganaria a la semana ${semana}`)
    }

    empleado("pedro",1, 16)


    