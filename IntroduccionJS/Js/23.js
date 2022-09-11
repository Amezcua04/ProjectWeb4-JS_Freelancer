// Estructuras de control

/* Switch --> Se utiliza para multiples condiciones y se recomienda como sustituto
del else-if */
const metodoPago = 'efectivo';

switch(metodoPago){
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    case 'cheque':
        console.log('El usuario pagará con cheque');
        break;
    case 'efectivo':
        console.log('Pagaste con efectivo');
        break;
    default:
        console.log('Aun no has pagado');
        break;
}