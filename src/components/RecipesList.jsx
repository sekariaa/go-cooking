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
		<div>
			<h1>All Recipes:</h1>
			{loading ? (
				<Loading />
			) : (
				<ul>
					{/* {state.allStrMeal.map((mealName) => (
						<div key={mealName}>
							<RecipeCard
								image={state.allMealThumbs[state.allStrMeal.indexOf(mealName)]}
								name={mealName}
								category={state.allStrCategory[state.allStrMeal.indexOf(mealName)]}
								area={state.allStrArea[state.allStrMeal.indexOf(mealName)]}
								tags={state.allStrTags[state.allStrMeal.indexOf(mealName)]}
							/>
						</div>
					))} */}
					{state.allStrMeal.map((mealName, index) => (
						<div key={mealName}>
							<RecipeCard image={state.allMealThumbs[index]} name={mealName} category={state.allStrCategory[index]} area={state.allStrArea[index]} tags={state.allStrTags[index]} />
						</div>
					))}
				</ul>
			)}
		</div>
	)
}

export default RecipesList
