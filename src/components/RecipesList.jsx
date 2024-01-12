import React, { useState, useContext, useEffect } from 'react'
import RecipeCard from './RecipeCard'
import { Context } from '../context/context'
import Loading from './Loading'
import Pagination from './Pagination'

function RecipesList() {
	const { state, handleFunction } = useContext(Context)
	const [loading, setLoading] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)
	const itemsPerPage = 12

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			await handleFunction.getAllRecipes('a', 'z')
			setLoading(false)
		}

		fetchData()
	}, [currentPage])

	const indexOfLastRecipe = currentPage * itemsPerPage
	const indexOfFirstRecipe = indexOfLastRecipe - itemsPerPage
	const currentRecipes = state.allStrMeal.slice(indexOfFirstRecipe, indexOfLastRecipe)

	const paginate = (pageNumber) => setCurrentPage(pageNumber)

	return (
		<div className="max-w-[1640px] mx-auto p-4">
			<h1 className="text-center text-2xl font-medium pb-2">All Recipes</h1>
			{loading ? (
				<Loading />
			) : (
				<>
					<div className="flex flex-wrap">
						{currentRecipes.map((mealName, index) => (
							<div key={index + indexOfFirstRecipe} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 xl:w-1/6">
								<div className="flex justify-center">
									<RecipeCard
										image={state.allMealThumbs[index + indexOfFirstRecipe]}
										name={mealName}
										category={state.allStrCategory[index + indexOfFirstRecipe]}
										area={state.allStrArea[index + indexOfFirstRecipe]}
										tags={state.allStrTags[index + indexOfFirstRecipe]}
									/>
								</div>
							</div>
						))}
					</div>
					<Pagination itemsPerPage={itemsPerPage} totalItems={state.allStrMeal.length} currentPage={currentPage} paginate={paginate} />
				</>
			)}
		</div>
	)
}

export default RecipesList
