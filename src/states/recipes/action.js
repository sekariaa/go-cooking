import { getAllRecipes, sorting } from '../../utils/api'

const ActionType = {
	FETCH_ALL_RECIPES_REQUEST: 'FETCH_ALL_RECIPES_REQUEST',
	FETCH_ALL_RECIPES_SUCCESS: 'FETCH_ALL_RECIPES_SUCCESS',
	FETCH_ALL_RECIPES_FAILURE: 'FETCH_ALL_RECIPES_FAILURE',

	SET_LOADING: 'SET_LOADING',

	TOGGLE_SORT_ORDER: 'TOGGLE_SORT_ORDER',
	CLEAR_TOGGLE_SORT_ORDER: 'CLEAR_TOGGLE_SORT_ORDER',

	SET_SELECTED_CATEGORIES: 'SET_SELECTED_CATEGORIES',
	CLEAR_SELECTED_CATEGORIES: 'CLEAR_SELECTED_CATEGORIES',
	SET_SELECTED_AREAS: 'SET_SELECTED_AREAS',
	CLEAR_SELECTED_AREAS: 'CLEAR_SELECTED_AREAS',

	FETCH_CATEGORIES_REQUEST: 'FETCH_CATEGORIES_REQUEST',
	FETCH_CATEGORIES_SUCCESS: 'FETCH_CATEGORIES_SUCCESS',
	FETCH_CATEGORIES_FAILURE: 'FETCH_CATEGORIES_FAILURE',
	FETCH_AREAS_REQUEST: 'FETCH_AREAS_REQUEST',
	FETCH_AREAS_SUCCESS: 'FETCH_AREAS_SUCCESS',
	FETCH_AREAS_FAILURE: 'FETCH_AREAS_FAILURE',

	SET_SEARCH_INPUT: 'SET_SEARCH_INPUT',
	CLEAR_SEARCH_INPUT: 'CLEAR_SEARCH_INPUT',
}

function fetchAllRecipesRequest() {
	return {
		type: ActionType.FETCH_ALL_RECIPES_REQUEST,
	}
}

function fetchAllRecipesSuccess(data) {
	return {
		type: ActionType.FETCH_ALL_RECIPES_SUCCESS,
		payload: {
			data,
		},
	}
}

function fetchAllRecipesFailure(error) {
	return {
		type: ActionType.FETCH_ALL_RECIPES_FAILURE,
		payload: {
			error,
		},
	}
}

function setLoading(status) {
	return {
		type: ActionType.SET_LOADING,
		payload: {
			status,
		},
	}
}

function toggleSortOrder() {
	return {
		type: ActionType.TOGGLE_SORT_ORDER,
	}
}

function clearToggleSortOrder() {
	return {
		type: ActionType.CLEAR_TOGGLE_SORT_ORDER,
	}
}

function setSelectedCategories(categories) {
	return {
		type: ActionType.SET_SELECTED_CATEGORIES,
		payload: {
			categories,
		},
	}
}

function clearSelectedCategories() {
	return {
		type: ActionType.CLEAR_SELECTED_CATEGORIES,
	}
}

function setSelectedAreas(areas) {
	return {
		type: ActionType.SET_SELECTED_AREAS,
		payload: {
			areas,
		},
	}
}

function clearSelectedAreas() {
	return {
		type: ActionType.CLEAR_SELECTED_AREAS,
	}
}

function setSearchInput(searchInput) {
	return {
		type: ActionType.SET_SEARCH_INPUT,
		payload: {
			searchInput,
		},
	}
}

function clearSearchInput() {
	return {
		type: ActionType.CLEAR_SEARCH_INPUT,
	}
}

function fetchRecipes() {
	return async (dispatch) => {
		dispatch(setLoading(true))
		dispatch(fetchAllRecipesRequest())
		try {
			let recipes = await getAllRecipes()
			dispatch(fetchAllRecipesSuccess(recipes))
			dispatch(setLoading(false))
		} catch (e) {
			dispatch(fetchAllRecipesFailure('Error while fetching data.'))
		}
	}
}

function filtering() {
	return async (dispatch, getState) => {
		dispatch(setLoading(true))
		dispatch(fetchAllRecipesRequest())
		const { searchInput, categoriesSelected, areasSelected, isAsc } = getState().recipes

		try {
			let recipes = await getAllRecipes()

			if (searchInput.trim() !== '') {
				const searchLowerCase = searchInput.toLowerCase()
				recipes = recipes.filter((recipe) => recipe.strMeal.toLowerCase().includes(searchLowerCase))
			}
			if (categoriesSelected.length > 0 || areasSelected.length > 0) {
				recipes = recipes.filter((recipe) => (categoriesSelected.length === 0 || categoriesSelected.includes(recipe.strCategory)) && (areasSelected.length === 0 || areasSelected.includes(recipe.strArea)))
			}

			recipes = sorting(recipes, isAsc)
			dispatch(fetchAllRecipesSuccess(recipes))
			dispatch(setLoading(false))
		} catch (e) {
			dispatch(fetchAllRecipesFailure('Error while searching data.'))
		}
	}
}

export { ActionType, fetchRecipes, toggleSortOrder, setSelectedCategories, setSelectedAreas, filtering, setSearchInput, clearSearchInput, clearSelectedAreas, clearSelectedCategories, clearToggleSortOrder }
