var React = require('react');

var sortOnText = function(a, b){

	if(a.text > b.text) return 1;
	else if(b.text > a.text) return -1;
	return 0;

}

var sortStackSelected = function(a, b){

	if(a.selected && !b.selected){
		return -1;
	}
	else if(!a.selected && b.selected){
		return 1;
	}
	else {
		if(a.text > b.text) return 1;
		else if(b.text > a.text) return -1;
		return 0;
	}

}

var findSelected = function(item){
	return !!item.selected;
}

module.exports = React.createClass({


	getInitialState: function(){
		return {
			items: this.props.items || [],
			dropDownIsVisible: false,
			search: '',
			selected: !!this.props.multiple ? null : this.props.items.first(findSelected)
		};	
	},

	componentDidMount: function () {
	    window.addEventListener('click', this._onBodyClick);
	},

	componentWillUnmount: function () {
	  	window.removeEventListener('click', this._onBodyClick);    
	},

	render: function(){

		return (

			<div data-am-select onClick={this._onComponentClick}>

				<div className="label" onClick={this._onLabelClick}>
					<span>{this._getLabel()}</span>
					<i className="icon-down-open-big"></i>
				</div>

				<div className={this.state.dropDownIsVisible ? 'drop-down' : 'drop-down hide'}>

					<div className="header">
						<span>{this.props.label}</span>
						<button className="btn-close pull-right" onClick={this._onCloseClick}>
							<i className="icon-cancel"></i>
						</button>
					</div>

					{this._getSearch()}

					<div className="options">
						<ul>
							{this._getItems()}
						</ul>
					</div>

				</div>

			</div>

		);

	},

	_onComponentClick: function(e){
		e.nativeEvent.stopPropagation();
	},

	_onBodyClick: function(e){
		this.setState({dropDownIsVisible: false});
	},

	_getLabel: function(){
		return !!this.props.multiple ? this.props.label : (!!this.state.selected ? this.state.selected.text : this.props.label);
	},

	_getSearch: function(){

		if(!this.props.searchable) return null;

		return (
			<div className="search">
				<input type="text" placeholder="Search" ref="search" onKeyUp={this._onSearchChange} />
			</div>
		);

	},

	_onSearchChange: function(){

		var search = this.refs.search.getDOMNode();
		this.setState({search: search.value});

	},

	_getItems: function(){

		var items = this.state.items.sort(sortOnText);
		return items.map(function(item){
			var text = item.text.toLowerCase();
			var search = this.state.search.toLowerCase();

			if(!search || text.substring(0, search.length) === search){
				return (<li key={item.value} className={!!item.selected ? 'selected' : null} onClick={this._onItemClick.bind(this, item)}>{item.text}</li>);
			}
		}.bind(this));
	},

	_onItemClick: function(item){

		item.selected = !item.selected;
		var state = {
			items: this.state.items
		};

		if(!this.props.multiple){
			this.state.selected.selected = false;
			state.selected = item;
			state.dropDownIsVisible = false;
		}

		this.setState(state);

	},

	_onLabelClick: function(){
		this.setState({dropDownIsVisible: true});
	},

	_onCloseClick: function(){
		this.setState({dropDownIsVisible: false});	
	}

});