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
			<img src="http://res.cloudinary.com/dq60klc41/image/upload/v1508463149/if_Instagram_1298747_rsulxh.png"
				width="30px" height="30px"
			/>
			<Link to="/feed" className="logo-font">Memorylane</Link>
		</div>
		<div className = "nav-right">
			<Link to={`/${currentUser.id}/upload`}>
				<img src="http://res.cloudinary.com/dq60klc41/image/upload/v1508463288/if_icon-camera_211634_lnsf4d.png"
					height="35" width="35"
				/>
			</Link>
			<br/>
			<Link to={`/${currentUser.id}`}>
				<img src="http://res.cloudinary.com/dq60klc41/image/upload/v1508463371/if_icons_user_1564534_otpuey.png"
					height="35" width="35"
				/>
			</Link>
			<br/>
			<button className="blank-button" onClick={logout}>
				<img src="http://res.cloudinary.com/dq60klc41/image/upload/v1508463438/if_log_out_678146_t2fb8p.png"
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
