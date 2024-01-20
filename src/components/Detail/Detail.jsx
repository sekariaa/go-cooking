import React from 'react'
import PropTypes from 'prop-types'
import { FaYoutube } from 'react-icons/fa'
import { FaLink } from 'react-icons/fa6'

function Detail({ data }) {
	const instructionsArray = data.strInstructions ? data.strInstructions.split('\r\n') : []

	const listInstructions = instructionsArray.map((line, index) => (
		<p key={index + 1}>
			{index + 1}. {line}
		</p>
	))

	const ingredients = Array.from({ length: 20 }, (_, index) => {
		const ingredient = data[`strIngredient${index + 1}`]
		const measure = data[`strMeasure${index + 1}`]

		if (ingredient && measure && ingredient !== '' && measure !== '') {
			return (
				<p key={index}>
					{measure} {ingredient}
				</p>
			)
		}

		return null
	}).filter((element) => element !== null)

	const formattedTags = data.strTags
		? data.strTags
				.split(',')
				.map((tag) => `#${tag.trim()}`)
				.join(' ')
		: 'No tags'

	return (
		<div className="mb-2">
			<h1 className="text-5xl text-center mb-1">{data.strMeal}</h1>
			<div className="flex flex-row items-center justify-center mb-2">
				<p className="text-xs mx-2">
					{data.strCategory} from {data.strArea}
				</p>
				<p>|</p>
				<p className="text-xs mx-2">{formattedTags}</p>
				<p>|</p>
				<a className="mx-2 hover:text-custom-orange" href={data.strSource} target="_blank" rel="noopener noreferrer">
					<button>
						<FaLink />
					</button>
				</a>{' '}
				<br />
				<a className="hover:text-custom-orange" href={data.strYoutube} target="_blank" rel="noopener noreferrer">
					<button>
						<FaYoutube />
					</button>
				</a>
			</div>
			<img className="w-96 rounded-full h-96 mx-auto" src={data.strMealThumb} alt={data.strMeal} />
			<h2 className="text-custom-orange">Ingredients</h2>
			<div className="py-1">{ingredients}</div>
			<h2 className="text-custom-orange">Instructions</h2>
			{listInstructions}
		</div>
	)
}

Detail.propTypes = {
	data: PropTypes.object.isRequired,
}

export default Detail
