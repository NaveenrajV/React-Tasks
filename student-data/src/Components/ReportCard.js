import React, { Component } from 'react'
import Marks from './Marks';

class ReportCard extends Component {
  
  state ={
    currentTab:'quarterly'
  }

setExam = (exam) =>{
  this.setState({currentTab:exam})
}
    
  render() {
    return (
      <div className='ReportCard'>
        <center><h3>Marks</h3></center>
        <div className="tabs">
        <button onClick={()=>this.setExam('quarterly')}>quarterly</button>
        <button onClick={()=>this.setExam('halfYearly')}>halfYearly</button>
        <button onClick={()=>this.setExam('annual')}>Annual</button>
        </div>
        <div className='marks'>
        <Marks marks={this.props.marks} exam={this.state.currentTab}/>
        </div>    
      </div>
    )
  }
}

export default ReportCard
