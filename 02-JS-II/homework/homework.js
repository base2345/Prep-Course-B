// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  
  return str 
}
  
  
  function suma(x, y)
   {
   // var x = 4
    //var y = 4
   result = x+y
   
    return result
  }
  
  
  function resta(x, y) 
  {
    //var y = 5
    //var x = 5
    result = x-y
    return result;
  }

   
  
  
  function multiplica(x, y)
   {
      
      
      result = x*y
      return result
    }

  
  
  function divide(x, y)
   {
     result = x/y
      return result
  }
    
  
  
  
 
  
  function sonIguales(x, y) {
    // Devuelve "true" si "x" e "y" son iguales
    // De lo contrario, devuelve "false"
    // Tu código:
    
    
        if(x===y & y===x)
        {
            return true;
        }
        else if(x!=y)
        {
            return false;
        }
    }
      

      function tienenMismaLongitud(str1, str2)
       {
      if (str1.length === str2.length)
    {
      return true;
    }
    else if(str1.length != str2.length)
    {
      return false;
    }

  }
  

  
  function menosQueNoventa(num) {
      if (num<90)
      {
        return true;
      }else{
      
          
            return false;
      }
      }
    
  
  
  function mayorQueCincuenta(num)
   {
    if (num>50)
      {
        return true
      }
        else 
              {
                return false
              } 
                }
        
  
  
  
    function obtenerResto(x, y)
    {
      
      let modulo = x % y;
      return modulo
    }
    //console.log(obtenerResto(9,2));
   
  
  
  function esPar(num)
   {
  if (num % 2 === 0)
  {
      return true;
  }
    else if (num % 2 != 0)
        {
          return false;
        }
}

  
  
  function esImpar(num) 
    {
      if (num % 2 != 0)
          {
              return true
          }
          else if(num % 2 === 0)
          {
            return false
          }
      
    }
  
  
  function elevarAlCuadrado(num)
   {
    
  
      let result = num ** 2 ;
      return result
      
    
  }
  
  function elevarAlCubo(num) {
    let resultado = num ** 3
    return resultado
  }
  
  function elevar(num, exponent) {
    {
      let resultado = num**exponent
      return resultado
    }
  }
  

  function redondearNumero(num) {
    let resultado = Math.round(num)
    return resultado
    // Redondea "num" al entero más próximo y devuélvelo
    // Tu código:
    
  }
  //console.log(redondearNumero(6.5))
  
  function redondearHaciaArriba(num) {
    // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
    // Tu código:
    let resultado =Math.ceil(num)
  return resultado
  }
  
  function numeroRandom(num)
   {
    //Generar un número al azar entre 0 y 1 y devolverlo
    //Pista: investigá qué hace el método Math.random()
    // Tu código:
    let resultado = Math.random(Math.round(num)*1)
  return resultado
}
  
  
  function esPositivo(numero)
   {
    if (numero > 0)
  {
     return "Es positivo";
  }
  else if(numero < 0 )
  {
       return "Es negativo";
  }
   else if(numero === 0)
  {
   return false 
  }
  }
  
  function agregarSimboloExclamacion(str) {
    // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
    // Ejemplo: "hello world" pasaría a ser "hello world!"
    // Tu código:
    
    
    //str = str.concat(b);
    str = str +  "!";
    return str
  }
  
  function combinarNombres(nombre, apellido) {
    // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
    // Ejemplo: "Soy", "Henry" -> "Soy Henry"
    // Tu código:
    
      //var nombre = "Henry";
      //var apellido = "Soy";
      
      var conbinado = nombre + ' '  + apellido;
      return conbinado
     // var nombreapellido = nombre + ' ' + apellido;
   // return nombreapellido
  }
  
  function obtenerSaludo(nombre) {
    // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
    // "Martin" -> "Hola Martin!"
    // Tu código:
    
    var saludo = 'Hola' + " " + nombre + '!';
    
    return saludo;
   
  }
  
  function obtenerAreaRectangulo(alto, ancho) {
    // Retornar el area de un rectángulo teniendo su altura y ancho
    // Tu código:
    area = alto * ancho
    return area
  }
  
  function retornarPerimetro(lado) {
    //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
    //Escribe tu código aquí
    let perimetro = lado+lado+lado+lado
    return perimetro
    
  }
  
  function areaDelTriangulo(base, altura) {
    //Desarrolle una función que calcule el área de un triángulo.
    //Escribe tu código aquí
    let area = (base * altura) / 2
    return area
    
  }
  
  function deEuroAdolar(euro) {
    //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
    //como parámetro un número de euros y calcule el cambio en dólares.
    //Escribe tu código aquí
    var neuros = euro * 1.20
    return neuros
  }
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    devolverString,
    tienenMismaLongitud,
    sonIguales,
    menosQueNoventa,
    mayorQueCincuenta,
    suma,
    resta,
    divide,
    multiplica,
    obtenerResto,
    esPar,
    esImpar,
    elevarAlCuadrado,
    elevarAlCubo,
    elevar,
    redondearNumero,
    redondearHaciaArriba,
    numeroRandom,
    esPositivo,
    agregarSimboloExclamacion,
    combinarNombres,
    obtenerSaludo,
    obtenerAreaRectangulo,
    retornarPerimetro,
    areaDelTriangulo,
    deEuroAdolar,
  };