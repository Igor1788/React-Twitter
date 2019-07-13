import React, { Component, Fragment } from 'react';
import Cabecalho from '../../components/Cabecalho'
import Dashboard from '../../components/Dashboard'
import Widget from '../../components/Widget'
import TrendsArea from '../../components/TrendsArea'
import Tweet from '../../components/Tweet'


class Home extends Component {
  constructor() {
    super();
    this.state = {
      novoTweet: "",
      tweets: []
    };
  }
  adicionatweet = event => {
    event.preventDefault();
    const { novoTweet, tweets } = this.state;
    if (novoTweet) {
      fetch(`http://twitelum-api.herokuapp.com/tweets?X-AUTH-TOKEN=${localStorage.getItem('token')}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'Application/json' },
          body: JSON.stringify({ conteudo: novoTweet })
        })
        .then(res => {
          return res.json();
        })
        .then(resObj => {
          console.log(resObj)
          this.setState({
            tweets: [resObj, ...tweets],
            novoTweet: ''
          });
        })
    }
  }

  removeTweet = (idDoTweet) => {
    fetch(`https://twitelum-api.herokuapp.com/tweets/${idDoTweet}?X-AUTH-TOKEN=${localStorage.getItem('token')}`,
      { method: 'DELETE' })
      .then(res => 
       
        res.json()
      )
      .then(resObj => {
        console.log(resObj)
        const tweets = this.state.tweets.filter((tweet) => tweet._id !== idDoTweet);
        this.setState({ tweets });
      });
  }

  //if (this.state.novoTweet.length > 0 && this.state.novoTweet.length <= 140){
  //this.setState({
  //tweets:[this.state.novoTweet, ...this.state.tweets],
  //novoTweet:''

  componentDidMount() {

    fetch(`https://twitelum-api.herokuapp.com/tweets?X-AUTH-TOKEN=${localStorage.getItem('token')}`)
      .then(response => response.json())
      .then((tweets) => {

        this.setState({
          tweets
        })
      })
  }

  render() {
    return (

      <Fragment>
        <Cabecalho usuario="@omariosouto" />
        <div className="container">
          <Dashboard>
            <Widget>
              <form className="novoTweet" onSubmit={this.adicionatweet}>
                <div className="novoTweet__editorArea">
                  <span className={`novoTweet__status
      ${this.state.novoTweet.length > 140 ? "novoTweet__status--invalido" : ""}`}>
                    {this.state.novoTweet.length}/140
      </span>
                  <textarea className="novoTweet__editor" value={this.state.novoTweet} onInput={(event) =>
                    this.setState({ novoTweet: event.target.value })
                  } placeholder="O que está acontecendo?" >

                  </textarea>
                </div>
                <button type="submit" className="novoTweet__envia"
                  disabled={this.state.novoTweet.length > 140 ? true : false}>Tweetar</button>
              </form>
            </Widget>
            <Widget>
              <TrendsArea />
            </Widget>
          </Dashboard>
          <Dashboard posicao="centro">
            <Widget>
              <div className="tweetsArea">
                {this.state.tweets.map((tweetInfo) => {
                  return <Tweet
                    removeHandler={(event) => this.removeTweet(tweetInfo._id)}
                    key={tweetInfo._id}
                    texto={tweetInfo.conteudo}
                    tweetInfo={tweetInfo}
                  />
                })}

              </div>
            </Widget>
          </Dashboard>
        </div>
      </Fragment>
    );
  }
}
export default Home;
