//Declaracion tipos de datos

const operador:number = 5;
let arreglos : any[] =[1,2,"jfcr"];

type tipos ={referencia:string ,color:string,kilometraje:number};

// tipos de literales

const fun_estructurada =(a:string,b:boolean,c:number,d:tipos): void=>{
    const {referencia,color,kilometraje} = d;
    console.log('la referencia del tipo es :${referencia}');
    console.log('el color es :${color}');
    console.log('el kilometraje es :${kilometraje}');

};

//estructura de control if, else if, else

let valor ;

const calcular=(val1:number,val2:number,val3:number):number=> (val1*val2) + val3;

valor= calcular(4,5,2);

if (valor<10)
    console.log("el resultado de la operacion es ${valor} que es menor a 10");
else if (valor >=10 && valor<=50)
    console.log("el resultado de la operacion es ${valor} que esta entre 10 y 50");
else
    console.log("el resultado de la operacion es ${valor} que es mayor a 50")




// funciones basicas

function fun_basica (aa: number,bb:string,cc:object)
{
    return String(aa) + bb;
}

//funciones con parametros opcionales

//row operator recibe 2 elements of type number and return a parameter of type number
const suma =(a: number , b: number, c: string, d?: boolean):number => a+b;


console.log(suma(3,5,"jfcr"));




