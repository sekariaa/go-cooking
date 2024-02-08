import { ActionType } from './action'

const reducer = (state = { loading: true }, action) => {
	switch (action.type) {
		case ActionType.SET_LOADING:
			return {
				...state,
				loading: action.payload.status,
			}
		default:
			return state
	}
}

export default reducer
