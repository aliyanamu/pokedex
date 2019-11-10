import { P } from '../../helpers/promise'

export default function () {
  return function(dispatch, getState) {
    dispatch({ type: 'ALL_POKE_LOADING' })
    P.getPokemonHabitatsList()
      .then(response => {
        dispatch({
          type: 'GET_ALL_HABITAT_SUCCESS',
          payload: response.results,
        })
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