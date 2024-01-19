import React from 'react'

function Loading() {
	return (
		<div className=" mx-auto flex space-x-2 justify-center items-center h-screen">
			<span className="sr-only">Loading...</span>
			<div className="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
			<div className="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
			<div className="h-2 w-2 bg-black rounded-full animate-bounce"></div>
		</div>
	)
}

export default Loading
