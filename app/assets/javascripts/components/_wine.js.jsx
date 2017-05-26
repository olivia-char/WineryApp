var Wine = React.createClass({
	render(){
		return (
			<div className="wineShop">
				<h3>Hand-crafted Small Acreage Wines from Glenét Vineyards in Sonoma Valley Appellation including our special designated Glenét Melange (seven-vine red blend)</h3>

				<div className="wineBox">
					<p>2016 Glenét Mélange</p> 
					<p>Sonoma Valley Estate Wine</p>
					<div className="wineBottle"></div>
					<h5>This is Glenét Vineyards signature Estate Glenét Mélange that combines the fruits of seven varietals and produces a wine that is as rich, bright and flavorful as the vines, soil and sun from whence it comes. Uniquely superb. Ships January 2018. Twenty-five case production.</h5>
					<h5>Limit of two (2-packs) per Member per vintage.  Order early as our unique Glenét designate is consumed quickly.</h5>
					<h4>&#36;90</h4>
					<p>Wine Club Members, <a href="#">login</a> to access your discount. Not a member? <a href="#">Join Now.</a></p>
					<div className="qty">1</div>
					<button>Buy Now</button>
				</div>
				<div className="wineBox">
					<p>2016 Pinot Gris</p> 
					<p>Sonoma Valley Estate Wine</p>
					<div className="wineBottle"></div>
					<h5>This is our refreshing Pinot Gris &ldquo;Sonoma Citrus Expression&rdquo; with scents of lime and mint that quench a warm summer afternoon. Limit of two (2-packs) per Member per vintage.</h5>
					<h5>Order early as this is our smallest and only white batch wine.  Two cases of 2016 remaining.  Ships June 2017 and February 2018.  Sixteen case production.</h5>
					<h4>&#36;45</h4>
					<p>Wine Club Members, <a href="#">login</a> to access your discount. Not a member? <a href="#">Join Now.</a></p>
					<div className="qty">1</div>
					<button>Buy Now</button>
				</div>
				<div className="wineBox">
					<p>2016 Pinot Noir</p> 
					<p>Sonoma Valley Appellation Wine</p>
					<div className="wineBottle"></div>
					<h5>This is our &ldquo;Passionate Pinot&rdquo; that challenges the Best of Class with an explosion of berries and pepper, leaving a lingering lust for more.  One of our finest vintages ever!  Limit of two (4-packs) per Member.  Ships September 2017.  Seventy-five case production.</h5>
					<h4>&#36;70</h4>
					<p>Wine Club Members, <a href="#">login</a> to access your discount. Not a member? <a href="#">Join Now.</a></p>
					<div className="qty">1</div>
					<button>Buy Now</button>
				</div>
			</div>
		)
	}
})