import PropTypes from "prop-types";
import "./CardsContainer.css";
import Card from "./Card.js";
import NewCard from "./NewCard.js";
import axios from "axios";
import { useState, useEffect } from "react";

const CardsContainer = (props) => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/boards/${props.currentBoard.id}/cards`
      )
      .then((response) => {
        console.log(response);
        setCardsData(response.data);
      })
      .catch((error) => {
        console.log(error);
        // Improve error handling
      });
  }, [props.currentBoard]);

  const deleteCard = (deletedCard) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${deletedCard.id}`)
      .then((response) => {
        console.log(response);
        const updatedCardsData = cardsData.filter(
          (card) => card.id !== deletedCard.id
        );
        setCardsData(updatedCardsData);
      })
      .catch((error) => {
        console.log(error);
        // Improve error handling
      });
  };

  const cardPlusOne = (likedCard) => {
    axios
      .put(
        `${process.env.REACT_APP_BACKEND_URL}/cards/${likedCard.id}/add_like`
      )
      .then((response) => {
        console.log(response);
        const updatedCardsData = cardsData.map((card) => {
          return card.id === likedCard.id
            ? { ...card, likes_count: card.likes_count + 1 }
            : card;
        });
        setCardsData(updatedCardsData);
      });
  };

  const CardList = cardsData.map((card) => {
    return (
      <Card cardData={card} deleteCard={deleteCard} cardPlusOne={cardPlusOne} />
    );
  });

  const createNewCard = (newCardMessage) => {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/boards/${props.currentBoard.id}/cards`,
        newCardMessage
      )
      .then((response) => {
        console.log("Response:", response.data);
        const cards = [...cardsData];
        cards.push(response);
        setCardsData(cards);
      })
      .catch((error) => {
        console.log("Error:", error);
        // Improve error handling
      });
  };

  return (
    <div>
      <h2>{props.currentBoard.title}</h2>
      <h3>{props.currentBoard.owner_name}</h3>
      <NewCard createNewCard={createNewCard} />
      <section>{CardList}</section>
    </div>
  );
};

// CardsContainer.propTypes = {};

export default CardsContainer;
