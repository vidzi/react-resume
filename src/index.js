import React from 'react';
import ReactDOM from 'react-dom';
import './default.css';
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
		<div className="white-bg">		
		<div className="profile">
			<h2> Profile </h2>
			<p className="lead"> Im a creative PHP webdeveloper </p>
			<hr/>
			<div className="row">
				<div className="column">
					<h3> About me </h3>
					<p> I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team.</p>
				</div>
				<div className="column">
					<img src="./circle-cropped.png" alt="Vidisha Jitani" width="200px" height="200px" />
				</div>
				<div className="column">
					<h3> Details </h3>
					<p>
						<strong>Name: </strong>
						<br/>
						Vidisha Jitani
						<br/>
						<strong>Age: </strong>
						<br/>
						27 years
						<br/>
						<strong>Location: </strong>
						<br/>
						Gurgaon, India
					</p>
				</div>
			</div>	
		</div>
		</div>
		)
	}
}


class ExpRow extends React.Component {
	render() {
		return (
		<div className="row">
			<div className="column">
				<strong> {this.props.org} </strong>
				<br/>
				<span className="exp-period"> {this.props.period}</span>
			</div>
			<div className="column">
				<strong> {this.props.ttl} </strong>
				<br/>
				<span> {this.props.details} </span>
			</div>
		</div>
		)
	}
} 

class Experiences extends React.Component {
	render() {
		return (
		<div className="experiences">
			<h2>Experiences</h2>
			<hr/>
			<h3>Career</h3>
			<ExpRow org="Shuttl" period="Jun,2019 - Present" ttl="Team Lead" details="tegdk"/>
			<ExpRow org="Morph" period="Jun,2019 - Present" ttl="Team Lead" details="tegdk"/>
			<ExpRow org="Morph" period="Jun,2019 - Present" ttl="Team Lead" details="tegdk"/>
			<ExpRow org="Morph" period="Jun,2019 - Present" ttl="Team Lead" details="tegdk"/>


		</div>
		)
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