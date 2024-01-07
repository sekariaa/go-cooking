import React, { useState, useContext, useEffect } from 'react'
import RecipeCard from './RecipeCard'
import { Context } from '../context/context'
import Loading from './Loading'

function RecipesList() {
	const { state, handleFunction } = useContext(Context)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			try {
				await handleFunction.getAllRecipes('a', 'z')
				setLoading(false)
			} catch (error) {
				console.error('Error fetching data:', error.message)
				setLoading(false)
			}
		}

		fetchData()
	}, [handleFunction])

	return (
		<div className="max-w-[1640px] mx-auto p-4">
			<h1 className="text-center text-2xl font-medium pb-2">All Recipes</h1>
			{loading ? (
				<Loading />
			) : (
				<div className="flex flex-wrap  items-center lg:justify-between ">
					{state.allStrMeal.map((mealName, index) => (
						<div key={mealName} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
							<RecipeCard image={state.allMealThumbs[index]} name={mealName} category={state.allStrCategory[index]} area={state.allStrArea[index]} tags={state.allStrTags[index]} />
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default RecipesList
