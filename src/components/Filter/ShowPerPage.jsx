import React from 'react'
import PropTypes from 'prop-types'

function ShowPerPage({ itemsPerPage, setItemsPerPage }) {
	const handleItemsPerPageChange = (selectedOption) => {
		setItemsPerPage(selectedOption.value)
	}

	return (
		<div className="max-w-[1640px]">
			<div className="flex items-center">
				<label htmlFor="" className="mr-2 text-sm">
					Show items:{' '}
				</label>
				<select id="itemsPerPage" value={itemsPerPage} onChange={handleItemsPerPageChange} className="block text-sm text-black border border-custom-orange bg-white focus:ring-custom-orange focus:border-custom-orange">
					<option value={12}>12</option>
					<option value={24}>24</option>
					<option value={30}>30</option>
				</select>
			</div>
		</div>
	)
}

ShowPerPage.propTypes = {
	itemsPerPage: PropTypes.number.isRequired,
	setItemsPerPage: PropTypes.func.isRequired,
}

export default ShowPerPage
