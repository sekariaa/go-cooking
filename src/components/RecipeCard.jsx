import React from 'react'
import PropTypes from 'prop-types'
import { MdNavigateNext } from 'react-icons/md'

function RecipeCard({ image, name, category, area, tags }) {
	const maxCardHeight = 500
	const maxCardWidth = 300

	const truncatedName = name.length > 20 ? `${name.substring(0, 20)}...` : name
	const tagList = tags && tags.split('#').slice(1)

	let totalTagLength = 0
	let displayedTags = []
	let isMore = false

	if (tagList) {
		for (let i = 0; i < Math.min(3, tagList.length); i++) {
			if (totalTagLength + tagList[i].length <= 20) {
				displayedTags.push(tagList[i])
				totalTagLength += tagList[i].length
			} else {
				isMore = true
				break
			}
		}
	}

	// const hiddenTag = totalTagLength > 20

	return (
		<div className="bg-white shadow-xl my-2 rounded-lg w-max-30 h-max-10 overflow-hidden" style={{ maxWidth: `${maxCardWidth}px`, maxHeight: `${maxCardHeight}px` }}>
			<img className="w-full cursor-default" src={image} alt={name} />
			<div className="p-2 my-3">
				<div className="cursor-default">
					<h2 className="text-base font-semibold mt-6" title={name}>
						{truncatedName}
					</h2>
					<p className="text-sm mt-3">
						{category} from <span>{area}</span>
					</p>
				</div>
				{!tags ? (
					<div className="py-1 my-1">
						<br />
					</div>
				) : null}
				{displayedTags.length > 0 && (
					<div className="mb-3 cursor-default">
						{displayedTags.map((tag, index) => (
							<span key={index} className="inline-block border border-custom-orange rounded-full px-3 py-1 text-xs text-custom-orange mr-1 mb-1 cursor-default">
								#{tag}
							</span>
						))}
						{isMore && (
							<span className="text-base text-custom-orange cursor-default" title="Many more">
								...
							</span>
						)}
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
