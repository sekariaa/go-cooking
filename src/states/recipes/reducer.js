import { ActionType } from './action'

const reducer = (state = { recipes: [], error: null }, action) => {
	switch (action.type) {
		case ActionType.FETCH_ALL_RECIPES_REQUEST:
			return {
				...state,
				error: null,
			}
		case ActionType.FETCH_ALL_RECIPES_SUCCESS:
			return {
				...state,
				recipes: action.payload.data,
			}
		case ActionType.FETCH_ALL_RECIPES_FAILURE:
			return {
				...state,
				error: action.payload.error,
			}
		default:
			return state
	}
}

export default reducer
