import "./NewBoard.css";
import { useState } from "react";

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

  return (
    <form onSubmit={submitNewBoard}>
      <label>Title</label>
      <input type="text" value={formFields.title} onChange={onTitleChange} />
      <label>Owner's Name</label>
      <input
        type="text"
        value={formFields.ownerName}
        onChange={onOwnerNameChange}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default NewBoard;
