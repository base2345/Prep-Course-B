// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

const { suma } = require("../../02-JS-II/homework/homework");




function imprimirSumaNumeros()
 {
  var numeros= [1,2,3,4,5,6,7,8,9,10]
    var suma = 0;
    for(var i=0;i<10;i++)
    {
   suma +=numeros[i]
    }
    return suma
  }
console.log(imprimirSumaNumeros())




function encuentraPares(array)
{
var incrementa = []
  for(i = 0; i < array.length; i++)
  {
    if(array[i]%2===0)
    {
    incrementa.push(array[i])
    }
  }
  return incrementa
}
console.log(encuentraPares([2,3,4,5,6,7]))







 

function elevaAlCuadrado(array){
 
  {
    var incrementa = []
      for(i = 0; i < array.length; i++)
      {
      
        {
        incrementa.push(array[i]**2)
        }
      }
      return incrementa
    }
  }
    console.log(elevaAlCuadrado([1, 5, 2,4,6,22, 519]))


function sumaArray(array)
{
  {
    var numeros= [1,2,4,5,7,8,]
      var suma = 0;
      for(var i=0;i<numeros.length;i++)
      {
     suma +=numeros[i]
      }
      return suma
    }
  }
  console.log(sumaArray([1,2,4,5,7,8,]))


function numeroDigitos(num){
   {
    
    var suma = [0]
        for(i = 1; i <num.length; i++)
        {
      
          suma +=num[i].length
          
        
        }
        return suma.length
      }
    }
      console.log(numeroDigitos("r2323"))
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
