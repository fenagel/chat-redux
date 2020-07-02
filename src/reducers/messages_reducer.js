export default function(state = null, action) {
  switch (action.type) {
    default:
      return state;
    case 'SET_MESSAGES':
      return action.payload;
  }
}
