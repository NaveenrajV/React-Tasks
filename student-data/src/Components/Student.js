import React, { Component } from 'react'
import SearchBar from './SearchBar';
import Profile from './Profile'

class Student extends Component {
  constructor(props) {
    super(props)
    this.state = {
       studentName:'',
       dob:'',
       marks:[],
       profile:false,
       students : [
        {
          name : 'Kameshwaran',
          school : 'Govt Hr Sec School',
          dateOfBirth : '01-06-1993',
          marks : [
            {
              quarterly : {
                english : 100,
                maths : 80,
                physics : 95,
                chemistry : 98,
                biology : 100
              }
            },
            {
              halfYearly : {
                english : 90,
                maths : 70,
                physics : 95,
                chemistry : 88,
                biology : 60
              }
            },
            {
              annual : {
                english : 80,
                maths : 90,
                physics : 95,
                chemistry : 98,
                biology : 99
              }
            }
          ]
        },
      
        {
          name : 'Marudhu',
          school : 'Govt Hr Sec School',
          dateOfBirth : '01-06-1983',
          marks : [
            {
              quarterly : {
                english : 80,
                maths : 80,
                physics : 95,
                chemistry : 100,
                biology : 100
              }
            },
            {
              halfYearly : {
                english : 100,
                maths : 70,
                physics : 85,
                chemistry : 88,
                biology : 80
              }
            },
            {
              annual : {
                english : 100,
                maths : 60,
                physics : 55,
                chemistry : 78,
                biology : 90
              }
            }
          ]
        }
      ]      
    
    }
  }
  



  changeHandler = (event) =>{
    this.setState({studentName:event.target.value})
  }

  submitHandler = (event) =>{

    event.preventDefault()
    const students = this.state.students
    let flag = 0
    for(let index=0;index<students.length;index++){
      if(students[index].name === this.state.studentName){
        flag=1;
        this.setState({dob:students[index].dateOfBirth,marks:students[index].marks,profile:true})
      }
    }
   if(flag==0){
    this.setState({profile:false})
   }
  }
  render() {
    const searchBarRefs = {changeHandler:this.changeHandler,submitHandler:this.submitHandler}
    return (
      <React.Fragment>
      <div className='header'>
      <SearchBar  ref={searchBarRefs}/>
      </div>
       {this.state.profile ? <Profile name={this.state.studentName} dob={this.state.dob} marks={this.state.marks}/>:
      <h4>No data found</h4>}
      </React.Fragment>
    )
  }
}

export default Student
