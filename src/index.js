
import './style.css';
const toDoList = document.querySelector('.todo-list-ul');
const Tasks = [
    { id: 1, task: 'Learn WebPack', completed: true },
    { id: 2, task: 'Learn JavaScript', completed: true },
    { id: 3, task: 'Talk to Friend', completed: false },
  ];

const FnToDoList = (Array) => {
  toDoList.innerHTML = '';

  Array.forEach((toDo) => {
    const toDoItem = document.createElement('li');
    toDoItem.classList.add('todo-list-li');
    toDoItem.innerHTML = `
        <input type="checkbox" class="todo-list-li-checkbox" ${toDo.completed ? 'checked' : ''}>
        <span class="todo-list-li-task">${toDo.task}</span>
        `;
    toDoList.appendChild(toDoItem);
  });
};

  
  FnToDoList(Tasks);