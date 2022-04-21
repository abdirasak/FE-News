
import { Route, Routes} from 'react-router-dom';
import './App.css';
import { ArticleList } from './components/ArticleList';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';



function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar />
      <Routes>
        <Route path="/articles/:topic" element={ <ArticleList />}/>
      </Routes>
    </div>
  );
}

export default App;
