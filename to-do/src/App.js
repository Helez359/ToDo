import './App.css';
import HomeScreen from './screens/HomeScreen';
import AddToDo from './screens/AddToDo';
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/addtodo" component={AddToDo} />
      </Router>
    </div>
  );
}

export default App;
