import { ActionType } from './action'

const reducer = (state = { areas: [], error: null }, action) => {
	switch (action.type) {
		case ActionType.FETCH_AREAS_REQUEST:
			return {
				...state,
				error: null,
			}
		case ActionType.FETCH_AREAS_SUCCESS:
			return {
				...state,
				areas: action.payload.data,
			}
		case ActionType.FETCH_AREAS_FAILURE:
			return {
				...state,
				error: action.payload.error,
			}
		default:
			return state
	}
}

export default reducer
