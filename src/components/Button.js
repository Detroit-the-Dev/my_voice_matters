import "./Button.css"

const Button = (props) => {
const handleClick = () => {
  var utterThis = new SpeechSynthesisUtterance(props.name);
  window.speechSynthesis.speak(utterThis);}
  return (
      <button className= "oneButton" onClick= {handleClick}>
        <h3>{props.name.toUpperCase()}</h3>
        <img src={props.image_url} alt={props.name}></img>
      </button>
);
}

export default Button;
