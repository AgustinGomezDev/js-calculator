let display = document.getElementById('display'); // Obtener el elemento display del HTML
let displayValue = '';
buttons = document.querySelectorAll('button');  // Obtener todos los botones del HTML

for (item of buttons) { // Bucle entre todos los botones
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText; // Obtener el texto del botón
        if (buttonText == 'AC'){
            displayValue = '';  // Borrar todo
            display.value = displayValue;
        }else if (buttonText == 'CE'){
            displayValue = display.value.slice(0, -1); // Borrar el ultimo caracter ingresado
            display.value = displayValue;
        }else if(buttonText == '=' && displayValue == ''){
            displayValue = '0'; // Si no hay nada en el display, muestra 0
            display.value = displayValue;
        }
        else if(buttonText == '='){
            displayValue = eval(displayValue); // Calcula el resultado
            display.value = displayValue; // Muestra el resultado
        }else{
            displayValue += buttonText; // Agregar el valor del boton al display
            display.value = displayValue; // Actualizar el display
            
        }
    }
)}

window.onerror = function(){
    Swal.fire({
        icon: 'error', // Icono de error
        title: 'Oops...', // Titulo del mensaje
        text: 'Please, enter a valid expression!', // Mensaje de error
        background: '#161b22', // Color de fondo
        iconColor: '#cc3636', // Color del icono
        color: '#ffffff', // Color del texto
        confirmButtonColor: '#3099ff' // Color del boton de confirmación
    })
    displayValue = '';
    display.value = displayValue;
}
