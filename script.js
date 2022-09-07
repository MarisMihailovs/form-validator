const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
    // using contraint API 
    isValid = form.checkValidity();

    if (!isValid) {
        // style main message for an error
        message.textContent = 'Please fill out all fields';
        message.style.color = 'red';
        messageContainer.style.borderColor = "red";
        return;
    }
    // check if passwords match
    if (isValid && password1El.value === password2El.value) {
        passwordsMatch = true;
        message.textContent = 'Sign up success!';
        message.style.color = 'green';
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    } else {
        passwordsMatch = false;
        message.textContent = 'Make sure passwords match!';
        message.style.color = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;
    }

}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    //  user data pasing to DB or smth
    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    //    validat form 
    validateForm();
    // submit data if valid
    if (isValid && passwordsMatch) {
        storeFormData();
    }
}

// event listener 

form.addEventListener('submit', processFormData);
