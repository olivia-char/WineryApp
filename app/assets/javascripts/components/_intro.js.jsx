
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
					<div className="welcomeIcon"></div>
					<div className="welcomeIcon2"></div>
					<div className="welcomeImg"></div>
				</div>
				<div className="glenetIntro">
					<div className="glenetBox">
						<div className="glenetImg"></div>
						<h1>The Bounty of <b>Glenét Vineyards</b></h1>
						<p>We are especially grateful to live, farm and personally craft our own unique wines in such an amazing place.</p>
						<p>Sonoma Valley, which is located 90 minutes North of San Francisco, is such a special area nestled between the Mayacamas and Sonoma Mountains about 35 miles East of the Pacific Ocean.</p>
						<p>The moderate temperatures during spring and summer generate pleasant days with a daily ocean breeze that gently wisps through the Valley each afternoon, providing an ideal climate for growing our wines.</p>
						<a href="/about">Discover</a>
					</div>
				</div>
				<div className="quoteSection">
					<h1>&ldquo; We handcraft each of our vintages to create the very best of what the land and nature provides...&rdquo;</h1>
					<h3>-John Stalcup, Winemaker</h3>
				</div>
				<div className="wineIntro">
					<div className="wineIcon"></div>
					<div className="wineIcon2"></div>
					<div className="wine1">
						<h1>Pinot Gris</h1>
						<h3>Sonoma Valley Estate</h3>
						<div className="wineDesc">
							<p>Our Glenét Pinot Gris block is grown about 30 yards from a 70-year-old eucalyptus tree located on our property that lightly sprinkles its mint flavored leaves into the Pinot Gris vineyard, mixing into the terre.</p>
							<p>You can taste the subtle mint and citrus expressions, imparting a refreshing effervescence with each sip. The Glenét Pinot Gris stands apart from all others due to nature’s special blending. One of a kind vintage.</p>
						</div>

						<div className="grisImg"></div>
					</div>
					<div className="wineIcon3"></div>
					<div className="wine2">
						<h1>Glenét Mélange</h1>
						<div className="melangeImg"></div>
						<h3>Sonoma Valley Estate</h3>
						<div className="wineDesc2">
							<p>The Glenét Mélange block is comprised of seven grape varietals in a field mixture: three types of Cabernet Sauvignon (80%); Petit Verdot (5%); Cabernet Franc (5%); Syrah (5%), and; Merlot (5%).</p>
							<p>The 2016 vintage was also topped off with our Pinot Noir, providing one additional note to an orchestra of viticultural flavors. We are proud that our Glenét Mélange is a new varietal blend from the Sonoma Valley AVA!</p>
						</div>
					</div>
					<div className="wineIcon4"></div>
					<div className="wine3">
						<h1>Pinot Noir</h1>
						<h3>Sonoma Valley Appelation</h3>
						<div className="wineDesc">
							<p>Our Glenét Pinot Noir grape comes from a cool breezy hillside in Bennett Valley, part of the Sonoma Valley Viticulture Area (AVA). This area of Sonoma Appelation is in a protected valley along the Sonoma Mountain range and receives a daily breeze that comes through the valley from the Pacific Ocean.</p>
							<p>The best Pinot Noirs find their pinnacle from their unique locations, cool climates, and sheltered environs in which they’re grown, and this vintage takes advantage of all three of these attributes. Truly superb!</p>
						</div>
						<div className="noirImg"></div>
					</div>
					<div className="wineIcon5"></div>
				</div>
					<div className="navLink">
						<div className="link">
							<a href="/wine"><h3>Our Wines</h3></a>
							<a href="/wine"><div className="wineLinkImg"></div></a>
							<p>Shop our selection of handcrafted wines, from our refreshing Pinot Gris, to our lush Pinot Noir and exclusive Glenét Mélange.</p>
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
