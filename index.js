document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.container').classList.toggle('s-signup')
	}
);

const form = document.getElementById("form");
const email1 = document.getElementById("email1");
const pass1 = document.getElementById("pass1");

function showError(input,message){
    const inputWrap = input.parentElement;
    inputWrap.className = 'form-input-wrap error';
    const small = inputWrap.querySelector('small');
    small.innerText = message;
}

function showSuccess(input){
    const inputWrap = input.parentElement;
    inputWrap.className ='form-input-wrap success';
    
}

function isValidEmail(email)
{
    const re= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

email1.addEventListener('click',function(e){
    e.preventDefault();

    if(email1.value ===''){
        showError(email1,'Email is required');
    }else if(!isValidEmail(email1.value)){
        showError(email1,'Email is not valid');
    }
    else{
        showSuccess(email1);
    }
})
  pass1.addEventListener('click',function(e){
      e.preventDefault();

    if(pass1.value ===''){
        showError(pass1,'Password is required');
    }
    else{
        showSuccess(pass1);
    }
})


