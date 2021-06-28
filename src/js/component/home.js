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
			<div className="contenedor">
				<Header />
				<div className="contenedor-card">
					<Card name="MENS" title="Nueva Collection SUMMER 2021" />
					<Card name="WOMANS" title="Nueva Collection SUMMER 2021" />
					<Card name="KIDS" title="Nueva Collection SUMMER 2021" />
					<Card name="MENS" title="Nueva Collection SUMMER 2021" />
				</div>
			</div>
		</div>
	);
}
