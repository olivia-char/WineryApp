class Info extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		yolo:  'not',
    		somethingElse: null
    	}
  	}

  	componentWillUpdate(props,state){

  	}
  	componentDidMount(prevProps,prevState){
  		console.log('components mounted')
  	}
  	componentDidUpdate(){
  		console.log('component updated')
  	}
  	consoleLogSomething(number,number2){
  		console.log(number,number2)
  	}
  	itsACallback(){
  		console.log('this is a callback')
  	}
  	changeState(){
  		this.setState({yolo: 'yoloing',somethingElse: 5}, this.itsACallback.bind(this))
  	}

  	renderABlackBox(){
  		let text = 'BlackBox'
  		if (this.state.yolo === 'not') {
  			text = 'DarkBox'
  		}
  		return(
  			<div 
  				style={{
  					backgroundColor: 'black',
  					height: '50px',
  					width: '50px'}}
  		>
  				<p style={{color:'white'}}>{text}</p>
  			</div>
  		)
  	}

	render(){
		return (
			<div className="joinUs">
				<div className="contact">
					<div className="contactImg"></div>
					<div className="contactBox">
						<h1 onClick={this.consoleLogSomething.bind(this,1,3)}>Contact Us</h1>
						<p>Thank you for {this.state.yolo} seeking out our uniquely grown and designated small acreage production wines. For more information contact us at:</p>
						<p>PHONE NUMBER GOES HERE</p>
						<p>EMAIL GOES HERE</p>
						<p>We look forward to meeting you!</p>
					</div>
				</div>
				{this.renderABlackBox()}
				<div className="mailingList">
					<h1 onClick={this.changeState.bind(this)}>Stay Updated</h1>
					<p>Join our mailing list and hear about our upcoming releases, request an allocation, and attend private events.</p>
					<a href="#">Sign Up</a>
				</div>	
				<div className="airbnb">
					<div className="airbnbBox">
						<h1>Vist Glenét Vineyards</h1>
						<p>Visit our Glenét Vineyards and stay with us in our secluded Airbnb (Cozy, Chic Suite in Sonoma Valley) and enjoy a slice of heaven.</p>
						<a href="https://www.airbnb.com/rooms/5928098">Stay With Us</a>
					</div>
					<div className="airbnbImg"></div>
				</div>
			</div>
		)
	}
}