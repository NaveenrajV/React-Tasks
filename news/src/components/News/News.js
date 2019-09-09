import React from 'react'

const News = (props) => {
  console.log(props)
  const {name,description,url,category,country} = props.selectedSource
  return (
    <div>
      <h2>{name}</h2>
      <p><strong>Description : </strong>{description}</p>
    </div>
  )
}

export default News
