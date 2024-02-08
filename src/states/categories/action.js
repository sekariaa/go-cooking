import { getCategories } from '../../utils/api'

const ActionType = {
	FETCH_CATEGORIES_REQUEST: 'FETCH_CATEGORIES_REQUEST',
	FETCH_CATEGORIES_SUCCESS: 'FETCH_CATEGORIES_SUCCESS',
	FETCH_CATEGORIES_FAILURE: 'FETCH_CATEGORIES_FAILURE',

	OPEN_POPUP: 'OPEN_POPUP',
	CLOSE_POPUP: 'CLOSE_POPUP',
}

function fetchCategoriesRequest() {
	return {
		type: ActionType.FETCH_CATEGORIES_REQUEST,
	}
}

function fetchCategoriesSuccess(data) {
	return {
		type: ActionType.FETCH_CATEGORIES_SUCCESS,
		payload: {
			data,
		},
	}
}

function fetchCategoriesFailure(error) {
	return {
		type: ActionType.FETCH_CATEGORIES_FAILURE,
		payload: {
			error,
		},
	}
}

function openPopup({ image, description }) {
	localStorage.setItem('popupData', JSON.stringify({ image, description }))
	return {
		type: ActionType.OPEN_POPUP,
		payload: {
			image,
			description,
		},
	}
}

function closePopup() {
	localStorage.removeItem('popupData')
	return {
		type: ActionType.CLOSE_POPUP,
	}
}

function fetchCategories() {
	return async (dispatch) => {
		dispatch(fetchCategoriesRequest())
		try {
			const categories = await getCategories()
			dispatch(fetchCategoriesSuccess(categories))
		} catch (e) {
			return dispatch(fetchCategoriesFailure('Error while fetching data.'))
		}
	}
}

export { ActionType, fetchCategories, openPopup, closePopup }
