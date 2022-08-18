const form2 = document.getElementById("form2");
const fname = document.getElementById("fname");
const email2 = document.getElementById("email2");
const pass2 = document.getElementById("pass2");
const conpass = document.getElementById("conpass");

function showError(input,message){
    const inputWrap = input.parentElement;
    inputWrap.className ='form-input-wrap error';
    const small = inputWrap.querySelector('small');
    small.innerText= message;
}

function showSuccess(input){
    const inputWrap = input.parentElement;
    inputWrap.className = 'form-input-wrap success';
}

function isValidEmail(email)
{
    const fe= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return fe.test(String(email).toLowerCase());
}

fname.addEventListener('click',function(e){
    e.preventDefault();

    if(fname.value ===''){
        showError(fname,'Name is required');
    }
    else{
        showSuccess(fname);
    }

    
    email2.addEventListener('click',function(e){
        e.preventDefault();
    if(email2.value ===''){
        showError(email2,'Email is required');
    }else if(!isValidEmail(email2.value)){
        showError(email2,'Email is not valid');
    }
    else{
        showSuccess(email2);
    }


    pass2.addEventListener('click',function(e){
        e.preventDefault();
    if(pass2.value ===''){
        showError(pass2,'Password is required');
    }
    else{
        showSuccess(pass2);
    }


    conpass.addEventListener('click',function(e){
        e.preventDefault();
    if(conpass.value ===''){
        showError(conpass,'confirm password is required');
    }
    else if(pass2.value !== conpass.value){
        showError(conpass,'confirm password is not equal');
    }
    else{
        showSuccess(conpass);
    }
})
})
}) 
});
