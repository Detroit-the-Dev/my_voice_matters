import PropTypes from "prop-types";
import "./Card.css";

const Card = (props) => {
  console.log("Card props:", props);
  const { message, likes_count } = props.cardData;

  return (
    <section>
      <p>{message}</p>
      <button onClick={() => props.cardPlusOne(props.cardData)}>❤️</button>
      <p>{likes_count}</p>
      <button onClick={() => props.deleteCard(props.cardData)}>Delete</button>
    </section>
  );
};

// // Card.propTypes = {};

export default Card;
