import './App.css';
import Header from './components/Header';
import Sidebar from "./components/Sidebar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route exact path="/" component={EmailList}/>
            <Route path="/mail" component={Mail}/>
          </Switch>
        </div>
      </div>

    </Router>
  );
}

export default App;
