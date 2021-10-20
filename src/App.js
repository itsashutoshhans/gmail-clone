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
import SendMail from './components/SendMail';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from "./features/mailSlice";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
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
      {sendMessageIsOpen && <SendMail />}
      </div>
    </Router>
  );
}

export default App;
