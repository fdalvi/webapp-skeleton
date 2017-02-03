import React from 'react';
import {render} from 'react-dom';

import Common from './common';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: 'Hello Index'
		};
	}

	// help_text variable comes from the backend, and is stored
	// in index.ejs
	render () {
		return (
			<div>
				<Common title={this.state.title}></Common>
				<p> Text from server side config: {help_text} </p>
				<a href="/people"> See all the people </a>
			</div>
		);
	}
}

render(<App/>, document.getElementById('app'));