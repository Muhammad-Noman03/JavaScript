// SELECTORS
const signUpBtn = document.querySelector('#signUpBtn');
const input = document.querySelector('#input');
const inputBox = document.querySelector('#inputBox');

// DATA
const userName = ['Sufiyan', 'Noman', 'Aania'];

// EVENTLISTNER FOR INPUT
input.addEventListener('input', () => {
    if (!input.value) {
        inputBox.classList.remove('found');
        inputBox.classList.remove('error');
        return;
    }

    const final = userName.includes(input.value);

    if (final) {
        inputBox.classList.remove('error');
        inputBox.classList.add('found');
        signUpBtn.disabled = !final

    } else {
        inputBox.classList.remove('found');
        inputBox.classList.add('error');
        signUpBtn.disabled = !final
    }

})

let count = 0;

signUpBtn.addEventListener('click', () => {
    console.log(count);
    count++

})