class Intro extends React.Component {
	constructor(props) {
    	super(props);
    }

	render(){
		return (
			<div className="landing">
				<div className="welcome">
					<div className="welcomeBox">
						<h1>Welcome to <span className="sonoma">Sonoma Valley</span></h1>
						<h3>Handcrafted Locally Grown Small-Lot Vintages</h3>
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
						<a href="/about">Discover</a>
					</div>	
				</div>
				<div className="wineIntro">
					<div className="wine1">
						<h1>Pinot Gris</h1>
						<h3>Sonoma Valley Estate</h3>
						<p>This is a pino gris description. Talk about the flavors and how it is grown, what the annual production is ect.</p>
						<div className="grisImg"></div>
					</div>
					<div className="wine2">
						<div className="melangeImg"></div>
						<div className="wine2Box">
							<h1>Glenét Melange</h1>
							<h3>Sonoma Valley Estate</h3>
							<p>This is a glenet melange blend, our special designated Glenét Melange (seven-vine red blend</p>
						</div>
					</div>
					<div className="wine3">
						<h1>Pinot Noir</h1>
						<h3>Sonoma Valley Appelation</h3>
						<p>This is a pino noir description, it will talk about where the grapes came from, how it was grown, and blah blach ect.</p>
						<div className="noirImg"></div>
					</div>	
				</div>
				<div className="introNav">
					<div className="link">
						<a href="/wine"><h3>Our Wines</h3></a>
						<a href="/wine"><div className="wineLinkImg"></div></a>
						<p>Shop our selection of estate-crafted wines, from refreshing Chardonnays, to lush Pinot Noirs and exclusive bottlings like our Glenét Melange.</p>
					</div>
					<div className="link">
						<a href="/contact"><h3>Join Us</h3></a>
						<a href="/contact"><div className="contactLinkImg"></div></a>
						<p>Join our mailing list to find out our exclusive reserves first.</p>
					</div>
					<div className="link">
						<a href="/membership"><h3>Become a Member</h3></a>
						<a href="/membership"><div className="memberLinkImg"></div></a>
						<p>Dont miss out on the best perks. Enjoy discounts, access to winery-exclusive offerings, private events and more as a member of our wine club.</p>
					</div>
				</div>
			</div>
		)
	}
}