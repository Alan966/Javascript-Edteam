
    let refrescos = [{
        nombre: 'Coca-Cola',
        precio: 1.50,
        id: "r1"
    },{
        nombre: 'Fanta',
        precio: 1.50,
        id: "r2"
    },{
        nombre: 'Sprite',
        precio: 1.50,
        id: "r3"
    },{
        nombre: 'Agua',
        precio: 1.50,
        id: "r4"
    },
    {
        nombre: 'Naranjada',
        precio: 1.50,
        id: "r5"
    }]
    let platos = [
        {
            nombre: 'Hamburguesa',
            precio: 2.50,
            id: "p1"
        },
        {
            nombre: 'Pizza',
            precio: 2.50,
            id: "p2"
        },
        {
            nombre: 'Perrito Caliente',
            precio: 2.50,
            id: "p3"
        },
        {
            nombre: 'Tortilla de Patatas',
            precio: 2.50,
            id: "p4"
        }
    ]

const showMenu = () => {
    console.log('Bienvenido a nuestro menú');
    console.log(Object.keys(refrescos[0]));
    refrescos.forEach(e => {
        console.log(`${e.nombre} - ${e.precio}€`)
    })
    console.log('Platos')
    console.log(Object.keys(platos[0]));
    platos.forEach(e => {
        console.log(`${e.nombre} - ${e.precio}€`)
    })
}

