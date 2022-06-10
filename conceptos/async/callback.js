function soyAsincrona(miCallBack) {
    setTimeout(function() {
        console.log("Estoy siendo asincrona");
        miCallBack();
    }, 1000)
}
function hola(nombre, nueviCallBack) {
    setTimeout(function(){
        console.log('Hola, ' + nombre);
        nueviCallBack();
    }, 1000)
}
function adios(nombre, otroCallBack) {
    setTimeout(function(){
        console.log("adios " + nombre);
        otroCallBack();
    }, 1000)
}
console.log("Iniciando proceso...");
// soyAsincrona(function(){
//     console.log("Terminando proceso");
// });
hola('Iv´án', function() {
    adios("Iàn", function(){
        console.log("Terminando proceso");
         
    });
});