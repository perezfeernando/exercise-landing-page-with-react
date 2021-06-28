//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="card card-styles">
			<img src="..." className="card-img-top" alt="...">
				{props.img}
			</img>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">{props.title}</p>
				<a href="#" className="btn btn-primary">
					BUY NOW
				</a>
			</div>
		</div>
	);
}

Card.propTypes = {
	name: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string,
	img: PropTypes.string
};
