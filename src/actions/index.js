export const updateTodo = payload => {
  return {
    type: 'UPDATE_TODO',
    payload
  };
};

export const addTodo = payload => {
  return {
    type: 'ADD_TODO',
    payload
  };
};

export const showLoading = payload => {
  return {
    type: 'SHOW_LOADING',
    payload
  };
};
