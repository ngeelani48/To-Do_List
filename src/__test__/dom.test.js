/** @jest-environment jsdom */

import FnToDoList from '../__mock__/render.js';
import { updateLocalStorage } from '../modules/storage.js';

describe('render ToDoList array', () => {
  let toDoList;
  beforeEach(() => {
    toDoList = document.createElement('ul');
    toDoList.classList.add('list-ul');
    document.body.appendChild(toDoList);
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });
  test('render a list of tasks', () => {
    const toDoTasks = [
      { task: 'task1', completed: false, id: 1 },
      { task: 'task2', completed: false, id: 2 },
      { task: 'task3', completed: false, id: 3 },
    ];
    updateLocalStorage(toDoTasks);
    FnToDoList(toDoTasks, toDoList);
    const toDoListItems = document.querySelectorAll('.list-li');
    expect(toDoListItems.length).toBe(3);
  });
  test('render checkboxes with the correct state', () => {
    const toDoTasks = [
      { task: 'task1', completed: false, id: 1 },
      { task: 'task2', completed: true, id: 2 },
      { task: 'task3', completed: false, id: 3 },
    ];
    updateLocalStorage(toDoTasks);
    FnToDoList(toDoTasks, toDoList);
    const toDoListItems = document.querySelectorAll('.list-li');
    toDoListItems.forEach((item, index) => {
      const checkbox = item.querySelector('.list-li-checkbox');
      expect(checkbox.checked).toBe(toDoTasks[index].completed);
    });
  });
  test('render text inputs with the correct value', () => {
    const toDoTasks = [
      { task: 'task1', completed: false, id: 1 },
      { task: 'task2', completed: true, id: 2 },
      { task: 'task3', completed: false, id: 3 },
    ];
    updateLocalStorage(toDoTasks);
    FnToDoList(toDoTasks, toDoList);
    const toDoListItems = document.querySelectorAll('.list-li');
    toDoListItems.forEach((item, index) => {
      const text = item.querySelector('.list-li-text');
      expect(text.value).toBe(toDoTasks[index].task);
    });
  });
});