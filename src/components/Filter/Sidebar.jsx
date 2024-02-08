// import React, { useState, useEffect } from 'react'
// import { IoIosClose } from 'react-icons/io'
// import Sorting from './Sorting'
// import Filter from './Filter'
// import { FaFilter } from 'react-icons/fa'
// import ClearButton from './ClearButton'

// function Sidebar() {
// 	const [isFilterVisible, setIsFilterVisible] = useState(false)
// 	const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1024)

// 	const toggleFilterVisibility = () => {
// 		setIsFilterVisible((prevIsFilterVisible) => !prevIsFilterVisible)
// 	}

// 	const handleResize = () => {
// 		setIsWideScreen(window.innerWidth >= 1024)
// 	}

// 	useEffect(() => {
// 		window.addEventListener('resize', handleResize)
// 		return () => {
// 			window.removeEventListener('resize', handleResize)
// 		}
// 	}, [])

// 	useEffect(() => {
// 		if (isFilterVisible && !isWideScreen) {
// 			document.body.style.overflow = 'hidden'
// 		} else {
// 			document.body.style.overflow = ''
// 		}

// 		return () => {
// 			document.body.style.overflow = ''
// 		}
// 	}, [isFilterVisible, isWideScreen])

// 	return (
// 		<div>
// 			{!isWideScreen && (
// 				<div className="px-4 mb-2">
// 					<div className="inline-block text-center border border-custom-orange p-2">
// 						<button className="flex items-center" onClick={toggleFilterVisibility}>
// 							<FaFilter /> <span className="text-xs">Filter</span>
// 						</button>
// 					</div>
// 				</div>
// 			)}

// 			{isFilterVisible && !isWideScreen && (
// 				<div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-50">
// 					<div className="absolute px-4 overflow-auto bg-white h-full">
// 						<div className="flex justify-between">
// 							<button className="text-3xl py-1" onClick={() => setIsFilterVisible(false)}>
// 								<div className="flex items-center">
// 									<IoIosClose /> <span className="text-xs">Close</span>
// 								</div>
// 							</button>
// 							<ClearButton />
// 						</div>
// 						<hr className="py-1" />
// 						<div className="px-2 h-full">
// 							<Sorting />
// 							<Filter />
// 						</div>
// 					</div>
// 				</div>
// 			)}

// 			{isWideScreen && (
// 				<div>
// 					<div className="flex items-center justify-end"></div>
// 					<ClearButton />
// 					<Sorting />
// 					<Filter />
// 				</div>
// 			)}
// 		</div>
// 	)
// }

// export default Sidebar
