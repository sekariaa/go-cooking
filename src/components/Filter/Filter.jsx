import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedCategories, setSelectedAreas, filtering } from '../../states/recipes/action'
import { fetchCategories } from '../../states/categories/action'
import { fetchAreas } from '../../states/areas/action'
import { IoChevronDownSharp } from 'react-icons/io5'

function Filter() {
	const dispatch = useDispatch()
	const { categories } = useSelector((state) => state.categories)
	const { areas } = useSelector((state) => state.areas)
	const { categoriesSelected, areasSelected } = useSelector((state) => state.recipes)

	const [isFilterCategoriesVisible, setIsFilterCategoriesVisible] = useState(true)
	const [isFilterAreasVisible, setIsFilterAreasVisible] = useState(true)

	useEffect(() => {
		dispatch(fetchCategories())
		dispatch(fetchAreas())
	}, [dispatch])

	const handleCategoryCheckboxChange = (category) => {
		const selectedCategories = categoriesSelected.includes(category) ? categoriesSelected.filter((c) => c !== category) : [...categoriesSelected, category]

		dispatch(setSelectedCategories(selectedCategories))
		if (selectedCategories.length > 0) {
			dispatch(filtering())
		}
	}

	const handleAreaCheckboxChange = (area) => {
		const selectedAreas = areasSelected.includes(area) ? areasSelected.filter((a) => a !== area) : [...areasSelected, area]

		dispatch(setSelectedAreas(selectedAreas))
		if (selectedAreas.length > 0) {
			dispatch(filtering())
		}
	}

	const toggleFilterCategoriesVisibility = () => {
		setIsFilterCategoriesVisible((prevIsFilterCategoriesVisible) => !prevIsFilterCategoriesVisible)
	}

	const toggleFilterAreasVisibility = () => {
		setIsFilterAreasVisible((prevIsFilterAreasVisible) => !prevIsFilterAreasVisible)
	}

	return (
		<div className="max-w-[1640px] mx-auto mt-2 p-2 border border-custom-orange">
			<h3 className="font-medium">Filters</h3>
			{/* categories */}
			<div className="flex items-center justify-between cursor-pointer m-1" onClick={toggleFilterCategoriesVisibility}>
				<h3 className="font-medium">Categories</h3>
				<IoChevronDownSharp className={`ml-2 cursor-pointer transition-transform transform ${isFilterCategoriesVisible ? 'rotate-180' : 'rotate-0'}`} />
			</div>
			<div>
				{isFilterCategoriesVisible &&
					categories.map((category) => (
						<div key={category.strCategory} className="flex items-center text-xs p-1">
							<input
								type="checkbox"
								id={category.strCategory}
								value={category.strCategory}
								checked={categoriesSelected.includes(category.strCategory)}
								onChange={() => handleCategoryCheckboxChange(category.strCategory)}
								className="mr-2 text-custom-orange-light focus:accent-custom-orange-light focus:ring-transparent"
							/>
							<label htmlFor={category.strCategory}>{category.strCategory}</label>
						</div>
					))}
			</div>
			{/* areas */}
			<div className="flex items-center justify-between cursor-pointer m-1" onClick={toggleFilterAreasVisibility}>
				<h3 className="font-medium">Areas</h3>
				<IoChevronDownSharp className={`ml-2 transition-transform transform ${isFilterAreasVisible ? 'rotate-180' : 'rotate-0'}`} />
			</div>
			<div>
				{isFilterAreasVisible &&
					areas.map((area) => (
						<div key={area.strArea} className="flex items-center text-xs p-1">
							<input
								type="checkbox"
								id={area.strArea}
								value={area.strArea}
								checked={areasSelected.includes(area.strArea)}
								onChange={() => handleAreaCheckboxChange(area.strArea)}
								className="mr-2 text-custom-orange-light focus:accent-custom-orange-light focus:ring-transparent"
							/>
							<label htmlFor={area.strArea}>{area.strArea}</label>
						</div>
					))}
			</div>
		</div>
	)
}

export default Filter
