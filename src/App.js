import "./App.css";
import NewBoard from "./components/NewBoard";
import BoardsList from "./components/BoardsList";
import boardsData from "./data/boards.json";
import cardsData from "./data/cards.json";
import CardsContainer from "./components/CardsContainer";
import React, { Fragment } from "react";

function App() {
  return (
    <div className="container">
      <header className="app-header">
        <h1>Reactionary</h1>
      </header>

      <div className="new-board-container">
        <NewBoard />
      </div>
      <div className="boards-list-container">
        <BoardsList boardData={boardsData} />
      </div>
      <div className="cards-container">
        <CardsContainer cardData={cardsData} />
      </div>
    </div>
  );
}

export default App;
