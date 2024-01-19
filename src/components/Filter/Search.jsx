import React, { useContext } from 'react'
import { Context } from '../../context/context'

function Search() {
	const { state, handleFunction } = useContext(Context)

	const handleSearchChange = (event) => {
		handleFunction.setSearchInput(event.target.value)
	}

	return (
		<div className="max-w-[1640px]">
			<form onSubmit={(e) => e.preventDefault()}>
				<div className="relative">
					<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
						<svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
							<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
						</svg>
					</div>
					<input
						type="search"
						id="default-search"
						className="block w-full ps-10 text-sm text-black border border-custom-orange bg-white focus:ring-custom-orange focus:border-custom-orange placeholder:text-gray-500"
						placeholder="Search by recipe name"
						value={state.searchInput}
						onChange={handleSearchChange}
					/>
				</div>
			</form>
		</div>
	)
}

export default Search
