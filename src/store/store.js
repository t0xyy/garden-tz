import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { leadsReducer } from './slices/leads/leadsReducer.js'
import { portfolioReducer } from './slices/portfolio/portfolioReducer.js'
import { uiReducer } from './slices/ui/uiReducer.js'
import { cabinetReducer } from './slices/cabinet/cabinetReducer.js'

const rootReducer = combineReducers({
  portfolio: portfolioReducer,
  leads: leadsReducer,
  ui: uiReducer,
  cabinet: cabinetReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
