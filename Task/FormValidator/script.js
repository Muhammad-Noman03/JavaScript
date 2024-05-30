// SELECTORS
const signUpBtn = document.querySelector('#signUpBtn');
const input = document.querySelector('#input');

// DATA
const userName = ['Sufiyan', 'Noman', 'Aania'];

input.addEventListener('input', () => {
    const final = userName.includes(input.value);
    console.log(final);
})