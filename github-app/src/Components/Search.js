import React, { Component } from 'react'
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import SearchResult from './SearchResult';

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
       repos:[],
       reposList:[],
       filteredList:[],
       filter:false,
       search:true
    }
    this.usernameRef=React.createRef()
    this.filterBarRef=React.createRef()
  }

  usernameChangeHandler = (event) =>{

    event.preventDefault()
    const username = this.usernameRef.current.value.trim()
    if(username!==undefined && username.length!==0 ){
    const url = `https://api.github.com/users/${username}/repos`
    fetch(url).then( response => response.json())
    .then(data =>  this.setState({repos:data},()=>this.searchResult())).catch(error => console.log({error}))
    }
  }
  
  searchResult = () =>{
    const repos = this.state.repos
    const reposList = []
    repos.forEach((repo,index) => {
      reposList.push(repo.name)
    });
    this.setState({reposList})
  }

  filterResult = (event) =>{
    const keyword = event.target.value.trim()
    const filteredList = []
    if(keyword !== undefined && keyword.length!==0){
      const reposLists = this.state.reposList
      reposLists.forEach((repo,index) => {
        if(repo.includes(keyword)){
          filteredList.push(repo)
        }
      });

      this.setState({filteredList,filter:true})
    }else{
      this.setState({filter:false})
    }
  }

  reset = (option) =>{
  // event.preventDefault()
 console.log(option)
  option===2 ? this.usernameRef.current.value="" :  this.filterBarRef.current.value=""
 
  this.setState({filter:false})
  }
  render() {
    const refs={usernameChangeHandler:this.usernameChangeHandler,usernameRef:this.usernameRef,reset:this.reset}
    const filterRef = {filterResult:this.filterResult,reset:this.reset,filterBarRefs:this.filterBarRef}
    return (
      <div>
        <SearchBar ref={refs}/>
        <FilterBar ref={filterRef}/>
        {
          this.state.filter ?
          <SearchResult reposList={this.state.filteredList} />:
          <SearchResult reposList={this.state.reposList} />
        }
      </div>
    )
  }
}

export default Search
