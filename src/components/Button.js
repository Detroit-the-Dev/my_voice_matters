import "./Button.css"

const Button = (props) => {
const handleClick = () => {
  var utterThis = new SpeechSynthesisUtterance(props.name);
  window.speechSynthesis.speak(utterThis);}
// function populateVoiceList() {
//   if(typeof speechSynthesis === 'undefined') {
//     return;
//   }

//   var voices = speechSynthesis.getVoices();

//   for(var i = 0; i < voices.length; i++) {
//     var option = document.createElement('option');
//     option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

//     if(voices[i].default) {
//       option.textContent += ' -- DEFAULT';
//     }

//     option.setAttribute('data-lang', voices[i].lang);
//     option.setAttribute('data-name', voices[i].name);
//     document.getElementById("voiceSelect").appendChild(option);
//   }
//   console.log(option);
// }
  
//   populateVoiceList();
//   if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
//     speechSynthesis.onvoiceschanged = populateVoiceList;
//   }

  return (
      <button className= "oneButton" onClick= {handleClick}>
        <h3>{props.name.toUpperCase()}</h3>
        <img src={props.image_url} alt={props.name}></img>
      </button>
);
}

export default Button;
