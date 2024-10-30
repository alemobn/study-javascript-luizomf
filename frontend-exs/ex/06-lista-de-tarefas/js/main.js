const inputTask = document.querySelector('.input-task');
const btnTask = document.querySelector('.btn-task');
const tasks = document.querySelector('.tasks');

function createItem() {
    const item = document.createElement('li');
    return item;
}

function createRemoveBtn() {
    const removeBtn = document.createElement('button');
    removeBtn.innerText = '-';
    removeBtn.setAttribute('class', 'remove btn-task');
    return removeBtn;
}

function addChild(item) {
    tasks.appendChild(item);
}

function addRemoveBtn(item) {
    item.innerText += ' ';
    const removeBtn = createRemoveBtn();
    item.appendChild(removeBtn);
}

inputTask.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTask.value) return;
        createTask(inputTask.value);
    }
});

function clearInput() {
    inputTask.value = '';
    inputTask.focus();
}

function createTask(inputText) {
    const item = createItem();
    addChild(item);
    item.innerText = inputText;
    addRemoveBtn(item);
    clearInput();
    saveTasks();
}

function saveTasks() {
    const taskItems = tasks.querySelectorAll('li');
    const taskItemsList = [];

    for (let ts of taskItems) {
        let textTask = ts.innerText;
        textTask = textTask.replace('-', '').trim();
        taskItemsList.push(textTask);
    }

    const jsonTasks = JSON.stringify(taskItemsList);
    localStorage.setItem('tasks', jsonTasks);
}

btnTask.addEventListener('click', function () {
    if (!inputTask.value) return;
    createTask(inputTask.value);
});

document.addEventListener('click', function (e) {
    const element = e.target;

    if (element.classList.contains('remove')) {
        element.parentElement.remove();
        saveTasks();
    }
});

function addSaveTasks() {
    const tasks = localStorage.getItem('tasks');
    const taskItems = JSON.parse(tasks);

    for (let task of taskItems) {
        createTask(task);
    }
}

addSaveTasks()