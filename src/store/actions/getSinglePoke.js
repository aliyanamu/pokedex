import { P } from '..../../helpers/promise'

export default function (id) {
  return function(dispatch) {
    dispatch({ type: 'SINGLE_POKE_LOADING' })
    P.getPokemonByName(id)
      .then((response) => {
        console.log(response)
        dispatch({
          type: 'GET_SINGLE_POKE_SUCCESS',
          payload: response
        })
        return response.data
      })
      .catch((error) => {
        dispatch({
          type: 'POKE_ERROR',
          payload: error.message
        })
        setTimeout(() => {
          dispatch({ type: 'CLEAR_POKE_ERROR' })
        }, 2000)
      })
  }
}