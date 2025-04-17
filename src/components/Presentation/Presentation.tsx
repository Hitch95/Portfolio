import "./Presentation.css";
import myProfilePicture from "../../../src/assets/images/my_picture.webp";

const Presentation = () => {
	return (
		<>
			<section className="presentation-container" id="presentation">
				<nav>
					<div className="socials">
						<h3>bahloul moufidi</h3>
						<ul>
							<li>
								<a
									href="https://www.linkedin.com/in/bahloul-moufidi-279712216/"
									target="_blank"
								>
									<img
										src="images/icons/icon-linkedin.svg"
										width="19.2"
										height="19.2"
									/>
								</a>
							</li>
							<li>
								<a href="https://github.com/Hitch95" target="_blank">
									<img
										src="images/icons/icon-github.svg"
										width="19.2"
										height="19.2"
									/>
								</a>
							</li>
							<li>
								<a
									href="https://www.frontendmentor.io/profile/Hitch95"
									target="_blank"
								>
									<img
										src="images/icons/icon-frontend-mentor.svg"
										width="19.2"
										height="19.2"
									/>
								</a>
							</li>

							<li>
								<a href="https://x.com/" target="_blank">
									<img
										src={"images/icons/icon-x.svg"}
										alt="X Icon"
										width="19.2"
										height="19.2"
									/>
								</a>
							</li>
						</ul>
					</div>
					<div className="picture">
						<img src={myProfilePicture} />
					</div>
					<div className="circle-container">
						<img
							src="images/icons/pattern-circle.svg"
							width={129}
							height={129}
							className="circle"
						/>
					</div>
				</nav>

				<div className="rings-container">
					<img
						src="images/icons/pattern-rings.svg"
						width={530}
						height={129}
						className="rings"
					/>
				</div>

				<div className="description">
					<header>
						<h3>
							Enchanté ! Moi c'est <span>Bahloul MOUFIDI</span>.
						</h3>
					</header>
					<p>
						Basé en Bretagne, je suis un développeur front-end passionné par la
						création d'applications web accessibles que les utilisateurs
						adorent.
					</p>
					<p>
						<a href="#contact" className="contact-me">
							Me contacter
						</a>
					</p>
				</div>
			</section>

			<section className="experiences-container" id="experiences">
				<span className="separator first"></span>

				<div>
					<div>
						<h3>CSS, Sass, MUI</h3>
						<p>4 Ans D'Expérience</p>
					</div>

					<div>
						<h3>Javascript</h3>
						<p>4 Ans D'Expérience</p>
					</div>

					<div>
						<h3>React</h3>
						<p>3 Ans D'Expérience</p>
					</div>
					<div>
						<h3>Typescript</h3>
						<p>2 Ans D'Expérience</p>
					</div>
					<div>
						<h3>Librairie Web 3</h3>
						<p>1 An D'Expérience</p>
					</div>
					<div>
						<h3>NodeJs</h3>
						<p>2 Ans D'Expérience</p>
					</div>
				</div>
				<span className="separator second"></span>
			</section>
			<div className="rings-container">
				<img
					src="/images/icons/pattern-rings.svg"
					width={530}
					height={129}
					className="rings"
				/>
			</div>
		</>
	);
};

export default Presentation;
