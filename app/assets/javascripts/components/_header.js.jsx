class Header extends React.Component {
	constructor(props) {
    	super(props);
    	this.state= {
    	}
    }
	render(){
		return (

			<div className="header">
				<div className="log">
					<a href="/shop/user/spree_user/sign_in">Login</a>
					<a href="/shop/cart">Cart</a>
				</div>
				
				<div className="box1">
					<div className="quoteBox">
						<h2>&ldquo;</h2><p> Wine is the only artwork you can drink </p><h2>&rdquo;</h2>
						<h4>- Luis Fernando Olaverri</h4>
					</div>
					<div className="tab1">
						<a href="/about">Our Story</a>
						<a href="/contact">Join Us</a>
					</div>
				</div>

				<div className="box2">
					<h1><a href="/">Glenét Vineyards</a></h1>
				</div>

				<div className="box3">
					<div className="quoteBox">
						<h2>&ldquo;</h2><p> Wine is sunlight, held together by water </p><h2>&rdquo;</h2>
						<h4>- Galileo Galilei</h4>
					</div>
					<div className="tab2">
						<a href="/wine">Our Wines</a>
						<a href="/membership">Membership</a>
					</div>
				</div>

			</div>
		)
	}
}