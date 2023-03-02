export const markTask = (ListArray, task) => {
    const taskIndex = ListArray.findIndex((taskObj) => taskObj.task === task);
    ListArray[taskIndex].completed = !ListArray[taskIndex].completed;
  };