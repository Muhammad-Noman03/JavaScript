// SELECTORS
const selectors = {
    form: document.querySelector('#form'),
    glass: document.querySelector('.morph'),
    profile: document.querySelector('#profile'),
    userName: document.querySelector('#name'),
    btns: document.querySelectorAll('.btn')
}

const { form, glass, profile, userName, btns } = selectors

function styleOnContact() {
    profile.style.backgroundColor = "red";
    userName.textContent = "Sufiyan";
}

function styleOnPortfolio() {
    profile.style.backgroundColor = "aquamarine";
    userName.textContent = "Noman";
}

form.addEventListener('mouseover', () => {
    glass.setAttribute('id', 'glass')
    console.log('remove');
})

form.addEventListener('mouseout', () => {
    glass.removeAttribute('id')

})

btns.forEach(btn => {
    btn.addEventListener('mouseover', function () {
        if (btn.textContent === 'Contact') {
            styleOnContact();
        } else {
            styleOnPortfolio();
        }
    })
})