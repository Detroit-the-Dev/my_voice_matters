import "./NewCard.css";
import { useState } from "react";
import PropTypes from "prop-types";

const NewCard = (props) => {
  const [formMessage, setFormMessage] = useState("");

  const onMessageChange = (event) => {
    setFormMessage(event.target.value);
  };

  const submitNewCard = (event) => {
    event.preventDefault();
    props.createNewCard({ message: formMessage });
    setFormMessage("");
  };

  const newCardIsEnabled = formMessage.length > 0 && formMessage.length <= 40;

  return (
    <form onSubmit={submitNewCard}>
      <h3>Create New Card</h3>
      <label>Message</label>
      <input
        type="text"
        value={formMessage}
        onChange={onMessageChange}
        size="55"
        className={formMessage.length > 40 ? "red-outline" : ""}
      />
      <p className="error-message">
        {formMessage.length > 40 ? "Message must be 40 characters or less" : ""}
      </p>
      <input type="submit" value="Submit" disabled={!newCardIsEnabled} />
    </form>
  );
};

// NewCard.propTypes = {};

export default NewCard;
