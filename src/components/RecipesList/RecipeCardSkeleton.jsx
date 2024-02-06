import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function RecipeCardSkeleton() {
	const maxCardHeight = 500
	const maxCardWidth = 300

	return (
		<div className="bg-white shadow-xl my-2 rounded-lg w-max-30 h-max-10 overflow-hidden" style={{ maxWidth: `${maxCardWidth}px`, maxHeight: `${maxCardHeight}px` }}>
			<Skeleton height={280} width={280} style={{ display: 'block' }} />
			<div className="p-2 my-3">
				<div>
					<Skeleton height={20} style={{ marginBottom: '5px' }} />
					<Skeleton count={2} height={20} style={{ display: 'block' }} />
					<Skeleton height={20} style={{ display: 'block' }} />
				</div>
			</div>
		</div>
	)
}

export default RecipeCardSkeleton
