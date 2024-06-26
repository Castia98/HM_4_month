import './App.css';
import Main from "./components/pages/main/Main";
import Header from "./components/header/Header";
import TodoPage from "./components/pages/todoPage/TodoPage";
import Counter from "./components/pages/counter/Counter";



function App() {
    const links = [
        'Home', 'About us', 'Contacts'
    ]
  return (
    <div className="App">
        <Header links={links}/>
        <Counter/>
        {/*<Main/>*/}
        <TodoPage/>
        <Header links={links}/>

    </div>
  );
}

export default App;

const sum = (a,b) => {
    return a+b
}
console.log(sum(5,4));
