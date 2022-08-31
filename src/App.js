import "./App.css";
import ButtonList from "./components/ButtonList";
import axios from "axios";

function App() {

const buttonData = [
  {
    name: 'stop',
    image_url: 'images/STOP.png'
  },
  {
    name: 'eat',
    image_url: 'images/CREEPY EATER.png'
  },
  {
    name: 'more',
    image_url: 'images/MORE.png'
  },
  {
    name: 'drink',
    image_url: 'images/DRINK.png'
  },
  {
    name: 'help',
    image_url: 'images/HELP.png'
  },
  {
    name: 'all done',
    image_url: 'images/ALL DONE.png'
  },
  {
    name: 'go',
    image_url: 'images/GO.png'
  },
  {
    name: 'play',
    image_url: 'images/PLAY.png'
  },
  {
    name: 'open',
    image_url: 'images/OPEN.png'
  },
  {
    name: 'close',
    image_url: 'images/CLOSE.png'
  },
  {
    name: 'in',
    image_url: 'images/IN.png'
  },
  {
    name: 'out',
    image_url: 'images/OUT.png'
  },
  {
    name: 'yes',
    image_url: 'images/YES.png'
  },
  {
    name: 'no',
    image_url: 'images/NO.png'
  },
  {
    name: 'thank you',
    image_url: 'images/THANK YOU.png'
  },
  {
    name: 'hello',
    image_url: 'images/HELLO.png'
  },
  {
    name: 'goodbye',
    image_url: 'images/GOODBYE.png'
  },
  {
    name: 'please',
    image_url: 'images/PLEASE.png'
  },
  {
    name: 'bath',
    image_url: 'images/BATH.png'
  },
  {
    name: 'bed',
    image_url: 'images/BED.png'
  },
  {
    name: 'school',
    image_url: 'images/SCHOOL.png'
  },
  {
    name: 'bus',
    image_url: 'images/BUS.png'
  },
  {
    name: 'daddy',
    image_url: 'images/DADDY.png'
  },
  {
    name: 'granny',
    image_url: 'images/GRANNY.png'
  },
  {
    name: 'i',
    image_url: 'images/ILLIYEEN.png'
  },
  {
    name: 'mama',
    image_url: 'images/MAMA.png'
  },
];


return (
<section className="appContainer">
  <ButtonList buttonData={buttonData}/>
</section>
 ); 
}
export default App;