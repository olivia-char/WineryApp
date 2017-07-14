class Info extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
        email: "",
        message: null

    	}
  	}

	componentWillUpdate(props,state){

	}
	componentDidMount(prevProps,prevState){

	}

  submit(){
    $.ajax({
      url:"http://localhost:3000/subscribe",
      type:'post',
      data:{email: this.state.email},
      headers: { 'X-CSRF-Token': this.props.authenticity_token },
      success:function(){
      }
    });
    this.setState({message: "Thank you for joining our mailing list."})
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  renderMessageBox(){
    if(this.state.message){
      return(
        <div>{this.state.message}</div>
      )
    } else {
      return null

    }
  }


	render(){
		return (
			<div className="joinUs">
				
			  <div className="contactImg"></div>
		
        <div className="contactBox">
				  <h1>Contact Us</h1>
          <p>For more information contact us at ~</p>
				  <p>Phone: (707) 738-9828</p>
				  <p>Email: john@glenetvineyards.com</p>
				  <p>We look forward to meeting you!</p>
			  </div>
        <div className="contactIcon"></div>
				
        <div className="mailingList">
					<h1>Stay Updated</h1>
					<p>Join our mailing list and hear about our upcoming releases and attend private events.</p>
				
          <link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css"/>
        
          <div id="mc_embed_signup">
            <form action={this.props.apiScheme +this.props.apiRoot+ this.props.apiPort+ "/subscribe"} method="POST" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" noValidate>
              <div id="mc_embed_signup_scroll">
                <input type="email" value={this.state.email} name="email" className="email" id="mce-EMAIL" placeholder="email address" required onChange={this.handleEmailChange.bind(this)}/>
                {/*real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                <div style={{position: "absolute", left: "-5000px", ariaHidden: "true"}}><input type="text" name="b_be3f8fd836e45d0684e8c15c2_3d8c448611" tabIndex="-1" value=""/></div>
                <div className="clear"><input onClick={this.submit.bind(this)} value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/></div>
              </div>
            </form>
            {this.renderMessageBox()}
          </div>
				</div>	


				<div className="airbnb">
					<div className="airbnbBox">
						<h1>Visit Glenét Vineyards</h1>
						<p>Visit our Glenét Vineyards and stay with us in our Airbnb, &#34;Cozy, Chic Suite in Sonoma Valley&#34; and enjoy a Vin Escape.</p>
						<a href="https://www.airbnb.com/rooms/5928098" target="_blank">Stay With Us</a>
					</div>
					<div className="airbnbImg"></div>
				</div>
			</div>
		)
	}
}