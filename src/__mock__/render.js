
export const renderToDoList = (toDoListArray, toDoListDOM) => {
    toDoListDOM.innerHTML = '';
  
  
    toDoListArray.forEach((toDo) => {
      const toDoItem = document.createElement('li');
      toDoItem.classList.add('todo-list-li');
  
      const toDoCheckbox = document.createElement('input');
      toDoCheckbox.classList.add('todo-list-li-checkbox');
      toDoCheckbox.type = 'checkbox';
      toDoCheckbox.checked = toDo.completed;
      toDoItem.appendChild(toDoCheckbox);
  
      const toDoText = document.createElement('input');
      toDoText.classList.add('todo-list-li-text');
      toDoText.value = toDo.task;
      toDoText.disabled = true;
      toDoItem.appendChild(toDoText);
  
      if (toDo.completed) {
        toDoText.classList.add('completed');
      }
  
      const crossIcon = document.createElement('span');
      crossIcon.classList.add('todo-list-li-cross');
      crossIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      toDoItem.appendChild(crossIcon);
  
      toDoListDOM.appendChild(toDoItem);
    });
  };