class Contact extends React.Component {
	render(){
		return (
			<div>
				<Header />
				<Info
					authenticity_token={this.props.authenticity_token}
					apiScheme={this.props.apiScheme}
					apiRoot={this.props.apiRoot}
					apiPort={this.props.apiPort}
				/>
			</div>
		)
	}
}