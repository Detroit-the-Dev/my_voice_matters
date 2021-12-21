import PropTypes from "prop-types";
import "./BoardTitle.css";

const BoardTitle = (props) => {
  console.log(props);
  return (
    <section>
      <button>{props.boardInfo.title}</button>
    </section>
  );
};

// BoardTitle.propTypes = {};

export default BoardTitle;
