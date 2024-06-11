var section = document.createElement('section');
section.classList.add('w-50', 'mx-auto')
document.body.appendChild(section);
var div = document.createElement('div');
div.classList.add('text-center', 'w-100', 'mt-5', 'p-5', 'main');
section.appendChild(div);

var h1 = document.createElement('h1');
div.appendChild(h1)
var textH = document.createTextNode('Smart Login System');
h1.appendChild(textH)

var nameInput = document.createElement("input");
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('name', 'name');
nameInput.setAttribute('placeholder', 'Enter Your Name')
nameInput.classList.add('form-control', 'my-4');
div.appendChild(nameInput);

var emailInput = document.createElement("input");
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('name', 'email');
emailInput.setAttribute('placeholder', 'Enter Your Email')
emailInput.classList.add('form-control', 'my-4');
div.appendChild(emailInput);

var passInput = document.createElement("input");
passInput.setAttribute('type', 'password');
passInput.setAttribute('name', 'password');
passInput.setAttribute('placeholder', 'Enter Your Password')
passInput.classList.add('form-control', 'my-4');
div.appendChild(passInput);

var success = document.createElement('p');
success.classList.add('text-success', 'fs-4', 'd-none')
div.appendChild(success);
var successText = document.createTextNode('success');
success.appendChild(successText);

var emailFound = document.createElement('p');
emailFound.classList.add('text-danger', 'fs-4', 'd-none')
div.appendChild(emailFound);
var emailFoundText = document.createTextNode('email is registed');
emailFound.appendChild(emailFoundText);

var danger = document.createElement('p');
danger.classList.add('text-danger', 'fs-5', 'd-none')
div.appendChild(danger);
var dangerText = document.createTextNode('All inputs is required');
danger.appendChild(dangerText);

var invalid = document.createElement('p');
invalid.classList.add('text-danger', 'fs-5', 'd-none')
div.appendChild(invalid);
var invalidText = document.createTextNode('Email or password incorrect');
invalid.appendChild(invalidText);

var buttonIn = document.createElement('button');
div.appendChild(buttonIn);
var textBI = document.createTextNode('Log In');
buttonIn.appendChild(textBI);
buttonIn.classList.add('btn', 'btn-outline-info', 'w-100', 'd-none');

var buttonUp = document.createElement('button');
div.appendChild(buttonUp);
var textBU = document.createTextNode('Sign Up');
buttonUp.appendChild(textBU);
buttonUp.classList.add('btn', 'btn-outline-info', 'w-100');

var pI = document.createElement('p');
div.appendChild(pI);
pI.classList.add('py-3', 'text-white');
var textPI = document.createTextNode('You have an account? ');
pI.appendChild(textPI);

var aI = document.createElement('a');
aI.setAttribute('href', '#')
pI.appendChild(aI);
aI.classList.add('text-decoration-none', 'text-white');
var textAI = document.createTextNode('Log In');
aI.appendChild(textAI);

var pU = document.createElement('p');
div.appendChild(pU);
pU.classList.add('py-3', 'text-white', 'd-none');
var textPU = document.createTextNode("Don't have an account? ");
pU.appendChild(textPU);

var aU = document.createElement('a');
aU.setAttribute('href', '#')
pU.appendChild(aU);
aU.classList.add('text-decoration-none', 'text-white');
var textAU = document.createTextNode('Sign Up');
aU.appendChild(textAU);





















if (localStorage.getItem('User Information') == null) {
    var usersData = [];
}
else {
    usersData = JSON.parse(localStorage.getItem('User Information'));
}

function emailRegistered() {
    if(localStorage.getItem('User Information') == null){
        return false;
    }
    else{
        var y = JSON.parse(localStorage.getItem('User Information'));
        for (var i = 0; i < y.length; i++) {
           
            if (emailInput.value == y[i].UserEmail) {
                return true;
            }
        }
    }
}

emailInput.addEventListener('click', function(){
    if(!emailFound.classList.contains('d-none')){
        emailFound.classList.add('d-none');
    }
})

buttonUp.addEventListener('click', function () {
    if(emailRegistered() === true){
        emailFound.classList.remove('d-none');
        success.classList.add('d-none');
    }
    else{
        validation();
        if (danger.classList.contains('d-none')) {
            emailFound.classList.add('d-none');
            var userInfo = {
                userName: nameInput.value,
                UserEmail: emailInput.value,
                UserPass: passInput.value
            }
            usersData.push(userInfo);
            localStorage.setItem('User Information', JSON.stringify(usersData));
            clearForm();
            setTimeout(logInPage, 500);
        }
    }
})

function clearForm() {
    nameInput.value = null;
    emailInput.value = null;
    passInput.value = null;
}

function validation() {
    var regex = {
        nameInput: /^[a-z||A-Z]\w{2,}/,
        emailInput: /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        passInput: /^[a-z||A-Z]\w{8,}/
    }
    if (regex['nameInput'].test(nameInput.value) &&
        regex['emailInput'].test(emailInput.value) &&
        regex['passInput'].test(passInput.value)) {
        success.classList.remove('d-none');
        danger.classList.add('d-none');
    }
    else {
        danger.classList.remove('d-none');
        success.classList.add('d-none');
    }
}

function logInPage() {
    nameInput.classList.add('d-none');
    pI.classList.add('d-none');
    pU.classList.remove('d-none');
    buttonIn.classList.remove('d-none');
    buttonUp.classList.add('d-none');
    success.classList.add('d-none');
}

aI.addEventListener('click', function () {
    logInPage();
})

aU.addEventListener('click', function () {
    nameInput.classList.remove('d-none');
    pI.classList.remove('d-none');
    pU.classList.add('d-none');
    buttonIn.classList.add('d-none');
    buttonUp.classList.remove('d-none');
    success.classList.add('d-none')
})

buttonIn.addEventListener('click', function () {
    var x = JSON.parse(localStorage.getItem('User Information'));
    for (var i = 0; i < x.length ; i++){
        setTimeout(() => {
            invalid.classList.remove('d-none');
        }, 1000);
        if (emailInput.value == x[i].UserEmail &&
            passInput.value == x[i].UserPass) {
                console.log(x[i].UserEmail);
                invalid.classList.add('d-none');
            setTimeout(() => {
                window.location.href = 'home.html'; 
            }, 500);
            localStorage.setItem('userName', x[i].userName);
        }
    }
})
