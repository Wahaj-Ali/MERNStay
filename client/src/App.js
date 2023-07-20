import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import { Home } from './pages/Home';
import { List } from './pages/List';
import { SingleHotel } from './pages/singleHotel';


function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/hotels' element={<List />}/>
            <Route path='/hotel' element={<SingleHotel />}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
