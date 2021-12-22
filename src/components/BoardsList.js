import PropTypes from "prop-types";
import "./BoardsList.css";
import BoardTitle from "./BoardTitle.js";

const BoardsList = (props) => {
  const boards = props.boardsData;

  const BoardList = boards.map((board) => {
    // console.log(board);

    return (
      <BoardTitle
        boardData={board}
        updateCurrentBoard={props.updateCurrentBoard}
      />
    );
  });

  return (
    <div>
      <h2>Boards</h2>
      <section>{BoardList}</section>
    </div>
  );
};

// BoardList.propTypes = {};

export default BoardsList;
