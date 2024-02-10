const ActionType = {
	SET_ITEMS_PER_PAGE: 'SET_ITEMS_PER_PAGE',
}

function setItemsPerPage(itemsPerPage) {
	return {
		type: ActionType.SET_ITEMS_PER_PAGE,
		payload: {
			itemsPerPage,
		},
	}
}

export { ActionType, setItemsPerPage }
