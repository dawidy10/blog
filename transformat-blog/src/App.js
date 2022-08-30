import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import About from "./pages/About"
import Sustine from "./pages/Sustine"
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import Articol from './pages/Articol';
import logo from './Logo.svg';
import blogicon from './blog-icon.svg';
import abouticon from './about-icon.svg';
import supporticon from './support-icon.svg';



function App() {
  let id = 'a';
  return (
    <Router>
      <nav>
      <Link to="/"><img className="logo" src={logo}/></Link>
      <div className="nav-links">
        <Link className="nav-link" to="/blog">BLOG</Link>
        <Link className="nav-link" to="/despre">DESPRE</Link>
        <Link className="nav-link" to="/sustine">SUSȚINE</Link>
        </div>
      <div className="nav-icons">
        <Link className="nav-icon" to="/blog"><img src={blogicon} alt="blog"/></Link>
        <Link className="nav-icon" to="/despre"><img src={abouticon} alt="blog"/></Link>
        <Link className="nav-icon" to="/sustine"><img src={supporticon} alt="blog"/></Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/despre" element={<About />} />
        <Route path="/sustine" element={<Sustine />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/articole/:id" element={<Articol />} />
      </Routes>
    </Router>
  );
}

export default App;
