import { fetchTodos, newTodo } from '../utils/helpers';

export const updateTodo = payload => {
  return {
    type: 'UPDATE_TODO',
    payload
  };
};

export const addTodo = payload => {
  return async dispatch => {
    const newItem = await newTodo(payload);
    dispatch({
      type: 'ADD_TODO',
      payload: newItem
    });
  };
};

export const showLoading = payload => {
  return {
    type: 'SHOW_LOADING',
    payload
  };
};

export const fetchData = payload => {
  return async dispatch => {
    const items = await fetchTodos();

    dispatch({
      type: 'FETCH_DATA',
      payload: items
    });
  };
};
