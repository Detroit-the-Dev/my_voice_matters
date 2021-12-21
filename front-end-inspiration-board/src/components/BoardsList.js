import "./BoardsList.css";
import BoardTitle from "./BoardTitle.js";

const BoardsList = (props) => {
  const boards = props.boardData;

  const BoardList = boards.map((board) => {
    // console.log(board.title);

    return <BoardTitle boardInfo={board} />;
  });

  return (
    <div>
      <section>{BoardList}</section>
    </div>
  );
};

// BoardList.propTypes = {};

export default BoardsList;
