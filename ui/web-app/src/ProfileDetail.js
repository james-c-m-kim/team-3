import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProfileDetail extends Component {
	render() {
		return (
		  <section className="profile-detail">
			  {/*<img src={logo} className="App-logo" alt="logo" />*/}

			  <div>
				  <h1 className="App-title">Buddy Profile</h1>
				  <h2><img src="https://s3.amazonaws.com/uifaces/faces/twitter/ceekaytweet/128.jpg" /> <img src="/128_light.jpg" /></h2>
				  <h3>
					  Best Buddy: David Orlansky <br />
					  Volunteer Assigned: Alice Chuang
				  </h3>

			  </div>
			  <div>
				  <h2 className="App-title">Bio</h2>
				  <h3>Basic Info</h3>
				  <ul>
					  <li>Name: David Orlansky</li>
					  <li>Age: 31</li>
					  <li>Gender: Male</li>
					  <li>Location: Upper East Side</li>
				  </ul>
				  <h3>Interests & Hobbies</h3>
				  <ul>
					  <li>Interests: Soccer, Sining, Eating</li>
					  <li>Hobbies: BLOBBB</li>
				  </ul>
				  <h3>Other</h3>
				  <ul>
					  <li>Socializing Style: In-Person, Phone, Text, Video</li>
					  <li>Languages: English, Spanish</li>
					  <li>Schedule: M,W,F</li>
				  </ul>
			  </div>
			  <div>
				  <h2 className="App-title">Matches  +Filter</h2>
				  <ul>
					  <li><Link to="/volunteer/1">Alice Chuang 99%</Link></li>
					  <li><Link to="/volunteer/1">Uciel 99%</Link></li>
					  <li><Link to="/volunteer/1">James 99%</Link></li>
					  <li><Link to="/volunteer/1">Kamil 99%</Link></li>
				  </ul>
			  </div>
		  </section>
		);
	}
}

export default ProfileDetail;