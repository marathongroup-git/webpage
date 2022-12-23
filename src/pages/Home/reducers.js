const initialState = {
  banners: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_BANNERS':
      return {
        ...state,
        banners: action.payload.data,
      }
    case 'GET_BRANDS':
      return {
        ...state,
        brands: action.payload.data,
      }
    default:
      return state
  }
}
