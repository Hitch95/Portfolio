import "./Footer.css";

const Footer = () => {
	return (
		<>
			<span className="separator"></span>
			<footer className="footer">
				<h4>bahloul moufidi</h4>
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
			</footer>
		</>
	);
};

export default Footer;
