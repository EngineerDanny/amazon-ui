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
      const newBasket = [...state.basket];
      const index = newBasket.findIndex((item) => item.id === action.id);
      if (index >= 0) {
        newBasket.splice(index, 1);
      }

      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default reducer;
