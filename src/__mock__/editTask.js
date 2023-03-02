const editTask = (ListArray, taskToEdit, task) => {
  const taskIndex = ListArray.findIndex((task) => task.task === taskToEdit);
  ListArray[taskIndex].task = task;
};

export default editTask;