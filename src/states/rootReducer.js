import { combineReducers } from 'redux'
import categoriesReducer from './categories/reducer'
import recipesReducer from './recipes/reducer'
import paginationReducer from './pagination/reducer'
import showPerPageReducer from './showPerPage/reducer'
import detailReducer from './detail/reducer'
import areasReducer from './areas/reducer'

const rootReducer = combineReducers({
	categories: categoriesReducer,
	recipes: recipesReducer,
	pagination: paginationReducer,
	showPerPage: showPerPageReducer,
	detail: detailReducer,
	areas: areasReducer,
})

export default rootReducer
