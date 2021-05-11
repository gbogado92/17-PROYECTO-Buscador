// Variables

const resultado = document.querySelector('#resultado')

// Eventos

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();
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