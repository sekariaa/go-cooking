import React, { useState, useContext, useEffect } from 'react'
import RecipeCard from './RecipeCard'
import { Context } from '../../context/context'
import Loading from '../Loading'
import Pagination from '../Filter/Pagination'
import ShowPerPage from '../Filter/ShowPerPage'
import Search from '../Filter/Search'

function RecipesList() {
	const { state, handleFunction } = useContext(Context)
	const [loading, setLoading] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)
	const [itemsPerPage, setItemsPerPage] = useState(12)

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			await handleFunction.getAllRecipes()
			setLoading(false)
		}

		fetchData()
	}, [currentPage, state.isAsc, state.categoriesSelected, state.areasSelected, state.searchInput, itemsPerPage])

	useEffect(() => {
		handleFunction.getCategories()
		handleFunction.getAreas()
	}, [])

	const indexOfLastRecipe = currentPage * itemsPerPage
	const indexOfFirstRecipe = indexOfLastRecipe - itemsPerPage
	const currentRecipes = state.allStrMeal.slice(indexOfFirstRecipe, indexOfLastRecipe)

	const paginate = (pageNumber) => setCurrentPage(pageNumber)

	return (
		<div className="max-w-[1640px] px-4">
			<div className="flex flex-col gap-2 lg:flex-row lg:justify-center mb-2">
				<Search />
				<ShowPerPage itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} />
			</div>
			<h1 className="text-center text-2xl font-medium pb-2">All Recipes</h1>
			{loading ? (
				<Loading />
			) : (
				<>
					<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
						{currentRecipes.map((mealName, index) => (
							<div key={index + indexOfFirstRecipe}>
								<div className="flex justify-center">
									<RecipeCard
										image={state.allMealThumbs[index + indexOfFirstRecipe]}
										name={mealName}
										category={state.allStrCategory[index + indexOfFirstRecipe]}
										area={state.allStrArea[index + indexOfFirstRecipe]}
										tags={state.allStrTags[index + indexOfFirstRecipe]}
										id={state.allIdMeal[index + indexOfFirstRecipe]}
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
