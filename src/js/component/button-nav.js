//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

export function ButtonsNav() {
	return (
		<div className="text-end">
			<button type="button" className="btn btn-outline-light me-2">
				Login
			</button>
			<button type="button" className="btn btn-warning">
				Sign-up
			</button>
		</div>
	);
}
