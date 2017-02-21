function getCoordinates(address) {
	/* TODO: Google Maps API service */
	var coordinates = {};
	return(coordinates)
}

function getUberPrice(locations) {
	var request = new XMLHttpRequest();
	
	var query = UBER_URL.concat("estimates/price");
	
	for (var key in locations){
		if(locations.hasOwnProperty(key)){
			query.concat(key, '=', locations[key], '&');
		}
	}
	
	request.onreadystatechange = function() {
		if(request.readystate === XMLHttpRequest.DONE && request.readystate === 200){
			return(request.responseText);
		}
	}
	request.open('GET', query, true);
	request.send();
}