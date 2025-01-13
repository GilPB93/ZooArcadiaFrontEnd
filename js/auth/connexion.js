// VERIFICITION DES CHAMPS DU FORMULAIRE DE CONNEXION
const inputEmail = document.getElementById('EmailInput');
const inputPassword = document.getElementById('PasswordInput');
const btnConnexion = document.getElementById('btnSignin');
const errorEmail = document.getElementById('emailError');
const errorPassword = document.getElementById('passwordError');
const iconEmail = document.getElementById('iconEmail');
const iconPassword = document.getElementById('iconPassword');

inputEmail.addEventListener('keyup', validateForm);
inputPassword.addEventListener('keyup', validateForm);

function validateForm() {
    validateRequired(inputEmail);
    validateRequired(inputPassword);
    validateEmail(inputEmail);
    validatePassword(inputPassword);
}

function validateRequired(input) {
    if (input.value.trim() === '') {
        showError(input, 'Ce champ est obligatoire');
    } else {
        showSuccess(input);
    }
}

function validateEmail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.value)) {
        showError(input, 'Email invalide');
    } else {
        showSuccess(input);
    }
}

function validatePassword(input) {
    // Exemple de validation de mot de passe (au moins 6 caractères)
    if (input.value.length < 6) {
        showError(input, 'Le mot de passe doit comporter au moins 6 caractères');
    } else {
        showSuccess(input);
    }
}

function showError(input, message) {
    const errorElement = input === inputEmail ? errorEmail : errorPassword;
    const iconElement = input === inputEmail ? iconEmail : iconPassword;

    errorElement.textContent = message;
    input.style.borderColor = 'red';  // Bordure rouge en cas d'erreur
    iconElement.classList.remove('bi-check-circle', 'text-success');
    iconElement.classList.add('bi-exclamation-circle', 'text-danger'); // Afficher l'icône d'erreur
}

function showSuccess(input) {
    const errorElement = input === inputEmail ? errorEmail : errorPassword;
    const iconElement = input === inputEmail ? iconEmail : iconPassword;

    errorElement.textContent = '';
    input.style.borderColor = 'green';  // Bordure verte si tout est correct
    iconElement.classList.remove('bi-exclamation-circle', 'text-danger');
    iconElement.classList.add('bi-check-circle', 'text-success'); // Afficher l'icône de succès
}

