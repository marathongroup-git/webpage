const initialState = {
  posts: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_POSTS':
      return {
        ...state,
        posts: action.payload.data,
      }
    case 'GET_POST':
      return {
        ...state,
        post: action.payload,
      }
    case 'GET_CATEGORIES':
      return {
        ...state,
        categories: action.payload.data,
      }
    case 'GET_DEPARTMENTS':
      return {
        ...state,
        departments: action.payload.data,
      }
    default:
      return state
  }
}
