import React from 'react';
import MyComponent from '../js/MyComponent';
import {hot} from 'react-hot-loader';

const Demo = () => (
	<div>
		<h1>Demo with examples of the component</h1>
		<MyComponent />
	</div>
);

export default hot(module)(Demo);
