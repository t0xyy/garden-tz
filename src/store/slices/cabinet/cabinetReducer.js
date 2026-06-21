import { CABINET_ADD_COMMENT, CABINET_FAILURE, CABINET_REQUEST, CABINET_SET_STATUS, CABINET_SUCCESS } from './cabinetTypes.js'

const initialState = {
  isLoading: false,
  error: null,
  status: 'Съёмка',
  comments: [
    { id: 1, author: 'Менеджер', text: 'Здравствуйте! Прикрепите бренд-гайд и примеры, если есть.', at: new Date().toISOString() }
  ],
  uploads: [],
}

export function cabinetReducer(state = initialState, action) {
  switch (action.type) {
    case CABINET_REQUEST: return { ...state, isLoading: true, error: null }
    case CABINET_SUCCESS: return { ...state, isLoading: false, ...action.payload }
    case CABINET_FAILURE: return { ...state, isLoading: false, error: action.payload }
    case CABINET_ADD_COMMENT: return { ...state, comments: [...state.comments, action.payload] }
    case CABINET_SET_STATUS: return { ...state, status: action.payload }
    default: return state
  }
}
