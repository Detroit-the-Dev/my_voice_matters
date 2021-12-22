import PropTypes from "prop-types";
import "./CardsContainer.css";
import Card from "./Card.js";
import NewCard from "./NewCard.js";

const CardsContainer = (props) => {
  // console.log(props);
  const cards = props.cardsData;
  const CardList = cards.map((card) => {
    return <Card cardData={card} />;
  });

  return (
    <div>
      {/* Board Title */}
      <NewCard />
      <section>{CardList}</section>
    </div>
  );
};

// CardsContainer.propTypes = {};

export default CardsContainer;
