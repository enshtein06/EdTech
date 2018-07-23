import React from 'react';
import {Link} from 'react-router-dom';

const footer = (props) => (
	<footer>
		<div className="footer__container">
			<div className="footer__container--left">
				<div className="logo">
					<a href="index.html"><span>Ed</span>Tech</a>
				</div>
				<p className="copyright">Copyright &copy; 2018 Sobaka, Inc.</p>
			</div>
			<div className="footer__container--right">
				<ul>
					<li><Link to="/">Contact</Link></li>
					<li><Link to="/">Vacancy</Link></li>
					<li><Link to="/">About us</Link></li>
					<li><Link to="/">Support</Link></li>
				</ul>
			</div>
		</div>
	</footer>
);

export default footer;