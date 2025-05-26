const form = document.getElementById("form");
const uname = document.getElementById("uname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
const tandc = document.getElementById("tandc");

var isValidName = false;
var isValidEmail = false;
var isValidPassword = false;
var isValidCpassword = false;
var isTandCchecked = false;

uname.addEventListener('keyup', checkUsername);
email.addEventListener('keyup', checkEmail);
password.addEventListener('keyup', passwordCheck);
cpassword.addEventListener('keyup', confirmPasswordCheck);
tandc.addEventListener('change', tandCCheck);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
})

function validateForm() {
    checkUsername();
    checkEmail();
    passwordCheck();
    confirmPasswordCheck();
    tandCCheck();

    if (isValidName && isValidEmail && isValidPassword && isValidCpassword && isTandCchecked) {
        form.submit();
    }
}

function setError(input, message) {
    let parent = input.parentElement;
    parent.classList.add('error');
    parent.classList.remove('success');
    parent.querySelector('small').innerText = message;
}

function setSucess(input, message) {
    let parent = input.parentElement;
    parent.classList.add('success');
    parent.classList.remove('error');
    parent.querySelector('small').innerText = message;
}

function checkUsername() {
    let nameVal = uname.value.trim();
    if (nameVal === '') {
        setError(uname, 'username cannot be empty');
        isValidName = false;
    } else if (nameVal.length < 3) {
        setError(uname, 'username length should be minimum 3 characters');
        isValidName = false;
    } else {
        setSucess(uname, 'username is valid');
        isValidName = true;
    }
}

function validEmailcheck(input) {
    let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return emailReg.test(input);
}

function checkEmail() {
    let emailVal = email.value.trim();
    if (emailVal === '') {
        setError(email, 'Email cannot be empty');
        isValidEmail = false;
    } else if (!validEmailcheck(emailVal)) {
        setError(email, 'Invalid email format');
        isValidEmail = false;
    } else {
        setSucess(email, 'Email is valid');
        isValidEmail = true;
    }
}

function passwordCheck() {
    let passwordVal = password.value.trim();
    if (passwordVal === '') {
        setError(password, 'Password cannot be empty');
        isValidPassword = false;
    } else if (passwordVal.length < 5) {
        setError(password, 'Password must be at least 5 characters');
        isValidPassword = false;
    } else {
        setSucess(password, 'Password is valid');
        isValidPassword = true;
    }
}

function confirmPasswordCheck() {
    let passwordVal = password.value.trim();
    let cpasswordVal = cpassword.value.trim();

    if (cpasswordVal === '') {
        setError(cpassword, 'Please confirm your password');
        isValidCpassword = false;
    } else if (cpasswordVal !== passwordVal) {
        setError(cpassword, 'Passwords do not match');
        isValidCpassword = false;
    } else {
        setSucess(cpassword, 'Passwords match');
        isValidCpassword = true;
    }
}

function tandCCheck() {
    if (!tandc.checked) {
        setError(tandc, 'click on agree terms and conditions');
        isTandCchecked = false;
    } else {
        isTandCchecked = true;
    }
}