/*class Persona{

        constructor (nombre,apellido,edad,sexo){
            this.nombre= nombre;
            this.apellido = apellido;
            this.edad = edad;
            this.sexo= sexo;
        }

}

let persona1 = new Persona('jony','carmona',31,'masculino');

console.log(persona1.nombre);*/
/*

let contador =0;

for (contador=1;contador<=100;contador++)
{
    if(contador%3==0 && contador%5==0 )
    {
        console.log("fizzbuzz");
    }
    else if(contador%5==0)
    {
        console.log("buzz");
    }
    else if(contador%3==0)
    {
        console.log("fizz");
    }
    else
    {
        console.log(contador);
    }

}

*/

/*
let contador2 =1;

while(contador2<=100)
{
    if(contador2%3==0 && contador2%5==0 )
    {
        console.log("fizzbuzz");
    }
    else if(contador2%5==0)
    {
        console.log("buzz");
    }
    else if(contador2%3==0)
    {
        console.log("fizz");
    }
    else
    {
        console.log(contador2);
    }
    contador2=contador2+1;
}
*/

/* let arreglo = [1,5,-3,2,7,9,0,-5,-8,4];

function numeros(Array){

     let numeros={
        positivos : [],
        negativos : [],
        ceros : []
    }

    
    let recorrer=0; 
    while(recorrer<arreglo.length)
    //for (let recorrer=0;recorrer<arreglo.length;recorrer++)
    {
        if(arreglo[recorrer]<0)
        {
            numeros.negativos.push(arreglo[recorrer]);
        }
        else if(arreglo[recorrer]==0)
        {
            numeros.ceros.push(arreglo[recorrer]);
        }
        else{
            numeros.positivos.push(arreglo[recorrer]);
        }
        recorrer+=1;
    }

    return numeros;

}

console.log(numeros(arreglo)); */


/* function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

console.log(makeid(5)); */




/* function CrearClave(tam,May,min,num,car) {

    let caracteres = ''

    if (May)
    {
        caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    if (min)
    {
        caracteres += 'abcdefghijklmnopqrstuvwxyz'
    }
    if (num)
    {
        caracteres += '0123456789'
    }
    if(car)
    {
        caracteres +='@#/*?¡¿'

    }

    let clave = '';
    //let contador = 0;
    for(let contador=0;contador<tam;contador++){
    //while (contador < tam) {

    //charat retorna el caracter que se le indique de un string
    //math.floor siempre redondea hacia abajo y devuelve el número entero más grande menor o igual a un número indicado
    //math.random retorna un numero entre 0 y 1
      clave += caracteres.charAt(Math.floor(Math.random() * caracteres.length));   
      //contador += 1;
    }
    return clave;
}

console.log(CrearClave(10,false,false,true,true));
 */


/* Ejercicio 1:

Crea una función que reciba días, horas, minutos y segundos (como enteros) y retorne su resultado en milisegundos.
Ejercicio 2:

Crea una función que reciba dos array, un booleano y retorne un array.


  - Si el booleano es verdadero buscará y retornará los elementos comunes
    de los dos array.


 - Si el booleano es falso buscará y retornará los elementos no comunes
  de los dos array.
ejercio 3:

Desarrolla un programa que sume todos los números primos en un rango dado. El usuario debe ingresar el rango, y el programa debe mostrar la suma de los números primos dentro de ese rango.



 */

/* function milisegundos (dias,horas,minutos,segundos)
{
    let acumulador =0;

    acumulador += dias*86400000;
    acumulador += horas*3600000;
    acumulador += minutos*60000;
    acumulador += segundos*1000;

    return acumulador;

}

console.log(milisegundos(1,1,1,1)); */


function arreglos(arreglo1,arreglo2,booleano)
{
    let resultado = new Array;
    if (booleano)
    {
        if (arreglo1.length>arreglo2.length)
        {
            for (let pos=0;pos<arreglo1.length;pos++)
            {
                for(let pos2=0;pos2<arreglo2.length;pos2++)
                {
                    if(arreglo1[pos]===arreglo2[pos2])
                    {
                        resultado.push(arreglo2[pos2]);
                    }
                }
            }


        }
        else
        {
            


            for (let pos=0;pos<arreglo2.length;pos++)
            {
                for(let pos2=0;pos2<arreglo1.length;pos2++)
                {
                    if(arreglo2[pos]===arreglo1[pos2])
                    {
                        resultado.push(arreglo1[pos2]);
                    }
                }
            }



        }
        
    }
    else{
        let acumulador=0;


        if (arreglo1.length>arreglo2.length)
        {
                for (let pos=0;pos<arreglo1.length;pos++)
            {
                acumulador=0;
                for(let pos2=0;pos2<arreglo2.length;pos2++)
                {
                    if(arreglo1[pos]===arreglo2[pos2])
                    {
                        acumulador+=1;
                    }
                }
                if(acumulador == 0)
                {
                    resultado.push(arreglo1[pos]);
                }
            }

        }
        else
        {
            for (let pos=0;pos<arreglo2.length;pos++)
            {
                acumulador=0;
                for(let pos2=0;pos2<arreglo1.length;pos2++)
                {
                    if(arreglo2[pos]===arreglo1[pos2])
                    {
                        acumulador+=1;
                    }
                }
                if(acumulador == 0)
                {
                    resultado.push(arreglo2[pos]);
                }
            }



        }


        


    }
    return resultado;

}

console.log(arreglos([1,4,5,7,8],[0,1,4,8,9,10,11],false));


/* function primos(inicio,fin)
{
    let suma=0;

    for (let i=inicio;i<=fin;i++)
    {
        if(i%2!=0)

    }


}

console.log(primos(3,3)) */

