import { combineReducers } from 'redux'
import loadingReducer from './loading/reducer'
import categoriesReducer from './categories/reducer'
import recipesReducer from './recipes/reducer'

const rootReducer = combineReducers({
	loading: loadingReducer,
	categories: categoriesReducer,
	recipes: recipesReducer,
})

export default rootReducer
