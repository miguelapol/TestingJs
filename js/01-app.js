//Probar 2 valores
//Aqui se probar como funciona el testeo de 2 valores
function suma(a,b) {
    return a + b;
}

let resultado = suma(2,2);
let esperado=4;

if(resultado!==esperado){
    console.log("Fallo");
}else{
    console.log("Paso correctamente");
}

resultado = suma(2,3);
esperado=5;
if(resultado!==esperado){
    console.log("Fallo");
}else{
    console.log("Paso correctamente");
}