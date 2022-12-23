const initialState = {
  test: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_TEST':
      return {
        ...state,
        test: action.payload.data,
      }
    default:
      return state
  }
}
