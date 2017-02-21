/* Setting tablet and mobile breakpoints */
var tablet_breakpoint = window.matchMedia("(max-width: 768px)");		
var mobile_breakpoint = window.matchMedia("(max-width: 414px)");

var state = {}

var location_info = Object.assign({}, LOCATION_INFO_TEMPLATE);

var LOCATION_INFO_TEMPLATE = {start: '', end: ''};

var LOCATION_LATLONG_TEMPLATE = {
	start_latitude: null,
	start_longitude: null,
	end_latitude: null,
	end_longitude: null
};

var menu_links = [
	{key: 1, menu_item: "Home", menu_link: '#', menu_button_check: false},
	{key: 2, menu_item: "About", menu_link: '#', menu_button_check: false},
	{key: 3, menu_item: "Contact Us", menu_link: '#', menu_button_check: false},
	{key: 4, menu_item: '\u2630', menu_button_check: true}
];

function submitLocationData(){
	var address = Object.assign({}, state.location_info)
	
	if(address.start && address.end){
		var coodinates = getCoordinates(address);
		var uber_price_response = getUberPrice(coordinates);
		
		setState({menu_links, location_info});
	}
};

function updateFormData(data) {
	setState({location_info: data});
}

function setState(changes) {
	Object.assign(state, changes);
	
	ReactDOM.render(
		React.createElement(AppMain, Object.assign({}, state, {
			onLocationChange: updateFormData,
		})),
		document.getElementById('main')
	);
}

setState({menu_links, location_info});