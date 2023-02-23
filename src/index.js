import './style.css';
import {
  FnToDoList,
  addTask,
  clearCompleted,
  editTask,
  deleteTask,
  markTask,
} from './modules/UI.js';
import { updateLocalStorage, getLocalStorage } from './modules/storage.js';

const input = document.querySelector('.input');
const List = document.querySelector('.list-ul');
const clearCompletedBtn = document.querySelector('.clear-btn');
const addTaskBtn = document.querySelector('.add-btn');

let Tasks = getLocalStorage();

FnToDoList(Tasks);

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && input.value !== '') {
    addTask(Tasks, input.value);
    input.value = '';
    updateLocalStorage(Tasks);
    FnToDoList(Tasks);
  }
});

addTaskBtn.addEventListener('click', () => {
  if (input.value !== '') {
    addTask(Tasks, input.value);
    input.value = '';
    updateLocalStorage(Tasks);
    FnToDoList(Tasks);
  }
});

List.addEventListener('click', (e) => {
  if (e.target.closest('.list-li-checkbox')) {
    markTask(e, Tasks);
  }
});

clearCompletedBtn.addEventListener('click', () => {
  Tasks = clearCompleted(Tasks);
  updateLocalStorage(Tasks);
  FnToDoList(Tasks);
});

List.addEventListener('dblclick', (e) => {
  if (e.target.closest('.list-li-text')) {
    editTask(e, Tasks);
  }
});

List.addEventListener('click', (e) => {
  if (e.target.closest('.cross-sign')) {
    deleteTask(e, Tasks);
  }
});