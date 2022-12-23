const initialState = {
  jobs: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_JOBS':
      return {
        ...state,
        jobs: action.payload.data,
      }
    case 'REQUEST_JOB':
      return {
        ...state,
      }
    default:
      return state
  }
}
