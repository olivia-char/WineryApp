var Intro = React.createClass({
	render(){
		return (
			<div className="landing">
				<div className="welcome">
					<div className="welcomeBox">
						<h1>Welcome to <b><span className="sonoma">Sonoma Valley</span></b></h1>
						<h3>Hand-Crafted Locally Grown Small-Lot Vintages</h3>
					</div>
					<div className="welcomeImg"></div>
				</div>
				<div className="glenetIntro">
					<div className="glenetImg"></div>
					<div className="glenetBox">
						<h1>The Bounty of <b>Glenét Vineyards</b></h1>
						<p>We are especially grateful to live, farm and personally craft our own unique wines in such an amazing place.</p> 
						<p>Sonoma Valley, which is located 90 minutes North of San Francisco, is such a special area nestled between the Mayacamas and Sonoma Mountains about 35 miles East of the Pacific Ocean.</p>
						<p>The moderate temperatures during spring and summer generates pleasant days with a daily ocean breeze that gently wisps through the Valley each afternoon, all of which provides an ideal climate for growing our wines.</p>
						<button><a href="/about">Discover</a></button>
					</div>	
				</div>
				<div className="wineIntro">
					<div className="wine1">
						<h1>Pino Gris</h1>
						<p>This is a pino gris description</p>
					</div>
					<div className="wine2">
						<h1>Glenét Melange</h1>
						<p>This is a glenet description</p>
					</div>
					<div className="wine3">
						<h1>Pino Noir</h1>
						<p>This is a pino noir description</p>
					</div>
				</div>
				<div className="introNav">
					<button><a href="/wine">Our Wines</a></button>
					<button><a href="/membership">Become a Member</a></button>
					<button><a href="/wine">Join Us</a></button>
				</div>
			</div>
		)
	}
});