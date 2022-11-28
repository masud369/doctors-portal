import './App.css';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';

function App() {
  return (
    <div>
      <Router> 
        <Routes> 
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
