
function List(props) {

  return (
        <tr>
        <td>{props.num}</td>
        <td>{props.name}</td>
        <td>{props.surname}</td>
        <td>{props.age}</td>
        <td>{props.phone}</td>
      </tr>
  )
}

export default List;
