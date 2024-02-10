import React from 'react'
import Navigation from '../components/Navbar/Navigation'
import Hero from '../components/Hero/Hero'
import CategoryCardList from '../components/Carousel/CategoryCardList'
import RecipesList from '../components/RecipesList/RecipesList'
import Sidebar from '../components/Filter/Sidebar'

function HomePage() {
	let content

	if (window.innerWidth >= 1024) {
		content = (
			<div className="flex px-4 gap-2">
				<Sidebar />
				<div className="mx-auto">
					<RecipesList />
				</div>
			</div>
		)
	} else if (window.innerWidth < 1024) {
		content = (
			<div className="flex flex-col">
				<Sidebar />
				<RecipesList />
			</div>
		)
	}

	return (
		<div className="max-w-[1640px] mx-auto">
			<Navigation />
			<Hero />
			<CategoryCardList />
			{content}
		</div>
	)
}

export default HomePage
