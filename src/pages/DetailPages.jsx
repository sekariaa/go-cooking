import React, { useContext, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Context } from '../context/context'
import Detail from '../components/Detail/Detail'
import Loading from '../components/Loading'
import { IoIosArrowBack } from 'react-icons/io'

function DetailPages() {
	const { state, handleFunction } = useContext(Context)
	const [isLoading, setLoading] = useState(false)
	const { id } = useParams()

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			await handleFunction.getDetailRecipe(id)
			setLoading(false)
		}

		fetchData()
	}, [id])

	return (
		<section className="max-w-[1640px] mx-auto px-4 mt-4">
			<div className="text-xl hover:text-custom-orange">
				<Link to="/">
					<IoIosArrowBack />{' '}
				</Link>
			</div>
			<div className="">{isLoading ? <Loading /> : <Detail data={state.detailRecipe} />}</div>
		</section>
	)
}

export default DetailPages
