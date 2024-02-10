import React, { useState, useEffect } from 'react'
import image1 from '../../assets/hero-image1.jpg'
import image2 from '../../assets/hero-image2.jpg'
import image3 from '../../assets/hero-image3.jpg'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Hero() {
	const imageList = [image1, image2, image3]
	const [imageIndex, setImageIndex] = useState(1)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const changeImage = () => {
			setImageIndex((prevIndex) => (prevIndex + 1) % imageList.length)
		}

		const interval = setInterval(changeImage, 10000)

		setTimeout(() => {
			setLoading(false)
		}, 3000)

		return () => clearInterval(interval)
	}, [])

	return (
		<div className="max-w-[1640px] mx-auto p-4">
			{loading ? (
				<div>
					<Skeleton style={{ width: '100%', paddingTop: '50%' }} />
				</div>
			) : (
				<div className="max-h-[500px] relative mt-15">
					<div className="absolute w-full h-full text-white bg-black/40 flex flex-col justify-center">
						<h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
							Let&apos;s <span className="text-custom-orange">Cooking</span>
						</h1>
						<h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
							{' '}
							<span className="text-custom-orange">Healthy </span>Foods
						</h1>
					</div>
					<div className="bg-fixed">
						<img className="w-full max-h-[500px] object-cover bg-fixed" src={imageList[imageIndex]} alt={`Food image ${imageIndex + 1}`} />
					</div>
				</div>
			)}
		</div>
	)
}

export default Hero
