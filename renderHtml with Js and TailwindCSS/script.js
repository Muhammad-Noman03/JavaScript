// SELECTORS
const input = document.querySelector('#input');
const addBtn = document.querySelector('#addBtn');
const displayTask = document.querySelector('#renderTask');
const editBtn = document.querySelector('#editBtn');
const deleteBtn = document.querySelector('#deleteBtn');

// VARIABLES
const todo = [];

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
    let html = '';

    todo.forEach((value, index) => {
        html += `
        <div id="Task${index}"
            class="flex justify-between items-center w-full border-2 border-green-500 p-2 rounded-md">
            <input type="text" id="input" class="outline-none text-base w-[40ch]" autocomplete="off"
            placeholder="...Add Task" value="${value}" readonly>
            <div class="btns flex gap-2 items-center">
                <div id="editBtn" class="bg-blue-400 text-white px-3 py-2 rounded-lg cursor-pointer"
                    data-id="task${index}" onClick="editTask(event, ${index})">Edit Task
                </div>
                <div id="deleteBtn" class="bg-red-600 text-white px-3 py-2 rounded-lg cursor-pointer"
                    data-id="task${index}" onClick="deleteTask(${index})">Delete Task
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
}

// Edit Task and Save Task
function editTask(e, index) {
    let el = e.target;
    let input = el.parentNode.parentNode.children[0];
    if (el.innerText === 'Edit Task') {
        el.innerText = 'Save Task'
        input.removeAttribute('readonly');
    } else if (input.value) {
        el.innerText = 'Edit Task'
        input.setAttribute('readonly', 'readonly');
        todo.splice(index, 1, input.value)
    }
}

// Delete Task
function deleteTask(index) {
    todo.splice(index, 1);

    renderTask();
}