import { PORTFOLIO_FAILURE, PORTFOLIO_REQUEST, PORTFOLIO_SUCCESS, PORTFOLIO_SET_FILTER } from './portfolioTypes.js'

const initialState = { items: [], isLoading: false, error: null, filter: 'all' }

export function portfolioReducer(state = initialState, action) {
  switch (action.type) {
    case PORTFOLIO_REQUEST: return { ...state, isLoading: true, error: null }
    case PORTFOLIO_SUCCESS: return { ...state, isLoading: false, items: action.payload }
    case PORTFOLIO_FAILURE: return { ...state, isLoading: false, error: action.payload }
    case PORTFOLIO_SET_FILTER: return { ...state, filter: action.payload }
    default: return state
  }
}
