import './App.css';
import Main from "./pages/main/Main";
import Header from "./components/header/Header";
import TodoPage from "./pages/todoPage/TodoPage";
import Counter from "./pages/counter/Counter";
import Form from "./pages/form/Form";



function App() {
    const links = [
        'Home', 'About us', 'Contacts'
    ]
  return (
    <div className="App">
        <Header links={links}/>
        {/*<Counter/>*/}
        {/*/!*<Main/>*!/*/}
        <TodoPage/>
        {/*<Form/>*/}
        <Header links={links}/>

    </div>
  );
}

export default App;

const sum = (a,b) => {
    return a+b
}
console.log(sum(5,4));
