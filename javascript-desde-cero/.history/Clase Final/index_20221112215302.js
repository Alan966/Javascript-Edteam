/**
 * Logica para crear pedidos y cobrar pedidos al usuario
 */
const showMenu = () => {
    console.log('Bienvenido a nuestro menú');
    console.error('Refrescos');
    console.log(`${Object.keys(refrescos[0])[0]} - $${Object.keys(refrescos[0])[1]} - ${Object.keys(refrescos[0])[2]}`);
    refrescos.forEach(e => {
        console.log(`${e.nombre} - ${e.precio}€ - ${e.id}`);
    })
    console.error('Platos')
    console.log(`${Object.keys(platos[0])[0]} - $${Object.keys(platos[0])[1]} - ${Object.keys(platos[0])[2]}`);
    platos.forEach(e => {
        console.log(`${e.nombre} - ${e.precio}€ - ${e.id}`)
    })
}


const usuario = {
    nombre: "Beto",
    edad: "21",
    genero: "Masculino",
    deuda: 0,
}

let pedido = [];


const pedirRefresco = (cod) => {

    if(!cod) return 'No se encontro el nombre o id del Refresco';

    refrescos.forEach(e => {
        if(e.id === cod){
            pedido.push(e);
            return usuario.deuda += e.precio;
        }else if(e.nombre === cod){
            pedido.push(e);
            return usuario.deuda += e.precio;
        }else{
            return'No se encontro el nombre o id del producto';
        }
    })
}

const pedirPlatillo = (cod) => {

    if(!cod) return 'No se encontro el nombre o id del Refresco';

    platos.forEach(e  => {
        if(e.id === cod){
            pedido.push(e);
            return usuario.deuda += e.precio;
        }else if(e.nombre === cod){
            pedido.push(e);
            return usuario.deuda += e.precio;
        }else{
            return 'No se encontro el nombre o id del Platillo';
        }
    })
}

const verPedido = () => {
    console.log('Tu pedido es:')
    return pedido.forEach(e => { console.log(`${e.nombre} - ${e.precio}€ - ${e.id}`) })
}

const calcularCosto = () => {
    return usuario.deuda;
}

const finalizarPedido = () => {
console.log(`Gracias por venir ${usuario.nombre}, tu deuda es de ${usuario.deuda}€`);
    pedido = [];
}

const pagarPedido = (num) => {
     usuario.deuda -= num;
    console.log('Tu deuda es de: ' + usuario.deuda);
    console.log('Gracias por tu pago');
}