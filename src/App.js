import './App.css';
import Header from './components/layout/Header';
import MainRouter from "./routers/MainRouter";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
      <Router basename='/'>
        <div className="App">
            <Header></Header>
            <MainRouter/>
        </div>
      </Router>
  );
}

export default App;
