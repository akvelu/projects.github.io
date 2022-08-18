document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.container').classList.toggle('s-signup')
	}
);
const email1 = document.querySelector('#email1');
const pass1 = document.querySelector('#pass1');


const form = document.querySelector('#form');

const checkEmail = () => {
    let valid = false;
    const email = email1.value.trim();
    if (!isRequired(email)) {
        showError(email1, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(email1, 'Email is not valid.')
    } else {
        showSuccess(email1);
        valid = true;
    }
    return valid;
};

const checkPassword = () => {
    let valid = false;

    const password = pass1.value.trim();

    if (!isRequired(password)) {
        showError(pass1, 'Password cannot be blank.');
    } else if (!isPasswordSecure(password)) {
        showError(pass1, 'Password must 8 letter,1 no ,1 lowcase ,1 uppercase, 1 special char');
    } else {
        showSuccess(pass1);
        valid = true;
    }

    return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


function showError(input, message){
    const inputWrap = input.parentElement;
    inputWrap.className = 'form-input-wrap error';
    const small = inputWrap.querySelector('small');
    small.innerText = message;
};

function showSuccess(input){
    // get the form-field element
    const inputWrap = input.parentElement;
    inputWrap.className ='form-input-wrap success';
}


form.addEventListener('click', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
     let isEmailValid = checkEmail(),
         isPasswordValid = checkPassword();
        

    let isFormValid = isEmailValid &&
        isPasswordValid;
        

    // submit to the server if the form is valid
    if (isFormValid) {

    }
});


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
    }
}));