import React from 'react'

const VideoTitle = ({ title, overview }) => {
	return (
		<div className="w-screen aspect-video  pt-[15%] px-24  absolute text-white bg-gradient-to-r from-black">
			<h1 className="text-6xl font-bold">{title}</h1>
			<p className=" text-lg w-1/4 mt-4">{overview}</p>
			<div className="mt-4">
				<button className="bg-white hover:bg-gray-300 text-black font-bold text-lg p-4 px-12 py-4 mr-4 rounded-lg ">
					{' '}
					▶ Play
				</button>
				<button className="bg-gray-500 text-white font-bold text-lg p-4 px-12 py-4 mr-4 rounded-lg">
					More Info
				</button>
			</div>
		</div>
	)
}

export default VideoTitle
