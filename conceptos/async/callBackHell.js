function hablar(callbackHablar) {
    setTimeout(function(){
        console.log("bla bla bla");
    }, 1000);
}

function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(function(){
            conversacion(nombre, --veces, callback)
        })
    }else{
        callback(nombre)
    }
}

hola("Ivan", function(nombre´´){
    conversacion(nombre, 3, adios)
})