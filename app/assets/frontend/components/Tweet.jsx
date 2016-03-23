export default class Tweets extends React.Component {
  render(){
    return(
          <li className="collection-item avatar">
            <img className="circle" src={this.props.gravatar} />
            <span className="title">{this.props.name}</span>
            <time>{this.props.formattedDate}</time>
            <p>{this.props.body}</p>
          </li>
    )
  }
}
