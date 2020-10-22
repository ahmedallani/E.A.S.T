const initState = {
  user: {},
  page: "Home",
};

const reducers = {
  updatedata: (state, action) => {
    return {
      ...state,
      user: action.value,
    };
  },
  updateState: (state, action) => {
    return {
      ...state,
      [action.state]: action.value,
    };
  },
};

const rootReducer = (state = initState, action) => {
  console.log(action);
  if (Object.keys(reducers).includes(action.type)) {
    return reducers[action.type](state, action);
  }
  return state;
};

module.exports = {
  rootReducer,
};
