import Button from "./Button/Button.jsx";
import SearchBar from './SearchBar.jsx'
import Student from "./Student/Student.jsx";
import Sticker from "./Sticker/Sticker.jsx";
import UserGreetings from "./UserGreetings.jsx";
// import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";
import ChangeEventHandler from "./ChangeEventHandler.jsx";


function App() {

  // //code for the sticker with props
  // return(

  //   <>
  //     < Sticker 
  //     title = 'Normal Book Sticker'
  //     fname =  'Rithik'
  //     lname = 'Perera'
  //     class = '4LA'
  //     subject = 'computer science' />

  //     <Sticker
  //     title = 'Text book Sticker'
  //     fname = 'Varun'
  //     lname = 'Paul'
  //     class = '3lb'
  //     subject = 'software engineering'
  //     />

  //     <Sticker />
  //     </> 
  //     // this sticker apperars on the bottom,how to I adjuct the css such that this sticker appears on the left 
   
  // );

  // // putting conditinal statements to functions
  // return(
  //   <UserGreetings loggedIn = {true} userName='RithikPerera' />
  // );

  return(
    // <MyComponent />
    // <Counter />
    <ChangeEventHandler />
  );

  
}

export default App;
