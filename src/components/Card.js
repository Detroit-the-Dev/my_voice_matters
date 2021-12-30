import PropTypes from "prop-types";
import "./Card.css";

const Card = (props) => {
  console.log("Card props:", props);
  const { message, likes_count } = props.cardData;

  return (
    <section>
      <div>
        <p>{message}</p>
      </div>
      <button
        className="btn btn-sm btn-light"
        onClick={() => props.cardPlusOne(props.cardData)}
      >
        ❤️
      </button>
      <p>{likes_count}</p>
      <button
        className="btn btn-sm btn-light"
        onClick={() => props.deleteCard(props.cardData)}
      >
        Delete
      </button>
    </section>
  );
};

// // Card.propTypes = {};

export default Card;
