import React, { Component } from 'react';
import './App.css';
import Card from './components/card/Card.js';
import Draw from './components/draw-button/DrawButton.js';

class App extends Component {
  constructor (props){
    super(props);

    this.state = {
      cards: [
        {id: 1, question: "Some question", answer: "Some answer"},
        {id: 2, question: "Some other question", answer: "Some other answer"},
        {id: 3, question: "Yet another question", answer: "Yet another answer"},
      ],
      currentCard: {}
    }
  }

  componentWillMount(){
    const currentCards = this.state.cards;

    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
  }


  render() {
    return (
      <div className="App">
        <Card />
        <Draw />
      </div>
    );
  }
}

export default App;
