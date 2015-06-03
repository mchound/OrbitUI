//var Arrz = require('arrz');
var Select2 = require('./components/Select2.react.jsx');
var React = require('react');

module.exports = function(){

	var el = React.createElement(Select2, {
		items: [
			{value: 'England', text: 'England'},
			{value: 'Scotland', text: 'Scotland'},
			{value: 'Germany', text: 'Germany'},
			{value: 'Italy', text: 'Italy', selected: false},
			{value: 'Spain', text: 'Spain'},
			{value: 'France', text: 'France', selected: true},
			{value: 'Netherlands', text: 'Netherlands'},
			{value: 'Belgium', text: 'Belgium'},
			{value: 'Portugal', text: 'Portugal'},
			{value: 'Turkey', text: 'Turkey'},
			{value: 'Greece', text: 'Greece'}
		],
		searchable: true,
		multiple: true,
		label: 'Select Country'
	});

	React.render(el, document.body);

}