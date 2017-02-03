import React from 'react';
import {render} from 'react-dom';

export default class Common extends React.Component {
	// redtext class defined in static .css file.
	// css can be included directly by using import,
	// but here I'm showing an example of loading
	// it statically old-school style
	render () {
		return (
			<h1 className="redtext"> {this.props.title} </h1>
		);
	}
}
