import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRecipes } from '../../states/recipes/action'
import { setLoading } from '../../states/loading/action'

import RecipeCard from './RecipeCard'

function RecipesList() {
	const dispatch = useDispatch()
	const { recipes } = useSelector((state) => state.recipes)
	const loading = useSelector((state) => state.loading.loading)

	useEffect(() => {
		dispatch(setLoading(true))
		dispatch(fetchRecipes()).then(() => dispatch(setLoading(false)))
	}, [dispatch])

	return (
		<div className="max-w-[1640px] px-4">
			<h1 className="text-center text-2xl font-medium pb-2">All Recipes</h1>

			{loading ? (
				<p>Loading</p>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
					{recipes.map((recipe) => (
						<div className="flex justify-center" key={recipe.idMeal}>
							<RecipeCard image={recipe.strMealThumb} name={recipe.strMeal} category={recipe.strCategory} area={recipe.strArea} tags={recipe.strTags} id={recipe.idMeal} />
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default RecipesList
