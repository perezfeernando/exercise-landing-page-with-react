import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Nav } from "./nav.js";
import { Header } from "./header.js";
import { Card } from "./card.js";

//create your first component
export function Home() {
	return (
		<div>
			<Nav />
			<Header />
            <div className="row">
			<Card />
			<Card />
			<Card />
			<Card />
            </div>
		</div>
	);
}
