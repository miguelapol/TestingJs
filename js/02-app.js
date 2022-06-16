function suma(a,b) {
    return a + b;
}

let resultado = suma(2,2);
let esperado=4;
expected(esperado).toBe(resultado);
resultado = suma(2,3);
esperado=6;
expected(esperado).toBe(resultado);
expected(esperado).toEqual(resultado);




function expected(esperando){
    return{
        toBe(resultado){
            if(resultado!==esperando){
                console.log("Prueba no paso");
            }else{
                console.log("Prueba paso");
            }
        },
        toEqual(resultado){
            if(resultado!==esperando){
                console.log("Prueba no paso");
            }else{
                console.log("Prueba paso");
            }
        }
    }
}