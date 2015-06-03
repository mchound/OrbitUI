var Arrz = require('arrz');
var Radio = require('./components/Radio.react.jsx');
var React = require('react');

module.exports = function(){

	var el = React.createElement(Radio, {

		items: [
			{text: 'Home', value: 'Home'},
			{text: 'NotSet', value: 'NotSet'},
			{text: 'Away', value: 'Away'}
		],

		selected: {text: 'NotSet', value: 'NotSet'}

	});

	React.render(el, document.body);

}