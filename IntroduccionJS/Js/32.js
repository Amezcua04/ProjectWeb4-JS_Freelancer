// Async / Await

/*
Llegan 2 personas a un restaurante. Una de ellas pide un corte fino y la otra pide solo un vaso con agua. El código Asincrono se encarga de priorizar el código.
*/

function descargarNuevosClientes(){
    return new Promise ( resolve =>{
        console.log('Descargando clientes... espere...');

        setTimeout( () => {
            resolve('Descarga completa!')
        }, 5000)

    });
}

function descargarUltimosPedidos(){
    return new Promise ( resolve =>{
        console.log('Descargando pedidos... espere...');

        setTimeout( () => {
            resolve('Descarga de pedidos completa!')
        }, 3000)

    });
}

async function app(){
    try {
        // const Clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimosPedidos();
        // console.log('Este código sí se bloquea'); -> depende del async await
        // console.log(resultado);
        // Ejecutar 2 await al mismo tiempo con mejor performance
        const resultado = await Promise.all([ descargarNuevosClientes(), descargarUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();

console.log('Este código no se bloqua'); // no depende del async await