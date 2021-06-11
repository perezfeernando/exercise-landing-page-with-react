//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

export function FormNav() {
	return (
		<form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
			<input
				type="search"
				className="form-control form-control-dark"
				placeholder="Search..."
				aria-label="Search"
			/>
		</form>
	);
}
