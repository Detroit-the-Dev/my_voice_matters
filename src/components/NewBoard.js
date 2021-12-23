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
      <div></div>
      <input type="text" value={formFields.title} onChange={onTitleChange} />
      <div></div>
      <label>Owner's Name</label>
      <div></div>
      <input
        type="text"
        value={formFields.ownerName}
        onChange={onOwnerNameChange}
      />
      <div></div>
      {/* <input type="submit" value="Submit" /> */}
      <input class="btn btn-primary" type="submit" value="Submit"></input>
    </form>
  );
};

export default NewBoard;
