import React from 'react';
import {render} from 'react-dom';
import MyComponent from '../js/MyComponent';

const Demo = () => (
	<div>
		<h1>Demo with examples of the component</h1>
		<MyComponent />
	</div>
);

render( <Demo />, document.getElementById('app') )
