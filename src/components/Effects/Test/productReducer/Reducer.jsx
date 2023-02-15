export const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: []
}
export const reducer = (state, action) => {
  switch (action.type) {
    case 'API_LOADING':
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case 'SET_API_DATA':
      return {
        ...state,
        featureProducts: action.payload.filter(Ele => Ele.featured === true),
        products: action.payload,
        isLoading:false
      
      }
    case 'ERROR':
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    default:
      return state
  }
}
