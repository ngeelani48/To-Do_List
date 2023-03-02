import editTask from '../__mock__/editTask.js';
import markTask from '../__mock__/markTask.js';
import clearCompleted from '../__mock__/clearCompleted.js';

describe('editTask', () => {
  const ListArray = [
    { task: 'task1', completed: false, id: 1 },
    { task: 'task2', completed: false, id: 2 },
    { task: 'task3', completed: false, id: 3 },
  ];

  test('check for edit a task', () => {
    const taskToEdit = 'task2';
    const task = 'task2 edited';

    editTask(ListArray, taskToEdit, task);

    expect(ListArray[1].task).toBe(task);
  });
});

describe('markTask', () => {
  const ListArray = [
    { id: 1, task: 'task1', completed: false },
    { id: 2, task: 'task2', completed: true },
    { id: 3, task: 'task3', completed: false },
  ];

  test('check for mark a task as completed', () => {
    markTask(ListArray, 'task1');
    expect(ListArray[0].completed).toBe(true);
  });

  test('check for mark a task as not completed', () => {
    markTask(ListArray, 'task2');
    expect(ListArray[1].completed).toBe(false);
  });
});

describe('clearCompleted', () => {
  test('check for clear all completed tasks', () => {
    const ListArray = [
      { id: 1, task: 'task1', completed: false },
      { id: 2, task: 'task2', completed: true },
      { id: 3, task: 'task3', completed: false },
    ];

    const toDoList = clearCompleted(ListArray);

    expect(toDoList).toEqual([
      { id: 1, task: 'task1', completed: false },
      { id: 2, task: 'task3', completed: false },
    ]);
  });

  test('check for return an empty array if all tasks are completed', () => {
    const ListArray = clearCompleted([
      { id: 1, task: 'task1', completed: true },
      { id: 2, task: 'task2', completed: true },
      { id: 3, task: 'task3', completed: true },
    ]);

    const toDoList = clearCompleted(ListArray);

    expect(toDoList).toEqual([]);
  });
});
