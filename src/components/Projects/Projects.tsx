import "./Projects.css";

const Projects = () => {
	return (
		<section className="projects-container" id="projects">
			<header>
				<h3>Projets</h3>
				<a href="#contact" className="contact-me">
					Me contacter
				</a>
			</header>

			<div className="card-project">
				<div className="background-img-project">
					<div className="links-container">
						<a
							href="https://dark-studio-blog.vercel.app/"
							className="green-color-hover"
						>
							Voir le site
						</a>
						<a
							href="https://github.com/Hitch95/Dark_Studio_Blog"
							className="green-color-hover"
						>
							Voir le Repo Github
						</a>
					</div>
				</div>
				<div className="below-img-project">
					<h3>Dark Studio</h3>
					<p>
						<span>Typescript</span>
						<span>NextJS</span>
						<span>SQL</span>
					</p>
					<div className="links-container">
						<a
							href="https://dark-studio-blog.vercel.app/"
							className="green-color-hover"
						>
							Voir le site
						</a>
						<a
							href="https://github.com/Hitch95/Dark_Studio_Blog"
							className="green-color-hover"
						>
							Voir le Repo Github
						</a>
					</div>
				</div>
			</div>

			<div className="card-project">
				<div className="background-img-project">
					<div className="links-container">
						<a
							href="https://cyclades-a11-y.vercel.app/"
							className="green-color-hover"
						>
							Voir le site
						</a>
						<a
							href="https://github.com/Hitch95/Cyclades_A11Y"
							className="green-color-hover"
						>
							Voir le Repo Github
						</a>
					</div>
				</div>
				<div className="below-img-project">
					<h3>Cyclades</h3>
					<p>
						<span>Typescript</span>
						<span>React</span>
						<span>MUI</span>
						<span>Deno</span>
					</p>
					<div className="links-container">
						<a
							href="https://cyclades-a11-y.vercel.app/"
							className="green-color-hover"
						>
							Voir le site
						</a>
						<a
							href="https://github.com/Hitch95/Cyclades_A11Y"
							className="green-color-hover"
						>
							Voir le Repo Github
						</a>
					</div>
				</div>
			</div>

			<div className="card-project">
				<div className="background-img-project">
					<div className="links-container">
						<a
							href="https://etherscore-test.vercel.app/"
							className="green-color-hover"
						>
							Voir le site
						</a>
						<a
							href="https://github.com/Hitch95/etherscore_test"
							className="green-color-hover"
						>
							Voir le Repo Github
						</a>
					</div>
				</div>
				<div className="below-img-project">
					<h3>Wallet Web 3</h3>
					<p>
						<span>Typescript</span>
						<span>React</span>
						<span>MUI</span>
						<span>Wagmi</span>
					</p>
					<div className="links-container">
						<a
							href="https://etherscore-test.vercel.app/"
							className="green-color-hover"
						>
							Voir le site
						</a>
						<a
							href="https://github.com/Hitch95/etherscore_test"
							className="green-color-hover"
						>
							Voir le Repo Github
						</a>
					</div>
				</div>
			</div>

			<div className="card-project">
				<div className="background-img-project">
					<div className="links-container">
						<a href="" className="green-color-hover">
							Voir le site
						</a>
						<a
							href="https://github.com/Hitch95/DoctoMed"
							className="green-color-hover"
						>
							Voir le Repo Github
						</a>
					</div>
				</div>
				<div className="below-img-project">
					<h3>Salutem</h3>
					<p>
						<span>PHP</span>
						<span>Symfony</span>
						<span>Twig</span>
						<span>Doctrine</span>
					</p>
					<div className="links-container">
						<a href="" className="green-color-hover">
							Voir le site
						</a>
						<a
							href="https://github.com/Hitch95/DoctoMed"
							className="green-color-hover"
						>
							Voir le Repo Github
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
