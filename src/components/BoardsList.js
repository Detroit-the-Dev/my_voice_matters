import PropTypes from "prop-types";
import "./BoardsList.css";
import BoardTitle from "./BoardTitle.js";
// import CardsContainer from "./CardsContainer.js";

const BoardsList = (props) => {
  const boards = props.boardData;

  const BoardList = boards.map((board) => {
    // console.log(board);

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
