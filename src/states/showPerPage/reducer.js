import { ActionType } from './action'

const reducer = (state = { itemsPerPage: 12, filteredRecipes: [] }, action) => {
	switch (action.type) {
		case ActionType.SET_ITEMS_PER_PAGE:
			return {
				...state,
				itemsPerPage: action.payload.itemsPerPage,
			}
		default:
			return state
	}
}

export default reducer
