const body = document.getElementsByTagName('body')[0];
const modal = document.querySelector('aside.menu');
const choise = document.querySelector("aside > .choise");
const login = document.querySelector("aside > .login");
const signup = document.querySelector("aside > .signup");
const header = document.querySelector("aside > h1");
let opacity = 0;

function openModal(code = 0) {
    if(modal.style.display === '' || modal.style.display === 'none') {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
        modal.style.display = 'flex';
        body.style.overflowY = 'hidden';
        fadeIn('aside.menu');
        if(code == 1) {
            toLogin();
        }
        if(code == 2) {
            toSignup()
        }
    }
}
function closeModal() {
    if(modal.style.display === "flex" ) {
        body.style.overflowY = 'visible';
        fadeOut('aside.menu');
    }
    choise.style.display = 'flex';
    signup.style.display = 'none';
    login.style.display = 'none';
    header.innerHTML = "What do you want to do?";

}

function toLogin() {
    choise.style.display = 'none';
    signup.style.display = 'none';
    login.style.display = 'block';
    header.innerHTML = "Log into your account";
}

function toSignup() {
    choise.style.display = 'none';
    signup.style.display = 'block';
    login.style.display = 'none';
    header.innerHTML = "Sign up your account";
}

function fadeIn(query) {
    if (opacity<1) {
       opacity += .05;
       setTimeout(() => {fadeIn(query)},10);
    }
    document.querySelector('aside.menu').style.opacity = opacity;
 }
 function fadeOut(query) {
    if (opacity>0) {
       opacity -= .05;
       setTimeout(() => {fadeOut(query)},10);
    }
    if(opacity <= 0.1)document.querySelector(query).style.display = 'none';
    document.querySelector(query).style.opacity = opacity;
 }


const formLogin = document.getElementsByTagName("form")[0];
const formSignup = document.getElementsByTagName("form")[1];
formLogin.addEventListener('submit', validateForm);
formSignup.addEventListener('submit', validateForm);

function validateForm(event) {
    event.preventDefault()
    if(event.target.checkValidity()) {
        document.getElementById("msg").innerHTML = "success";
    }
}


