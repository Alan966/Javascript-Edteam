
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
    refrescos.find(e => {
        console.log(cod)
        if(e.id === cod){
            return usuario.deuda += e.precio;
        }else if(e.nombre === cod){
            return usuario.deuda += e.precio;
        }else{
            return'No se encontro el nombre o id del producto';
        }
    })
}

const pedirPlatillo = (cod) => {
    platos.find(e  => {
        if(e.id === cod){
            return usuario.deuda += e.precio;
        }else if(e.nombre === cod){
            return usuario.deuda += e.precio;
        }else{
            return 'No se encontro el nombre o id del Platillo';
        }
    })
}