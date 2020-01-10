import React, { Component } from "react";
import Sections from "./Sections";
import RightPop from "./RightPopup";

class Talent extends Component {
	render() {
		return (
			<div id='talent'>
				<Sections />
				<RightPop />
			</div>
		);
	}
}

export default Talent;
