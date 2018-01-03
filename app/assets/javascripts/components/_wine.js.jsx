class Wine extends React.Component {
	constructor(props) {
    	super(props);
    }
	render(){
		return (
			<div className="wineShop">
				<h3>Handcrafted Small-lot Wines from <b>Glenét Vineyards</b> in the <b>Sonoma Valley Appellation</b></h3>
				<div className="wineBox1Background"></div>
				<div className="wineBox1">
					<div className="wineTitle">
						<h4>2016 Glenét Mélange</h4>
						<h5>Sonoma Valley Estate Wine</h5>
					</div>
					<div className="wineBottle1"></div>
					<div className="wineDescrip">
						<p>Our signature Estate &ldquo;Glenét Mélange&rdquo; combines the fruits of seven grapes as flavorful as the vines, soil and sun from whence they come. </p>
						<h4>&#36;90</h4>
					</div>
					<a href="/order" className="buyButton">Buy Now</a>
				</div>
				<div className="wineBox2Background"></div>
				<div className="wineBox2">
					<div className="wineTitle">
						<h4>2017 Pinot Gris</h4>
						<h5>Sonoma Valley Estate Wine</h5>
					</div>
					<div className="wineBottle2"></div>
					<div className="wineDescrip">
						<p>This is our Pinot Gris &ldquo;Sonoma Citrus Expression&rdquo; with scents of lime and mint that quench your thirst day or night.</p>
						<h4>&#36;45</h4>
					</div>
					<a href="/order" className="buyButton">Buy Now</a>
				</div>
				<div className="wineBox3Background"></div>
				<div className="wineBox3">
					<div className="wineTitle">
						<h4>2016 Pinot Noir</h4>
						<h5>Sonoma Valley Appellation Wine</h5>
					</div>
					<div className="wineBottle3"></div>
					<div className="wineDescrip">
						<p>This is our &ldquo;Passionate Pinot&rdquo; that challenges the Best of Class with an explosion of berries and pepper, leaving a lingering lust for more.</p>
						<h4>&#36;70</h4>
					</div>
					<a href="/order" className="buyButton">Buy Now</a>
				</div>
			</div>
		)
	}
}
