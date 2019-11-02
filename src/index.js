import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Intro extends React.Component {
	render() {
		return (
		<div className="intro">
			<div className="container">
				<h1> Vidisha Jitani </h1>	
				<p>Interactive Resume</p>
			</div>
			<div className="overlay">
			</div>
		</div>
		
		);
	}
}	

class Profile extends React.Component {
	render() {
		return (
		<div> 
			ABC
		</div>
		)
	}
}

class Experiences extends React.Component {
	render() {
		return ("experiences")
	}
}


class Resume extends React.Component {
	render() {
		return (
		<div className="resume">
			<Intro />
			<Profile />
			<Experiences />
		</div> 
		);
	}
}

ReactDOM.render(
	<Resume/>,
	document.getElementById('root')
);