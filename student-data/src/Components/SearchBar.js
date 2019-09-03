import React from 'react'

const SearchBar = React.forwardRef((props,ref) => {
  const {changeHandler,submitHandler} = ref
  
  return (
    < >
    <form onSubmit={submitHandler}>
      <input type='text' placeholder='Enter student name' name='student' onChange={changeHandler}/>
      <button type='submit'>Submit</button>
    </form>
    </>
  )
})


export default SearchBar
