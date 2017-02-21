var AppMain = React.createClass({
	propTypes: {
		menu_links: React.PropTypes.array.isRequired,
		banner_image: React.PropTypes.string,
		api_response: React.PropTypes.array,
		location_info: React.PropTypes.object,
		onLocationChange: React.PropTypes.func,
	},
	
	render: function(){
		/* Styling */
		var main_container = {
			backgroundColor: 'black',
		}
		/* End Styling */
		
		return(
			React.createElement('div', {className: 'app-container'}, 
				React.createElement(Navbar, {menu: this.props.menu_links}),
				React.createElement(LocationService, {
					value: this.props.location_info,
					onChange: this.props.onLocationChange,
				})/*,
				React.createElement(PriceCheck, {value: this.props.api_response})*/
			)
		)
	}
})