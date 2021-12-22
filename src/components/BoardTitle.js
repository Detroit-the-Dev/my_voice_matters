import PropTypes from "prop-types";
import "./BoardTitle.css";

const BoardTitle = (props) => {
  const selectCurrentBoard = () => {
    const newCurrentBoard = {
      id: props.boardData.id,
      owner_name: props.boardData.owner_name,
      title: props.boardData.title,
    };
    props.updateCurrentBoard(newCurrentBoard);
  };

  return (
    <section>
      <button onClick={selectCurrentBoard}>{props.boardData.title}</button>
    </section>
  );
};

// BoardTitle.propTypes = {};

export default BoardTitle;
