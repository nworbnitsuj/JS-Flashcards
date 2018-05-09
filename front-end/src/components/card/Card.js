import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="card">
          <div className="front">
            <div className="question">Question</div>
          </div>
            <div className="card-back">
              <div className="answer">"Answer"</div>
            </div>
          </div>
        </div>
      );
    }
  }

  export default Card;
