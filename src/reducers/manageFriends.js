// write a function called manageFriends that takes in the previous state and an action as its argument.
// The initial state should be an object with a key, friends, set to an empty array.
// The reducer should be able to handle two actions, "ADD_FRIEND" and "REMOVE_FRIEND".
// When adding a friend, the action will include a friend key assigned to an object with name, hometown, and id keys.

export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      return { ...state, friends: [...state.friends, action.friend] };
    case "REMOVE_FRIEND":
      let friendsArray = state.friends.filter(
        (friend) => friend.id != action.id
      );
      return { ...state, friends: friendsArray };
    default:
      return state;
  }
}
