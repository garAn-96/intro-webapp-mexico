// Referencias a los sliders
const sliderVerde = document.getElementById('sliderVerde');
const sliderBlanco = document.getElementById('sliderBlanco');
const sliderRojo = document.getElementById('sliderRojo');

// Referencias a los recuadros de color de la bandera
const verdeDisplay = document.getElementById('verdeDisplay');
const blancoDisplay = document.getElementById('blancoDisplay');
const rojoDisplay = document.getElementById('rojoDisplay');

// Referencias a los textos donde se mostrará el código RGB y Hex
const verdeCode = document.getElementById('verdeCode');
const blancoCode = document.getElementById('blancoCode');
const rojoCode = document.getElementById('rojoCode');

// Función para actualizar los colores
function updateColor() {
    const verde = sliderVerde.value;
    const blanco = sliderBlanco.value;
    const rojo = sliderRojo.value;

    // Actualizar los recuadros con los colores
    verdeDisplay.style.backgroundColor = `rgb(0, ${verde}, 0)`;
    blancoDisplay.style.backgroundColor = `rgb(${blanco}, ${blanco}, ${blanco})`;
    rojoDisplay.style.backgroundColor = `rgb(${rojo}, 0, 0)`;

    // Mostrar el código RGB y hexadecimal
    verdeCode.innerText = `RGB(0, ${verde}, 0), Hex: ${rgbToHex(0, verde, 0)}`;
    blancoCode.innerText = `RGB(${blanco}, ${blanco}, ${blanco}), Hex: ${rgbToHex(blanco, blanco, blanco)}`;
    rojoCode.innerText = `RGB(${rojo}, 0, 0), Hex: ${rgbToHex(rojo, 0, 0)}`;
}

// Función de conversión de RGB a Hexadecimal
function rgbToHex(r, g, b) {
    return "#" + [r, g, b].map(x => {
        const hex = parseInt(x).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }).join("");
}

// Escuchar cambios en los sliders
sliderVerde.addEventListener('input', updateColor);
sliderBlanco.addEventListener('input', updateColor);
sliderRojo.addEventListener('input', updateColor);

// Inicializar con colores predeterminados
updateColor();
