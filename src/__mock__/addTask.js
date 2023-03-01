import FnToDoList from './display.js'
const addTask = () => {
    ListArray=[];
    ListArray.push(
        {
          task: 'Completed my today project',
          completed: false,
          index: 0,
        },
        {
          task: 'finished eating dinner',
          completed: true,
          index: 1,
        }
      );
      localStorage.setItem('List', JSON.stringify(ListArray));
    FnToDoList();
  };
  export default addTask;