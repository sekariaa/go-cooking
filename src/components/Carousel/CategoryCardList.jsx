import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories, openPopup, closePopup } from '../../states/categories/action'
import { setLoading } from '../../states/loading/action'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import CategoryCard from './CategoryCard'
import PopupCard from './PopupCard'
import CategorySkeleton from './CategorySkeleton'

function CategoryCardList() {
	const dispatch = useDispatch()
	const { categories, popupData } = useSelector((state) => state.categories)
	const loading = useSelector((state) => state.loading.loading)

	useEffect(() => {
		dispatch(setLoading(true))
		dispatch(fetchCategories()).then(() => dispatch(setLoading(false)))

		const savedPopupData = JSON.parse(localStorage.getItem('popupData'))
		if (savedPopupData) {
			dispatch(openPopup(savedPopupData))
		}

		return () => {
			if (popupData) {
				dispatch(closePopup())
			}
		}
	}, [dispatch])

	const handlePopupOpen = (category) => {
		dispatch(
			openPopup({
				image: category.strCategoryThumb,
				description: category.strCategoryDescription,
			})
		)
	}

	const handlePopupClose = () => {
		dispatch(closePopup())
	}

	const sliderSettings = {
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1500,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	}

	return (
		<div className="max-w-[1640px] mx-auto p-4 overflow-hidden">
			<h2 className="text-center text-2xl font-medium pb-2">Categories</h2>
			{loading ? (
				<Slider {...sliderSettings}>
					{[1, 2, 3, 4, 5].map((_, index) => (
						<div key={index}>
							<CategorySkeleton />
						</div>
					))}
				</Slider>
			) : (
				<Slider {...sliderSettings}>
					{categories.map((category) => (
						<div key={category.idCategory} onClick={() => handlePopupOpen(category)}>
							<CategoryCard category={category.strCategory} image={category.strCategoryThumb} />
						</div>
					))}
				</Slider>
			)}

			{popupData && <PopupCard image={popupData.image} description={popupData.description} close={handlePopupClose} />}
		</div>
	)
}

export default CategoryCardList
