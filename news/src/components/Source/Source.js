import React, { useReducer, useEffect, useState } from 'react'
import axios from 'axios'
import News from '../News/News';
import './Source.css'

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
  return state
})

const Source = () => {

  const [state, dispatch] = useReducer(reducer, initialState)
  const [selectedSource,setSource] = useState({id:null})

  const API_KEY = process.env.REACT_APP_NEWS_API_KEY

  

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

    // Ref: https://stackoverflow.com/a/47071992
    const index = event.target.options.selectedIndex
    const id = event.target.options[index].getAttribute("data-key")

    if(id!=="none"){
      const post = state.posts.sources.filter((source) => source.id===id)
      setSource({...selectedSource,...post[0]}) 
    } else {
      setSource({id:null,name:null})
    }
  }


  return (
    
    <div className="Source">
      {console.log({selectedSource})}
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
      {!!selectedSource.id ? <News selectedSource={selectedSource}/> : null}
      
      
    </div>
  )
}

export default Source
