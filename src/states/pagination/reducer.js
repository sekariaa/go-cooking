import { ActionType } from './action'

const reducer = (state = { currentPage: 1 }, action) => {
	switch (action.type) {
		case ActionType.SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.payload.currentPage,
			}
		default:
			return state
	}
}

export default reducer
