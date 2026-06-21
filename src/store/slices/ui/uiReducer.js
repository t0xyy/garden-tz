import { UI_CLOSE_MODAL, UI_OPEN_MODAL } from './uiTypes.js'
const initialState = { modal: null } // null | 'callback'
export function uiReducer(state = initialState, action) {
  switch (action.type) {
    case UI_OPEN_MODAL: return { ...state, modal: action.payload }
    case UI_CLOSE_MODAL: return { ...state, modal: null }
    default: return state
  }
}
