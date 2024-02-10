import { ActionType } from './action'

const reducer = (state = { detail: {}, error: null }, action) => {
	switch (action.type) {
		case ActionType.FETCH_DETAIL_REQUEST:
			return {
				...state,
				error: null,
			}
		case ActionType.FETCH_DETAIL_SUCCESS:
			return {
				...state,
				detail: action.payload.data,
			}
		case ActionType.FETCH_DETAIL_FAILURE:
			return {
				...state,
				error: action.payload.error,
			}
		default:
			return state
	}
}

export default reducer
