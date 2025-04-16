import Presentation from "./components/Presentation/Presentation";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./style.css";

const App = () => {
	return (
		<>
			<div className="container">
				<main>
					<Presentation />
					<Projects />
				</main>
			</div>
			<div className="contact-wrapper">
				<Contact />
			</div>
			<div className="footer-wrapper">
				<Footer />
			</div>
		</>
	);
};

export default App;
