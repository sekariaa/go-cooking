import React, { useContext, useEffect } from 'react'
import { Context } from '../context/context'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import CategoryCard from './CategoryCard'
import PopupCard from './PopupCard'

function CardListCategory() {
	const { state, handleFunction } = useContext(Context)

	useEffect(() => {
		handleFunction.getCategories()
	}, [])

	const handleClose = () => {
		handleFunction.handlePopupClose()
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
			<Slider {...sliderSettings}>
				{state.categories.map((category, index) => (
					<div key={index}>
						<CategoryCard category={category} image={state.imageCategories[index]} open={() => handleFunction.handlePopupOpen(category, state.imageCategories[index])} />
					</div>
				))}
			</Slider>
			{state.popupData && <PopupCard image={state.popupData.image} category={state.popupData.category} description={state.categoriesDesc[state.categories.indexOf(state.popupData.category)]} close={() => handleClose()} />}
		</div>
	)
}

export default CardListCategory
