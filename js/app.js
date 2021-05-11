// Variables

const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max - 10;

// Eventos

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(); // Muestra los autos al cargar.

    // Lena las opciones de años.
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
    for( let i = max; i >= min; i-- ) {
    const opcion = document.createElement('option');
    opcion.value = i;
    opcion.textContent = i;
    year.appendChild(opcion); // Agrega las opciones de año al selector.
    }
}