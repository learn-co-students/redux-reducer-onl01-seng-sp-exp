// In managePresents.js, write a function called managePresents() that takes in the previous state and an action as its argument.
// Set an default value for the state argument - an object with a key, numberOfPresents, assigned to 0.

export function managePresents(state = { numberOfPresents: 0 }, action) {
  switch (action.type) {
    case "INCREASE":
      return { numberOfPresents: state.numberOfPresents + 1 };
    default:
      return state;
  }
}
