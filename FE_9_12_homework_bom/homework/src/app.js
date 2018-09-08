const rootNode = document.getElementById('root');
const magicNumbers = {
    zero: 0,
    defaultID: 12345
};

let todoItems = [];
let rootShown = true;

const header = document.createElement('h1');
header.innerText = 'Simple TODO Application';
const addButton = document.createElement('button');
addButton.innerText = 'Add new task';

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
const input = document.createElement('input');
const cancelButton = document.createElement('button');
cancelButton.innerText = 'Cancel';
const saveButton = document.createElement('button');
saveButton.innerText = 'Save changes';

wrapper.appendChild(input);
wrapper.appendChild(cancelButton);
wrapper.appendChild(saveButton);

hideElement(wrapper);

const todoList = document.createElement('ul');

rootNode.appendChild(header);
rootNode.appendChild(addButton);
rootNode.appendChild(wrapper);
rootNode.appendChild(todoList);

document.addEventListener('DOMContentLoaded', renderList);

todoList.addEventListener('click', (event) => {
    if (event.target.classList.contains('checkbox')) {
        let li = event.target.parentElement;
        li.classList.add('done');
        event.target.src = './assets/img/done-s.png';
        let item = todoItems.filter(item => +item.id === +li.id)[magicNumbers.zero];
        item.isDone = true;
        saveToStorage();
        renderList();
    }
    if (event.target.classList.contains('remove')) {
        let id = +event.target.parentElement.id;
        let item = todoItems.filter(item => +item.id === id)[magicNumbers.zero];
        let index = todoItems.indexOf(item);
        todoItems.splice(index, 1);
        saveToStorage();
        renderList();
    }
});

addButton.addEventListener('click', () => {
    toggleViews();
});

cancelButton.addEventListener('click', () => {
    toggleViews();
});

saveButton.addEventListener('click', () => {
    let text = input.value.trim();
    if (text) {
        let id = todoItems.length ? todoItems[todoItems.length-1].id + 1 : magicNumbers.defaultID;
        todoItems.push({isDone: false, id: id, description: text});
        saveToStorage();
        renderList();
    }
    toggleViews();
});

function addItem(text, id, done = false) {
    const item = document.createElement('li');
    item.id = id;
    let checkboxSource = './assets/img/todo-s.png';
    if (done) {
        item.classList.add('done');
        checkboxSource = './assets/img/done-s.png';
    }
    item.innerHTML = `<img class="checkbox" src="${checkboxSource}" />
<span>${text}</span>
<img class="remove" src="./assets/img/remove-s.jpg" />`;
    todoList.appendChild(item);
}

function renderList() {
    let storageItems = getFromStorage();
    todoItems = !todoItems.length && storageItems ? storageItems : todoItems || [];
    todoList.innerHTML = null;
    todoItems
        .sort(item => item.isDone ? 1 : magicNumbers.zero)
        .forEach(item => addItem(item.description, item.id, item.isDone))
}

function hideElement(element) {
    element.classList.add('hidden');
}

function showElement(element) {
    element.classList.remove('hidden');
}

function saveToStorage() {
    localStorage.setItem('coolItems', JSON.stringify(todoItems));
}

function getFromStorage() {
    return JSON.parse(localStorage.getItem('coolItems'));
}

function toggleViews() {
    if (rootShown) {
        rootShown = false;
        header.innerText = 'Add item';
        hideElement(todoList);
        hideElement(addButton);
        showElement(wrapper);
    } else {
        rootShown = true;
        input.value = null;
        header.innerText = 'Simple TODO Application';
        showElement(todoList);
        showElement(addButton);
        hideElement(wrapper);

    }
}