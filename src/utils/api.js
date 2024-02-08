import axios from 'axios'

const getCategories = async () => {
	const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
	if (response.status === 200) {
		return response.data.categories
	}
	throw Error('Failed to fetch categories')
}

// const getAllRecipes = async () => {
// 	const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
// 	if (response.status === 200) {
// 		return response.data.meals
// 	}
// 	throw Error('Failed to fetch categories')
// }

const getAllRecipes = async () => {
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
}

export { getCategories, getAllRecipes }
