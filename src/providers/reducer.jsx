//initializing the state with empty values
export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action, "This is the action");

  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      return { state };

    default:
      return state;
  }
};

export default reducer;