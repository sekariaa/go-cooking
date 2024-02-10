import axios from 'axios'

const getCategories = async () => {
	try {
		const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
		if (response.status === 200) {
			return response.data.categories
		}
	} catch (error) {
		throw Error(`Error fetching categories: ${error.message}`)
	}
}

const getAreas = async () => {
	try {
		const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
		if (response.status === 200) {
			return response.data.meals
		}
	} catch (error) {
		throw Error(`Error fetching areas: ${error.message}`)
	}
}

const getAllRecipes = async () => {
	try {
		const startLetter = 'a'
		const endLetter = 'z'

		let allMeals = []

		for (let letter = startLetter; letter <= endLetter; letter = String.fromCharCode(letter.charCodeAt(0) + 1)) {
			const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
			if (response.data.meals && Array.isArray(response.data.meals)) {
				allMeals = [...allMeals, ...response.data.meals]
			}
		}

		if (allMeals.length > 0) {
			allMeals.sort((a, b) => {
				const nameA = a.strMeal.toUpperCase()
				const nameB = b.strMeal.toUpperCase()
				if (nameA < nameB) {
					return -1
				}
				if (nameA > nameB) {
					return 1
				}
				return 0
			})

			return allMeals
		} else {
			throw new Error('Failed to fetch meals')
		}
	} catch (error) {
		throw new Error(`Error fetching recipes: ${error.message}`)
	}
}

const sorting = (allMeals, isAsc) => {
	if (allMeals.length > 0) {
		allMeals.sort((a, b) => {
			const nameA = a.strMeal.toUpperCase()
			const nameB = b.strMeal.toUpperCase()
			if (isAsc) {
				return nameA.localeCompare(nameB)
			} else {
				return nameB.localeCompare(nameA)
			}
		})
	}
	return allMeals
}

const getDetailRecipe = async (id) => {
	try {
		const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
		if (response.status === 200) {
			const { meals } = response.data
			if (meals && meals.length > 0) {
				return meals[0]
			} else {
				throw new Error('Recipe not found')
			}
		} else {
			throw new Error('Failed to fetch data')
		}
	} catch (error) {
		throw new Error(`Error fetching detail recipe: ${error.message}`)
	}
}

export { getCategories, getAllRecipes, getDetailRecipe, sorting, getAreas }
