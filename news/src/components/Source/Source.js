import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState = {
  loading: true,
  posts: {},
  error: ''
}

const reducer = ((state, action) => {
  switch (action.status) {
    case "SUCCESS":
      return {
        loading: false,
        posts: action.data,

      }
    case "ERROR":
      return {
        loading: false,
        posts: {},
        error: "Something went wrong"
      }
  }
})

const Source = () => {

  const [state, dispatch] = useReducer(reducer, initialState)
  const API_KEY = "e1dddc105cb747f3bdfd1512ea6801c8"

  const sourcesList = state.posts.sources && state.posts.sources.map(source =>
    <option key={source.id} value={source.name}>{source.name}</option>)

  useEffect(() => {
    axios.get(`https://newsapi.org/v2/sources?apiKey=${API_KEY}`)
      .then(response => {
        dispatch({ status: "SUCCESS", data: response.data })
      })
      .catch(error => {
        dispatch({ status: "ERROR" })
      })
  }, [])




  return (
    <div>

      {
        state.loading ? "Loading......" :
          <React.Fragment>
            <label>Source </label>
            <select>
              {sourcesList}
            </select>
          </React.Fragment>
      }
      {state.error ? state.error : null}
    </div>
  )
}

export default Source
