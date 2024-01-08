import React, { useState, useEffect } from 'react'
import CardItem from './CardItem'
import data from '../utils/data'
import { BiLastPage, BiFirstPage } from 'react-icons/bi'
import { MdOutlineNavigateNext } from 'react-icons/md'
import { IoIosArrowBack } from 'react-icons/io'

function Tes() {
	const [currentPage, setCurrentPage] = useState(parseInt(localStorage.getItem('currentPage')) || 1)
	const [itemsPerPage, setItemsPerPage] = useState(parseInt(localStorage.getItem('itemsPerPage')) || 10)
	const [sortBy, setSortBy] = useState(localStorage.getItem('sortBy') || 'latest')

	useEffect(() => {
		localStorage.setItem('currentPage', currentPage)
		localStorage.setItem('itemsPerPage', itemsPerPage)
		localStorage.setItem('sortBy', sortBy)
	}, [currentPage, itemsPerPage, sortBy])

	//sorting
	const getMonthValue = (month) => {
		const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
		return months.indexOf(month) + 1
	}

	const sortedData = [...data].sort((a, b) => {
		const [dateA, monthA, yearA] = a.date.split(' ')
		const [dateB, monthB, yearB] = b.date.split(' ')

		const numericMonthA = getMonthValue(monthA)
		const numericMonthB = getMonthValue(monthB)

		const dateObjA = new Date(`${numericMonthA + 1}/${dateA}/${yearA}`)
		const dateObjB = new Date(`${numericMonthB + 1}/${dateB}/${yearB}`)

		if (sortBy === 'latest') {
			return dateObjB - dateObjA
		} else {
			return dateObjA - dateObjB
		}
	})

	//pagination
	const indexOfLastItem = currentPage * itemsPerPage
	const indexOfFirstItem = indexOfLastItem - itemsPerPage
	const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem)
	const pageNumbers = []
	for (let i = 1; i <= Math.ceil(sortedData.length / itemsPerPage); i++) {
		pageNumbers.push(i)
	}

	const paginate = (pageNumber) => setCurrentPage(pageNumber)

	//show data length
	const showingFrom = indexOfFirstItem + 1
	const showingTo = Math.min(indexOfLastItem, data.length)
	const totalData = data.length

	return (
		<div className="cards">
			<div className="cards-option">
				<div className="data-length">
					<p>
						Showing {showingFrom} - {showingTo} of {totalData}
					</p>
				</div>
				<div className="show-per-page">
					<label>Show per page:</label>
					<select value={itemsPerPage} onChange={(e) => setItemsPerPage(Number(e.target.value))}>
						<option value={10}>10</option>
						<option value={20}>20</option>
						<option value={50}>50</option>
					</select>
				</div>
				<div className="sort-by">
					<div>
						<label>Sort by:</label>
						<select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
							<option value="latest">Latest</option>
							<option value="oldest">Oldest</option>
						</select>
					</div>
				</div>
			</div>
			<div className="cards-container">
				<div className="cards-wrapper">
					<ul className="cards-items">
						{currentItems.map((item, index) => (
							<CardItem key={index} src={item.src} date={item.date} title={item.title} />
						))}
					</ul>
				</div>
			</div>
			<div className="pagination">
				<button onClick={() => paginate(1)} disabled={currentPage === 1}>
					<BiFirstPage />
				</button>
				<button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
					<IoIosArrowBack />
				</button>
				{pageNumbers.map((number) => (
					<button key={number} onClick={() => paginate(number)} className={number === currentPage ? 'active' : ''}>
						{number}
					</button>
				))}
				<button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastItem >= data.length}>
					<MdOutlineNavigateNext />
				</button>
				<button onClick={() => paginate(pageNumbers.length)} disabled={indexOfLastItem >= data.length}>
					<BiLastPage />
				</button>
			</div>
		</div>
	)
}

export default Tes
