const FnToDoList = (ListArray, DOMList) => {
  DOMList.innerHTML = '';

  ListArray.forEach((toDo) => {
    const toDoItem = document.createElement('li');
    toDoItem.classList.add('list-li');

    toDoItem.innerHTML = `
    <input type="checkbox" class="list-li-checkbox" ${toDo.completed ? 'checked' : ''}>
        `;

    const toDoText = document.createElement('input');
    toDoText.classList.add('list-li-text');
    toDoText.value = toDo.task;
    toDoText.disabled = true;
    toDoItem.appendChild(toDoText);

    if (toDo.completed) {
      toDoText.classList.add('completed');
    }

    const crossIcon = document.createElement('span');
    crossIcon.classList.add('cross-sign');
    crossIcon.innerHTML = 'x';
    toDoItem.appendChild(crossIcon);

    DOMList.appendChild(toDoItem);
  });
};

export default FnToDoList;