const initialState = {
  good: 0,
  ok: 0,
  bad: 0,
};

const counterReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "GOOD":
      const newState = {...state}
      return { ...newState, good: 1 };
    case "OK":
      return { ...state, ok: 4 };
    case "BAD":
      return { ...state, bad: 2 };
    default:
      return state;
  }
};

export default counterReducer;
