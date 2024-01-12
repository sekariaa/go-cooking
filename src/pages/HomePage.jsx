import React from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import CategoryCardList from '../components/CategoryCardList'
import RecipesList from '../components/RecipesList'
// import Filter from '../components/Filter'

function HomePage() {
	return (
		<div>
			<Navigation />
			<Hero />
			<CategoryCardList />
			{/* <Filter /> */}
			<RecipesList />
		</div>
	)
}

export default HomePage
