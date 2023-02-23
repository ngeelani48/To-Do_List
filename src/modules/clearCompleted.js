export const clearCompleted = (ListArray) => {
    ListArray = ListArray.filter((task) => task.completed === false);
    ListArray.forEach((task, index) => {
      task.id = index + 1;
    });
    return ListArray;
  };