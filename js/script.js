var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

document.getElementById('contactForm').addEventListener('submit', function (event) {
    let isValid = true;

    // Limpar mensagens de erro anteriores
    const errors = document.querySelectorAll('.error-message');
    errors.forEach(error => error.style.display = 'none');

    // Validação do Nome
    const fname = document.getElementById('fname').value.trim();
    if (fname === '') {
        const fnameError = document.getElementById('fnameError');
        fnameError.textContent = 'O nome é obrigatório.';
        fnameError.style.display = 'block';
        isValid = false;
    }

    // Validação do Sobrenome
    const lname = document.getElementById('lname').value.trim();
    if (lname === '') {
        const lnameError = document.getElementById('lnameError');
        lnameError.textContent = 'O sobrenome é obrigatório.';
        lnameError.style.display = 'block';
        isValid = false;
    }

    // Validação do Email
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        const emailError = document.getElementById('emailError');
        emailError.textContent = 'O email é obrigatório.';
        emailError.style.display = 'block';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        const emailError = document.getElementById('emailError');
        emailError.textContent = 'Por favor, insira um email válido.';
        emailError.style.display = 'block';
        isValid = false;
    }

    // Prevenir o envio se houver erros
    if (!isValid) {
        event.preventDefault();
    }
});
