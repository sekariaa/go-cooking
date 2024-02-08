const ActionType = {
	SET_LOADING: 'SET_LOADING',
}

function setLoading(status) {
	return {
		type: ActionType.SET_LOADING,
		payload: {
			status,
		},
	}
}

export { ActionType, setLoading }
