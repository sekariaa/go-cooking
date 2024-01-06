import React from 'react'
import PropTypes from 'prop-types'

function CardCategory({ image, category, open }) {
	return (
		<div className="max-w-36 mx-auto mb-4 flex flex-col items-center rounded-lg shadow-lg bg-custom-beige p-2 cursor-pointer">
			<div onClick={open}>
				<img className="my-2 max-w-[100px] object-cover" src={image} alt={category} />
				<h2 className="text-base text-center">{category}</h2>
			</div>
		</div>
	)
}

CardCategory.propTypes = {
	image: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	open: PropTypes.func.isRequired,
}

export default CardCategory
