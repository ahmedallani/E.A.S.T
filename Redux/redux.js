const initState = {
  user: {},
  page: "Home",
};
const pages={
  Home:{path:"/"},
  Login:{path:"/login"}
}
const testPath = () => {
  let path=window.location.pathname
  if (path==="/login"){
    return "Login"
  } else {
    return "Home"
  }
}
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
  updatePage: (state, action) => {
    window.history.pushState('', '', pages[action.value].path);
    return {
      ...state,
      page: action.value,
    };
  },
  updateComponent: (state) => {
    return {
      ...state,
      page: testPath(),
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
