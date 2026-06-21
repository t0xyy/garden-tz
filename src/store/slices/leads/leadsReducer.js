import { LEAD_SUBMIT_FAILURE, LEAD_SUBMIT_REQUEST, LEAD_SUBMIT_SUCCESS } from './leadsTypes.js'
const initialState = { isSubmitting: false, lastSuccessAt: null, error: null }

export function leadsReducer(state = initialState, action) {
  switch (action.type) {
    case LEAD_SUBMIT_REQUEST: return { ...state, isSubmitting: true, error: null }
    case LEAD_SUBMIT_SUCCESS: return { ...state, isSubmitting: false, lastSuccessAt: Date.now(), error: null }
    case LEAD_SUBMIT_FAILURE: return { ...state, isSubmitting: false, error: action.payload }
    default: return state
  }
}
