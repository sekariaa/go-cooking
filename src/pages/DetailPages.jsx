import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDetail } from '../states/detail/action'
import { Link, useParams } from 'react-router-dom'
import Detail from '../components/Detail/Detail'
import Loading from '../components/Loading'
import { IoIosArrowBack } from 'react-icons/io'

function DetailPages() {
	const dispatch = useDispatch()
	const { detail } = useSelector((state) => state.detail)
	const [loading, setLoading] = useState(true)
	const { id } = useParams()

	useEffect(() => {
		dispatch(fetchDetail(id)).then(() => setLoading(false))
	}, [dispatch, id])

	return (
		<section className="max-w-[1640px] mx-auto px-4 mt-4">
			<div className="text-xl hover:text-custom-orange">
				<Link to="/">
					<IoIosArrowBack />{' '}
				</Link>
			</div>
			<div className="">{loading ? <Loading /> : <Detail data={detail} />}</div>
		</section>
	)
}

export default DetailPages
