import "./NewBoard.css";
import { useState } from "react";
import PropTypes from "prop-types";

const NewBoard = (props) => {
  const [formFields, setFormFields] = useState({
    title: "",
    ownerName: "",
  });

  const onTitleChange = (event) => {
    setFormFields({
      ...formFields,
      title: event.target.value,
    });
  };

  const onOwnerNameChange = (event) => {
    setFormFields({
      ...formFields,
      ownerName: event.target.value,
    });
  };

  const submitNewBoard = (event) => {
    event.preventDefault();
    props.createNewBoard({
      title: formFields.title,
      owner_name: formFields.ownerName,
    });
    setFormFields({
      title: "",
      ownerName: "",
    });
  };

  const newBoardIsEnabled =
    formFields.title.length > 0 && formFields.ownerName.length > 0;

  return (
    <form className='new-board-style' onSubmit={submitNewBoard}>
      <label>Title</label>
      <br />
      <input type="text" value={formFields.title} onChange={onTitleChange} />
      <br />
      <label>Owner's Name</label>
      <br />
      <input
        type="text"
        value={formFields.ownerName}
        onChange={onOwnerNameChange}
      />
      <br />
      <br />
      <input
        className="btn btn-primary"
        type="submit"
        value="Submit"
        disabled={!newBoardIsEnabled}
      />
    </form>
  );
};

NewBoard.propTypes = {
  createNewBoard: PropTypes.func,
};

export default NewBoard;
