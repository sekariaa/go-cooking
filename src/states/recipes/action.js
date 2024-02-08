import { getAllRecipes } from '../../utils/api'

const ActionType = {
	FETCH_ALL_RECIPES_REQUEST: 'FETCH_ALL_RECIPES_REQUEST',
	FETCH_ALL_RECIPES_SUCCESS: 'FETCH_ALL_RECIPES_SUCCESS',
	FETCH_ALL_RECIPES_FAILURE: 'FETCH_ALL_RECIPES_FAILURE',
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

function fetchRecipes() {
	return async (dispatch) => {
		dispatch(fetchAllRecipesRequest())
		try {
			const recipes = await getAllRecipes()
			dispatch(fetchAllRecipesSuccess(recipes))
		} catch (e) {
			return dispatch(fetchAllRecipesFailure('Error while fetching data.'))
		}
	}
}

export { ActionType, fetchRecipes }
