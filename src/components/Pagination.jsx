import React from 'react'
import PropTypes from 'prop-types'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { BiLastPage, BiFirstPage } from 'react-icons/bi'

function Pagination({ itemsPerPage, totalItems, currentPage, paginate }) {
	const pageNumbers = []
	const totalPages = Math.ceil(totalItems / itemsPerPage)

	const isPreviousEllipsisVisible = currentPage > 3
	const isNextEllipsisVisible = currentPage < totalPages - 2

	for (let i = Math.max(1, currentPage - 2); i <= Math.min(currentPage + 2, totalPages); i++) {
		pageNumbers.push(i)
	}

	return (
		<div className="p-4 mt-4">
			<ul className="flex flex-wrap items-center justify-center">
				<li className="mx-2">
					<button onClick={() => paginate(1)} className={`px-2 py-2 text-custom-orange rounded focus:outline-none hover:bg-custom-beige ${currentPage === 1 ? 'cursor-not-allowed' : ''}`} disabled={currentPage === 1}>
						<BiFirstPage />
					</button>
				</li>
				<li className="mx-2">
					<button onClick={() => paginate(currentPage - 1)} className={`px-2 py-2 text-custom-orange rounded focus:outline-none hover:bg-custom-beige ${currentPage === 1 ? 'cursor-not-allowed' : ''}`} disabled={currentPage === 1}>
						<GrFormPrevious />
					</button>
				</li>
				{isPreviousEllipsisVisible && (
					<li className="mx-2">
						<span className="px-2 text-custom-orange rounded focus:outline-none">...</span>
					</li>
				)}
				{pageNumbers.map((number) => (
					<li key={number} className={`mx-2 ${currentPage === number ? 'font-bold bg-custom-beige rounded' : ''}`}>
						<button onClick={() => paginate(number)} className="px-2 text-custom-orange rounded focus:outline-none hover:bg-custom-beige">
							{number}
						</button>
					</li>
				))}
				{isNextEllipsisVisible && (
					<li className="mx-2">
						<span className="px-2 text-custom-orange rounded focus:outline-none">...</span>
					</li>
				)}
				<li className="mx-2">
					<button
						onClick={() => paginate(currentPage + 1)}
						className={`px-2 py-2 text-custom-orange rounded focus:outline-none hover:bg-custom-beige ${currentPage === totalPages ? 'cursor-not-allowed' : ''}`}
						disabled={currentPage === totalPages}
					>
						<GrFormNext />
					</button>
				</li>
				<li className="mx-2">
					<button
						onClick={() => paginate(totalPages)}
						className={`px-2 py-2 text-custom-orange rounded focus:outline-none hover:bg-custom-beige ${currentPage === totalPages ? 'cursor-not-allowed' : ''}`}
						disabled={currentPage === totalPages}
					>
						<BiLastPage />
					</button>
				</li>
			</ul>
		</div>
	)
}

Pagination.propTypes = {
	itemsPerPage: PropTypes.number.isRequired,
	totalItems: PropTypes.number.isRequired,
	currentPage: PropTypes.number.isRequired,
	paginate: PropTypes.func.isRequired,
	isLoading: PropTypes.bool.isRequired,
}

export default Pagination
