import React from 'react'
import PropTypes from 'prop-types'

function RecipeCard({ image, name, category, area, tags }) {
	return (
		<div>
			<div>
				<img src={image} alt={name} />
			</div>
			<div>
				<h2>{name}</h2>
				<p>
					{category} from <span>{area}</span>
				</p>
			</div>
			<div>{tags}</div>
		</div>
	)
}

RecipeCard.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	area: PropTypes.string.isRequired,
	tags: PropTypes.string.isRequired,
}

export default RecipeCard
