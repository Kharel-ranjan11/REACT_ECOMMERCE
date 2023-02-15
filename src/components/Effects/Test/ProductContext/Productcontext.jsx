import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { initialState, reducer } from '../productReducer/Reducer'
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const API = 'https://api.pujakaitem.com/api/products'
  const [state, dispatch] = React.useReducer(reducer, initialState);
  console.log(state)
  useEffect(() => {
    calling(API)
  }, [])
  const calling = async URL => {
    dispatch({ type: 'API_LOADING' })
    try {
      const res = await axios.get(URL)
      const products = await res.data
      console.log(products)
      dispatch({ type: 'SET_API_DATA', payload: products })
    } catch (error) {
      dispatch({ type: 'ERROR' })
    }
  }

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  )
}
// Custom hook
const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppProvider, AppContext, useGlobalContext }
