import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import {Projects} from './pages/Projects'
import fireGif from './assets/fire.gif'
import resume from './assets/resumeNew.pdf'
import linkedIn from './assets/LI-In-Bug.png'
import gitHub from './assets/GitHub_Invertocat_White.png'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export const HomePage = () => {
  return (
    <div className="hero">
      <img src={fireGif} className="hero-gif" />
      <h1>shmethan.com</h1>
      <h3>ethan shanbaum's website</h3>
      <nav className="home-links">
        <a href={resume} target="_blank" className="home-link">resume</a>
        <Link to="/projects" className="home-link">projects</Link>
      </nav>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/ethan-shanbaum/" target="_blank" aria-label="LinkedIn">
          <img src={linkedIn} alt="LinkedIn" />
        </a>
        <a href="https://github.com/EShanbaum" target="_blank" aria-label="GitHub">
          <img src={gitHub} alt="GitHub" />
        </a>
      </div>
    </div>
  )
};

export default App;