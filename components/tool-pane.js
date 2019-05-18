import React from 'react';
import Tools from './tools';

const ToolPane = props => {
	return (
		<div>
			<Tools {...props} />
			<style jsx>{`
				div {
					position: absolute;
					left: 0;
					right: 0;
					height: 35vh;
					bottom: 0;
					background-color: #3885a8;
				}
			`}</style>
		</div>
	);
};

export default ToolPane;
