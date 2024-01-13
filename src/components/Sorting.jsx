import React, { useContext } from 'react'
import { Context } from '../context/context'

function Sorting() {
	const { state, handleFunction } = useContext(Context)

	const handleChangeSortOrder = (isAsc) => {
		handleFunction.toggleSortOrder(isAsc)
	}

	return (
		<div className="max-w-[1640px] mx-auto p-2 border border-custom-orange">
			<h3 className="font-medium pb-2">Sorting</h3>
			<div className="flex flex-col">
				<div className="flex items-center">
					<input className="text-custom-orange-light focus:ring-custom-orange-light focus:ring-1" type="radio" id="ascending" name="sortOrder" value="ascending" checked={state.isAsc} onChange={() => handleChangeSortOrder(true)} />
					<label htmlFor="ascending" className="ml-2 cursor-pointer">
						<div className="inline-flex items-center">
							<p className="text-xs">Sort A to Z</p>
						</div>
					</label>
				</div>

				<div className="flex items-center">
					<input
						className="text-custom-orange-light focus:accent-custom-orange-light focus:ring-custom-orange-light focus:ring-1"
						type="radio"
						id="descending"
						name="sortOrder"
						value="descending"
						checked={!state.isAsc}
						onChange={() => handleChangeSortOrder(false)}
					/>
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
