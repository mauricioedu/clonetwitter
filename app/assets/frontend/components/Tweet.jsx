export default class Tweets extends React.Component {
  render(){
    return(
          <li className="collection-item avatar">
            <i className="material-icon circle">person_pin</i>
            <span className="title">{this.props.name}</span>
            <p>{this.props.body}</p>
          </li>
    )
  }
}
