import { getAreas } from '../../utils/api'

const ActionType = {
	FETCH_AREAS_REQUEST: 'FETCH_AREAS_REQUEST',
	FETCH_AREAS_SUCCESS: 'FETCH_AREAS_SUCCESS',
	FETCH_AREAS_FAILURE: 'FETCH_AREAS_FAILURE',
}

function fetchAreasRequest() {
	return {
		type: ActionType.FETCH_AREAS_REQUEST,
	}
}

function fetchAreasSuccess(data) {
	return {
		type: ActionType.FETCH_AREAS_SUCCESS,
		payload: {
			data,
		},
	}
}

function fetchAreasFailure(error) {
	return {
		type: ActionType.FETCH_AREAS_FAILURE,
		payload: {
			error,
		},
	}
}

function fetchAreas() {
	return async (dispatch) => {
		dispatch(fetchAreasRequest())
		try {
			const areas = await getAreas()
			dispatch(fetchAreasSuccess(areas))
		} catch (e) {
			return dispatch(fetchAreasFailure('Error while fetching data.'))
		}
	}
}

export { ActionType, fetchAreas }
