import React, { useState } from 'react';
import ToolPane from './tool-pane';

const Cropper = () => {
	const [horizontalTransform, setHorizontalTransform] = useState(0);
	const [verticalTransform, setVerticalTransform] = useState(0);
	const [scale, setScale] = useState(1);
	return (
		<React.Fragment>
			<img className="photo" src="/static/Market_Square_Park.jpg" />
			<div className="frame" />
      <ToolPane 
        x={horizontalTransform}
        onChangeX={setHorizontalTransform}
        y={verticalTransform}
				onChangeY={setVerticalTransform} 
				scale={scale}
				onChangeScale={setScale}
      />
			<style jsx>{`
				.frame {
					border: 2px solid yellow;
					position: absolute;
					box-sizing: border-box;
					top: 10vw;
					left: 10vw;
					right: 10vw;
					height: 80vw;
				}
				.photo {
					position: absolute;
					top: 10vw;
					left: 10vw;
					right: 10vw;
					height: 80vw;
          transform: translate(
            ${horizontalTransform}px,
            ${verticalTransform}px
          )
					scale(${scale});
				}
			`}</style>
		</React.Fragment>
	);
};

export default Cropper;
