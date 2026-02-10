import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import {Projects} from './pages/Projects'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

function HomePage() {
  return (
    <div>
      <img src='src/assets/fire.gif'/>
      <h1>shmethan.com</h1>
      <h3>ethan shanbaum's website</h3>
      <a href='resumeNew.pdf' target="_blank">resume</a>
      <br />
      <br />
      <Link to="/projects">projects</Link>
    </div>
  )
}

export default App