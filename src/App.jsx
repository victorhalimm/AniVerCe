
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import Homepage from './pages/Homepage';
import AnimeDetails from './pages/AnimeDetails';

function App() {

  
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/anime/:animeId' element={<AnimeDetails/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
