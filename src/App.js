import "./App.css";
import NewBoard from "./components/NewBoard";
import BoardsList from "./components/BoardsList";
// import boardsData from "./data/boards.json";
import cardsData from "./data/cards.json";
import CardsContainer from "./components/CardsContainer";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [boardsData, setBoardsData] = useState([]);
  const [currentBoard, setCurrentBoard] = useState({
    id: null,
    owner_name: "",
    title: "",
  });
  const [boardFormVisible, setBoardFormVisible] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards`, {})
      .then((response) => {
        console.log(response);
        setBoardsData(response.data);
      })
      .catch((error) => {
        console.log(error);
        // Improve error handling
      });
  }, []);

  const createNewBoard = (newBoard) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/boards`, newBoard)
      .then((response) => {
        console.log("Response:", response.data);
        const boards = [...boardsData];
        boards.push(response.data.board);
        setBoardsData(boards);
      })
      .catch((error) => {
        console.log("Error:", error);
        // Improve error handling
      });
  };

  const changeBoardFormVisibility = () => {
    setBoardFormVisible(!boardFormVisible);
  };

  const updateCurrentBoard = (board) => {
    setCurrentBoard(board);
    console.log(currentBoard);
  };

  return (
    <div className="container">
      <header className="app-header">
        <h1>Reactionary</h1>
      </header>
      <section className="new-board-container">
        <button onClick={changeBoardFormVisibility}>
          Create New Board {boardFormVisible ? "\u25B2" : "\u25BC"}
        </button>
        {boardFormVisible ? <NewBoard createNewBoard={createNewBoard} /> : null}
      </section>
      <section className="boards-list-container">
        <BoardsList
          boardsData={boardsData}
          currentBoard={currentBoard}
          updateCurrentBoard={updateCurrentBoard}
        />
      </section>
      <section className="cards-container">
        {currentBoard.id ? (
          <CardsContainer cardsData={cardsData} currentBoard={currentBoard} />
        ) : null}
      </section>
    </div>
  );
}

export default App;
