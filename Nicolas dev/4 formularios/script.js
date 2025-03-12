// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Referencias a elementos del DOM
    const formulario = document.getElementById('surveyForm');
    const alertaExito = document.getElementById('successAlert');
    const alertaError = document.getElementById('errorAlert');
    const btnEnviar = formulario.querySelector('button[type="submit"]');
    
    // Actualizar valor del slider de calificación
    const sliderCalificacion = document.getElementById('calificacion');
    sliderCalificacion.addEventListener('input', function() {
        this.nextElementSibling.value = this.value;
    });
    
    // Validar el rango de hora (que hora fin sea mayor que hora inicio)
    const horaInicio = document.getElementById('horaInicio');
    const horaFin = document.getElementById('horaFin');
    
    horaFin.addEventListener('change', function() {
        if (horaInicio.value && horaFin.value && horaInicio.value >= horaFin.value) {
            alert('La hora de fin debe ser posterior a la hora de inicio');
            horaFin.value = '';
        }
    });
    
    // Manejar el envío del formulario
    formulario.addEventListener('submit', function(evento) {
        // Prevenir el comportamiento predeterminado del formulario
        evento.preventDefault();
        
        // Crear objeto FormData para recopilar los datos del formulario
        const datosFormulario = new FormData(this);
        
        // Cambiar estado del botón durante el envío
        const textoOriginal = btnEnviar.textContent;
        btnEnviar.textContent = 'Enviando...';
        btnEnviar.disabled = true;
        
        // Ocultar alertas previas
        alertaExito.style.display = 'none';
        alertaError.style.display = 'none';
        
        // Enviar datos al servidor mediante fetch API
        fetch('https://httpbin.org/post', {
            method: 'POST',
            body: datosFormulario
        })
        .then(respuesta => {
            // Verificar si la respuesta es exitosa
            if (!respuesta.ok) {
                throw new Error('Error en la respuesta del servidor');
            }
            return respuesta.json();
        })
        .then(datos => {
            // Procesar respuesta exitosa
            console.log('Respuesta del servidor:', datos);
            
            // Mostrar mensaje de éxito
            alertaExito.style.display = 'block';
            
            // Reiniciar formulario
            formulario.reset();
            
            // Volver a establecer el valor predeterminado del slider
            sliderCalificacion.nextElementSibling.value = 5;
            sliderCalificacion.value = 5;
        })
        .catch(error => {
            // Manejar errores
            console.error('Error:', error);
            
            // Mostrar mensaje de error
            alertaError.style.display = 'block';
        })
        .finally(() => {
            // Restaurar estado del botón
            btnEnviar.textContent = textoOriginal;
            btnEnviar.disabled = false;
            
            // Desplazar la página hacia el mensaje de alerta
            const alertaVisible = alertaExito.style.display === 'block' ? alertaExito : alertaError;
            if (alertaVisible.style.display === 'block') {
                alertaVisible.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});