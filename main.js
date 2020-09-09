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
let regButton = document.querySelector('#btnReg2');

loginBtn.addEventListener('click', loginFunction)

function loginFunction() {
    const userCheck = document.querySelector('#userchk')
    
}
