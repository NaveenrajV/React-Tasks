import React from 'react'

const Marks = (props) => {
  const marks = props.marks
  const exam = props.exam
  let marksList = [];
  for (let index = 0; index < marks.length; index++) {

    if (marks[index][exam] !== undefined)

      for (let subject in marks[index][exam]) {

        const list = (<tr key={subject}>
          <td>{subject}</td>
          <td>{marks[index][exam][subject]}</td>
        </tr>)
        marksList.push(list)
      }
  }

  return (
    <table>
      <tbody>
        <tr>
          <th>Subject</th>
          <th>Marks</th>
        </tr>
        {marksList}
      </tbody>
    </table>
  )
}

export default Marks
