import React, { useState } from 'react';
import SizingTool from './sizing-tool';

const Tools = props => {
	const { x, onChangeX } = props;
	const { y, onChangeY } = props;
	const { scale, onChangeScale } = props;
	return (
		<div className="wrap">
			<div className="tools">
				<div>
					<SizingTool value={x} onChange={onChangeX} />
				</div>
				<div>
					<SizingTool value={y} onChange={onChangeY} />
				</div>
				<div>
					<SizingTool
						value={scale}
						onChange={onChangeScale}
						increment={0.1}
						suffix={''}
					/>
				</div>
			</div>
			<style jsx>{`
				.wrap {
					display: flex;
					justify-content: center;
				}
				.tools {
					min-width: 40%;
				}
			`}</style>
		</div>
	);
};

export default Tools;
