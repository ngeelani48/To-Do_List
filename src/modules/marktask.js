export const markTask = (e, ListArray) => {
    const clickedCheckbox = e.target.closest('.list-li-checkbox');
    const clickedTask = clickedCheckbox.nextElementSibling;
    const taskIndex = ListArray.findIndex((task) => task.task === clickedTask.value);
    ListArray[taskIndex].completed = !ListArray[taskIndex].completed;
    return ListArray;
  };