class Register extends React.Component {
	constructor(props) {
    	super(props);
    }
	render(){
		return (
			<div className="register">
				<div className="membershipChoice1">
					<h2>Petite Club</h2>
					<ul>
						<li>2 bottles of Pinot Noir - Shipment October, 2017</li>
						<li>2 bottles of Pinot Gris - Shipment March, 2018</li>
						<li>2 bottles of Glenét Mélange - Shipment June, 2018</li>
					</ul>
					<a href="/shop/products/petite-club-membership" className="buyButton">Join Now</a>
				</div>
				<div className="membershipChoice2">
					<h2>Estate Club</h2>
					<ul>
						<li>4 bottles of Pinot Noir - Shipment October, 2017</li>
						<li>2 bottles of Pinot Gris - Shipment March, 2018</li>
						<li>2 bottles of Glenét Mélange - Shipment June, 2018</li>
					</ul>
					<a href="/shop/products/estate-club-membership" className="buyButton">Join Now</a>
				</div>
				<div className="membershipChoice3">
					<h2>Collector Club</h2>
					<ul>
						<li>6 bottles of Pinot Noir - Shipment October, 2017</li>
						<li>2 bottles of Pinot Gris - Shipment March, 2018</li>
						<li>4 bottles of Glenét Mélange - Shipment June, 2018</li>
					</ul>
					<a href="/shop/products/collector-club-membership" className="buyButton">Join Now</a>
				</div>
			</div>
			
		)
	}
}