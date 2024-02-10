const ActionType = {
	SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
}

function setCurrentPage(currentPage) {
	return {
		type: ActionType.SET_CURRENT_PAGE,
		payload: {
			currentPage,
		},
	}
}

export { ActionType, setCurrentPage }
