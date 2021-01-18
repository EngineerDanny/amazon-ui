//initializing the state with empty values
export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action, "This is the action");

  switch (action.type) {
    case "ADD_TO_BASKET":
      //add prev state
      //and the current basket which
      //is essentially the list of items prev+current one
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      //Logic for removing item from the list
      
      return { state };

    default:
      return state;
  }
};

export default reducer;
