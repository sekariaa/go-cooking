import React, { useContext, useState } from 'react'
import { Context } from '../context/context'
import { IoChevronDownSharp } from 'react-icons/io5'

function Filter() {
	const { state, handleFunction } = useContext(Context)
	const [isFilterCategoriesVisible, setIsFilterCategoriesVisible] = useState(true)
	const [isFilterAreasVisible, setIsFilterAreasVisible] = useState(true)

	const handleCheckboxChange = (category) => {
		const selectedCategories = state.categoriesSelected.includes(category) ? state.categoriesSelected.filter((c) => c !== category) : [...state.categoriesSelected, category]

		handleFunction.setCategoriesSelected(selectedCategories)
	}

	const handleAreaCheckboxChange = (area) => {
		const selectedAreas = state.areasSelected.includes(area) ? state.areasSelected.filter((a) => a !== area) : [...state.areasSelected, area]

		handleFunction.setAreasSelected(selectedAreas)
	}

	const toggleFilterCategoriesVisibility = () => {
		setIsFilterCategoriesVisible((prevIsFilterCategoriesVisible) => !prevIsFilterCategoriesVisible)
	}

	const toggleFilterAreasVisibility = () => {
		setIsFilterAreasVisible((prevIsFilterAreasVisible) => !prevIsFilterAreasVisible)
	}

	return (
		<div className="max-w-[1640px] mx-auto mt-2 p-2 border border-custom-orange">
			<h3 className="font-medium pb-2">Filters</h3>
			{/* categories */}
			<div className="flex items-center">
				<h3 className="font-medium">Categories</h3>
				<IoChevronDownSharp className={`ml-2 cursor-pointer transition-transform transform ${isFilterCategoriesVisible ? 'rotate-180' : 'rotate-0'}`} onClick={toggleFilterCategoriesVisibility} />
			</div>
			<div>
				{isFilterCategoriesVisible &&
					state.categories.map((category) => (
						<div key={category} className="flex items-center">
							<input type="checkbox" id={category} value={category} checked={state.categoriesSelected.includes(category)} onChange={() => handleCheckboxChange(category)} className="mr-2" />
							<label htmlFor={category}>{category}</label>
						</div>
					))}
			</div>
			{/* areas */}
			<div className="flex items-center">
				<h3 className="font-medium">Areas</h3>
				<IoChevronDownSharp className={`ml-2 cursor-pointer transition-transform transform ${isFilterAreasVisible ? 'rotate-180' : 'rotate-0'}`} onClick={toggleFilterAreasVisibility} />
			</div>
			<div>
				{isFilterAreasVisible &&
					state.areasOption.map((area) => (
						<div key={area} className="flex items-center">
							<input type="checkbox" id={area} value={area} checked={state.areasSelected.includes(area)} onChange={() => handleAreaCheckboxChange(area)} className="mr-2" />
							<label htmlFor={area}>{area}</label>
						</div>
					))}
			</div>
		</div>
	)
}

export default Filter
