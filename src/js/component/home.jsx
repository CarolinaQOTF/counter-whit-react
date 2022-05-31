import React from "react";
import reactDom from "react-dom";

//create your first component
const Home = () => {
	return (
		<div className="Container row d-flex bg-dark p-5 text-white fs-1 text-center">
			<div className="IconClock col m-2 p-4 border border-white">
				<i className="far fa-clock "></i>
			</div>
			<div className="Number4 col m-2 p-4 border border-white"></div>
			<div className="Number3 col m-2 p-4 border border-white"></div>
			<div className="Number2 col m-2 p-4 border border-white"></div>
			<div className="Number1 col m-2 p-4 border border-white"></div>
		</div>
	);
};

export default Home;
