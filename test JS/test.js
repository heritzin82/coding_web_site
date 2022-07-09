/*

[]
{}
<>

*/

function suma(maximum)
{
    let num = 0;
    for(i=0; i<=maximum; i++)
    {
       num = num + i;
    }
    return num;
}

const numeros = [1, 2, 3];
resultado = numeros.reduce( (acc, el) => acc + el, 0);

//reduced = numeros.reduce()

//console.log("resultado:" + resultado);

console.log("num:" + suma(2));
