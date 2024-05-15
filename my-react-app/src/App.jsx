import Button from "./Button/Button.jsx";
import SearchBar from './SearchBar.jsx'
import Student from "./Student/Student.jsx";
import Sticker from "./Sticker/Sticker.jsx";

function App() {

  return(

    <>
      < Sticker 
      title = 'Normal Book Sticker'
      fname =  'Rithik'
      lname = 'Perera'
      class = '4LA'
      subject = 'computer science' />

      <Sticker
      title = 'Text book Sticker'
      fname = 'Varun'
      lname = 'Paul'
      class = '3lb'
      subject = 'software engineering'
      />

      <Sticker />
      </> 
      // this sticker apperars on the bottom,how to I adjuct the css such that this sticker appears on the left 
   
  );

}

export default App;
