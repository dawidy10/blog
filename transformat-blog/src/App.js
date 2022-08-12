import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from "./pages/Home"
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import logo from './Logo.svg'

function App() {
  return (
    <Router>
      <nav>
      <Link to="/"><img className="logo" src={logo}/></Link>
      <div className="nav-links">
        <Link className="nav-link" to="/blog">BLOG</Link>
        <Link className="nav-link" to="/despre">DESPRE</Link>
        <Link className="nav-link" to="/sustine">SUSȚINE</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;
