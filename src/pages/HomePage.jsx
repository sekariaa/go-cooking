import React from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import CategoryCardList from '../components/CategoryCardList'
import RecipesList from '../components/RecipesList'
import Sorting from '../components/Sorting'
import Filter from '../components/Filter'

function HomePage() {
	return (
		<div className="max-w-[1640px] mx-auto">
			<Navigation />
			<Hero />
			<CategoryCardList />
			<div className="flex">
				<div className="flex-none w-1/4 bg-custom-beige p-4">
					<Sorting />
					<Filter />
				</div>
				<div className="mx-auto">
					<RecipesList />
				</div>
			</div>
		</div>
	)
}

export default HomePage
