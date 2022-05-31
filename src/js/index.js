//import react into the bundle
import propTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

const Seconds = (props) => {
	return (
		<div
			id="ContenedorGeneral"
			className="Container row d-flex bg-dark p-5 text-white fs-1 text-center">
			<div className="mb-5">
				<h1>
					Simple counter whit React
					<i className="fab fa-react"></i>
					<i className="far fa-react "></i>
				</h1>
			</div>
			<div className="IconClock col m-2 p-4 border border-white rounded-3 mb-5">
				<i className="far fa-clock fa-lg"></i>
			</div>
			<div className="Number4 col m-2 p-4 border border-white rounded-3 mb-5">
				{props.digitFour}
			</div>
			<div className="Number3 col m-2 p-4 border border-white rounded-3 mb-5">
				{props.digitThree}
			</div>
			<div className="Number2 col m-2 p-4 border border-white rounded-3 mb-5">
				{props.digitTwo}
			</div>
			<div className="Number1 col m-2 p-4 border border-white rounded-3 mb-5">
				{props.digitOne}
			</div>
			<div>
				<button
					type="button"
					className="btn btn-primary btn-lg"
					onClick={() => {
						clearInterval(intervalos);
					}}>
					Stop
				</button>
				<button
					type="button"
					className="btn btn-primary btn-lg"
					onClick={() => pause()}>
					Start
				</button>
				<button
					type="button"
					className="btn btn-primary btn-lg"
					onClick={() => reset()}>
					Reset
				</button>
			</div>
		</div>
	);
};

Seconds.propTypes = {
	digitOne: propTypes.number,
	digitTwo: propTypes.number,
	digitThree: propTypes.number,
	digitFour: propTypes.number,
};
let counter = 0;

function contar() {
	let four = Math.floor(counter / 1000);
	let Three = Math.floor(counter / 100);
	let Two = Math.floor(counter / 10);
	let one = Math.floor(counter / 1);

	counter++;

	ReactDOM.render(
		<Seconds
			digitOne={one}
			digitTwo={Two}
			digitThree={Three}
			digitFour={four}
		/>,
		document.querySelector("#app")
	);
}
contar();

let intervalos = setInterval(contar, 1000);

let onOff = false;

function pause() {
	if (!onOff) {
		onOff = false;
		intervalos = setInterval(contar, 1000);
	}
}

function reset() {
	clearInterval(counter);
	counter = 0;
	intervalos = setInterval(contar, 1000);
}
