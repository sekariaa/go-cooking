import React from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import CategoryCardList from '../components/CategoryCardList'
import RecipesList from '../components/RecipesList'

function HomePage() {
	return (
		<div>
			<Navigation />
			<Hero />
			<CategoryCardList />
			<RecipesList />
		</div>
	)
}

export default HomePage
