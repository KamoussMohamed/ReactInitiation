import React, {Component} from 'react';


const TableHead = () =>{
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
        </tr>
      )
    })
  
    return <tbody>{rows}</tbody>
}

class Table extends Component{
    render(){
        const { characterData } = this.props
        return(
            <table>
                <TableHead/>
                <TableBody characterData = {characterData}/>
            </table>
        )
    }
}
export default Table