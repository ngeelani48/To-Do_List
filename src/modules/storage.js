export const updateLocalStorage = (ListArray) => {
  localStorage.setItem('List', JSON.stringify(ListArray));
};

export const getLocalStorage = () => {
  const localStorageData = JSON.parse(localStorage.getItem('List'));
  let ListArray;
  if (localStorageData) {
    ListArray = localStorageData;
  } else {
    ListArray = [];
  }
  return ListArray;
};