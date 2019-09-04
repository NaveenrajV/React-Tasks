import React from 'react'

const SearchBar = React.forwardRef((props,ref) => {
  const {changeHandler,submitHandler} = ref

  return (
    < >
    <form onSubmit={submitHandler}>
      <input type='text' placeholder='Enter student name' name='student' onChange={changeHandler}/>
      <input type='submit' value='Submit'/>
    </form>
    </>
  )
})


export default SearchBar
