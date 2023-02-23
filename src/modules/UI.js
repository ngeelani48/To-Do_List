import { updateLocalStorage, getLocalStorage } from './storage.js';

const List = document.querySelector('.list-ul');

export const FnToDoList = (ListArray) => {
  List.innerHTML = '';

  ListArray = getLocalStorage();

  ListArray.forEach((toDo) => {
    const toDoItem = document.createElement('li');
    toDoItem.classList.add('list-li');
    toDoItem.innerHTML = `
    <input type="checkbox" class="list-li-checkbox" ${toDo.completed ? 'checked' : ''}>
        `;

    const toDoText = document.createElement('input');
    toDoText.classList.add('list-li-text');
    toDoText.value = toDo.task;
    toDoText.disabled = true;
    toDoItem.appendChild(toDoText);

    const crossIcon = document.createElement('span');
    crossIcon.classList.add('cross-sign');
    crossIcon.innerHTML = 'x';
    toDoItem.appendChild(crossIcon);

    List.appendChild(toDoItem);
  });
};

export const addTask = (ListArray, task) => {
  ListArray.push({ task, completed: false, id: ListArray.length + 1 });
};

export const editTask = (e, ListArray) => {
  const clickedTask = e.target.closest('.list-li-text');
  clickedTask.disabled = false;
  clickedTask.focus();
  const taskText = clickedTask.value;

  clickedTask.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && clickedTask.value !== '') {
      const taskIndex = ListArray.findIndex((task) => task.task === taskText);
      ListArray[taskIndex].task = clickedTask.value;
      clickedTask.disabled = true;
      updateLocalStorage(ListArray);
      FnToDoList(ListArray);
    }
  });
};

export const deleteTask = (e, ListArray) => {
  const clickedCross = e.target.closest('.cross-sign');
  const clickedTask = clickedCross.previousElementSibling;
  const taskIndex = ListArray.findIndex((task) => task.task === clickedTask.value);
  ListArray.splice(taskIndex, 1);
  ListArray.forEach((task, index) => {
    task.id = index + 1;
  });
  updateLocalStorage(ListArray);
  FnToDoList(ListArray);
};

export const markTask = (e, ListArray) => {
  const clickedCheckbox = e.target.closest('.list-li-checkbox');
  const clickedTask = clickedCheckbox.nextElementSibling;
  const taskIndex = ListArray.findIndex((task) => task.task === clickedTask.value);
  ListArray[taskIndex].completed = !ListArray[taskIndex].completed;
  updateLocalStorage(ListArray);
  FnToDoList(ListArray);
};