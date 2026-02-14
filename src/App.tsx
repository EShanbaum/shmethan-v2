import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import {Projects} from './pages/Projects'
import fireGif from './assets/fire.gif'
import resume from './assets/resumeNew.pdf'


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
    <div>
      <img src={fireGif}/>
      <h1>shmethan.com</h1>
      <h3>ethan shanbaum's website</h3>
      <a href={resume} target="_blank">resume</a>
      <br />
      <br />
      <Link to="/projects">projects</Link>
    </div>
  )
};

export default App;