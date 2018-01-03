class Order extends React.Component {
	constructor(props) {
    	super(props);
    }
	render(){
		return (
			<div className="order">
      <Header />
				<div className="orderBox">
          <div className="orderIcon"></div>
          <h1>Online Store is Currently Under Construction</h1>
          <h3>Please Call or Email for More Information on Memberships and Purchases:</h3>
          <h3>Phone: (707) 738-9828</h3>
          <h3>Email: john@glenetvineyards.com</h3>
          <a href="/contact" className="buyButton">Join Us</a>
          <div className="orderIcon2"></div>
        </div>
			</div>

		)
	}
}
