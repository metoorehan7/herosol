import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Sidebar from "./components/common/Sidebar";
import Talent from "./components/talent/index";
import Lists from "./components/lists/index";

const App = () => {
	return (
		<Router>
			<Header />
			<Sidebar />
			<article id='content'>
				<Route
					exact
					path='/'
					component={Talent}
				/>
				<Route
					exact
					path='/lists'
					component={Lists}
				/>
			</article>
		</Router>
	);
};

export default App;
