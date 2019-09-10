import React from 'react'

const News = (props) => {
  const {name,description,url,category,country} = props.selectedSource
  return (
    <div>
      <h2>{name}</h2>
      <p><strong>Category :</strong>{category}</p>
      <p><strong>Description : </strong>{description}</p>
    </div>
  )
}

export default News
