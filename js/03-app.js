function suma(a,b) {
    return a + b;
}
function resta(a,b) {
    return a - b;
}

//codigo asincrono

async function sumaAsync(a,b){
    return Promise.resolve(suma(a,b));
}

let resultado = suma(2,2);
let esperado=4;
expected(esperado).toBe(resultado);
resultado = suma(2,3);
esperado=6;
expected(esperado).toBe(resultado);
expected(esperado).toEqual(resultado);

test('Suma 10 + 20',async ()=>{
    const resultado = await sumaAsync(10,40);
    const esperado=50;
    expected(esperado).toBe(resultado);
})


async function test(mensaje,callback) {
    try {
        await callback();
        console.log(`El test: ${mensaje} se ejecuto correctamente`);
    }catch(error){
        console.error(`El test: ${mensaje} no se ejecuto correctamente`);
    }
}



function expected(esperado){
    return{
        toBe(resultado){
            if(resultado!==esperado){
                console.error(`El ${resultado} es diferente a lo esperado, la prueba no pasa`);
            }else{
                console.log("Prueba paso");
            }
        },
        toEqual(resultado){
            if(resultado!==esperado){
                console.error(`El ${resultado} es diferente a lo esperado, la prueba no pasa`);
            }else{
                console.log("Prueba paso");
            }
        }
    }
}