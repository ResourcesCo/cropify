import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Cropper from '../components/cropper';

const Home = () => (
	<div className="home">
		<Head title="Home" />
		<Cropper />
		<style jsx global>{`
			body {
				background: #444;
				margin: 0;
				padding: 0;
				height: 100vh;
			}
		`}</style>
		<style jsx>{`
			.home {
				height: 100vh;
			}
		`}</style>
	</div>
);

export default Home;
