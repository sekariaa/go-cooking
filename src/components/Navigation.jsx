import React, { useState, useEffect } from 'react'
import { IoFastFood } from 'react-icons/io5'
import { Link } from 'react-router-dom'

function Navigation() {
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const scrolled = window.scrollY > 0
			setIsScrolled(scrolled)
		}
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div className="max-w-[1640px] mx-auto">
			<div className={`fixed top-0 w-full bg-white transition-all z-10 ${isScrolled ? 'shadow-xl' : ''}`}>
				<Link to="/">
					<div className="flex items-end p-4 cursor-pointer">
						<IoFastFood className="flex-none text-3xl" />
						<h1 className="flex-none text-xl ml-2">GoCooking</h1>
					</div>
				</Link>
			</div>
		</div>
	)
}

export default Navigation
