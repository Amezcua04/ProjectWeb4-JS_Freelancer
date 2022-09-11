// Promises

const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = true;

    if(auth){
        resolve('Usuario Autenticado'); // Se ejecuta cuando el promise se cumple.
    }else{
        reject('Usuario No Autenticado'); // Se ejecuta cuando no se cumple el promse.
    }
});
/* En los promises existen 3 valores posibles:
    1. Pending: No se ha cumplido pero tampoco rechazado.
    2. Fulfulled: Ya se cumplio el promise.
    3. Reject: Se rechazó o no se cumplio el promise.
*/
usuarioAutenticado
    .then( resultado => console.log(resultado) ) //function convertida a arrow function.
    .catch(function(error){
        console.log(error);
    })
