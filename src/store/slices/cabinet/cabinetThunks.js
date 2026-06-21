import { apiRequest } from '../../../api/http.js'
import { endpoints } from '../../../api/endpoints.js'
import { CABINET_ADD_COMMENT, CABINET_FAILURE, CABINET_REQUEST, CABINET_SET_STATUS, CABINET_SUCCESS } from './cabinetTypes.js'

export const fetchCabinet = () => async (dispatch) => {
  dispatch({ type: CABINET_REQUEST })
  try {
    const data = await apiRequest(endpoints.cabinet.status)
    dispatch({ type: CABINET_SUCCESS, payload: data })
  } catch (err) {
    // fallback: localStorage
    try {
      const saved = JSON.parse(localStorage.getItem('cabinet_state') || 'null')
      dispatch({ type: CABINET_SUCCESS, payload: saved || {} })
    } catch {
      dispatch({ type: CABINET_SUCCESS, payload: {} })
    }
    dispatch({ type: CABINET_FAILURE, payload: err.message || 'Не удалось загрузить кабинет' })
  }
}

export const addComment = (text) => async (dispatch, getState) => {
  const comment = { id: Date.now(), author: 'Вы', text, at: new Date().toISOString() }
  dispatch({ type: CABINET_ADD_COMMENT, payload: comment })

  try {
    const st = getState().cabinet
    localStorage.setItem('cabinet_state', JSON.stringify({ ...st, comments: [...st.comments, comment] }))
  } catch {}

  try { await apiRequest(endpoints.cabinet.comments, { method: 'POST', body: JSON.stringify(comment) }) } catch {}
}

export const setStatus = (status) => async (dispatch, getState) => {
  dispatch({ type: CABINET_SET_STATUS, payload: status })

  try {
    const st = getState().cabinet
    localStorage.setItem('cabinet_state', JSON.stringify({ ...st, status }))
  } catch {}

  try { await apiRequest(endpoints.cabinet.status, { method: 'PUT', body: JSON.stringify({ status }) }) } catch {}
}
