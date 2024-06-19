import './App.css';
import Main from "./components/pages/main/Main";
import Header from "./components/header/Header";



function App() {
    const links = [
        'Home', 'About us', 'Contacts'
    ]
  return (
    <div className="App">
        <Header links={links}/>
        <Main/>
        <Header links={links}/>

    </div>
  );
}

export default App;

const sum = (a,b) => {
    return a+b
}
console.log(sum(5,4));
