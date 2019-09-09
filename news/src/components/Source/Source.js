import React, { useReducer, useEffect, useState } from 'react'
import axios from 'axios'
import News from '../News/News';

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
  const [selectedSource,setSource] = useState({id:null,name:null})

  const API_KEY = "e1dddc105cb747f3bdfd1512ea6801c8"

  

  useEffect(() => {
    axios.get(`https://newsapi.org/v2/sources?apiKey=${API_KEY}`)
      .then(response => {
        dispatch({ status: "SUCCESS", data: response.data })
      })
      .catch(error => {
        dispatch({ status: "ERROR" })
      })
  }, [])


  const sourcesList = state.posts.sources && state.posts.sources.map(source =>
    <option key={source.id} data-key={source.id} value={source.id}>{source.name}</option>)


  const selectSource =(event) =>{
    // const id = event.target.getAttribute("data-key")
    // console.log(event.target.value)
    const id = event.target.value
    const post = state.posts.sources.filter((source) => source.id===id)
    const name = event.target.value
    setSource({...selectedSource,...post[0]}) 
  }

  return (
    <div>

      {
        state.loading ? "Loading......" :
          <React.Fragment>
            <label>Sources </label>
            <select onChange={selectSource}>
              <option key={"none"} data-key={"none"} value={"none"}>Select source</option>
              {sourcesList}
            </select>
          </React.Fragment>
      }
      {state.error ? state.error : null}
      {selectedSource.id ? <News selectedSource={selectedSource}/> : null}
      
      
    </div>
  )
}

export default Source
