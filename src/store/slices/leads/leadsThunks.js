import { apiRequest } from '../../../api/http.js'
import { endpoints } from '../../../api/endpoints.js'
import { LEAD_SUBMIT_FAILURE, LEAD_SUBMIT_REQUEST, LEAD_SUBMIT_SUCCESS } from './leadsTypes.js'

/**
 * Универсальный thunk для отправки любой формы.
 * type: 'shooting' | 'estimate' | 'callback'
 */
export const submitLead = ({ type, payload }) => async (dispatch) => {
  dispatch({ type: LEAD_SUBMIT_REQUEST })
  try {
    const path = type === 'callback' ? endpoints.callback : endpoints.leads
    await apiRequest(path, { method: 'POST', body: JSON.stringify({ type, ...payload }) })
    dispatch({ type: LEAD_SUBMIT_SUCCESS })
  } catch (err) {
    // Если бэкенд не настроен — сохраняем заявку локально для демонстрации
    try {
      const key = 'local_leads'
      const old = JSON.parse(localStorage.getItem(key) || '[]')
      old.push({ at: new Date().toISOString(), type, payload })
      localStorage.setItem(key, JSON.stringify(old))
    } catch {}
    dispatch({ type: LEAD_SUBMIT_FAILURE, payload: err.message || 'Не удалось отправить заявку' })
  }
}
