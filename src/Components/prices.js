var PriceCheck = React.createClass({
	propTypes: {
		display_name: React.PropTypes.string,
		estimate: React.PropTypes.string,
		distance: React.PropTypes.string,
	}
	
	render: function(){
		return(
			React.createElement('li', {},
				React.createElement('h3', {}, this.props.display_name),
				React.createElement('h4', {}, this.props.estimate),
				React.createElement('h5', {}, this.props.distance)
			)
		)
	}
})

var PriceCheckModule = React.createClass({});
