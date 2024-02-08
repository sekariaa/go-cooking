import { ActionType } from './action'

const reducer = (state = { categories: [], popupData: null, error: null }, action) => {
	switch (action.type) {
		case ActionType.FETCH_CATEGORIES_REQUEST:
			return {
				...state,
				error: null,
			}
		case ActionType.FETCH_CATEGORIES_SUCCESS:
			return {
				...state,
				categories: action.payload.data,
			}
		case ActionType.FETCH_CATEGORIES_FAILURE:
			return {
				...state,
				error: action.payload.error,
			}
		case ActionType.OPEN_POPUP:
			return {
				...state,
				loading: false,
				popupData: {
					image: action.payload.image,
					description: action.payload.description,
				},
			}
		case ActionType.CLOSE_POPUP:
			return {
				...state,
				popupData: null,
			}
		default:
			return state
	}
}

export default reducer
