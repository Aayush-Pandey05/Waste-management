import './App.css';
import Contact from './contact';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Service from './service';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
