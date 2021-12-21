import "./App.css";
import NewBoard from "./components/NewBoard";
import BoardsList from "./components/BoardsList";
import boardsData from "./data/boards.json";
import cardsData from "./data/cards.json";
import CardsContainer from "./components/CardsContainer";

function App() {
  return (
    <div>
      <header>
        <h1>Reactionary</h1>
      </header>
      <section>
        <NewBoard />
      </section>
      <section>
        <BoardsList boardData={boardsData} />
      </section>
      <section>
        <CardsContainer cardData={cardsData} />
      </section>
    </div>
  );
}

export default App;
