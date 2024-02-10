import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filtering, setSearchInput, clearSearchInput } from '../../states/recipes/action'
import { IoMdSearch, IoIosClose } from 'react-icons/io'

function Search() {
	const dispatch = useDispatch()
	const searchInput = useSelector((state) => state.recipes.searchInput)
	const inputRef = useRef(null)

	const handleSearchClick = () => {
		dispatch(filtering())
	}

	const handleClearSearch = () => {
		dispatch(clearSearchInput())
		dispatch(filtering())
		inputRef.current.focus()
	}

	return (
		<div className="max-w-[1640px]">
			<form onSubmit={(e) => e.preventDefault()} className="flex border border-custom-orange">
				<div className="relative flex-1">
					<input
						ref={inputRef}
						type="search"
						style={{ border: 'none' }}
						className="block w-full text-sm text-black bg-white focus:ring-custom-orange focus:border-custom-orange placeholder:text-gray-500"
						placeholder="Search by recipe name"
						value={searchInput}
						onChange={(e) => dispatch(setSearchInput(e.target.value))}
					/>
					{searchInput && (
						<button type="button" className="absolute top-0 right-0 flex items-center  h-full px-4 text-black cursor-pointer text-xl" onClick={handleClearSearch}>
							<IoIosClose />
						</button>
					)}
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
