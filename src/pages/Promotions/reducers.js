const initialState = {
  promotions: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_PROMOTIONS':
      return {
        ...state,
        promotions: action.payload.data,
      }
    default:
      return state
  }
}
