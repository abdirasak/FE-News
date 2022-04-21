
import { Route, Routes} from 'react-router-dom';
import './App.css';
import { ArticleList } from './components/ArticleList';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Home } from './routes/Home';
import { Coding } from './routes/Coding';
import { Cooking } from './routes/Cooking';
import { Football } from './routes/Football';


function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coding" element={<Coding />} />
        <Route path="/cooking" element={<Cooking />} />
        <Route path="/football" element={<Football />} />
      </Routes>
    </div>
  );
}

export default App;
