// Copyright (c) 2018 Swashata Ghosh <swashata@wpquark.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from 'react';

class App extends React.PureComponent {
	state = {};
	render() {
		console.log('I am from App.jsx');
		return (
			<div className="my-component">
				<h1>My Awesome Component</h1>
				<h2>This is so Awesome</h2>
				<p>I also have hot loading. haha! <span role="img" aria-label="muscle">💪</span></p>
			</div>
		);
	}
}

export default App;
