const form = document.querySelector('.form');
const inputName = document.querySelector('.name');
const inputPassword = document.querySelector('.password');
const inputEmail = document.querySelector('.email');
const submit = document.querySelector('.btn');
const valid = document.querySelector('.valid');
const nameError = document.querySelector('.name-error');
const passwordError = document.querySelector('.password-error');
const mailError = document.querySelector('.mail-error');
         

form.addEventListener('submit', (event) => {
event.preventDefault();
          
 // Name first letter in upperCase
const name = inputName.value;
const firstLetter = /^[A-Z]/.test(name);
        
// Password must content 8 characteres, uppercase and number
const password = inputPassword.value;
const upperCase = /[A-Z]/.test(password);
const number = /[0-9]/.test(password);
const passwordValid = password.length >= 8 && upperCase && number;
        
// Email must content @ and . 
const email = inputEmail.value;
const arobase = email.includes('@');
const point = email.includes('.');
const emailValid = arobase && point;

if (firstLetter) {
  nameError.innerHTML = "";
    if (passwordValid) {
        passwordError.innerHTML = "";
    if (emailValid) {
        mailError.innerHTML = "";
        valid.classList.remove('hidden-text');
    } 
    else {
        mailError.innerHTML = "Your email must contain '@' and '.'";
      }
    } else {
      passwordError.innerHTML = "Your password must contain at least 8 characters, a capital letter and a number.";
    } 
    }  else {
    nameError.innerHTML = "Your name must start with a capital letter.";
    }
    })
