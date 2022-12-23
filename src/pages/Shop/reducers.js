export default function reducer(state = {}, action) {
    switch (action.type) {
      case 'GET_PRODUCTS_PUNCHOUT':
        return {
          ...state,
          productsPunchOut: action.payload.data,
        }
      case 'GET_PRODUCT_PUNCHOUT':
        return {
          ...state,
          productPunchOut: action.payload,
        }
  
      default:
        return state
    }
  }
  