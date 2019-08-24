import thunk from 'redux-thunk'
import axios from 'axios'
import { get } from 'https';

// Action Types
const LOAD_ALL_CANDIES = 'LOAD_ALL_CANDIES'

// Action Creators
export const loadAllCandies = (candies) => ({
  type: LOAD_ALL_CANDIES,
  candies
})

// Thunk Creators
export const loadAllCandiesThunk = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/candies')
      dispatch(loadAllCandies(data))
    } catch (err) {
      console.log('Error fetching candies', err)
    }
  }
}




const initialState = { candies: [] }

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ALL_CANDIES: {
      return {
        ...state,
        candies: action.candies
      }
    }
    default:
      return state
  }
}

export default rootReducer
