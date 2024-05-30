// SELECTORS
const sidebar = document.querySelector('#sidebar');
const sidebarContainer = document.querySelector('#sidebarContainer');

// FLAG
let isOpen = false;

sidebar.addEventListener('click', () => {

    if (!isOpen) {
        sidebarContainer.classList.replace('w-0', 'w-64')
        isOpen = true

    } else {
        sidebarContainer.classList.replace('w-64', 'w-0')
        isOpen = false
    }

})