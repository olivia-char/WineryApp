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
						<div className="wineDesc">
							<p>Our Glenét Pinot Gris block is grown about 30 yards from a 70-year-old eucalyptus tree located on our property that lightly sprinkles its mint flavored leaves into the Pinot Gris vineyard, mixing into the Terre.</p> 
							<p>You can taste the subtle mint and citrus expressions, imparting a refreshing effervescence with each sip. The Glenét Pinot Gris stands apart from all others due to nature’s special blending. One of a kind vintage.</p>
						</div>
						
						<div className="grisImg"></div>
					</div>
					<div className="wine2">
						<div className="melangeImg"></div>
						<div className="wine2Box">
							<h1>Glenét Melange</h1>
							<h3>Sonoma Valley Estate</h3>
							<div className="wineDesc">
								<p>The Glenét Mélange block comprises a field mixture of seven grape varietals: three types of Cabernet Sauvignon (80%); Petit Verdot (5%); Cabernet Franc (5%); Syrah (5%), and; Merlot (5%).</p> 
								<p>The 2016 vintage was also topped off with our Pinot Noir, providing one additional note to an orchestra of viticultural flavors. This is by far one of the best Glenét Mélange vintages we have produced, surely to receive many accolades.</p>
							</div>
						</div>
					</div>
					<div className="wine3">
						<h1>Pinot Noir</h1>
						<h3>Sonoma Valley Appelation</h3>
						<div className="wineDesc">
							<p>Our Glenét Pinot Noir grape comes from a cool breezy hillside in Bennett Valley, part of the Sonoma Valley Viticulture Area (AVA). This area of Sonoma Valley is in a protected valley along the Sonoma Mountain range and receives a daily breeze that comes through the valley from the Pacific Ocean.</p>
							<p>The best Pinot Noirs find their pinnacle from the unique locations, cool climates, and sheltered environs in which they’re grown, and this vintage takes advantage of all three of these attributes. Our 2017 Pinot Noir will rival all of its local brethren. Truly superb!</p>
						</div>
						<div className="noirImg"></div>
					</div>	
				</div>
				<div className="introNav">
					<div className="link">
						<a href="/wine"><h3>Our Wines</h3></a>
						<a href="/wine"><div className="wineLinkImg"></div></a>
						<p>Shop our selection of estate-crafted wines, from our refreshing Pinot Gris, to our lush and unique Pinot Noir and Glenét Mélange.</p>
					</div>
					<div className="link">
						<a href="/contact"><h3>Join Us</h3></a>
						<a href="/contact"><div className="contactLinkImg"></div></a>
						<p>Join our mailing list to hear about our exclusive reserves first.</p>
					</div>
					<div className="link">
						<a href="/membership"><h3>Become a Member</h3></a>
						<a href="/membership"><div className="memberLinkImg"></div></a>
						<p>Dont miss the best perks. Enjoy discounts, access to exclusive offerings, and private events as a member of our Wine Club.</p>
					</div>
				</div>
			</div>
		)
	}
}