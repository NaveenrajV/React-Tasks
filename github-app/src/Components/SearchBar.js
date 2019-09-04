import React from 'react'

const SearchBar = React.forwardRef((props,ref) => {
  const {usernameChangeHandler,usernameRef,reset} = ref
  return (
    <div className="search-bar">
      <form onSubmit={usernameChangeHandler}>
      <input type='text' placeholder="Username" ref={usernameRef} className="text-input" />
      <input type='submit' value='Go' className="go"/>
      <button className="clear"  onClick={()=>reset(2)}>Clear</button>
      </form>
    </div>
  )
})

export default SearchBar
