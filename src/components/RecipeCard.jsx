import React from 'react'
import PropTypes from 'prop-types'
import { MdNavigateNext } from 'react-icons/md'

function RecipeCard({ image, name, category, area, tags }) {
	const maxCardHeight = 500
	const maxCardWidth = 300

	const truncatedName = name.length > 20 ? `${name.substring(0, 20)}...` : name
	const truncatedTags = tags && tags.split('#').length > 2 ? `${tags.split('#').slice(0, 3).join('#')} ...` : tags

	return (
		<div className="bg-white shadow-xl my-2 rounded-lg w-max-30 h-max-10 overflow-hidden" style={{ maxWidth: `${maxCardWidth}px`, maxHeight: `${maxCardHeight}px` }}>
			<div className="relative overflow-hidden group">
				<img className="transition-transform transform-gpu scale-100 group-hover:scale-105 duration-300 object-cover w-full h-full" src={image} alt={name} />
			</div>

			<div className="p-2">
				<div>
					<h2 className="text-lg font-semibold mt-4" title={name}>
						{truncatedName}
					</h2>
					<p className="text-sm mt-3">
						{category} from <span>{area}</span>
					</p>
				</div>
				{!tags ? <br /> : null}
				{tags && (
					<div className="mb-3">
						<p className="text-xs">{truncatedTags}</p>
					</div>
				)}
				<div className="cursor-pointer">
					<div className="flex justify-between hover:text-custom-orange">
						<div className="text-base">Read More</div>
						<div className="text-lg">
							<MdNavigateNext />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

RecipeCard.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	area: PropTypes.string.isRequired,
	tags: PropTypes.string,
}

export default RecipeCard
