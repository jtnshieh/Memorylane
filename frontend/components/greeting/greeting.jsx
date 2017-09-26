import React from 'react';
import { Link } from 'react-router-dom';

// const sessionLinks = () => (
//   <nav className="login-signup">
//     <Link to="/login">Login</Link>
//     <br/>
//     <Link to="/signup">Sign up</Link>
//   </nav>
// );

const personalGreeting = (currentUser, logout) => (
	<div className="header-group">
		<div className = "nav-left">
			<img src="https://png.icons8.com/instagram/win10/64"
				width="45" height="45"
			/>
			<Link to="/feed" className="logo-font">Memorylane</Link>
		</div>
		<div className = "nav-right">
			<Link to={`/${currentUser.id}/upload`}>
				<img src="https://png.icons8.com/compact-camera/win8/48"
					height="35" width="35"
				/>
			</Link>
			<br/>
			<Link to={`/${currentUser.id}`}>
				<img src="https://png.icons8.com/name/androidL/48"
					height="35" width="35"
				/>
			</Link>
			<br/>
			<button className="blank-button" onClick={logout}>
				<img src="https://png.icons8.com/sign-out-filled/ios7/32"
					height="28" width="28"
					className="sign-out-button"
				/>
			</button>
		</div>
	</div>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : (<p></p>)
);

export default Greeting;

// sessionLinks()
