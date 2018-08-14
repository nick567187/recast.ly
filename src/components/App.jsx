//window.YOUTUBE_API_KEY = 'AIzaSyCJPH2-Da98xsAAqGa2Ou9LsFUA7QekIGk';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: exampleVideoData[0],
      search: exampleVideoData,
      searchBar: 'matt minwoo lee'
    };
    this.debounce = _.debounce(() => searchYouTube({
      query: this.state.searchBar,
      maxResults: 5,
      key: YOUTUBE_API_KEY
    }, (data) => this.setState({search: data, current: data[0]})), 500, {'trailing': true, 'leading': false, 'maxWait': 500});  
    
  }
  
  componentDidMount() {
    searchYouTube({
      query: this.state.searchBar,
      maxResults: 5,
      key: YOUTUBE_API_KEY
    }, (data) => this.setState({search: data, current: data[0]}));
  }
  
  onClickChangeVideo (event) { 
    this.setState({
      current: event
    });   
  }

  onSearchButtonClick () {
    // var options = {
    //   query: this.state.searchBar,
    //   maxResults: 5,
    //   key: YOUTUBE_API_KEY
    // };

    // // var now = this.setState.bind(this);
    // searchYouTube(options, (data) => this.setState({search: data, current: data[0]}));
  }
  
  
  onChangeSearch (event) {
    this.setState({
      searchBar: event.target.value
    });
    // var options = {
    //   query: this.state.searchBar,
    //   maxResults: 5,
    //   key: YOUTUBE_API_KEY
    // };
    
    this.debounce();
  }
  
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search button={this.onSearchButtonClick.bind(this)} onchangesearch={this.onChangeSearch.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.current}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.search} onClickChangeVideo={this.onClickChangeVideo.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
  
  
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
