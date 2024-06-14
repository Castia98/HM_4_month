import './App.css';
import Button from "./components/Button";
import User from "./components/user";
import Wellcome from "./components/Wellcome";
import Content from "../../lesson_2/src/components/content/content";

const Text = () => {
    return <div>
        lesson1
    </div>
}
function App() {
    const b = 10
  return (
    <div className="App">
      <h1>hello</h1>
        <Text/>
        <Button text={b}/>
        <Button text={'open'}/>
        <Button text={'close'}/>
        <Button text={'edit'}/>
        <User name = {'Rin'} age={26} phone={4544854646268}/>
        <Wellcome title={"Welcome to our website!"} message={"Thank you for visiting. We hope you enjoy your stay."}/>


    </div>
  );
}

export default App;

const sum = (a,b) => {
    return a+b
}
console.log(sum(5,4));
