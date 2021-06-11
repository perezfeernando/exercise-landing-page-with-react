//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { ListNav } from "./list-nav";
import { FormNav } from "./form-nav";
import { ButtonsNav } from "./button-nav";
import { Logo } from "./logo";

export function Nav() {
	return (
		<header className="p-3 bg-dark text-white">
			<div className="container">
				<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
					<Logo />

					<ListNav />

					<FormNav />

					<ButtonsNav />
				</div>
			</div>
		</header>
	);
}
