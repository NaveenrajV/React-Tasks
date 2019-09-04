import React from 'react'

const SearchResult = React.forwardRef((props,ref) => {
  const reposName = props.reposList
  const reposList = []
  reposName.forEach((repoName,index) => {
    reposList.push(<li key={index}>{repoName}</li>)
  });
  return (
    <div className="searchResult">
      <ul>{reposList}</ul>
    </div>
  )
})

export default SearchResult
