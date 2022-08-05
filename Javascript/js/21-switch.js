//Switchs

const metodoPago = 'targeta';

switch (metodoPago) {
    case 'targeta':
        console.log('pagaste con tarjeta')
        break;

    case 'transferencia':
    console.log('pagaste por transferencia')
    break;
    //cuando una condicion no se cumpla
        default:
        console.log('no has pagado')
        break;
}