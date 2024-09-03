import './App.css';
import Contact from './contact';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

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
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
