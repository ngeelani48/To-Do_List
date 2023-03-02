/** @jest-environment jsdom */
import { updateLocalStorage } from '../modules/storage.js';
import addTask from '../__mock__/addTask.js';
import deleteTask from '../__mock__/deleteTask.js';

describe('updateLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('check localStorage', () => {
    const ListArray = [{ description: 'task1', completed: false, index: 1 }];

    updateLocalStorage(ListArray);

    expect(localStorage.getItem('List')).toBe(JSON.stringify(ListArray));
  });

  test('check localStorage with addition', () => {
    const ListArray = [];
    const newTask = { description: 'task1', completed: false, index: 1 };

    addTask(ListArray, newTask);
    updateLocalStorage(ListArray);

    expect(localStorage.getItem('List')).toBe(JSON.stringify(ListArray));
  });

  test('check localStorage with addition and deletion', () => {
    const ListArray = [];
    const newTask = { description: 'task1', completed: false, index: 1 };

    addTask(ListArray, newTask);
    deleteTask(ListArray, 1);
    updateLocalStorage(ListArray);

    expect(localStorage.getItem('List')).toBe(JSON.stringify(ListArray));
  });
});