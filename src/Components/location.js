var LocationService = React.createClass({
	propTypes:{
		value: React.PropTypes.object,
		someType: React.PropTypes.string,
		onChange: React.PropTypes.func.isRequired,
		onSubmit: React.PropTypes.func,
	},
	
	onStartLocationChange: function(e){
		this.props.onChange(Object.assign({}, this.props.value, {start: e.target.value}));
	},
	
	onEndLocationChange: function(e){
		this.props.onChange(Object.assign({}, this.props.value, {end: e.target.value}));
	},
	
	onSubmit: function(e){
		this.props.onSubmit;
	},
	
	render: function(){
		return(
			React.createElement('div', {style: {marginTop: '100px'}},/* Testing styling */ 
				React.createElement('p', {}, "Enter Trip Information"),
				React.createElement('form', {onSubmit: this.onSubmit},
					React.createElement('input', {
						type: 'text',
						placeholder: 'Starting Location',
						value: this.props.value.start,
						onChange: this.onStartLocationChange,
					}),
					React.createElement('input', {
						type: 'text',
						placeholder: 'Destination',
						value: this.props.value.end,
						onChange: this.onEndLocationChange,
					}),
					React.createElement('button', {type: 'submit'}, 'Compare Price'),
				),
			)
		)
	}
});