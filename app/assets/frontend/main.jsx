import TweetBox from "./components/TweetBox";
import TweetsList from "./components/TweetsList";
import TweetStore from "./stores/TweetStore";

import TweetActions from "./actions/TweetActions";
TweetActions.getAllTweets();


// let mockTweets = [
//   { id: 1, name: "Rafael Lugli", body: "Hava a nice day" },
//   { id: 2, name: "Rodolfo Lugli", body: "Hava a good day" },
//   { id: 3, name: "Andre Lugli", body: "Hava a sad day" }
// ]

class Main extends React.Component{

  constructor(props){
    super(props);
    this.state = { tweetsList: [] }
  }
  // formattedTweests(tweetsList) {
  //   let formattedList = tweetsList.map(tweet =>{
  //     tweet.formattedDate = moment(tweet.created_at).fromNow();
  //     return tweet;
  //   });
  //   return {
  //     tweetsList: formattedList
  //   };
  // }
  addTweet(tweetToAdd) {
    // $.post("/tweets", { body: tweetToAdd })
    // .success( savedTweet => {
    //   let newTweetsList = this.state.tweetsList;
    //   newTweetsList.unshift( savedTweet );
    //   this.setState(this.formattedTweests(newTweetsList));
    // })
    // .error(error => console.log(error));
    //

  }
  componentDidMount() {
    // $.ajax("/tweets")
    // .success(data => this.setState(this.formattedTweests(data)))
    // .error(error => console.log(error));
  }

  render() {
    return(
      <div className="container">
        <TweetBox sendTweet={this.addTweet.bind(this)} />
        <TweetsList tweets={this.state.tweetsList} />
      </div>
    );
  }
}

let documentReady = () => {
  let reactNode = document.getElementById('react');
  if (reactNode) {
    ReactDOM.render( <Main />,reactNode )
  }
};

$(documentReady);
