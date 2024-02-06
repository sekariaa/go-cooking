import React, { useContext, useState } from 'react'
import { Context } from '../../context/context'
import { IoMdSearch } from 'react-icons/io'

function Search() {
	const { handleFunction } = useContext(Context)
	const [searchInput, setSearchInput] = useState('')

	const handleSearchClick = () => {
		handleFunction.setSearchInput(searchInput)
		handleFunction.getAllRecipes()
	}

	return (
		<div className="max-w-[1640px]">
			<form onSubmit={(e) => e.preventDefault()} className="flex border border-custom-orange">
				<div className="relative flex-1">
					<input
						type="search"
						style={{ border: 'none' }}
						className="block w-full text-sm text-black bg-white focus:ring-custom-orange focus:border-custom-orange placeholder:text-gray-500"
						placeholder="Search by recipe name"
						value={searchInput}
						onChange={(e) => setSearchInput(e.target.value)}
					/>
				</div>
				<div>
					<button type="button" className="flex items-center justify-center h-full px-4 text-black cursor-pointer bg-custom-orange hover:bg-custom-orange-light" onClick={handleSearchClick}>
						<IoMdSearch />
					</button>
				</div>
			</form>
		</div>
	)
}

export default Search
