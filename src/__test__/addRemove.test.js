import  addTask  from '../__mock__/addTask.js';
import deleteTask from '../__mock__/deleteTask.js';

describe('adding tasks', () => {
  let toDoTasks = [];

  beforeEach(() => {
    toDoTasks = [];
  });

  test('add one task', () => {
    const task = { task: 'task', completed: false, id: 1 };

    addTask(toDoTasks, 'task');

    expect(toDoTasks).toEqual([task]);
  });

  test('add two tasks', () => {
    const task1 = { task: 'task1', completed: false, id: 1 };
    const task2 = { task: 'task2', completed: false, id: 2 };

    addTask(toDoTasks, 'task1');
    addTask(toDoTasks, 'task2');

    expect(toDoTasks).toEqual([task1, task2]);
  });
});


describe('deleting tasks', () => {
  test('deleteTask', () => {
    const toDOTasks = [
      { task: 'task', completed: false, id: 1 },
    ];
    const task = { task: 'task', completed: false, id: 1 };

    deleteTask(toDOTasks, task);

    expect(toDOTasks).toEqual([]);
  });

  test('deleting middle task', () => {
    const toDoTasks = [
      {
        task: 'task1',
        completed: false,
        id: 1,
      },
      {
        task: 'task2',
        completed: false,
        id: 2,
      },
      {
        task: 'task3',
        completed: false,
        id: 3,
      },
    ];

    const task = {
      task: 'task2',
      completed: true,
      id: 2,
    };

    deleteTask(toDoTasks, task);

    expect(toDoTasks).toEqual([
      {
        task: 'task1',
        completed: false,
        id: 1,
      },

      {
        task: 'task3',
        completed: false,
        id: 2,
      },
    ]);
  });
});