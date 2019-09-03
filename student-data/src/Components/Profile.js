import React from 'react'

const Profile = (props) =>{
  const {name,dob}=props
  console.log(props)
  return (
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
  )
}

export default Profile
