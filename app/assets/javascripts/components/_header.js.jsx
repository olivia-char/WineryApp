class Header extends React.Component {
	constructor(props) {
    	super(props);
    	this.state= {
    		log: 'Login',
    	}
    }
   	componentDidUpdate(){
  		console.log('component updated')
  	}
    renderLoginComponent(){
    	if (this.state.log === 'Login'){
    		
    	}
    	return(
    		<div
    			style={{
    				backgroundColor: 'blue',
    				height: '500px',
    				width: '500px'}}
    		>
    			<form action="/" method="post">
						<input type="hidden" name="authenticity_token" value="<%= form_authenticity_token %>" />
  					<div className="form-group">
    					<label for="email">Email address:</label>
    					<input type="email" className="form-control" />
  					</div>
  					<div className="form-group">
    					<label for="pwd">Password:</label>
    					<input type="password" className="form-control" />
  					</div>
  					<button type="submit" className="btn btn-default">Login</button>
    			</form>
    		</div>
    	)
    }
	render(){
		return (

			<div className="header">
				<div className="log">
					<p onClick={this.renderLoginComponent.bind(this)}>{this.state.log}</p>
					<p>Cart</p>
				</div>
				
				<div className="box1">
					<div className="quoteBox">
						<h2>&ldquo;</h2><p> Wine is the only artwork you can drink </p><h2>&rdquo;</h2>
						<h4>~Luis Fernando Olaverri</h4>
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
						<h4>~Galileo Galilei</h4>
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