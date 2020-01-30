const initialState = {
  items: [],
  loading: false,
  feedback: false,
  showFriend: false
};

const todoReducer = (state = initialState, action) => {
  if (action.type === 'UPDATE_TODO') {
    const items = state.items.map(el => {
      if (el._id === action.payload._id) {
        el.status = !el.status;
      }

      return el;
    });

    state.loading = false;
    return Object.assign({}, state);
  }

  if (action.type === 'ADD_TODO') {
    state.items = [...state.items, action.payload];
    state.loading = false;
    return Object.assign({}, state);
  }

  if (action.type === 'SHOW_LOADING') {
    state.loading = true;
    return Object.assign({}, state);
  }

  if (action.type === 'FETCH_DATA') {
    state.items = [...state.items, ...action.payload];
    return Object.assign({}, state);
  }

  return state;
};

export default todoReducer;
