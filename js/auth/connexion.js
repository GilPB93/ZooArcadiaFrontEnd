// VALIDATION DES CHAMPS DE CONNEXION
const inputEmail = document.getElementById('EmailInput');
const inputPassword = document.getElementById('PasswordInput');
const btnConnexion = document.getElementById('btnSignin');
const errorEmail = document.getElementById('emailError');
const errorPassword = document.getElementById('passwordError');
const iconEmail = document.getElementById('iconEmail');
const iconPassword = document.getElementById('iconPassword');

inputEmail.addEventListener('keyup', () => validateInput(inputEmail, errorEmail, iconEmail));
inputPassword.addEventListener('keyup', () => validateInput(inputPassword, errorPassword, iconPassword));

btnConnexion.addEventListener('click', checkCredentials);

function validateInput(input, errorElement, iconElement) {
    const isValid = input.value.trim() !== '';
    const isEmailValid = input === inputEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
    const isPasswordValid = input === inputPassword && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/.test(input.value);

    if (!isValid) {
        showError(input, errorElement, iconElement, 'Ce champ est obligatoire');
    } else if (input === inputEmail && !isEmailValid) {
        showError(input, errorElement, iconElement, 'Email invalide');
    } else if (input === inputPassword && !isPasswordValid) {
        showError(input, errorElement, iconElement, 'Le mot de passe doit contenir minimum 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial');
    } else {
        showSuccess(input, errorElement, iconElement);
    }
}

    // Affichage des erreurs
function showError(input, errorElement, iconElement, message) {
    errorElement.textContent = message;
    input.style.borderColor = 'red';
    iconElement.classList.remove('bi-check-circle', 'text-success');
    iconElement.classList.add('bi-exclamation-circle', 'text-danger');
}

    // Affichage du succès
function showSuccess(input, errorElement, iconElement) {
    errorElement.textContent = '';
    input.style.borderColor = 'green';
    iconElement.classList.remove('bi-exclamation-circle', 'text-danger');
    iconElement.classList.add('bi-check-circle', 'text-success');
}

// GESTION DE CONNEXION
function checkCredentials() {
    const emailValid = inputEmail.value === "test@email.com"; //temporaire
    const passwordValid = inputPassword.value === "Test@123"; //temporaire

    if (emailValid && passwordValid) {
        const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf"; //temporaire
        setToken(token);
        setCookie(RoleCookieName, "admin", 7); //temporaire
        window.location.replace('/');
    } else {
        showError(inputEmail, errorEmail, iconEmail, 'Identifiants incorrects');
        showError(inputPassword, errorPassword, iconPassword, 'Identifiants incorrects');
    }
}

