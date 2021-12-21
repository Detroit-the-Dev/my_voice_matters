import PropTypes from "prop-types";
import "./Card.css";

const Card = (props) => {
  console.log(props);
  const { message, likes_count } = props.cardInfo;

  return (
    <section>
      <p>{message}</p>
      <button>❤️</button>
      <p>{likes_count}</p>
    </section>
  );
};

// // Card.propTypes = {};

export default Card;
