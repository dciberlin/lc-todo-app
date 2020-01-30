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
    const newItem = {
      status: false,
      _id: new Date().getTime(),
      text: action.payload,
      date: '2020-01-26T20:52:04.184Z',
      __v: 0
    };

    // state.items.push(newItem);
    state.items = [...state.items, newItem];

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
