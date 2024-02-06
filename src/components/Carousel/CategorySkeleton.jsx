import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function CategorySkeleton() {
	return (
		<div className="max-w-36 mx-auto mb-4 flex flex-col items-center rounded-lg shadow-lg bg-white p-2 cursor-pointer">
			<div className="my-2 max-w-[100px] object-cover">
				<Skeleton width={60} height={60} />
			</div>
			<div>
				<Skeleton width={125} height={15} />
			</div>
		</div>
	)
}

export default CategorySkeleton
