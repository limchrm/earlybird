export default (props) => {
  return (
    <ul>
      {
        _.map(props.notes, (note) => <li>{note.name}</li>)
      }
    </ul>
  )
}
