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
					<div className="wineBottle"></div>
					<div className="wineDescrip">
						<p>Glenét Vineyards signature Estate Glenét Mélange, combines the fruits of seven varietals and produces a wine that is as rich, bright and flavorful as the vines, soil and sun from whence it comes. Uniquely superb. </p> 
						<p>Ships January 2018. Twenty-five case production. Limit of two (2-packs) per Member per vintage. </p>
						<p>Order early as our unique Glenét designate is consumed quickly.</p>
						<h4>&#36;90</h4>
					</div>
					<p>Wine Club Members, <a href="#">login</a> to access your discount. Not a member? <a href="/register">Join Now.</a></p>
					<a href="#" className="buyButton">Buy Now</a>
				</div>
				<div className="wineBox2Background"></div>
				<div className="wineBox2">
					<div className="wineTitle">
						<h4>2016 Pinot Gris</h4> 
						<h5>Sonoma Valley Estate Wine</h5>
					</div>
					<div className="wineBottle"></div>
					<div className="wineDescrip">
						<p>This is our refreshing Pinot Gris &ldquo;Sonoma Citrus Expression&rdquo; with scents of lime and mint that quench a warm summer afternoon.</p>
						<p>Ships June 2017 and February 2018.  Sixteen case production. Limit of two (2-packs) per Member per vintage.</p>
						<p>Order early as this is our smallest and only white batch wine.  Two cases of 2016 remaining.</p>
						<h4>&#36;45</h4>
					</div>
					<p>Wine Club Members, <a href="#">login</a> to access your discount. Not a member? <a href="/register">Join Now.</a></p>
					<a href="#" className="buyButton">Buy Now</a>
				</div>
				<div className="wineBox3Background"></div>
				<div className="wineBox3">
					<div className="wineTitle">
						<h4>2016 Pinot Noir</h4> 
						<h5>Sonoma Valley Appellation Wine</h5>
					</div>
					<div className="wineBottle"></div>
					<div className="wineDescrip">
						<p>This is our &ldquo;Passionate Pinot&rdquo; that challenges the Best of Class with an explosion of berries and pepper, leaving a lingering lust for more.  One of our finest vintages ever!</p>
						<p>Ships September 2017. Seventy-five case production. Limit of two (4-packs) per Member.</p>
						<h4>&#36;70</h4>
					</div>
					<p>Wine Club Members, <a href="#">login</a> to access your discount. Not a member? <a href="/register">Join Now.</a></p>
					<a href="#" className="buyButton">Buy Now</a>
				</div>
			</div>
		)
	}
}