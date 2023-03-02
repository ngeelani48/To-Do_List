import FnToDoList from './display.js';

const deleteTask = (ListArray,taskObj) => {
  const taskIndex = ListArray.findIndex((task) => task.task === taskObj.task);
  ListArray.splice(taskIndex, 1);
  ListArray.forEach((task, index) => {
    task.id = index + 1;
  });
  FnToDoList(ListArray);
  return ListArray;
  
};


export default deleteTask;