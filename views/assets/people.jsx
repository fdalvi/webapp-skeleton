import React from 'react';
import {render} from 'react-dom';

import Common from './common';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: 'Hello People'
		};
	}

	// help_text/all_people variables comes from the backend, and 
	// are stored in index.ejs
	render () {
		return (
			<div>
				<Common title={this.state.title}></Common>
				<p> Text from server side config: {help_text} </p>
				<p> {JSON.stringify(all_people)} </p>
			</div>
		);
	}
}

render(<App/>, document.getElementById('app'));