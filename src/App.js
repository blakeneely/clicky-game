import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import characters from "./characters.json";
import "./App.css";

// Function to shuffle cards 
const shuffleCards = arr => (
  arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]) 
);

class App extends Component {
  state = {
    characters: shuffleCards(characters),
    clickedIds: [],
    score: 0,
    goal: 12,
    status: "Start by clicking any image. Don't click the same one more than once!"
  };

  runGame = id => {
    let clickedIds = this.state.clickedIds;

    if(clickedIds.includes(id)) {
      this.setState({ 
        clickedIds: [], 
        score: 0, 
        status:  "Game Over! You lost. Click to play again!" 
      });
      return
    }
    else {
      clickedIds.push(id)

      if(clickedIds.length === 12) {
        this.setState({
          score: 12, 
          status: "You won! Click to play again!",
          clickedIds: []
        })
        return
      };

      this.setState({ 
        characters: shuffleCards(characters), 
        clickedIds, 
        score: clickedIds.length, 
        status: " " 
      });
    }
  };

  render() {
    return (
      <div className='App'>
        <Navbar 
          score={this.state.score}
          status={this.state.status}
          won={this.state.gamesWon}
        />
        <Wrapper>
        {this.state.characters.map(character => (
            <Cards
              runGame={this.runGame}
              id={character.id}
              key={character.id}
              image={character.image}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    )
  }
};

export default App;
