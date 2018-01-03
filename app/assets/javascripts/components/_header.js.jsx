class Header extends React.Component {
	constructor(props) {
    	super(props);
    	this.state= {
    	}
    }
	render(){
		return (

			<div className="header">
				<div className="row">
    			<div className="col-sm-4 col-md-4 col-lg-4">
						<div className="quoteBox">
							<p>&ldquo; Wine is the only artwork you can drink &rdquo;</p>
							<h4>- Luis Fernando Olaverri</h4>
						</div>
						<div className="tab1">
							<a href="/about">Our Story</a>
							<a href="/contact">Join Us</a>
						</div>
       		</div>
					<div className="col-sm-4 col-md-4 col-lg-4">
						<div className="titleBox">
       				<h1><a href="/">Glenét Vineyards</a></h1>
       			</div>
       		</div>
					<div className="col-sm-4 col-md-4 col-lg-4">
						<div className="quoteBox">
							<p>&ldquo; Wine is sunlight, held together by water &rdquo;</p>
							<h4>- Galileo Galilei</h4>
						</div>
						<div className="tab2">
							<a href="/wine">Our Wines</a>
							<a href="/membership">Membership</a>
						</div>
       		</div>
    		</div>
			</div>
		)
	}
}
