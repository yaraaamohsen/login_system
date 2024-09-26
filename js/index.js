////START HTML BY APPENDING METHOD
 var section = document.createElement('section');
 section.classList.add('w-100');
 document.body.appendChild(section);

 var div = document.createElement('div');
 div.classList.add('main', 'container' , 'mx-auto', 'text-center');
 section.appendChild(div);

 var signInTitle = document.createElement('h3');
 signInTitle.classList.add('fw-bold', 'mt-3' , 'd-none');
 signInTitle.setAttribute('id', 'form-title');
 var signInTitleText = document.createTextNode('Sign in to');
 signInTitle.appendChild(signInTitleText);
 div.appendChild(signInTitle);

 var SignUpTitle = document.createElement('h3');
 SignUpTitle.classList.add('fw-bold', 'mt-3');
 SignUpTitle.setAttribute('id', 'form-title');
 var SignUpTitleText = document.createTextNode('Sign Up Here');
 SignUpTitle.appendChild(SignUpTitleText);
 div.appendChild(SignUpTitle);

 var subtitle = document.createElement('p');
 subtitle.classList.add('text-muted', 'mb-4');
 var subtitleText = document.createTextNode('Lorem Ipsum is simply');
 subtitle.appendChild(subtitleText);
 div.appendChild(subtitle);

 var nameInput = document.createElement("input");
 nameInput.setAttribute('type', 'text');
 nameInput.setAttribute('name', 'name');
 nameInput.setAttribute('placeholder', 'Enter Your Name')
 nameInput.classList.add('form-control', 'my-3');
 div.appendChild(nameInput);

 var emailInput = document.createElement('input');
 emailInput.setAttribute('type', 'email');
 emailInput.setAttribute('id', 'email');
 emailInput.classList.add('form-control', 'my-3');
 emailInput.setAttribute('placeholder', 'Enter email or username');
 div.appendChild(emailInput);

 var passInput = document.createElement('input');
 passInput.setAttribute('type', 'password');
 passInput.setAttribute('id', 'password');
 passInput.classList.add('form-control', 'my-3');
 passInput.setAttribute('placeholder', 'Enter Your Password');
 div.appendChild(passInput);

 var forgotPass = document.createElement('a');
 forgotPass.classList.add('form-text', 'd-block', 'mb-3', 'text-end');
 forgotPass.setAttribute('href', '#');
 var forgotPassText = document.createTextNode('Forgot password?');
 forgotPass.appendChild(forgotPassText);
 div.appendChild(forgotPass);

//warning messages
 var validPass = document.createElement('p');
validPass.classList.add('text-danger', 'fs-5', 'd-none')
div.appendChild(validPass);
var validPassText = document.createTextNode('password must contain at least 8 charcters & small and large charcter');
validPass.appendChild(validPassText);

var success = document.createElement('p');
success.classList.add('alert', 'alert-success', 'fs-4', 'd-none')
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
buttonIn.classList.add('btn', 'btn-custom' , 'd-none', 'w-100');

var buttonUp = document.createElement('button');
div.appendChild(buttonUp);
var textBU = document.createTextNode('Sign Up');
buttonUp.appendChild(textBU);
buttonUp.classList.add('btn', 'btn-custom', 'w-100');

 var socialText = document.createElement('p');
 socialText.classList.add('my-3', 'text-muted');
 var socialTextContent = document.createTextNode('or continue with');
 socialText.appendChild(socialTextContent);
 div.appendChild(socialText);

 var socialIcons = document.createElement('div');
 socialIcons.classList.add('social-icons', 'mb-3');
 var facebookIcon = document.createElement('i');
 facebookIcon.classList.add('fab', 'fa-facebook');
 var appleIcon = document.createElement('i');
 appleIcon.classList.add('fab', 'fa-apple');
 var googleIcon = document.createElement('i');
 googleIcon.classList.add('fab', 'fa-google');
 socialIcons.append(facebookIcon, appleIcon, googleIcon);
 div.appendChild(socialIcons);

var pI = document.createElement('p');
div.appendChild(pI);
pI.classList.add('py-3');
var textPI = document.createTextNode('You have an account? ');
pI.appendChild(textPI);

var aI = document.createElement('a');
aI.setAttribute('href', '#')
pI.appendChild(aI);
aI.classList.add('text-decoration-none', 'text-purple');
var textAI = document.createTextNode('Log In');
aI.appendChild(textAI);

var pU = document.createElement('p');
div.appendChild(pU);
pU.classList.add('py-3', 'd-none');
var textPU = document.createTextNode("Don't have an account? ");
pU.appendChild(textPU);

var aU = document.createElement('a');
aU.setAttribute('href', '#')
pU.appendChild(aU);
aU.classList.add('text-decoration-none', 'text-purple');
var textAU = document.createTextNode('Sign Up');
aU.appendChild(textAU);
////END HTML BY APPENDING METHOD


if (localStorage.getItem('User Information') == null) {
    var usersData = [];
}
else {
    usersData = JSON.parse(localStorage.getItem('User Information'));
}

function emailRegistered() {
    if (localStorage.getItem('User Information') == null) {
        return false;
    }
    else {
        var y = JSON.parse(localStorage.getItem('User Information'));
        for (var i = 0; i < y.length; i++) {
            if (emailInput.value == y[i].UserEmail) {
                return true;
            }
        }
    }
}

emailInput.addEventListener('click', function () {
    if (!emailFound.classList.contains('d-none')) {
        emailFound.classList.add('d-none');
    }
})

buttonUp.addEventListener('click', function () {
    if (emailRegistered() === true) {
        emailFound.classList.remove('d-none');
        success.classList.add('d-none');
    }
    else {
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
    nameInput.classList.remove('is-valid', 'is-invalid');
    emailInput.classList.remove('is-valid', 'is-invalid');
    passInput.classList.remove('is-valid', 'is-invalid');
}

(function inputValidation(){
    var regex = {
        nameInput: /^[a-z||A-Z]\w{3,20}/,
        emailInput: /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        passInput: /^[a-z||A-Z]\w{8,}/
    }
    
    nameInput.addEventListener('input', function () {
        if (regex['nameInput'].test(nameInput.value)) {
          nameInput.classList.add('is-valid');
          nameInput.classList.remove('is-invalid')
        }
        else{
          nameInput.classList.remove('is-valid');
          nameInput.classList.add('is-invalid')
        }
    }) 

    emailInput.addEventListener('input', function () {
        if (regex['emailInput'].test(emailInput.value)) {
          emailInput.classList.add('is-valid');
          emailInput.classList.remove('is-invalid')
        }
        else{
          emailInput.classList.remove('is-valid');
          emailInput.classList.add('is-invalid')
        }
    }) 

    passInput.addEventListener('input', function () {
        if (regex['passInput'].test(passInput.value)) {
          passInput.classList.add('is-valid');
          passInput.classList.remove('is-invalid');
          validPass.classList.add('d-none')
        }
        else{
          passInput.classList.remove('is-valid');
          passInput.classList.add('is-invalid');
          validPass.classList.remove('d-none')
        }
    })
})()


function validation() {
    if (nameInput.classList.contains('is-valid') &&
    emailInput.classList.contains('is-valid') &&
    passInput.classList.contains('is-valid')) {
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
    danger.classList.add('d-none');
    SignUpTitle.classList.add('d-none');
    signInTitle.classList.remove('d-none')
   clearForm()
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
    success.classList.add('d-none');
    SignUpTitle.classList.remove('d-none');
    signInTitle.classList.add('d-none')
   clearForm()
})

buttonIn.addEventListener('click', function () {
    if (localStorage.getItem('User Information') == null) {
        invalid.classList.remove('d-none')
    } else {
        invalid.classList.add('d-none')
        var x = JSON.parse(localStorage.getItem('User Information'));
        for (var i = 0; i < x.length; i++) {
            setTimeout(() => {
                invalid.classList.remove('d-none');
            }, 2000);
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
    }
})
