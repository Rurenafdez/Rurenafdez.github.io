// Al cargar la página, verifica la preferencia de modo oscuro
window.addEventListener('load', function() {
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-icon').classList.remove('fa-moon');
        document.getElementById('theme-icon').classList.add('fa-sun');
    }
});

// Manejador para el cambio de modo oscuro
document.getElementById('toggle-dark-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const themeIcon = document.getElementById('theme-icon');
    
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('dark-mode', 'true'); // Guarda preferencia en modo oscuro
        alert('Modo oscuro activado');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('dark-mode', 'false'); // Guarda preferencia en modo claro
        alert('Modo oscuro desactivado');
    }
});

// Función para enviar correo electrónico
function sendEmail(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la forma convencional

    const name = document.getElementById('name').value.trim(); // Eliminar espacios en blanco
    const email = document.getElementById('email').value.trim(); // Eliminar espacios en blanco
    const message = document.getElementById('message').value.trim(); // Eliminar espacios en blanco

    if (!email) {
        alert('Por favor, introduce una dirección de correo electrónico válida.');
        return;
    }

    const subject = encodeURIComponent("Nuevo mensaje de contacto de " + name);
    const body = encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`);

    // Aquí se abre el cliente de correo con los datos
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

    // Cierra el modal después de enviar
    $('#contactModal').modal('hide');
}

document.querySelectorAll('.recipe-image').forEach(image => {
    image.addEventListener('click', function() {
      // Obtenemos el título, los ingredientes y las instrucciones desde los atributos de datos
      const title = this.getAttribute('data-recipe-title');
      const ingredients = this.getAttribute('data-recipe-ingredients');
      const instructions = this.getAttribute('data-recipe-instructions');
      
      // Insertamos el contenido en el modal
      document.getElementById('recipeTitle').innerHTML = title;
      document.getElementById('recipeIngredients').innerHTML = ingredients;
      document.getElementById('recipeInstructions').innerHTML = instructions;

      // Mostramos el modal
      $('#recipeModal').modal('show');
    });
  });