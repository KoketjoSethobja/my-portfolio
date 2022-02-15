import './App.css';
import About from './components/About';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
	return (
		<div className="container">
			<Navbar/>
			<Home />
			<Skills />
			<Projects />
			<Certificates />
			<About />
			<Contact />
			<div className="footer">
				<p>Designed and built by <a href="https://www.linkedin.com/in/koketjo-sethobja-22498a162/" target="_blank"><span style={{color: "#ff521d"}}>Koketjo Sethobja</span></a></p>
			</div>
		</div>
	);
}

export default App;
