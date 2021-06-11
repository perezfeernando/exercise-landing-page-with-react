//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

export function Logo() {
	return (
		<a
			href="/"
			className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
			<svg
				className="bi me-2"
				width="40"
				height="32"
				role="img"
				aria-label="Bootstrap">
				<use xlinkHref="#bootstrap"></use>
			</svg>
		</a>
	);
}
