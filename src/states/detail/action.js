import { getDetailRecipe } from '../../utils/api'

const ActionType = {
	FETCH_DETAIL_REQUEST: 'FETCH_DETAIL_REQUEST',
	FETCH_DETAIL_SUCCESS: 'FETCH_DETAIL_SUCCESS',
	FETCH_DETAIL_FAILURE: 'FETCH_DETAIL_FAILURE',
}

function fetchDetailRequest() {
	return {
		type: ActionType.FETCH_DETAIL_REQUEST,
	}
}

function fetchDetailSuccess(data) {
	return {
		type: ActionType.FETCH_DETAIL_SUCCESS,
		payload: {
			data,
		},
	}
}

function fetchDetailFailure(error) {
	return {
		type: ActionType.FETCH_DETAIL_FAILURE,
		payload: {
			error,
		},
	}
}

function fetchDetail(id) {
	return async (dispatch) => {
		dispatch(fetchDetailRequest())
		try {
			const detail = await getDetailRecipe(id)
			dispatch(fetchDetailSuccess(detail))
		} catch (e) {
			return dispatch(fetchDetailFailure('Error while fetching data.'))
		}
	}
}

export { ActionType, fetchDetail }
