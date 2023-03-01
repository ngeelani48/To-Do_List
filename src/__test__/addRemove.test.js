import addTask from '../__mock__/addTask';

describe('Test for adding tasks', () => {
  it('Check array of object is not null', () => {
    localStorage.removeItem('localItem');
    addTask('task 1');
    const task = JSON.parse(localStorage.getItem('localItem'));
    const length = task.length;
    expect(length).not.toBeNull();
  });
  it('Added to the DOM', () => {
    localStorage.removeItem('localItem');
    addList('task 2');
    const task = JSON.parse(localStorage.getItem('localItem'));
    expect(task).toHaveLength(task.length);
  });
});