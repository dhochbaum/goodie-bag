import thunk from 'redux-thunk'
import axios from 'axios'
import { get } from 'https';

// Action Types
const LOAD_ALL_CANDIES = 'LOAD_ALL_CANDIES'
const LOAD_ONE_CANDY = 'LOAD_ONE_CANDY'
const CHANGE_CANDY_QUANTITY = 'CHANGE_CANDY_QUANTITY'

// Action Creators
export const loadAllCandies = (candies) => ({
  type: LOAD_ALL_CANDIES,
  candies
})

export const loadOneCandy = (candy) => ({
  type: LOAD_ONE_CANDY,
  candy
})

export const changeCandyQuantity = (candy) => ({
  type: CHANGE_CANDY_QUANTITY,
  candy
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

export const loadOneCandyThunk = (id) => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/candies/' + id)
      dispatch(loadOneCandy(data))
    } catch (err) {
      console.log('Error fetching candy', err)
    }
  }
}

export const changeCandyQuantityThunk = (id, change) => {
  return async dispatch => {
      try {
        let itemToUpdate = await axios.get('/api/candies/' + id)
        itemToUpdate.data.quantity += change
        const { data } = await axios.put(`/api/candies/${id}`, itemToUpdate.data)
        console.log(data)
        dispatch(changeCandyQuantity(data.candy))
      } catch (err) {
        console.log('Error updating candy quantity', err)
      }
  }
}



const initialState = { candies: [], selectedCandy: {} }

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ALL_CANDIES: {
      return {
        ...state,
        candies: action.candies
      }
    }
    case LOAD_ONE_CANDY: {
      //const updatedCandies = [...state.candies].filter(candy => candy.id!==action.candy.id).concat([action.candy]);
      return {
        ...state,
        selectedCandy: action.candy
      }
    }
    case CHANGE_CANDY_QUANTITY: {
      return {
        ...state,
        selectedCandy: action.candy
      }
    }
    default:
      return state
  }
}

export default rootReducer
