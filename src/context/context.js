// context.js

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

	const getAllRecipes = async (startLetter, endLetter) => {
		try {
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

			const flatRecipes = recipesData.flat()

			setStrMeal(flatRecipes.map((recipe) => recipe.name))
			setAllMealThumbs(flatRecipes.map((recipe) => recipe.image))
			setAllStrCategory(flatRecipes.map((recipe) => recipe.category))
			setAllStrArea(flatRecipes.map((recipe) => recipe.area))

			const formattedTags = flatRecipes.map((recipe) =>
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
	}

	let handleFunction = {
		getCategories,
		handlePopupOpen,
		handlePopupClose,
		getAllRecipes,
	}

	// eslint-disable-next-line react/prop-types
	return <Context.Provider value={{ state, handleFunction }}>{props.children}</Context.Provider>
}
