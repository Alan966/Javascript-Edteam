
    let refrescos = [{
        nombre: 'Coca-Cola',
        precio: 1.50
    },{
        nombre: 'Fanta',
        precio: 1.50
    },{
        nombre: 'Sprite',
        precio: 1.50
    },{
        nombre: 'Agua',
        precio: 1.50
    },
    {
        nombre: 'Naranjada',
        precio: 1.50
    }]
    let platos = [
        {
            nombre: 'Hamburguesa',
            precio: 2.50
        },
        {
            nombre: 'Pizza',
            precio: 2.50
        },
        {
            nombre: 'Perrito Caliente',
            precio: 2.50
        },
        {
            nombre: 'Tortilla de Patatas',
            precio: 2.50
        }
    ]

const showMenu = (refresco, plato) => {
    console.log(`Refrescos: ${refresco.nombre} ${refresco.precio}€`);
    console.log(`Platos: ${plato.nombre} ${plato.precio}€`);
}