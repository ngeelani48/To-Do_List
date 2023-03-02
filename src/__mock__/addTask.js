import FnToDoList from './display.js';

const addTask = (ListArray, task) => {
  ListArray.push({ task, completed: false, id: ListArray.length + 1 });
  FnToDoList();
};
export default addTask;