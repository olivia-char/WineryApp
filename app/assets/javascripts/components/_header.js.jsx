
var Header = React.createClass({
	render(){
		return (

			<div className="header">
				<div className="log">
					<a href="#">Login</a>
				</div>
				
				<div className="box1">
					<div className="quoteBox">
						<h2>&#123;</h2><p> Wine is the only artwork you can drink </p><h2>&#125;</h2>
						<h5>~Luis Fernando Olaverri</h5>
					</div>
					<div className="tabs">
						<a href="/">Our Story</a>
						<a href="/contact">Join Us</a>
					</div>
				</div>

				<div className="box2">
					<h1>Glenét Vineyards</h1>
				</div>
				
				<div className="box3">
					<div className="quoteBox">
						<h2>&#123;</h2><p> Wine is sunlight, held together by water </p><h2>&#125;</h2>
						<h5>~Galileo Galilei</h5>
					</div>
					<div className="tabs">
						<a href="/wine">Our Wines</a>
						<a href="/membership">Membership</a>
					</div>
				</div>
			</div>
		)
	}
})