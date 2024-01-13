import React from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import CategoryCardList from '../components/CategoryCardList'
import RecipesList from '../components/RecipesList'
import Sidebar from '../components/Sidebar'

function HomePage() {
	let content

	if (window.innerWidth >= 1024) {
		content = (
			<div className="flex px-4 gap-4">
				<Sidebar />
				<RecipesList />
			</div>
		)
	} else if (window.innerWidth < 1024) {
		content = (
			<div>
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
