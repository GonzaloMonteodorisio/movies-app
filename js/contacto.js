document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let valid = true;

    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');
    if (name.trim() === '') {
        nameError.textContent = 'El nombre es obligatorio.';
        valid = false;
    } else {
        nameError.textContent = '';
    }

    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Ingrese un correo electrónico válido.';
        valid = false;
    } else {
        emailError.textContent = '';
    }

    const genderError = document.getElementById('genderError');
    if (!document.querySelector('input[name="gender"]:checked')) {
        genderError.textContent = 'Seleccione un género.';
        valid = false;
    } else {
        genderError.textContent = '';
    }

    const comments = document.getElementById('comments').value;
    const commentsError = document.getElementById('commentsError');
    if (comments.trim() === '') {
        commentsError.textContent = 'El campo de comentarios es obligatorio.';
        valid = false;
    } else {
        commentsError.textContent = '';
    }

    const country = document.getElementById('country').value;
    const countryError = document.getElementById('countryError');
    if (country === '') {
        countryError.textContent = 'Seleccione un país de origen.';
        valid = false;
    } else {
        countryError.textContent = '';
    }

    if (valid) {
        Swal.fire({
            icon: 'success',
            title: 'Formulario enviado',
            text: 'Tu formulario ha sido enviado exitosamente.',
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, completa todos los campos obligatorios correctamente.',
        });
    }
});
