import "./NewBoard.css";

const NewBoard = () => {
  return (
    <div>
      <button>Create New Board</button>
      <label>Title</label>
      <input type="text" />
      <label>Owner's Name</label>
      <input type="text" />
      <button>Submit</button>
    </div>
  );
};

export default NewBoard;
