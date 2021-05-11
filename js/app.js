// Variables

const resultado = document.querySelector('#resultado')
const year = document.querySelector('#year')

// Eventos

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(); //Muestra los automoviles al cargar

    //Llena las opciones de años
    llenarSelect();
})

// Funciones 

function mostrarAutos() {
    autos.forEach( auto => {

        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autosHTML = document.createElement('p');

        autosHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}  
        `;

        // Insertar en el HTML 
        resultado.appendChild(autosHTML);
    })
}

// Genera los años del select 

function llenarSelect() {
    console.log('Llenando el select...')
}