// Switching between the Login page and Resitration Page

let btnRegLogin = document.querySelector('#btnReg');
let btnRegCreate = document.querySelector('#btnLog');
let loginPage = document.querySelector('.login');
let registerPage = document.querySelector('.registration')

btnRegLogin.addEventListener('click', regLogin);
btnRegCreate.addEventListener('click', loginReg);

function regLogin () {

    if(registerPage.style.display != 'block') {

        registerPage.style.display = 'block';

        loginPage.style.display = 'none';

    } else {
        loginPage.style.display = 'block';
    }
}
function loginReg() {

    if (loginPage.style.display != 'block') {

        loginPage.style.display = 'block';

        registerPage.style.display = 'none';

    } else {
        registerPage.style.display = 'block';
    }
    
}

// Login Page Authentication

let loginBtn = document.querySelector('#loginButton');
const userCheck = document.querySelector('#userchk');
const userName = document.querySelector('#usernameLogin');
const passCheck = document.querySelector('#passchk');
const passWord = document.querySelector('#passwordLogin');

userName.addEventListener('keyup', userData);
passWord.addEventListener('keyup', passData);
loginBtn.addEventListener('click', loginFunction);

function loginFunction() {
    
    if (userName.value == "") {
        userCheck.style.display = 'block';
        
    } else if (passWord.value == "") {
        passCheck.style.display = 'block';
    } else {
        userCheck.style.display = 'none';
        passCheck.style.display = 'none';
    }   
}

function userData() {
    userCheck.style.display = 'none';
}
function passData() {
    passCheck.style.display = 'none';
}

// Registration Page Authentication
let regButton = document.querySelector('#btnReg2');
const fnameInp = document.querySelector('#fnameId');
const fnameCheck = document.querySelector('#fnamechk');
const lnameInp = document.querySelector('#lnameId');
const lnameCheck = document.querySelector('#lnamechk');
const emailInp = document.querySelector('#emailId');
const emailCheck = document.querySelector('#emailchk');
const regPassInp = document.querySelector('#passwordId');
const regPassCheck = document.querySelector('#regpasschk');
const regCpassInp = document.querySelector('#cpassId');
const regCpassCheck = document.querySelector('#cpasschk');

regButton.addEventListener('click', regFunction);
fnameInp.addEventListener('keyup', fnameData);
lnameInp.addEventListener('keyup', lnameData);
emailInp.addEventListener('keyup', emailData);
regPassInp.addEventListener('keyup', regPassData);
regCpassInp.addEventListener('keyup', regCpassData);

function regFunction() {
    if (fnameInp.value == "") {
        fnameCheck.style.display = 'block';
        
    } else if (lnameInp.value == "") {
        lnameCheck.style.display = 'block';

    } else if (emailInp.value == "") {
        emailCheck.style.display = 'block';

    } else if (regPassInp.value == "") {
        regPassCheck.style.display = 'block';

    } else if (regCpassInp.value == "") {
        regCpassCheck.style.display = 'block';

    } else {
        fnameCheck.style.display = 'none';
        lnameCheck.style.display = 'none';
        emailCheck.style.display = 'none';
        regPassCheck.style.display = 'none';
        regCpassCheck.style.display = 'none';
    }
}

function fnameData() {
    fnameCheck.style.display = 'none';
}
function lnameData() {
    lnameCheck.style.display = 'none';
}
function emailData() {
    emailCheck.style.display = 'none';
}
function regPassData() {
    regPassCheck.style.display = 'none';
}
function regCpassData() {
    regCpassCheck.style.display = 'none';
}