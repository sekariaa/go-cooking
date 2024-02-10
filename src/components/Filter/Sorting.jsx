import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSortOrder } from '../../states/recipes/action'

function Sorting() {
	const dispatch = useDispatch()
	const isAsc = useSelector((state) => state.recipes.isAsc)

	const handleChangeSortOrder = (isAsc) => {
		dispatch(toggleSortOrder(isAsc))
	}

	return (
		<div className="max-w-[1640px] mx-auto p-2 border border-custom-orange">
			<h3 className="font-medium pb-2">Sorting</h3>
			<div className="flex flex-col">
				<div className="flex items-center">
					<input className="text-custom-orange-light focus:ring-custom-orange-light focus:ring-1" type="radio" id="ascending" name="sortOrder" value="ascending" checked={isAsc} onChange={() => handleChangeSortOrder()} />
					<label htmlFor="ascending" className="ml-2 cursor-pointer">
						<div className="inline-flex items-center">
							<p className="text-xs">Sort A to Z</p>
						</div>
					</label>
				</div>

				<div className="flex items-center">
					<input className="text-custom-orange-light  focus:ring-custom-orange-light focus:ring-1" type="radio" id="descending" name="sortOrder" value="descending" checked={!isAsc} onChange={() => handleChangeSortOrder()} />
					<label htmlFor="descending" className="ml-2 cursor-pointer">
						<div className="inline-flex items-center ">
							<p className="text-xs">Sort Z to A</p>
						</div>
					</label>
				</div>
			</div>
		</div>
	)
}

export default Sorting
