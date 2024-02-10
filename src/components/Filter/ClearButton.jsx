import React from 'react'
import { useDispatch } from 'react-redux'
import { clearSearchInput, clearSelectedCategories, clearSelectedAreas, clearToggleSortOrder } from '../../states/recipes/action'

function ClearButton() {
	const dispatch = useDispatch()

	const clearFilter = () => {
		dispatch(clearSearchInput())
		dispatch(clearSelectedCategories())
		dispatch(clearSelectedAreas())
		dispatch(clearToggleSortOrder())
	}

	return (
		<div className="max-w-[1640px] mb-2 py-2 lg:py-0">
			<button className="border border-custom-orange hover:bg-custom-orange hover:text-white px-1 py-1 text-sm w-full" onClick={() => clearFilter()}>
				Clear All
			</button>
		</div>
	)
}

export default ClearButton
