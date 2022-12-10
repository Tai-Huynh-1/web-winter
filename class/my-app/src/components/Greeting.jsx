import { Component } from "react";

class Greeting extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false,
		};

		this.handleLogin = this.handleLogin.bind(this);
		this.handleSignOut = this.handleSignOut.bind(this);
	}

	handleLogin() {
		this.setState({ isLoggedIn: true });
	}

	handleSignOut() {
		this.setState({ isLoggedIn: false });
	}

	render() {
		return this.state.isLoggedIn ? (
			<div>
				<h1>Welcome! You are logged In!</h1>
				<button onClick={this.handleSignOut}>Sign Out</button>
			</div>
		) : (
			<div>
				<h1>Log In Status: False</h1>
				<button onClick={this.handleLogin}>Log In</button>
				<br />
			</div>
		);
	}
}

export default Greeting;
