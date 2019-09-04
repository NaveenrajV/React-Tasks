import React from 'react'
import ReportCard from './ReportCard';

const Profile = (props) =>{
  const {name,dob,marks}=props
  return (
    <>
    <h3>Profile</h3>
    <div className="Profile">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{name}</td>
          </tr>
          <tr>
            <th>DOB</th>
            <td>{dob}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <ReportCard marks={marks}/>
    </>
  )
}

export default Profile
