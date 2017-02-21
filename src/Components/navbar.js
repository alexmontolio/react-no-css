/* Navigation bar items */
var Nav_Menu = React.createClass({
	propTypes: {
		menu_item: React.PropTypes.string.isRequired,
		menu_link: React.PropTypes.string,
		menu_button_check: React.PropTypes.bool,
		/* on_change: React.PropTypes.func, */
	},
	
	/* Will consider this unnecessary due to being classless for now
	on_button_click: function(e) {
		document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
	}, */
	
	render: function() {
		/* Styling */
		if (this.props.menu_button_check) {
			var menu_list = {
				'float': 'right'
			};
		} else {
			var menu_list = {
				'float': 'left'
			};
		};

		var menu_links = {
			display: 'inline-block',
			verticalAlign: 'middle',
			color: '#F2F1F1',
			textAlign: 'center',
			padding: '20px 25px',
			textDecoration: 'none'
		};
		/* End styling */
		
		var button_click = {
			href: 'javascript:void(0)',
			onClick: this.props.on_button_click,
			style: menu_links
		}
		
		var react_button_element = React
			.createElement('li', {style: menu_list},
				React.createElement('a', button_click, this.props.menu_item)
		);
		
		var react_link_element = React
			.createElement('li', {style: menu_list},
				React.createElement('a', {href: this.props.menu_link, style: menu_links}, this.props.menu_item)
		);
		
		if(this.props.menu_button_check) {
			return(react_button_element)
		} else {
			return(react_link_element)
		}
	},
});

/* Navigation bar */
var Navbar = React.createClass({
	propTypes: {
		menu: React.PropTypes.array.isRequired,
	},

	render: function() {
		/* Styling */
		var s_navbar = {
			width: "100%",
			position: "fixed",
			top: "0px",
			left: "0px",
			right: "0px",
			backgroundColor: "black"
		};
		
		var s_menu = {
			verticalAlign: 'middle',
		};
		
		var s_topnav = {
			listStyleType: 'none',
			margin: 0,
			padding: 0,
			overflow: 'hidden',
			color: '#D1D3D4',
			boxShadow: '1px 5px 20px 7px rgba(0, 0, 0, 0.8)'
		};
		/* End styling */
		
		/* 
		 * Creating navigation menu from Nav_Menu React class.
		 * Also checking for breakpoints for styling changes.
		 */
		if(tablet_breakpoint.matches){	
			var menu_items = this.props.menu
				.filter(function(item) {
					if((item.menu_item === "Home" || item.menu_item === "\u2630")) {
						return item
					}
				})
				.map(function(item) {
					return React.createElement(Nav_Menu, item);
				}
			);
		} else {
			var menu_items = this.props.menu
				.filter(function(item) {
					if(item.menu_item !== "\u2630") {
						return item
					}
				})
				.map(function(item) {
					return React.createElement(Nav_Menu, item);
				}
			);
		}
		
		return (
			React.createElement('header', {style: s_navbar}, 
				React.createElement('div', {style: s_menu},
					React.createElement('ul', {style: s_topnav}, menu_items)
				)
			)
		)
	}
})