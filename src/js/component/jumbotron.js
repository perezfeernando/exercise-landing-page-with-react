//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

export function Jumbotron() {
	return (
		<div className="p-5 mb-4 bg-light rounded-3">
			<div className="container-fluid py-5">
				<h1 className="display-5 fw-bold">50% SHORT SWIMWEAR</h1>
				<p className="col-md-8 fs-4">
					Using a series of utilities, you can create this jumbotron,
					just like the one in previous versions of Bootstrap. Check
					out the examples below for how you can remix and restyle it
					to your liking.
				</p>
				<button className="btn btn-primary btn-lg" type="button">
					BUY NOW
				</button>
			</div>
		</div>
	);
}
