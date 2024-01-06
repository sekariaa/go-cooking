import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/context'
import Loading from './Loading' // Import the Loading component

function Tes() {
	const { state, handleFunction } = useContext(Context)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			try {
				await handleFunction.getAllRecipes('a', 'z')
				setLoading(false)
			} catch (error) {
				console.error('Error fetching data:', error.message)
				setLoading(false)
			}
		}

		fetchData()
	}, [handleFunction])

	return (
		<div>
			<h1>All Recipes:</h1>
			{loading ? (
				<Loading />
			) : (
				<ul>
					{state.allRecipes.map((meal, index) => (
						<li key={index}>
							<h2>{meal.strMeal}</h2>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default Tes
