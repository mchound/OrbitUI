var Arrz = require('arrz');
var Select = require('./components/Select.react.jsx');
var React = require('react');

module.exports = function(){

	React.render(React.createElement(Select, {
		items: [
				{value: 'sv', text: 'Sweden'},
				{value: 'no', text: 'Norway'},
				{value: 'dk', text: 'Denmark'},
				{value: 'fi', text: 'Finland'},
				{value: 'ic', text: 'Iceland'},
				{value: 'ge', text: 'Germany'},
				{value: 'en', text: 'England'},
				{value: 'sc', text: 'Scotland'},
				{value: 'fr', text: 'France'},
				{value: 'po', text: 'Poland'},
				{value: 'ne', text: 'Netherlands'},
				{value: 'be', text: 'Belgium'},
				{value: 'it', text: 'Italy'},
				{value: 'au', text: 'Austria'},
				{value: 'sw', text: 'Switzerland'},
				{value: 'sp', text: 'Spain'},
				{value: 'por', text: 'Portugal'},
				{value: 'gr', text: 'Greece'},
				{value: 'sl', text: 'Slovakia'},
				{value: 'es', text: 'Estonia'},
				{value: 'lv', text: 'Latvia'},
				{value: 'li', text: 'Lithuania'}
			],
		multiple: true,
		label: 'Choose country',
		searchable: true,
		order: 'ascending',
		onChange: null,
		selected: [{text: 'Sweden', value: 'sv'}, {text: 'Finland', value: 'fi'}]
	}), document.body);

}