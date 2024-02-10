import { ActionType } from './action'

const reducer = (state = { recipes: [], loading: true, isAsc: true, categoriesSelected: [], areasSelected: [], searchInput: '', error: null }, action) => {
	switch (action.type) {
		case ActionType.FETCH_ALL_RECIPES_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			}
		case ActionType.FETCH_ALL_RECIPES_SUCCESS:
			return {
				...state,
				recipes: action.payload.data,
				loading: false,
			}
		case ActionType.FETCH_ALL_RECIPES_FAILURE:
			return {
				...state,
				error: action.payload.error,
				loading: false,
			}
		case ActionType.SET_LOADING:
			return {
				...state,
				loading: action.payload.status,
			}
		case ActionType.TOGGLE_SORT_ORDER:
			return {
				...state,
				isAsc: !state.isAsc,
			}
		case ActionType.SET_SELECTED_CATEGORIES:
			return {
				...state,
				categoriesSelected: action.payload.categories,
			}
		case ActionType.SET_SELECTED_AREAS:
			return {
				...state,
				areasSelected: action.payload.areas,
			}
		case ActionType.SET_SEARCH_INPUT:
			return {
				...state,
				searchInput: action.payload.searchInput,
			}
		case ActionType.CLEAR_SEARCH_INPUT:
			return {
				...state,
				searchInput: '',
			}
		case ActionType.CLEAR_TOGGLE_SORT_ORDER:
			return {
				...state,
				isAsc: true,
			}
		case ActionType.CLEAR_SELECTED_CATEGORIES:
			return {
				...state,
				categoriesSelected: [],
			}
		case ActionType.CLEAR_SELECTED_AREAS:
			return {
				...state,
				areasSelected: [],
			}
		default:
			return state
	}
}

export default reducer
