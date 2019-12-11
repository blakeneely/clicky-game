import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import characters from "./characters.json";
import "./App.css";
// Import components here as we build them

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* Here we will render a navbar, main-game, and possibly a footer */}
        <Navbar />
        <Game />
        <Footer />
      </div>
    )
  }
};

export default App;
