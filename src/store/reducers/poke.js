let defaultState = {
  items: [],
  habitats: [],
  item: '',
  loadings: false,
  loading: false,
  hasMore: true,
  error: '',
  alertMessage: ''
}

function pokeReducer(state = defaultState, action) {
  switch (action.type) {
    case "GET_ALL_POKE_SUCCESS":
      return {
        ...state,
        items: action.payload,
        hasMore: action.hasMore,
        loadings: false
      }
    case "GET_ALL_HABITAT_SUCCESS":
      return {
        ...state,
        habitats: action.payload,
        loadings: false
        }
    case "GET_SINGLE_POKE_SUCCESS":
      return {
        ...state,
        item: action.payload,
        loading: false
      }
    case 'ALL_POKE_LOADING':
      return {
        ...state,
        loadings: true,
      }
    case 'SINGLE_POKE_LOADING':
      return {
        ...state,
        loading: true,
      }
    case 'POKE_ERROR':
      return {
        ...state,
        error: true,
        alertMessage: action.payload,
        loadings: false,
        loading: false
      }
    case "CLEAR_POKE_ERROR":
      return {
        ...state,
        error: false,
        alertMessage: ''
      }
    default:
      return state
  }
}

export default pokeReducer