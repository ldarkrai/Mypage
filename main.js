document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name === "" || email === "") {
        alert('Por favor, completa los campos requeridos.');
        return;
    }

    alert('¡Formulario enviado con éxito!');
});
