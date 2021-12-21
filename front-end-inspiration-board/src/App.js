import "./App.css";
import NewBoard from "./components/NewBoard";
import BoardsList from "./components/BoardsList";
import boardsData from "./data/boards.json";

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
    </div>
  );
}

export default App;
