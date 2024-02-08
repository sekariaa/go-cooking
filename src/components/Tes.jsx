import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRecipes } from '../states/recipes/action'

function Tes() {
	const dispatch = useDispatch()
	const { recipes } = useSelector((state) => state.recipes)

	useEffect(() => {
		dispatch(fetchRecipes())
	}, [dispatch])

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
			{recipes.map((recipe) => (
				<div key={recipe.idMeal}>
					<img src={recipe.strMealThumb} alt={recipe.strCategory} />
					<p>{recipe.strMeal}</p>
					<p>Category: {recipe.strCategory}</p>
					<p>Area: {recipe.strArea}</p>
					<p>Tags: {recipe.strTags}</p>
				</div>
			))}
		</div>
	)
}

export default Tes
