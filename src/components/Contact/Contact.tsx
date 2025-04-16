import "./Contact.css";

const Contact = () => {
	return (
		<section className="contact-container">
			<header>
				<h3 id="contact">Contact</h3>
				<p>
					J'aimerais entendre parler de votre projet et de la façon dont je
					pourrais aider. Veuillez remplir le formulaire et je vous répondrai
					dès que possible.
				</p>
			</header>
			<form>
				<div>
					<label htmlFor="name">Nom</label>
					<input type="text" id="name" placeholder="NOM" />
				</div>

				<div>
					<label htmlFor="email">Email</label>
					<input type="email" id="email" placeholder="EMAIL" />
				</div>

				<div>
					<label htmlFor="message">Message</label>
					<textarea id="message" placeholder="MESSAGE"></textarea>
				</div>

				<button type="submit">Envoyer mon message</button>
			</form>
			<div className="rings-container">
				<img
					src="../../../src/assets/images/pattern-rings.svg"
					width={530}
					height={129}
					className="rings"
				/>
			</div>
			<span className="separator"></span>
		</section>
	);
};

export default Contact;
