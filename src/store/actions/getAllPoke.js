import { P } from '../../helpers/promise'

export default function (limit, offset, groupName) {
  return function(dispatch, getState) {
    dispatch({ type: 'ALL_POKE_LOADING' })
    const pokeArr = []
    if (groupName) {
      (async() => {
        try {
          let resGroup = await P.getPokemonHabitatByName(groupName)
          let array = resGroup.pokemon_species
          for (let i = offset; i < limit + offset; i++) {
            let id = array[i].url.split('/')[6]
            pokeArr.push(id)
          }
        } catch (error) {
          dispatch({
            type: 'POKE_ERROR',
            payload: error.message
          })
          setTimeout(() => {
            dispatch({ type: 'CLEAR_POKE_ERROR' })
          }, 2000)
        }

        getAllPoke(pokeArr)
      })()
    } else {
      for (let i = offset; i < limit + offset; i++) {
        pokeArr.push(i + 1)
      }
      getAllPoke(pokeArr)
    }

    function getAllPoke(dataArr) {
      const response = []

      Promise.all(
        dataArr.map(async id => {
          const pokeDetail = await P.getPokemonByName(id)
          response.push(pokeDetail)
        })
      )
      .then(() => {
        const { items } = getState().pokeReducer
        dispatch({
          type: 'GET_ALL_POKE_SUCCESS',
          hasMore: response ? true : false,
          payload: response ? [...items, ...response] : items,
        })
        return response
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
}