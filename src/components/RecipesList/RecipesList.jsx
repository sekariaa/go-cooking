import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRecipes, filtering } from '../../states/recipes/action'
import { setCurrentPage } from '../../states/pagination/action'
import { setItemsPerPage } from '../../states/showPerPage/action'

import RecipeCard from './RecipeCard'
import Pagination from '../Filter/Pagination'
import ShowPerPage from '../Filter/ShowPerPage'
import RecipeCardSkeleton from './RecipeCardSkeleton'
import NoData from '../NoData'
import Search from '../Filter/Search'

function RecipesList() {
	const dispatch = useDispatch()
	const { recipes, loading, isAsc, categoriesSelected, areasSelected } = useSelector((state) => state.recipes)
	const currentPage = useSelector((state) => state.pagination.currentPage)
	const itemsPerPage = useSelector((state) => state.showPerPage.itemsPerPage)

	useEffect(() => {
		dispatch(fetchRecipes())
	}, [dispatch])

	useEffect(() => {
		dispatch(filtering())
	}, [dispatch, categoriesSelected, areasSelected, isAsc])

	const paginate = (pageNumber) => {
		dispatch(setCurrentPage(pageNumber))
	}

	const handleItemsPerPageChange = (e) => {
		const selectedOption = parseInt(e.target.value, 10)
		dispatch(setItemsPerPage(selectedOption))
	}

	const indexOfLastRecipe = currentPage * itemsPerPage
	const indexOfFirstRecipe = indexOfLastRecipe - itemsPerPage
	const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe)

	return (
		<div className="max-w-[1640px] px-4">
			<div className="flex flex-col gap-2 lg:flex-row lg:justify-center mb-2">
				<Search />
				<ShowPerPage itemsPerPage={itemsPerPage} setItemsPerPage={handleItemsPerPageChange} />
			</div>

			<h1 className="text-center text-2xl font-medium pb-2">All Recipes</h1>
			{loading ? (
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
					{[...Array(itemsPerPage)].map((_, index) => (
						<div key={index}>
							<div className="flex justify-center">
								<RecipeCardSkeleton />
							</div>
						</div>
					))}
				</div>
			) : loading === false && currentRecipes.length === 0 ? (
				<NoData />
			) : (
				<div>
					<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
						{currentRecipes.map((recipe, index) => (
							<div className="flex justify-center" key={index + indexOfFirstRecipe}>
								<RecipeCard image={recipe.strMealThumb} name={recipe.strMeal} category={recipe.strCategory} area={recipe.strArea} tags={recipe.strTags} id={recipe.idMeal} />
							</div>
						))}
					</div>
					<Pagination itemsPerPage={itemsPerPage} totalItems={recipes.length} currentPage={currentPage} paginate={paginate} />
				</div>
			)}
		</div>
	)
}

export default RecipesList
