// SELECTORS
const input = document.querySelector('#input');
const addBtn = document.querySelector('#addBtn');
const displayTask = document.querySelector('#renderTask');
const editBtn = document.querySelector('#editBtn');
const deleteBtn = document.querySelector('#deleteBtn');

// VARIABLES
const todo = JSON.parse(localStorage.getItem('todo')) || [];

// EventListner on Enter on Input
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTask();
        renderTask();
    }
});

addBtn.addEventListener('click', () => {
    addTask();
    renderTask()
})

// Render Task on HTML
function renderTask() {
    if (todo.length === 0) {
        localStorage.removeItem('todo');
    }

    let html = '';

    todo.forEach((value, index) => {
        html += `
        <div id="Task${index}"
            class="flex justify-between items-center w-full border-2 border-green-500 p-2 rounded-md">
            <input type="text" id="input" class="outline-none text-base w-[40ch]" autocomplete="off"
            placeholder="...Add Task" value="${value}" readonly>
            <div class="btns flex gap-2 items-center">
                <div id="editBtn" class="bg-blue-400 text-white px-3 py-2 rounded-lg cursor-pointer"
                    data-id="task${index}" onClick="editTask(event, ${index})">
                    <svg id="edit" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="#e8eaed">
                        <path
                            d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z" />
                    </svg>
                </div>
                <div id="deleteBtn" class="bg-red-600 text-white px-3 py-2 rounded-lg cursor-pointer"
                    data-id="task${index}" onClick="deleteTask(${index})">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="#e8eaed">
                        <path
                            d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                    </svg>
                </div>
            </div>
        </div>
        `;
    });

    displayTask.innerHTML = html;
}

// Add Task
function addTask() {
    let value = input.value;

    if (!value) {
        return;
    }
    todo.push(value);

    input.value = '';
    saveToStorage(todo)
}

// Edit Task and Save Task
function editTask(e, index) {
    let el = e.target;
    let input = el.parentNode.parentNode.children[0];

    if (el.children[0].id === 'edit') {
        el.innerHTML = `<svg id="save" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                            width="24px"
                            fill="#e8eaed">
                            <path
                                d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z" />
                        </svg>`
        input.removeAttribute('readonly');
    } else if (el.children[0].id === 'save' && input.value) {
        el.innerHTML = `<svg id="edit" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                            width="24px"
                            fill="#e8eaed">
                            <path
                                d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z" />
                        </svg>`
        input.setAttribute('readonly', 'readonly');
        todo.splice(index, 1, input.value);
        saveToStorage(todo)
    }

    // if (el.innerHTML === 'Edit Task') {
    //     el.innerText = 'Save Task'
    // } else if (input.value) {
    //     el.innerText = 'Edit Task'
    // }
}

// Delete Task
function deleteTask(index) {
    todo.splice(index, 1);
    saveToStorage(todo)

    renderTask();
}

// Save To Storage
function saveToStorage(task) {
    localStorage.setItem('todo', JSON.stringify(task));
}

renderTask();