import axios from 'axios'
import React, { createContext, useState, useCallback } from 'react'

export const Context = createContext()

export const Provider = (props) => {
	//categories
	const [categories, setCategories] = useState([])
	const [imageCategories, setImageCategories] = useState([])
	const [categoriesDesc, setCategoriesDesc] = useState([])
	const [popupData, setPopupData] = useState(null)

	//all menu
	const [allStrMeal, setStrMeal] = useState([])
	const [allMealThumbs, setAllMealThumbs] = useState([])
	const [allStrCategory, setAllStrCategory] = useState([])
	const [allStrArea, setAllStrArea] = useState([])
	const [allStrTags, setAllStrTags] = useState([])

	//sorting
	const [isAsc, setIsAsc] = useState(true)

	//filtering
	const [categoriesOption, setCategoriesOption] = useState([])
	const [categoriesSelected, setCategoriesSelected] = useState([])
	const [areasOption, setAreasOption] = useState([])
	const [areasSelected, setAreasSelected] = useState([])

	//search
	const [searchInput, setSearchInput] = useState('')

	const getCategories = async () => {
		try {
			const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
			setCategories(response.data.categories.map((category) => category.strCategory))
			setImageCategories(response.data.categories.map((image) => image.strCategoryThumb))
			setCategoriesDesc(response.data.categories.map((description) => description.strCategoryDescription))
		} catch (error) {
			console.error('Error fetching data:', error.message)
		}
	}

	const handlePopupOpen = useCallback((category, image) => {
		setPopupData({ category, image })
	}, [])

	const handlePopupClose = useCallback(() => {
		setPopupData(null)
	}, [])

	const getAllRecipes = async () => {
		try {
			const startLetter = 'a'
			const endLetter = 'z'

			const letters = Array.from({ length: endLetter.charCodeAt(0) - startLetter.charCodeAt(0) + 1 }, (_, index) => String.fromCharCode(startLetter.charCodeAt(0) + index))

			const recipesData = []

			for (const letter of letters) {
				const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
				if (response.data.meals && Array.isArray(response.data.meals)) {
					recipesData.push(
						...response.data.meals.map((meal) => ({
							name: meal.strMeal,
							image: meal.strMealThumb,
							category: meal.strCategory,
							area: meal.strArea,
							tags: meal.strTags,
						}))
					)
				}
			}

			let filteredRecipes = recipesData.flat()

			// Apply search logic
			if (searchInput.trim() !== '') {
				const searchLowerCase = searchInput.toLowerCase()
				filteredRecipes = filteredRecipes.filter((recipe) => recipe.name.toLowerCase().includes(searchLowerCase))
			}

			// Apply area and category filtering
			if (categoriesSelected.length > 0 || areasSelected.length > 0) {
				filteredRecipes = filteredRecipes.filter((recipe) => (categoriesSelected.length === 0 || categoriesSelected.includes(recipe.category)) && (areasSelected.length === 0 || areasSelected.includes(recipe.area)))
			}

			filteredRecipes.sort((a, b) => {
				const nameA = a.name.toUpperCase()
				const nameB = b.name.toUpperCase()

				if (isAsc) {
					return nameA.localeCompare(nameB)
				} else {
					return nameB.localeCompare(nameA)
				}
			})

			setStrMeal(filteredRecipes.map((recipe) => recipe.name))
			setAllMealThumbs(filteredRecipes.map((recipe) => recipe.image))
			setAllStrCategory(filteredRecipes.map((recipe) => recipe.category))
			setAllStrArea(filteredRecipes.map((recipe) => recipe.area))

			const formattedTags = filteredRecipes.map((recipe) =>
				recipe.tags
					? recipe.tags
							.split(',')
							.map((tag) => `#${tag.trim()}`)
							.join(' ')
					: ''
			)

			setAllStrTags(formattedTags)
		} catch (error) {
			console.error('Error fetching data:', error.message)
		}
	}

	const toggleSortOrder = () => {
		setIsAsc((prevIsAsc) => !prevIsAsc)
	}

	const getAreas = async () => {
		try {
			const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list')

			if (response.data.meals) {
				setAreasOption(response.data.meals.map((area) => area.strArea))
			}
		} catch (error) {
			console.error('Error fetching areas:', error.message)
		}
	}

	let state = {
		categories,
		imageCategories,
		categoriesDesc,
		popupData,
		allStrMeal,
		allMealThumbs,
		allStrCategory,
		allStrArea,
		allStrTags,
		isAsc,
		categoriesOption,
		categoriesSelected,
		areasOption,
		areasSelected,
		searchInput,
	}

	let handleFunction = {
		getCategories,
		handlePopupOpen,
		handlePopupClose,
		getAllRecipes,
		setIsAsc,
		toggleSortOrder,
		setCategoriesOption,
		setCategoriesSelected,
		setAreasSelected,
		getAreas,
		// filterRecipes,
		setSearchInput,
	}

	// eslint-disable-next-line react/prop-types
	return <Context.Provider value={{ state, handleFunction }}>{props.children}</Context.Provider>
}
