console.log("Hola, mundo");
let i = 0;
// recibe dos argumentos una funcion y el tiempo  en el que se va a ejecutar
setInterval(function(){
    console.log(i);
    i++;

    if (i === 5) {
        console.log("forzamos error");
        var a = 3 + z
    }
}, 1000)

console.log("Segunda instrucciòn");