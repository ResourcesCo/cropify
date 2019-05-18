import React, { useState } from 'react';
import { humanize } from '../utils';

const SizingTool = ({ value, onChange, increment = 5, suffix = 'px' }) => {
	return (
		<div className="sizing-tool">
			<button onClick={() => onChange(value - increment)}> - </button>
			<span>
				{' '}
				{humanize(value)}
				{suffix}{' '}
			</span>
			<button onClick={() => onChange(value + increment)}> + </button>
			<style jsx>{`
				.sizing-tool {
					display: flex;
					justify-content: space-between;
				}
				.sizing-tool,
				.sizing-tool button {
					color: white;
				}
				button {
					background-color: black;
					border-radius: 5px;
					border: none;
				}
			`}</style>
		</div>
	);
};

export default SizingTool;
