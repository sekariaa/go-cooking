import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { IoIosClose } from 'react-icons/io'

function CardPopup({ image, category, description, close }) {
	useEffect(() => {
		document.body.style.overflow = 'hidden'
		return () => {
			document.body.style.overflow = 'visible'
		}
	}, [])

	return (
		<div className="max-w-[1640px] mx-auto fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center ">
			<div className="w-3/4 max-h-max lg:max-w-3xl bg-white p-4 rounded ">
				<button className="text-3xl" onClick={close}>
					<IoIosClose />
				</button>
				<div className="flex flex-col sm:flex-row">
					<div className="lg:w-1/5 flex items-center justify-center lg:mr-2">
						<img className="mb-2 max-w-full sm:max-w-[150px] object-cover" src={image} alt={category} />
					</div>
					<div className="lg:w-4/5 ">
						<p className="text-xs text-justify">{description}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

CardPopup.propTypes = {
	image: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	close: PropTypes.func.isRequired,
}

export default CardPopup
