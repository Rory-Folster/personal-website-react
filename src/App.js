import './App.css';
import MainNav from './Components/Nav';
import Project from './Components/Projects';
import Skills from './Components/Skills';
import Home from './Components/Home';
import Login from './Components/Login';
import Footer from './Components/Footer';
import ProjectDetails from './Components/ProjectDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
            <MainNav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
              <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
      </Router>
  );
}

export default App;
