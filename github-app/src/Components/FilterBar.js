import React from 'react'

const  FilterBar = React.forwardRef((props,ref) =>{
  const {filterResult,reset,filterBarRefs} = ref
  return (
    <div className="filter">
      <form>
      <input type='text' placeholder="Enter some keywords to filter Eg:algo" onChange={filterResult} className="text-input" ref={filterBarRefs}/>
      <button className="clear" type='reset' onClick={reset}>Clear</button>
      </form>
    </div>
  )
})

export default FilterBar
